
module.exports = {
    name: "Boolean",
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

                var { value, onChange, description, required, label, id, style, labelStyle } = this.props;

                return (
                    <div title={ description } key={ id } style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        borderBottom: '1px solid #ddd',
                        ...style
                    }}
                    onClick={ e => onChange(!value) }>
                        <Label
                            style={
                                labelStyle
                            }>
                            { label }
                        </Label>
                        <input checked={ value || false } type="checkbox" onChange={ e => true }/>
                    </div>
                )
            }            
        }
    }
}