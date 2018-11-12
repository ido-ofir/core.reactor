
module.exports = require('./source.js');

if(module.hot) {
    module.hot.accept('./source.js', function() {
        var plugin = require('./source.js');
        core.reloadPlugin(plugin);
    });
}