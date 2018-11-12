
module.exports = require('./templateInputs.js');

if(module.hot) {
    module.hot.accept('./templateInputs.js', function() {
        var plugin = require('./templateInputs.js');
        core.reloadPlugin(plugin);
    });
}