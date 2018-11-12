
module.exports = require('./core.plugin.state.js');

if(module.hot) {
    module.hot.accept('./core.plugin.state.js', function() {
        var plugin = require('./core.plugin.state.js');
        core.reloadPlugin(plugin);
    });
}