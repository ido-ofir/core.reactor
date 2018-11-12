
module.exports = {
    name: "Text",
    description: '',
    propTypes: {
        // name: 'string',
        // title: { type: 'string' },
        // isOpen: false,
        // onChange(){}
    },
    dependencies: ['templateInputs.Label'],    
    get(Label) {
        
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

                };
            },
            componentDidMount() {

            },
            componentWillUnmount() {

            },
            render() {

                let { value, onChange, label, style, labelStyle } = this.props;

                
                var inputStyle = {
                    padding: '3px 6px',
                    resize: 'vertical',
                    width: '100%',
                    minHeight: 100,
                    borderRadius: 3,
                    border: '1px solid #ddd',
                    padding: '6px 4px',
                    ...this.props.inputStyle
                };
                return (
                    <div style={ style }>
                        {
                            label ? (
                                <Label style={ labelStyle }>
                                { label }
                                </Label>
                            ) : null
                        }
                        <textarea 
                            style={ inputStyle }
                            value={ value }
                            onChange={ e => onChange(e.target.value) }
                            ref={ el => this.input = el }
                            onFocus={ e => (this.input.style.outline = '1px solid #888') }
                            onBlur={ e => (this.input.style.outline = '0') }/>
                    </div>
                );
            }            
        }
    }
}