
module.exports = require('./core.plugin.runtime.js');

if(module.hot) {
    module.hot.accept('./core.plugin.runtime.js', function() {
        var plugin = require('./core.plugin.runtime.js');
        core.reloadPlugin(plugin);
    });
}