
module.exports = require('./Interaction.jsx');

if(module.hot) {
    module.hot.accept('./Interaction.jsx', function() {

        var Interaction = require('./Interaction.jsx');
        
        core.injector.revoke(Interaction.name);
        core.Component(Interaction);
        core.emit('hotUpdate');
        
    });
}