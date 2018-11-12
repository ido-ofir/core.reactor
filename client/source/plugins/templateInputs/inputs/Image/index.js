
module.exports = require('./Image.jsx');

if(module.hot) {
    module.hot.accept('./Image.jsx', function() {

        var Image = require('./Image.jsx');
        
        core.injector.revoke(Image.name);
        core.Component(Image);
        core.emit('hotUpdate');
        
    });
}