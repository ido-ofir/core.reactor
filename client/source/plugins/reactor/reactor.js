module.exports = {
    name: 'reactor',
    tree: require('./tree'),
    modules: [
        // require('./modules/NAME'),
    ],
    components: [
        require('./components/Button'),
        require('./components/ColorPicker'),
        require('./components/Drawer'),
        require('./components/Label'),
        require('./components/CodeEditor'),
        require('./components/Reactor'),
    ],
    actions: [
        // require('./actions/NAME'),
    ],
    dependencies: ['flatTemplate'],
    init(definition, done){

        var core = this;

        core.setState({
            editorIsOpen: true,
            selectedElement: null,
            isSelecting: false,
            codeEditor: {
                isOpen: false,
                code: '',
                targetId: null
            },
            theme: {
                textColor1: '#fff',
                iconColor1: '#888',
                background1: '#313763',
                background2: '#2d1d33',
                border1: '#222',
            }
        });

        let reactor = core.reactor = {
            callbacks: [],
            api: {
                load({ source, components }){
                    reactor.set('source', source);
                    reactor.set('components', components);
                    console.log('components', components);
                },
                selectElement(element){
                    core.state.selectedElement = element;
                    core.state.codeEditor.isOpen = false;
                },
                reloadComponent(component){
                    let cursor = reactor.select(['components', { id: component.id }]);
                    if(cursor.exists()){
                        console.log('1');
                        cursor.set(component);
                    }
                    else{
                        console.log('2');
                        cursor.up().push(component);
                    }
                }
            },
            action(name, args){
                reactor.postMessage({
                    action: name,
                    args: (args || []).map(arg => {
                        if(core.isFunction(arg)){
                            var id = core.uuid();
                            reactor.callbacks[id] = arg;
                            return { "core.reactor.callback": id };
                        }
                        return arg;
                    })
                });
            },
            postMessage(message){  // { ns: 'core.studio.message', action: 'init', arguments: ['1', '2'] }
                if(reactor.appWindow){
                    var values = [];
                    reactor.appWindow.postMessage(
                        JSON.stringify(
                            Object.assign({ ns: 'core.reactor'}, message),
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
                }
            },
            onAppWindowMessage(message){
                if(!core.isString(message.data)){ return; }
                if(message.data.indexOf('{') !== 0){ return; }
                try{
                    message = JSON.parse(message.data);
                    if(message && (message.ns === 'core.reactor.bridge')){
                        let { action } = message;
                        if(action){
                            if(!core.isFunction(reactor.api[action])){
                                return console.warn(`cannot find action '${action}'`)
                            }
                            reactor.api[action].apply(reactor, (message.arguments || []).map(arg => {
                                var id = (arg && arg['core.reactor.callback']);
                                if(!id){ return arg; }
                                return function(d){
                                    reactor.action('functionReturn', [id, [].slice.call(arguments)]);
                                }
                            }));
                        }
                    }
                }
                catch(err){ 
                    throw err;
                }
            },
            loadAppWindow(win){
                reactor.appWindow = win;
                win.addEventListener('message', reactor.onAppWindowMessage, false);
            },
            updateSourceCode(id, code){
                let value = { source: code };
                core.plugins.agent.post('/api/transform').send({ code: code }).end(function(err, res){
                    if(err){
                        console.error(err);
                    }
                    else{
                        value.code = res.body.code;
                        reactor.set(['source', id, 'value'], {
                            ...reactor.get(['source', id, 'value']),
                            ...value
                        });
                        reactor.action('setSourceElement', [reactor.get(['source', id])]);
                    }

                })
            },
            transform(code, cb){
                core.plugins.agent.post('/api/transform').send({ code: code }).end(function(err, res){
                    cb(err, res && res.body && res.body.code);

                })
            }
        };

        done(reactor);
    }
};