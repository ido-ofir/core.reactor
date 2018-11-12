
let server = require('core.node.server');
let mongodb = require('mongodb');
let MongoClient = mongodb.MongoClient;
let path = require('path');
let fs = require('fs');
let utils = require('./utils');
let config = require('./config');
let babel = require("@babel/core");

let staticServer = server.express.static(path.resolve(__dirname, '../client/output'));
// let wwwServer = server.express.static(path.resolve(__dirname, '../www'));
let wwwServer = server.express.static(path.resolve(__dirname, '../production-client/output'));

MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true }, function(err, client){
    
    if(err){ throw err; }

    let db = client.db('reactor');

    let mongo = global.mongo = {
        users: db.collection('users'),
        links: db.collection('links'),
        networks: db.collection('networks'),
        stores: db.collection('stores'),
        products: db.collection('products'),
        activity: db.collection('activity'),
        logs: db.collection('logs'),
        id: mongodb.ObjectID
    };

    let authHeader = 'authtoken';

    // login:
    // 1. validate that "email" and "password" are provided.
    // 2. find the user with "email" and compare password hashes.
    // 3. generate a token, save it on the user and send it back to the client.

    server.use('/login', function(req, res){

        req.validate({
            email: 'string',
            password: 'string',
        }, ({ email, password }) => {
            
            mongo.users.findOne({ email: email }, function(err, user){
                if(err){
                    console.log(err);
                    res.status(500);
                    return res.end('Mongo error');
                }
                if(!user){
                    res.status(401);
                    return res.end('email does not exist');
                }
                if(utils.hash(password + user.salt) !== user.password){
                    res.status(401);
                    return res.end('wrong email or password');
                }
                let token = utils.uuid();
                mongo.users.updateOne({
                    email: email,
                    password: user.password
                }, {
                    $set: { 
                        token: token,
                        lastActivity: Date.now()
                    }
                }, function(err, doc){
                    if(err){
                        console.log(err);
                        res.status(500);
                        return res.end('Mongo error');
                    }
                    res.status(200);
                    res.setHeader(authHeader, token);
                    res.json({
                        user: {
                            name: user.name,
                            email
                        }
                    });
                });
            });
        });
    });

    // signup:
    // 1. validate that "email", "name" and "password" are provided.
    // 2. make sure that no user exists with this email and that the email is valid.
    // 3. generate salt for the password hash.
    // 4. generate a hash from the password and salt.
    // 5. generate a token and send it back to the client.
    // 3. save the hash, salt and token on the user.

    server.use('/signup', function(req, res){

        req.validate({
            email: 'string',
            name: 'string',
            password: 'string',
            // parentId: 'string',
        },  ({ email, name, password, parentId }) => {

            if(!utils.validateEmail(email)){  // <- move to email type
                res.status(422);
                return res.end('email is malformed');
            }

            mongo.users.findOne({ email: email }, function(err, existingUser){
                if(err){
                    console.log(err);
                    res.status(500);
                    return res.end('Mongo error');
                }
                if(existingUser){
                    res.status(409);
                    return res.end('email already exists'); 
                }

                let salt = utils.uuid();
                let token = utils.uuid();
                
                let user = {
                    email: email,
                    name: name,
                    password: utils.hash(password + salt),
                    salt: salt,
                    createdAt: new Date().toISOString(),
                    lastActivity: Date.now(),
                    token: token
                };

                mongo.users.insertOne(user, function(err, doc){
                    if(err){
                        console.log(err);
                        res.status(500);
                        return res.end('Mongo error');
                    }
                    res.status(200);
                    res.setHeader(authHeader, token);
                    res.json({ 
                        user: {
                            name,
                            email
                        }
                    });
                });
            });       
        });       
    });

    server.use('/auth', function(req, res){
        let token = req.headers[authHeader];
        if(!token){
            res.status(401);
            return res.end('Unauthorized');
        }
        mongo.users.findOne({ token }, function(err, user){
            if(err){
                console.log(err);
                res.status(500);
                return res.end('Mongo error');
            }
            if(!user || (Date.now() - user.lastActivity > (1000 * 60 * 15))){
                res.status(401);
                return res.end('Unauthorized');
            }
            res.status(200);
            res.setHeader(authHeader, token);
            res.json({
                user: {
                    name: user.name,
                    email: user.email
                }
            });
        });
    });

    server.use('/api', (req, res, next) => {
        var token = req.headers[authHeader];
        if(!token){
            res.status(401);
            return res.end('Unauthorized');
        }
        mongo.users.findOne({ token: token }, function(err, existingUser){
            if(err){
                console.log(err);
                res.status(500);
                return res.end('Mongo error');
            }
            if(!existingUser || (Date.now() - existingUser.lastActivity > (1000 * 60 * 15))){
                res.status(401);
                return res.end('token expired');
            }
            mongo.users.updateOne({ 
                token: token 
            }, {
                $set: { 
                    lastActivity: Date.now()
                }
            }, function(err){
                if(err){
                    console.log(err);
                }
            });
            req.user = existingUser;
            next();
        });
    });

    server.use('/api/admin', (req, res, next) => {
        if(!req.user.isAdmin){
            res.status(401);
            return res.end('Unauthorized');
        }
        next();
    });

    server.use('/api/setCoreObject', function(req, res){
        let { name, source } = req.body;
        fs.writeFile(path.resolve(__dirname, `../www/${ name }/coreObject.json`), JSON.stringify(source, null, 4), function(err){
            if(err){
                console.log(err);
                res.status(500);
                res.end(err);
            }
            res.json({ success: true });
        })
    });

    // transform jsx + es6 to javascript using babel 
    server.use('/api/transform', (req, res, next) => {
        let error, transformed, code = req.body.code;
        try{
            transformed = babel.transform(code, { 
                presets: [ '@babel/preset-env', ['@babel/preset-react',{throwIfNamespace: false}] ]
            });
        }
        catch(err){
            console.log(err);
            error = Object.assign({ message: err.message.toString() }, err)
        }
        
        res.json({
            error: error,
            code: transformed && transformed.code
        });
    });



    server.app.use('/www/test', wwwServer);
    server.app.use('/', staticServer);

    server.app.listen(config.port, function(err){
        if(err){ throw err; }
        console.log(`listening at http://localhost:${config.port}`);
    });

});


