module.exports = {
    name: 'state',
    events: ['change'],
    init(definition, done){
        
        var core = this;

        let state = {};
        let stateRef = {};

        // define based on type in all setters

        core.extend({ 
            state: stateRef,
            setState(nextState){
                plugin.set(nextState);
            },
            onStateChange(listener){
                plugin.on('change', listener);
                return () => {
                    plugin.off('change', listener);
                }
            }
        });

        function find(path, target){
            let t;
            path.map(k => {
                t = target[k];
            });
            return t;
        }


        function defineProperty(path, key, ref, value){
            let newPath = path.concat(key);
            let id = newPath.join('/');
            state[id] = value;
            Object.defineProperty(ref, key, {
                get: function () {
                    return state[id];
                },
                set: function (value) {
                    define(path, key, ref, value)
                    plugin.emit('change', { value, path, key });
                },
                enumerable: true,
                configurable: true
            });
        }
        function objectRef(path, value){
            let newPath, id;
            let ref = {};
            for(let key in value){
                define(path, key, ref, value[key]);
            }
            return ref;
        }
        function arrayRef(path, value){
            let newPath, id;
            let ref = [];
            for(let key in value){
                define(path, key, ref, value[key]);
            }
            return ref;
        }
        function define(path, key, ref, value){
            let type = core.typeOf(value);
            if(type === 'object'){
                value = objectRef(path.concat(key), value)
            }
            // else if(type === 'array'){
            //     value = arrayRef(path, value)
            // }
            defineProperty(path, key, ref, value)
        }

        let plugin = {
            define(){},
            state,
            set(nextState){
                for(let key in nextState){
                    define([], key, stateRef, nextState[key]);
                }
                return plugin;
            }
        };

        done(plugin);
    }
};