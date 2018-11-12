
import ButtonBase from '@material-ui/core/ButtonBase';

module.exports = {
    name: "Button",
    description: '',
    propTypes: {
        // name: 'string',
        // title: { type: 'string' },
        // isOpen: false,
        // onChange(){}
    },
    dependencies: [],    
    get() {
        
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

                return (
                    <ButtonBase style={{ width: '100%', color: '#eee',  }} { ...this.props }>
                        <div style={{ justifyContent: 'flex-start', width: '100%', display: 'flex', padding: '10px 6px', fontSize: 14 }}>
                            { this.props.children }
                        </div>
                    </ButtonBase>
                )
            }            
        }
    }
}