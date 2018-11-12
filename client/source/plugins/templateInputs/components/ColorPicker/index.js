
module.exports = require('./ColorPicker.jsx');

if(module.hot) {
    module.hot.accept('./ColorPicker.jsx', function() {

        var ColorPicker = require('./ColorPicker.jsx');
        
        core.injector.revoke(ColorPicker.name);
        core.Component(ColorPicker);
        core.emit('hotUpdate');
        
    });
}