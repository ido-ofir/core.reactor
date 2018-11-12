
module.exports = require('./core.reactor.bridge.js');

if(module.hot) {
    module.hot.accept('./core.reactor.bridge.js', function() {
        var plugin = require('./core.reactor.bridge.js');
        core.reloadPlugin(plugin);
    });
}