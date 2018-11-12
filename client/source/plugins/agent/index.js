
module.exports = require('./agent.js');

if(module.hot) {
    module.hot.accept('./agent.js', function() {

        var agent = require('./agent.js');
        
        core.injector.revoke(agent.name);
        core.Module(agent);
        core.emit('hotUpdate');

    });
}