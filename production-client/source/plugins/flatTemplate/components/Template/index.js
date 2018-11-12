
module.exports = require('./Template.jsx');

if(module.hot) {
    module.hot.accept('./Template.jsx', function() {

        var Template = require('./Template.jsx');
        
        core.injector.revoke(Template.name);
        core.Component(Template);
        core.emit('hotUpdate');
        
    });
}