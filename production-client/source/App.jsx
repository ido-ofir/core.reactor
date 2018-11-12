var React = require('react');
var ReactDom = require('react-dom');
var core = require('core.web');

core.Type({
    name: 'componentSource',
    build(source, done){

        let module = { exports: {} };
        let code = `( function(module, exports, require){ ${ source.value.code } } )`;
        eval(code).call(core, module, module.exports, (id) => core.modules[id]);
        module.exports.done = done;
        core.Component(module.exports);
    }
});

core.plugin([
    require('./plugins/core.plugin.state'),
    require('./plugins/core.plugin.source'),
    require('./plugins/flatTemplate'),
    require('./plugins/interact'),
    require('./plugins/core.reactor.bridge'),
    require('./plugins/snackbar'),
]);

core.Component({
    name: 'Button',
    schema: [{
        key: 'title',
        type: 'string'
    }],
    get(){
        let core = this;
        let { React } = core.imports;
        
        return {
            render(){
                return <button>{ this.props.title || ''}</button>
            }
        };
    }
})

core.source.fromJsonFile("coreObject.json", (err, built) => {

    
    let MasterTemplate = built['core.templates.master'];
    class Root extends React.Component {
        componentDidMount(){
            core.on('update', e => this.forceUpdate())
        }
        render(){
            return (<MasterTemplate/>);
        }
    }
    ReactDom.render(<Root/>, document.getElementById('app'))
})




