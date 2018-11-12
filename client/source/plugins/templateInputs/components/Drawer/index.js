
module.exports = require('./Drawer.jsx');

if(module.hot) {
    module.hot.accept('./Drawer.jsx', function() {

        var Drawer = require('./Drawer.jsx');
        
        core.injector.revoke(Drawer.name);
        core.Component(Drawer);
        core.emit('hotUpdate');
        
    });
}