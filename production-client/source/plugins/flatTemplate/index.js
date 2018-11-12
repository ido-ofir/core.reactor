
module.exports = require('./flatTemplate.js');

if(module.hot) {
    module.hot.accept('./flatTemplate.js', function() {
        var plugin = require('./flatTemplate.js');
        core.reloadPlugin(plugin);
    });
}