
module.exports = {
    name: "TemplateElement",
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

        var { React, PropTypes, ReactDom } = core.imports;

        return {
            propsTypes: {
                // title: PropTypes.string
            },
            getDefaultProps(){
                return {

                };
            },
            getInitialState() {

                return { error: null };
            },
            componentDidMount() {
                var element = this.element = ReactDom.findDOMNode(this);
                if(element.type !== 1){
                    element = element.parentElement;
                }
                element["core.template.element"] = this.props.item;
                if(!element.style.position){
                    element.style.position = 'relative';
                }
                core.plugins.flatTemplate.on('update', this.onUpdate);
            },
            componentWillUnmount() {
                core.plugins.flatTemplate.off('update', this.onUpdate);
            },

            onUpdate(){
                var element  = ReactDom.findDOMNode(this);
                if(element.type !== 1){
                    element = element.parentElement;
                }
                if(element !== this.element){
                    element["core.template.element"] = this.props.item;
                    if(!element.style.position){
                        element.style.position = 'relative';
                    }
                    this.element = element;
                }
            },

            componentWillReceiveProps(nextProps){
                if(nextProps.item !== this.props.item){
                    this.element["core.template.element"] = nextProps.item;
                }
            },

            componentDidCatch(err){
                this.setState({ error: err.toString() })
            },

            render() {

                return (
                        this.state.error || this.props.children
                );
            }            
        }
    }
}