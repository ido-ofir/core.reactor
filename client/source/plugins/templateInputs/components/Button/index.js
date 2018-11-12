
module.exports = require('./Button.jsx');

if(module.hot) {
    module.hot.accept('./Button.jsx', function() {

        var Button = require('./Button.jsx');
        
        core.injector.revoke(Button.name);
        core.Component(Button);
        core.emit('hotUpdate');
        
    });
}