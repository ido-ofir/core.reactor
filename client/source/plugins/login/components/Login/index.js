
module.exports = require('./Login.jsx');

if(module.hot) {
    module.hot.accept('./Login.jsx', function() {

        var Login = require('./Login.jsx');
        
        core.injector.revoke(Login.name);
        core.Component(Login);
        core.emit('hotUpdate');
        
    });
}