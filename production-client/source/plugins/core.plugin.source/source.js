module.exports = {
    name: 'source',
    events: ['change'],
    tree: {},
    init(definition, done){
        
        var core = this;

        core.select(['plugins', 'source']).on('update', function(e){
            source.emit('change', e);
        })

        let source = core.source = {
            ref(refObject){
                if(refObject && refObject['core.source.ref']){
                    return core.source.get(refObject['core.source.ref']);
                }
                return refObject;
            },
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
                    if((index === 0) && finished){
                        core.source.set(sourceWithIds);
                        core.source.emit('load', sourceWithIds);
                        cb && cb(result)
                    }
                    
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
            }
        };

        done(source);
    }
};