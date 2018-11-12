
let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

var utils = {
    chars,
    validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },
    uuid () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    },
    typeOf(thing){
        var type = toString.call(thing);
        return type.substring(8, type.length -1).toLowerCase();
    },
    validate(){
        return function(req, res, next){
            req.validate = function(obj, cb){
                var type;
                for(var m in obj){
                    type = utils.typeOf(req.body[m]);
                    if(type === 'undefined'){
                        res.status(422);
                        return res.end(`parameter "${m}" is missing`);
                    }
                    if(type !== obj[m]){
                        res.status(422);
                        return res.end(`parameter "${m}" should be of type "${obj[m]}". got "${type}".`);
                    }
                }
                cb(req.body);
            }
            next();
        };
    },
    user(){
        return function(req, res, next){
            var token = req.headers.sherytoken;
            if(!token){
                res.status(401);
                return res.end('token is missing');
            }
            mongo.users.findOne({ token: token }, function(err, existingUser){
                if(err){
                    console.log(err);
                    res.status(500);
                    return res.end('Mongo error');
                }
                if(!existingUser){
                    res.status(401);
                    return res.end('token expired');
                }
                req.user = existingUser;
                next();
            });
        };
    },
    
    error(){
        return function(req, res, next){
            res.error = function(err, message){
                if(!err){ return; }
                console.log(err);
                res.status(500);
                res.end(message);
            }
            next();
        };
    },
    add(num){
        let array = num.split('');
        let index = 0;
        while(array[index] === chars[chars.length-1]){
            if(index === array.length){
                return [chars[0]].concat(array.map(t => chars[0])).join('');
            }
            index++;
        }
        if(index > 0){
            for(let t = 0; t < index; t++){
                array[t] = chars[0];
            }
        }
        array[index] = chars[chars.indexOf(array[index]) + 1];
        return array.join('');

    },
    hash: require('./Sha256.js').hash
}

module.exports = utils;
