
module.exports = require('./Reactor.jsx');

if(module.hot) {
    module.hot.accept('./Reactor.jsx', function() {

        var Reactor = require('./Reactor.jsx');
        
        core.injector.revoke(Reactor.name);
        core.Component(Reactor);
        core.emit('hotUpdate');
        
    });
}