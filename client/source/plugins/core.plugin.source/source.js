module.exports = {
    name: 'source',
    events: ['change'],
    tree: {},
    init(definition, done){
        
        var core = this;

        core.select(['plugins', 'source']).on('update', function(e){
            source.emit('change', e.data);
        })

        let source = core.source = {
            buildElement(element, done){
                if(!element){ return done(element); }
                let { type, value } = element;
                let typeDef = core.types[type];
                if(!typeDef){ 
                    console.warn(`cannot find type '${ type }'`);
                    return done();
                }
                else if(typeDef.build){
                    typeDef.build.call(core, element, done);
                }
                else {
                    done(element);
                }
            },
            build(source, cb){
                
                let index = 0;
                let finished = false;
                let result = {};
                let sourceWithIds = {};


                function done(){
                    if((index === 0) && finished){ cb && cb(result) }
                    core.source.set(sourceWithIds);
                }
                for(let m in source){
                    index++;
                    sourceWithIds[m] = { ...source[m], id: m };
                    core.source.buildElement(sourceWithIds[m], (built) => {
                        result[m] = built;
                        index--;
                        done();
                    })
                }
                finished = true;
                done();
            },
            fromJsonFile(path, cb) {
                function reqListener () {
                    try{
                        let source = JSON.parse(this.responseText);
                        core.source.build(source, function(built) {
                            cb && cb(null, built);
                        })
                    }
                    catch(err){
                        console.error(err);
                        cb && cb(err);
                    }      
                }
                  
                var oReq = new XMLHttpRequest();
                oReq.addEventListener("load", reqListener);
                oReq.open("GET", path);
                oReq.send();
            },
            evalAsModule(code){
                let module = { exports: {} };
                code = `( function(module, exports, require){ ${ code } } )`;
                return eval(code).call(core, module, module.exports, (id) => core.modules[id]);
            }
        };

        done(source);
    }
};