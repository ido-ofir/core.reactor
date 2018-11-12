
module.exports = {
    name: "Image",
    description: '',
    propTypes: {
        // name: 'string',
        // title: { type: 'string' },
        // isOpen: false,
        // onChange(){}
    },
    dependencies: ['templateInputs.String'],    
    get(String) {
        
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
            openGallery() {
                // core.plugins.popovers.openLightbox({
                //     title: {
                //         title: 'Gallery',
                //         hasInfo: false,
                //     },
                //     children: <Gallery/>,
                // });
            },
            render() {

                let { value, id, label, onChange, style, labelStyle } = this.props;
                
                return (
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-end', ...style }}>
                        <String
                            value={ value }
                            label={ label }
                            onChange={ onChange }
                            style={{ flex: 1, marginRight: '3px' }}
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
                                backgroundColor: '#888'
                            }}
                            onClick={ e => this.openGallery() }>
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
                                <i className="far fa-image"></i>
                            </div>
                        </div>
                    </div>
                )
            }            
        }
    }
}