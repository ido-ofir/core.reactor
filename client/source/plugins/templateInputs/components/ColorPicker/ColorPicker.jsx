import { Typography, Paper, Icon, Button, Popover  } from '@material-ui/core';
import { SketchPicker  } from 'react-color';
// require('./colorPicker.scss')
module.exports = {
    name: "ColorPicker",
    description: '',
    propTypes: {},
    dependencies: [],

    get() {

        var core = this;

        var { React, PropTypes } = core.imports;

        return {
            propsTypes: {
                color: PropTypes.string,
                anchorEl: PropTypes.object,
                handleClose: PropTypes.func,
                onChange: PropTypes.func,
            },

            getInitialState() {
              return null;
            },

            getDefaultProps(){
                return {
                  color: '#3ab3ab',
                  anchorEl: null
                };
            },

            componentDidMount() {
              let { color } = this.props;
              this.isUnmounted = false;
            },

            componentWillReceiveProps(nextProps) {

            },

            componentWillUnmount() {
                this.isUnmounted = true;
            },

            handleClose(){
              if (this.props.handleClose) this.props.handleClose()
            },

            handleChangeComplete(color, e){
                let t = color.rgb;
                if(t.a !== 1){
                    return this.props.onChange(`rgba(${t.r},${t.g},${t.b},${t.a})`);
                }
                this.props.onChange(color.hex);
            },

            render() {
              let { anchorEl, color } = this.props;

              const open = Boolean(anchorEl);

              return (

                <Popover
                  id="simple-popper"
                  open={open}
                  PaperProps={{ style: { padding: 15 } }}
                  anchorEl={anchorEl}
                  onClose={this.handleClose}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}
                  transformOrigin={{ vertical: 'top', horizontal: 'center', }}>

                  <div style={{ margin: '15px 0' }}>
                    <SketchPicker color={ color } onChangeComplete={ this.handleChangeComplete } />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button onClick={ this.handleClose } color="secondary" size={ 'small' } >Close</Button>
                  </div>

                </Popover>

              )


            }
        }
    }
}