
module.exports = require('./TemplateElement.jsx');

if(module.hot) {
    module.hot.accept('./TemplateElement.jsx', function() {

        var TemplateElement = require('./TemplateElement.jsx');
        
        core.injector.revoke(TemplateElement.name);
        core.Component(TemplateElement);
        core.emit('hotUpdate');
        
    });
}