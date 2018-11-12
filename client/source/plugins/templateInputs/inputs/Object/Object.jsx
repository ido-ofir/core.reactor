
module.exports = {
    name: "Object",
    description: '',
    propTypes: {
        // name: 'string',
        // title: { type: 'string' },
        // isOpen: false,
        // onChange(){}
    },
    dependencies: ['templateInputs.Drawer'],    
    get(Drawer) {
        
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
            renderItem(item){

                let { onToggle, isOpen } = this.props;

                return (
                    <Drawer
                        id={ element.id }
                        title={ 'Footer' }
                        isOpen={ isOpen }
                        onToggle={ onToggle }>
                        <div>
                            <textarea 
                                style={{
                                    padding: '3px 6px',
                                    resize: 'vertical',
                                    width: '100%',
                                    minHeight: 300
                                }}
                                value={ html }
                                onChange={ e => setProp(element.id, 'html', e.target.value) }
                                ref={ el => this.input = el }
                                onFocus={ e => (this.input.style.outline = '1px solid #888') }
                                onBlur={ e => (this.input.style.outline = '0') }/>
                        </div>
                    </Drawer>
                );
            },
            render() {

                let { value } = this.props;

                return (
                    <div>
                        {/* {
                            value.map()
                        } */}
                    </div>
                )
            }            
        }
    }
}