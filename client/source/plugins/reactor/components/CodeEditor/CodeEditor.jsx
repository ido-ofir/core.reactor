
import React from 'react';
import pt from 'prop-types';

import MonacoEditor from 'react-monaco-editor';

module.exports = {
    name: "CodeEditor",
    description: '',
    propTypes: {
        // name: 'string',
        // title: { type: 'string' },
        // isOpen: false,
        // onChange(){}
    },
    bindings: {
        codeEditor: 'codeEditor',
        theme: 'theme',
    },    
    dependencies: [
    ],    
    get(CodeMirror) {
        
        var core = this;

        var { React, PropTypes } = core.imports;

        return {
            propsTypes: {
                // title: pt.string
            },
            getDefaultProps(){
                return {

                };
            },
            getInitialState() {

                return {

                };
            },
            componentDidMount() {

            },
            componentWillUnmount() {

            },
            updateCode(code){
                
            },
            
            apply(){
                this.props.onApply(core.state.codeEditor);
            },
            onKeyDown(e){
                if(e.keyCode === 13 && (e.ctrlKey || e.metaKey)){
                    this.apply();
                }
            },
            editorDidMount(editor){
                this.editor = editor;
            },
            resize(){
                if(this.editor){
                    this.editor.layout();
                }
            },
            render() {
                let { onClose } = this.props;
                let { codeEditor, theme } = core.state;
                return (
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column'}} onKeyDown={ this.onKeyDown }>
                        <div 
                            onClick={ onClose }
                            style={{ 
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                height: 26,
                                width: 26,
                                zIndex: 4,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer'
                            }}>
                            {
                                core.interact(({ isHovered }) => (
                                    <i 
                                        className="fas fa-times"
                                        style={{
                                            fontSize: '16px',
                                            color: theme.iconColor1,
                                            opacity: isHovered ? 1 : 0.8   
                                    }}/>
                                ))
                            }
                        </div>
                        <div style={{ position: 'absolute', top: 26, left: 0, right: 0, bottom: 0 }}>
                            <MonacoEditor                                    
                                    onChange={ v => codeEditor.code = v }
                                    value={ codeEditor.code }
                                    // editorWillMount={ this.editorWillMount }
                                    editorDidMount={ this.editorDidMount }
                                    options={{
                                        lineNumbers: 'off',
                                        minimap: { enabled: false }
                                    }}
                                    // ref={(_ref) => {
                                    //     this.jsonEditor = _ref;                                    
                                    // }}
                                    language="javascript"
                                />
                        </div>
                    </div>
                );
            }            
        }
    }
}