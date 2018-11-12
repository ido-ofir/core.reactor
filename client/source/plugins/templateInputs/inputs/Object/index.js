
module.exports = require('./Object.jsx');

if(module.hot) {
    module.hot.accept('./Object.jsx', function() {

        var Object = require('./Object.jsx');
        
        core.injector.revoke(Object.name);
        core.Component(Object);
        core.emit('hotUpdate');
        
    });
}