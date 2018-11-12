
import React from 'react';
import pt from 'prop-types';


module.exports = {
    name: "Number",
    description: '',
    propTypes: [{
        key: 'value',
        type: 'number',
        input: 'String',
        value: ''
    },{
        key: 'onChange',
        type: 'function',
        input: 'Function',
        value: '(value) => {  }',
        arguments: ['value']
    }],
    dependencies: [
        'templateInputs.Label'
    ],    
    get(Label) {
        
        var core = this;

        var { React, PropTypes } = core.imports;

        return {
            propsTypes: {
                value: pt.string,
                onChange: pt.function,
                description: pt.string,
            },
            getDefaultProps(){
                return {
                    value: '',
                    onChange(){},
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
            render() {

                var { value, onChange, description, required, label, id, style, labelStyle } = this.props;
                var inputStyle = {
                    width: '100%',
                    borderRadius: 3,
                    border: '1px solid #ddd',
                    padding: '6px 4px',
                    height: '26px',
                    ...this.props.inputStyle
                };
                if(required){
                    inputStyle.borderLeft = '2px solid red';
                }
                return (
                    <div style={ style }>
                        {
                            label ? (
                                <Label style={ labelStyle }>
                                { label }
                                </Label>
                            ) : null
                        }
                        <input 
                            type="number"
                            value={ value }
                            onChange={ e => onChange(e.target.value) }
                            ref={ el => this.input = el }
                            onFocus={ e => (this.input.style.outline = '1px solid #888') }
                            onBlur={ e => (this.input.style.outline = '0') }
                            style={ inputStyle }/>
                    </div>
                    
                );
            }            
        }
    }
}
