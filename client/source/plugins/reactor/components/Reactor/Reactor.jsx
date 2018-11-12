



module.exports = {
    name: "Reactor",
    description: '',
    propTypes: {
        // name: 'string',
        // title: { type: 'string' },
        // isOpen: false,
        // onChange(){}
    },
    dependencies: [
        'login.Login',
        'flatTemplate.Template',
        'divide.Vertical',
        'snackbar.Snackbar',
        'reactor.CodeEditor',
    ],    
    get(Login, Template, Vertical, Snackbar, CodeEditor) {
        
        var core = this;

        var { React, PropTypes } = core.imports;

        return {
            propsTypes: {
                // title: PropTypes.string
            },
            getDefaultProps(){
                return {

                };
            },
            getInitialState() {

                return {
                    openChilds: {},
                    verticalMove: false
                };
            },
            componentDidMount() {
                core.onStateChange( e => this.forceUpdate());
            },
            componentWillUnmount() {

            },
            onMoveStart(){
                this.setState({ verticalMove: true });
            },
            onMoveComplete(width){
                this.setState({ verticalMove: false });
                localStorage.setItem('reactorEditWidth', width)
            },
            save(){
                core.plugins.agent.post('/api/setCoreObject').send({
                    source: core.reactor.get('source'),
                    name: 'test'
                }).end(function(err, res){
                    if(err){
                        core.snack('Failed to save template', 'warning');
                        console.error(err);
                    }
                    else{
                        core.snack('Template saved', 'success');
                    }

                })
                
            },
            setChildProp(elementId, propKey, value){
                let oldElement = core.reactor.get(['source', elementId]);
                let element = {
                    ...oldElement,
                    value: {
                        ...oldElement.value,
                        props: {
                            ...oldElement.value.props,
                            [propKey]: value
                        }
                    }
                };
                core.reactor.action('setSourceElement', [element]);
                core.reactor.set(['source', elementId], element);
                core.tree.commit();
            },
            onIframeLoad(){
                let window = this.refs.iframe.contentWindow;
                core.reactor.loadAppWindow(window)
            },
            toggleSelecting(){
                let isSelecting = !core.state.isSelecting;
                core.reactor.action(isSelecting ? 'startSelecting' : 'stopSelecting');
                core.state.isSelecting = isSelecting;
            },
            updateSourceCode(codeEditor){
                let id = codeEditor.targetId;
                core.reactor.updateSourceCode(id, codeEditor.code);
                // core.reactor.set(['source', id, 'value', 'source'], codeEditor.code);
                // core.plugins.agent.post('/api/transform').send({ code: codeEditor.code }).end(function(err, res){
                //     if(err){
                //         console.error(err);
                //     }
                //     else{
                //         core.reactor.set(['source', id, 'value', 'code'], res.body.code);
                //     }

                // })
            },
            openCodeEditor(targetId){
                console.log(['source', targetId, 'value', 'source']);
                core.state.codeEditor = {
                    ...core.state.codeEditor,
                    isOpen: true,
                    targetId,
                    code: core.reactor.get(['source', targetId, 'value', 'source'])
                }
            },
            onEditorResize(){
                if(this.refs.codeEditor){
                    this.refs.codeEditor.resize();
                }
            },
            renderTemplateText(sourceElement){
                return (
                    <div>
                        { sourceElement.value }
                    </div>
                );
            },
            renderSelectedElement(selectedElement){
                let codeEditor = core.state.codeEditor;
                if(codeEditor.isOpen){
                    return (
                        <CodeEditor 
                            ref="codeEditor"
                            onClose={ e => codeEditor.isOpen = false }
                            onApply={ this.updateSourceCode }
                        />
                    );
                }
                let isTemplateText = selectedElement.type === 'templateText';
                if(isTemplateText){ return this.renderTemplateText(selectedElement); }
                let type = selectedElement.value.type;
                let component = core.reactor.get(['components', { id: type }]);
                let { theme } = core.state;
                if(!component){
                    return <div>Cannot find type "{ type }"</div>;
                }
                if(!component.schema){
                    return <div>Cannot find schema for type "{ type }"</div>;
                }
                let isInSource = core.reactor.get(['source', component.id]);
                return (
                    <div style={{ padding: 20 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                            <div>
                                { component.id }
                            </div>
                            <div style={{ display: 'flex' }}>
                                {
                                    isInSource ? core.interact(({ isHovered }) => (
                                        <div
                                            onClick={ e => this.openCodeEditor(component.id) }
                                            style={{ width: 30, height: 30, cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                            <i 
                                                className="far fa-edit"
                                                style={{
                                                    fontSize: '16px',
                                                    color: theme.iconColor1,
                                                    opacity: isHovered ? 1 : 0.8   
                                            }}/>
                                        </div>
                                    )) : null
                                }
                                {
                                    core.interact(({ isHovered }) => (
                                        <div
                                            onClick={ e => core.state.selectedElement = null } 
                                            style={{ width: 30, height: 30, cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                            <i 
                                                className="fas fa-times"
                                                style={{
                                                    fontSize: '16px',
                                                    color: theme.iconColor1,
                                                    opacity: isHovered ? 1 : 0.8   
                                            }}/>
                                        </div>
                                    ))
                                }
                                
                            </div>
                            
                            
                        </div>
                        {
                            component.schema.map(schemaItem => {
                                let componentKeys = Object.keys(core.plugins.templateInputs.components);
                                let key = componentKeys.find(t => t.toLowerCase() === schemaItem.type);
                                let Input = core.plugins.templateInputs.components[key];
                                let id = `${ selectedElement.id }-${ schemaItem.key }`;
                                if(!Input){
                                    return (
                                        <div key={ id }>
                                            Cannot find input "{ schemaItem.type }"
                                        </div>
                                    );
                                }
                                let isOpen = this.state.openChilds[id];
                                return (
                                    <div style={{ paddingBottom: 10 }} key={ id }>
                                    {
                                        core.reactor.bind(['source', selectedElement.id], element => {
                                        return (
                                                <Input
                                                    style={{ display: 'flex', flexDirection: 'row' }}
                                                    label={ schemaItem.label || schemaItem.key }
                                                    labelStyle={{}}
                                                    value={ element.value.props[schemaItem.key] }
                                                    onChange={ value => this.setChildProp(element.id, schemaItem.key, value) }
                                                    />
                                            );
                                        })
                                    }
                                    </div>
                                )
                            })
                        }
                    </div>
                );
            },
            render() {
                let { flatTemplate } = core.plugins;
                let { verticalMove } = this.state;
                let { theme, selectedElement } = core.state;
                let MasterTemplate = core.components['core.templates.master'];
                return (
                    <Login>
                        <div>
                        <header 
                                style={{ 
                                    height: 40,
                                    boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
                                    zIndex: 1,
                                    position: 'relative',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '0 6px',
                                    background: theme.background1,
                                    color: theme.textColor1
                                }}>
                                <div style={{ display: 'flex' }}>
                                    <div 
                                        style={{ width: 36, height: 36, marginLeft: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'  }}
                                        onClick={ e => core.state.editorIsOpen = !core.state.editorIsOpen }>
                                        <i 
                                            className="fas fa-pencil-alt"
                                            style={{
                                                fontSize: '20px',
                                                color: theme.textColor1,
                                                opacity: core.state.editorIsOpen ? 1 : 0.4   
                                        }}/>
                                    </div>
                                    <div 
                                        style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'  }}
                                        onClick={ this.save }>
                                        <i 
                                            className="fas fa-save"
                                            style={{
                                                fontSize: '20px',
                                                color: theme.textColor1    
                                        }}/>
                                    </div>
                                    <div 
                                        style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'  }}
                                        onClick={ this.toggleSelecting }>
                                        <i 
                                            className="fas fa-crosshairs"
                                            style={{
                                                fontSize: '20px',
                                                color: theme.textColor1,
                                                opacity: core.state.isSelecting ? 1 : 0.4   
                                        }}/>
                                        
                                    </div>
                                    
                                </div>
                            </header>
                            <div style={{ position: 'absolute', top: 40, left: 0, right: 0, bottom: 0, overflow: 'auto' }}>
                                <Vertical 
                                    from="left"
                                    disabled={ !core.state.editorIsOpen }
                                    width={ core.state.editorIsOpen ? (localStorage.getItem('reactorEditWidth') || 240) : 0 } 
                                    onMoveComplete={ this.onMoveComplete }
                                    onMoveStart={ this.onMoveStart }
                                    onResize={ this.onEditorResize }
                                    lineStyle={{ color: theme.background1 }}
                                >   
                                    {
                                        selectedElement ? this.renderSelectedElement(selectedElement) : (
                                            <div>
                                                <div style={{ padding: 20, borderBottom: '1px solid ' + theme.border1 }}>
                                                    reactor
                                                </div>
                                                OK
                                            </div>
                                        )
                                    }
                                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                                        <iframe ref="iframe" onLoad={ this.onIframeLoad } src="www/test" width="100%" height="100%" style={{ border: 0 }}/>
                                        {
                                            // prevents text selection in iframe while dragging the divider
                                            verticalMove ? 
                                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}>
                                            </div>
                                            : null
                                        }
                                    </div>
                                    
                                </Vertical>
                            </div>
                            <Snackbar/>
                        </div>
                    </Login>
                )
            }            
        }
    }
}