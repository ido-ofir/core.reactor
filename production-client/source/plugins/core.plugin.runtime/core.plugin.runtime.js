module.exports = {
    name: 'core.plugin.runtime',
    init(definition, done){
        
        var core = this;

        done({
            go(){ 
                alert('core.plugin.runtime is ready to go'); 
            }
        });
    }
};