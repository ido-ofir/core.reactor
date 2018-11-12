
module.exports = require('./Boolean.jsx');

if(module.hot) {
    module.hot.accept('./Boolean.jsx', function() {

        var Boolean = require('./Boolean.jsx');
        
        core.injector.revoke(Boolean.name);
        core.Component(Boolean);
        core.emit('hotUpdate');
        
    });
}