

module.exports = {
    name: "Drawer",
    description: '',
    propTypes: {
        // name: 'string',
        // title: { type: 'string' },
        // isOpen: false,
        // onChange(){}
    },
    dependencies: ['divide.SlideOpen', 'reactor.Button'],    
    get(SlideOpen, Button) {
        
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
                let { isOpen, id, onToggle, title, children, borderColor = '#888' } = this.props;
                return (
                    <SlideOpen 
                        isOpen={ isOpen }
                        >
                        <Button 
                            style={{ width: '100%', borderBottom: '1px solid ' + borderColor }}
                            onClick={ e => onToggle(id) }>
                            <div style={{ width: 20, textAlign: 'center'}}>
                                <i className={ `fas ${ isOpen ? 'fa-angle-down' : 'fa-angle-right'}` }></i>                                
                            </div>
                            <div style={{ marginLeft: 6 }}>
                                { title || '?' }
                            </div>
                        </Button>
                        <div style={{ padding: '6px 6px 6px 15px' }}>
                            {
                                children
                            }
                        </div>
                    </SlideOpen>
                )
            }            
        }
    }
}