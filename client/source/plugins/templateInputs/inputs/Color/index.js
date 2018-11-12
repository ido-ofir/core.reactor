
module.exports = require('./Color.jsx');

if(module.hot) {
    module.hot.accept('./Color.jsx', function() {

        var Color = require('./Color.jsx');
        
        core.injector.revoke(Color.name);
        core.Component(Color);
        core.emit('hotUpdate');
        
    });
}