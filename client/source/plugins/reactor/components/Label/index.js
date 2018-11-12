
module.exports = require('./Label.jsx');

if(module.hot) {
    module.hot.accept('./Label.jsx', function() {

        var Label = require('./Label.jsx');
        
        core.injector.revoke(Label.name);
        core.Component(Label);
        core.emit('hotUpdate');
        
    });
}