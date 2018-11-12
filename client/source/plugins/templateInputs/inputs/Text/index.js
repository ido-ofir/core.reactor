
module.exports = require('./Text.jsx');

if(module.hot) {
    module.hot.accept('./Text.jsx', function() {

        var Text = require('./Text.jsx');
        
        core.injector.revoke(Text.name);
        core.Component(Text);
        core.emit('hotUpdate');
        
    });
}