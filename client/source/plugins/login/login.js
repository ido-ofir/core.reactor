module.exports = {
    name: 'login',
    components: [
        require('./components/Login')
    ],
    tree: {
        user: null
    },
    init(definition, done){
        
        var core = this;

        done({

        });
    }
};