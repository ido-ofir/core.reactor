
module.exports = {
    name: "Template",
    description: '',
    propTypes: {
        // name: 'string',
        // title: { type: 'string' },
        // isOpen: false,
        // onChange(){}
    },
    dependencies: ['flatTemplate.TemplateElement'],    
    get(TemplateElement) {
        
        var core = this;

        var { React, PropTypes, ReactDom } = core.imports;

        return {
            propsTypes: {
                // title: PropTypes.string
            },
            getDefaultProps(){
                return {
                    renderElement(element, cb){
                        return cb(element);
                    }
                };
            },
            getInitialState() {

                return null;
            },
            componentDidMount() {

            },
            componentWillUnmount() {

            },
            renderTemplateItem(item, template, parent){
                return (
                    <TemplateElement
                        item={ item }
                        key={ item.id }
                    >
                        {
                            this.props.renderElement(item, (item) => {
                                let element = item.value;
                                if(item.type === 'templateText'){
                                    return element; 
                                }
                                let { type, props } = element;
                                let Component = core.components[type] || type;
                                if(!Component){
                                    console.warn(`cannot find component ${ type }`);
                                    return null;
                                }
                                let children = (element.children || []).map(id => {
                                    let child = template[id];
                                    return this.renderTemplateItem(child, template, element);
                                });
                                let args = [Component, { key: element.id, ...props }].concat(children);
                                return React.createElement.apply(React, args);
                            })
                        }
                    </TemplateElement>
                )
            },
            render() {
                let { id } = this.props;
                let source = core.source.get();
                let template = source[id];
                let rootElement = core.source.ref(template.value.rootElement);
                return rootElement ? this.renderTemplateItem(rootElement, source, null) : null;
            }            
        }
    }
}