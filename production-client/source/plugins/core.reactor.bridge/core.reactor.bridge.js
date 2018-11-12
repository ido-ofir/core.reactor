module.exports = {
    name: 'core.reactor.bridge',
    init(definition, done){
        
        var core = this;

        let bridge = {
            callbacks: [],
            api: {
                init(cb){
                    cb(core.source.get());
                },
                startSelecting(){
                    if(core.plugins.flatTemplate){
                        core.plugins.flatTemplate.startSelecting();
                    }
                },
                stopSelecting(){
                    if(core.plugins.flatTemplate){
                        core.plugins.flatTemplate.stopSelecting();
                    }
                },
                setSourceElement(sourceElement){
                    core.injector.unlock();
                    core.source.buildElement(sourceElement, (component) => {
                        if(sourceElement.type === 'component'){
                            bridge.action('reloadComponent', [{ id: sourceElement.id, schema: component.schema }])
                        }
                        setTimeout(() => {
                            core.injector.lock();
                            core.emit('update');
                        }, 0)
                    })
                    core.source.set(sourceElement.id, sourceElement);
                }
            },
            postMessage(message){  // { ns: 'core.studio.message', action: 'init', arguments: ['1', '2'] }
                var values = [];
                window.postMessage(
                    JSON.stringify(
                        Object.assign({ ns: 'core.reactor.bridge'}, message),
                        (key, value) => {
                            if(value && (typeof value === 'object')){
                                if(values.indexOf(value) > -1){
                                    return '[Circular]'
                                }
                                values.push(value);
                            }
                            return value;
                        }
                    ),
                '*')
            },
            action(name, args){
                bridge.postMessage({
                    action: name,
                    arguments: (args || []).map(arg => {
                        if(core.isFunction(arg)){
                            var id = core.uuid();
                            bridge.callbacks[id] = arg;
                            return { "core.reactor.callback": id };
                        }
                        return arg;
                    })
                });
            },
            onReactorMessage(message){
                if(!core.isString(message.data)){ return; }
                if(message.data.indexOf('{') !== 0){ return; }
                try{
                    message = JSON.parse(message.data);
                    if(message && (message.ns === 'core.reactor')){
                        let { action, args } = message;
                        if(action){
                            if(!core.isFunction(bridge.api[action])){
                                return console.warn(`cannot find action '${action}'`)
                            }
                            bridge.api[action].apply(bridge, (args || []).map(arg => {
                                var id = (arg && arg['core.reactor.callback']);
                                if(!id){ return arg; }
                                return function(d){
                                    bridge.action('functionReturn', [id, [].slice.call(arguments)]);
                                }
                            }));
                        }
                    }
                }
                catch(err){ 
                    console.error(err);
                }
            }
        };

        window.addEventListener('message', bridge.onReactorMessage, false);

        if(core.plugins.flatTemplate){
            core.plugins.flatTemplate.enableSelecting();
            core.plugins.flatTemplate.on('flatTemplate.selection', (element) => {
                bridge.action('selectElement', [element])
            });
        }

        core.source.on('load', (source) => {
            let components = [];
            for(var m in core.components){
                components.push({ name: m, id: m, schema: core.components[m].schema });
            }
            bridge.action('load', [{ source, components }])
        });

        core.bridge = bridge;

        done(bridge);
    }
};