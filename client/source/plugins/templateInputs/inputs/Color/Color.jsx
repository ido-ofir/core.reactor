
module.exports = {
    name: "Color",
    description: '',
    propTypes: {
        // name: 'string',
        // title: { type: 'string' },
        // isOpen: false,
        // onChange(){}
    },
    dependencies: ['templateInputs.ColorPicker', 'templateInputs.String'],    
    get(ColorPicker, String) {
        
        var core = this;

        var { React, PropTypes } = core.imports;

        return {
            propsTypes: {
                // title: PropTypes.string
            },
            getDefaultProps(){
                return {
                    pickerIsOpen: false
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
                let { value, id, label, onChange, style, labelStyle } = this.props;
                let { pickerIsOpen } = this.state;
                return (
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-end', ...style }}>
                        <String
                            value={ value }
                            label={ label }
                            onChange={ onChange }
                            style={{ flex: 1, marginRight: '8px' }}
                            labelStyle={ labelStyle }
                        />
                        <div
                            ref="picker"
                            style={{
                                width: 26,
                                height: 26,
                                cursor: 'pointer',
                                position: 'relative',
                                border: '1px solid #bbb',
                                borderRadius: '3px',
                                backgroundColor: '#ddd'
                            }}
                            onClick={ e => this.setState({ pickerIsOpen: !pickerIsOpen }) }>
                            <div
                                style={{ 
                                    position: 'absolute',
                                    left: 3,
                                    top: 3,
                                    background: value,
                                    width: 18,
                                    height: 18,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                            </div>
                        </div>
                        <ColorPicker 
                            anchorEl={ pickerIsOpen ? this.refs.picker : null }
                            color={ value }
                            handleClose={ e => this.setState({ pickerIsOpen: false }) }
                            onChange={ onChange }/>
                    </div>
                )
            }
        }
    }
}