
module.exports = {
    name: "Interaction",
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
                refs: PropTypes.object
            },
            getInitialState() {

                return {
                    isHovered: false,
                    isPressed: false,
                    isFocused: false,
                };
            },
            componentDidMount() {
                let element = this.element = ReactDom.findDOMNode(this);
                element.addEventListener('mouseenter', this.onMouseEnter);
                element.addEventListener('mouseleave', this.onMouseLeave);
                element.addEventListener('mousedown', this.onMouseDown);
                element.addEventListener('focus', this.onFocus);
                element.addEventListener('blur', this.onBlur);
                document.body.addEventListener('mouseleave', this.onMouseLeave);
                document.body.addEventListener('mouseup', this.onMouseUp);
            },
            componentWillUnmount() {
                this.element.removeEventListener('mouseenter', this.onMouseEnter);
                this.element.removeEventListener('mouseleave', this.onMouseLeave);
                this.element.removeEventListener('mousedown', this.onMouseDown);
                this.element.removeEventListener('focus', this.onFocus);
                this.element.removeEventListener('blur', this.onBlur);
                document.body.removeEventListener('mouseleave', this.onMouseLeave);
                document.body.removeEventListener('mouseup', this.onMouseUp);
            },
            onMouseEnter(){
                var { onHover } = this.props;
                this.setState({
                    isHovered: true
                });
                onHover && onHover(true, this);
            },
            onMouseLeave(){
                if(this.state.isHovered){
                    this.setState({
                        isHovered: false
                    });
                }
            },
            onMouseDown(){
                this.setState({
                    isPressed: true
                });
            },
            onMouseUp(){
                if(this.state.isPressed){
                    this.setState({
                        isPressed: false
                    });
                }
            },
            onFocus(){
                this.setState({
                    isFocused: true
                });
            },
            onBlur(){
                if(this.state.isFocused){
                    this.setState({
                        isFocused: false
                    });
                }
            },
            render() {
                return this.props.children(this.state);
            }            
        }
    }
}