module.exports = {
    name: 'interaction',
    components: [
        require('./components/Interaction')
    ],
    init(definition, done){
        
        var core = this;

        let interact = {};

        core.extend({
            interact(render){
                let { Interaction } = interact.components;
                let { React } = core.imports;
                return (
                    <Interaction>
                        { render }
                    </Interaction>
                )
            }
        });

        done(interact);
    }
};