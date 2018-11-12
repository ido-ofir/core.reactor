
module.exports = require('./reactor.js');

if(module.hot) {
    module.hot.accept('./reactor.js', function() {
        var plugin = require('./reactor.js');
        core.reloadPlugin(plugin);
    });
}