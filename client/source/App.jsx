var React = require('react');
var ReactDom = require('react-dom');
var core = require('core.web');
import Snackbar from '@material-ui/core/Snackbar';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
      suppressDeprecationWarnings: true,
    },
  });

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

core.Type({
    name: 'templateElement'
});


core.Type({
    name: 'templateText'
});

core.plugin([
    require('./plugins/agent'),
    require('./plugins/core.plugin.state'),
    require('./plugins/core.plugin.source'),
    require('./plugins/core.web.divide'),
    require('./plugins/interact'),
    require('./plugins/login'),
    require('./plugins/flatTemplate'),
    require('./plugins/templateInputs'),
    require('./plugins/snackbar'),
    require('./plugins/reactor'),
]);



core.require([
    'reactor.Reactor'
], Reactor => 
    ReactDom.render(<Reactor/>, document.getElementById('app'))
)

// core.source.fromJsonFile("coreObject.json", () => {
    
// })




