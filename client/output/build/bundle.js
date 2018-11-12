/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/App.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@material-ui/core/ButtonBase/index.js":
/*!************************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/ButtonBase/index.js from dll-reference vendor ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor */ \"dll-reference vendor\"))(\"./node_modules/@material-ui/core/ButtonBase/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/ButtonBase/index.js_from_dll-reference_vendor?");

/***/ }),

/***/ "./node_modules/@material-ui/core/Snackbar/index.js":
/*!**********************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/Snackbar/index.js from dll-reference vendor ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor */ \"dll-reference vendor\"))(\"./node_modules/@material-ui/core/Snackbar/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/Snackbar/index.js_from_dll-reference_vendor?");

/***/ }),

/***/ "./node_modules/@material-ui/core/index.es.js":
/*!****************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/index.es.js from dll-reference vendor ***!
  \****************************************************************************************/
/*! exports provided: colors, createGenerateClassName, createMuiTheme, createStyles, jssPreset, MuiThemeProvider, withStyles, withTheme, AppBar, Avatar, Backdrop, Badge, BottomNavigation, BottomNavigationAction, Button, ButtonBase, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Chip, CircularProgress, ClickAwayListener, Collapse, CssBaseline, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Drawer, ExpansionPanel, ExpansionPanelActions, ExpansionPanelDetails, ExpansionPanelSummary, Fade, FilledInput, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Grid, GridList, GridListTile, GridListTileBar, Grow, Hidden, Icon, IconButton, Input, InputAdornment, InputBase, InputLabel, LinearProgress, List, ListItem, ListItemAvatar, ListItemIcon, ListItemSecondaryAction, ListItemText, ListSubheader, Menu, MenuItem, MenuList, MobileStepper, Modal, ModalManager, NativeSelect, NoSsr, OutlinedInput, Paper, Popover, Popper, Portal, Radio, RadioGroup, RootRef, Select, Slide, Snackbar, SnackbarContent, Step, StepButton, StepConnector, StepContent, StepIcon, StepLabel, Stepper, SvgIcon, SwipeableDrawer, Switch, Tab, Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow, TableSortLabel, Tabs, TextField, Toolbar, Tooltip, Typography, withMobileDialog, withWidth, Zoom */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor */ \"dll-reference vendor\"))(\"./node_modules/@material-ui/core/index.es.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/index.es.js_from_dll-reference_vendor?");

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/index.js":
/*!********************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/styles/index.js from dll-reference vendor ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor */ \"dll-reference vendor\"))(\"./node_modules/@material-ui/core/styles/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/styles/index.js_from_dll-reference_vendor?");

/***/ }),

/***/ "./node_modules/core.web/index.js":
/*!****************************************************************************!*\
  !*** delegated ./node_modules/core.web/index.js from dll-reference vendor ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor */ \"dll-reference vendor\"))(\"./node_modules/core.web/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/core.web/index.js_from_dll-reference_vendor?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./source/plugins/snackbar/snackbar.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader!./source/plugins/snackbar/snackbar.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".snackbar > .jss151{\\r\\n    border-radius: 3px 3px 0px 0px !important;\\r\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./source/plugins/snackbar/snackbar.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************************************************!*\
  !*** delegated ./node_modules/css-loader/lib/css-base.js from dll-reference monaco ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference monaco */ \"dll-reference monaco\"))(\"./node_modules/css-loader/lib/css-base.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/css-loader/lib/css-base.js_from_dll-reference_monaco?");

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************************************************!*\
  !*** delegated ./node_modules/prop-types/index.js from dll-reference vendor ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor */ \"dll-reference vendor\"))(\"./node_modules/prop-types/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/prop-types/index.js_from_dll-reference_vendor?");

/***/ }),

/***/ "./node_modules/react-color/lib/index.js":
/*!***********************************************************************************!*\
  !*** delegated ./node_modules/react-color/lib/index.js from dll-reference vendor ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor */ \"dll-reference vendor\"))(\"./node_modules/react-color/lib/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/react-color/lib/index.js_from_dll-reference_vendor?");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference vendor ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor */ \"dll-reference vendor\"))(\"./node_modules/react-dom/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/react-dom/index.js_from_dll-reference_vendor?");

/***/ }),

/***/ "./node_modules/react-monaco-editor/lib/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react-monaco-editor/lib/index.js from dll-reference monaco ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference monaco */ \"dll-reference monaco\"))(\"./node_modules/react-monaco-editor/lib/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/react-monaco-editor/lib/index.js_from_dll-reference_monaco?");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference vendor ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor */ \"dll-reference vendor\"))(\"./node_modules/react/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/react/index.js_from_dll-reference_vendor?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************************************************!*\
  !*** delegated ./node_modules/style-loader/lib/addStyles.js from dll-reference monaco ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference monaco */ \"dll-reference monaco\"))(\"./node_modules/style-loader/lib/addStyles.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/style-loader/lib/addStyles.js_from_dll-reference_monaco?");

/***/ }),

/***/ "./node_modules/superagent-use/index.js":
/*!**********************************************************************************!*\
  !*** delegated ./node_modules/superagent-use/index.js from dll-reference vendor ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor */ \"dll-reference vendor\"))(\"./node_modules/superagent-use/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/superagent-use/index.js_from_dll-reference_vendor?");

/***/ }),

/***/ "./node_modules/superagent/lib/client.js":
/*!***********************************************************************************!*\
  !*** delegated ./node_modules/superagent/lib/client.js from dll-reference vendor ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor */ \"dll-reference vendor\"))(\"./node_modules/superagent/lib/client.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/superagent/lib/client.js_from_dll-reference_vendor?");

/***/ }),

/***/ "./source/App.jsx":
/*!************************!*\
  !*** ./source/App.jsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Snackbar = __webpack_require__(/*! @material-ui/core/Snackbar */ \"./node_modules/@material-ui/core/Snackbar/index.js\");\n\nvar _Snackbar2 = _interopRequireDefault(_Snackbar);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/styles/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar ReactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\nvar core = __webpack_require__(/*! core.web */ \"./node_modules/core.web/index.js\");\n\n\nvar theme = (0, _styles.createMuiTheme)({\n    typography: {\n        useNextVariants: true,\n        suppressDeprecationWarnings: true\n    }\n});\n\ncore.Type({\n    name: 'componentSource',\n    build: function build(source, done) {\n\n        var module = { exports: {} };\n        var code = '( function(module, exports, require){ ' + source.value.code + ' } )';\n        eval(code).call(core, module, module.exports, function (id) {\n            return core.modules[id];\n        });\n        module.exports.done = done;\n        core.Component(module.exports);\n    }\n});\n\ncore.Type({\n    name: 'templateElement'\n});\n\ncore.Type({\n    name: 'templateText'\n});\n\ncore.plugin([__webpack_require__(/*! ./plugins/agent */ \"./source/plugins/agent/index.js\"), __webpack_require__(/*! ./plugins/core.plugin.state */ \"./source/plugins/core.plugin.state/index.js\"), __webpack_require__(/*! ./plugins/core.plugin.source */ \"./source/plugins/core.plugin.source/index.js\"), __webpack_require__(/*! ./plugins/core.web.divide */ \"./source/plugins/core.web.divide/index.js\"), __webpack_require__(/*! ./plugins/interact */ \"./source/plugins/interact/index.js\"), __webpack_require__(/*! ./plugins/login */ \"./source/plugins/login/index.js\"), __webpack_require__(/*! ./plugins/flatTemplate */ \"./source/plugins/flatTemplate/index.js\"), __webpack_require__(/*! ./plugins/templateInputs */ \"./source/plugins/templateInputs/index.js\"), __webpack_require__(/*! ./plugins/snackbar */ \"./source/plugins/snackbar/index.js\"), __webpack_require__(/*! ./plugins/reactor */ \"./source/plugins/reactor/index.js\")]);\n\ncore.require(['reactor.Reactor'], function (Reactor) {\n    return ReactDom.render(React.createElement(Reactor, null), document.getElementById('app'));\n});\n\n// core.source.fromJsonFile(\"coreObject.json\", () => {\n\n// })\n\n//# sourceURL=webpack:///./source/App.jsx?");

/***/ }),

/***/ "./source/plugins/agent/agent.js":
/*!***************************************!*\
  !*** ./source/plugins/agent/agent.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar agent = __webpack_require__(/*! superagent-use */ \"./node_modules/superagent-use/index.js\")(__webpack_require__(/*! superagent */ \"./node_modules/superagent/lib/client.js\"));\nvar _config2 = {\n    authHeader: 'authtoken'\n};\nvar authToken = localStorage.getItem('agent.token') || null;\nagent.token = authToken;\n\nfunction setToken(token) {\n    if (!token || authToken === token) {\n        return;\n    }\n    authToken = token;\n    localStorage.setItem('agent.token', token);\n    agent.token = authToken;\n}\n\nagent.use(function (request) {\n    // if we have a token, set authToken header on request.\n    if (authToken) {\n        request.set(_config2.authHeader, authToken);\n    }\n    request.set('Accept', 'application/json');\n    // if request returns a token, save the token for later.\n    request.on('response', function (res) {\n        if (res.status === 401) {\n            agent.emit('unauthorized');\n        }\n        if (!res || !res.body) return;\n        var token = res.headers[_config2.authHeader] || res.body[_config2.authHeader];\n        if (token) {\n            setToken(token);\n        }\n    });\n});\n\nmodule.exports = {\n    name: 'agent',\n    init: function init(def, done) {\n        done(agent);\n    },\n\n    events: ['unauthorized'],\n    config: function config(_config) {\n        Object.assign(_config2, _config);\n        return this;\n    }\n};\n\n//# sourceURL=webpack:///./source/plugins/agent/agent.js?");

/***/ }),

/***/ "./source/plugins/agent/index.js":
/*!***************************************!*\
  !*** ./source/plugins/agent/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./agent.js */ \"./source/plugins/agent/agent.js\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/agent/index.js?");

/***/ }),

/***/ "./source/plugins/core.plugin.source/index.js":
/*!****************************************************!*\
  !*** ./source/plugins/core.plugin.source/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./source.js */ \"./source/plugins/core.plugin.source/source.js\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/core.plugin.source/index.js?");

/***/ }),

/***/ "./source/plugins/core.plugin.source/source.js":
/*!*****************************************************!*\
  !*** ./source/plugins/core.plugin.source/source.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nmodule.exports = {\n    name: 'source',\n    events: ['change'],\n    tree: {},\n    init: function init(definition, done) {\n\n        var core = this;\n\n        core.select(['plugins', 'source']).on('update', function (e) {\n            source.emit('change', e.data);\n        });\n\n        var source = core.source = {\n            buildElement: function buildElement(element, done) {\n                if (!element) {\n                    return done(element);\n                }\n                var type = element.type,\n                    value = element.value;\n\n                var typeDef = core.types[type];\n                if (!typeDef) {\n                    console.warn('cannot find type \\'' + type + '\\'');\n                    return done();\n                } else if (typeDef.build) {\n                    typeDef.build.call(core, element, done);\n                } else {\n                    done(element);\n                }\n            },\n            build: function build(source, cb) {\n\n                var index = 0;\n                var finished = false;\n                var result = {};\n                var sourceWithIds = {};\n\n                function done() {\n                    if (index === 0 && finished) {\n                        cb && cb(result);\n                    }\n                    core.source.set(sourceWithIds);\n                }\n\n                var _loop = function _loop(m) {\n                    index++;\n                    sourceWithIds[m] = _extends({}, source[m], { id: m });\n                    core.source.buildElement(sourceWithIds[m], function (built) {\n                        result[m] = built;\n                        index--;\n                        done();\n                    });\n                };\n\n                for (var m in source) {\n                    _loop(m);\n                }\n                finished = true;\n                done();\n            },\n            fromJsonFile: function fromJsonFile(path, cb) {\n                function reqListener() {\n                    try {\n                        var _source = JSON.parse(this.responseText);\n                        core.source.build(_source, function (built) {\n                            cb && cb(null, built);\n                        });\n                    } catch (err) {\n                        console.error(err);\n                        cb && cb(err);\n                    }\n                }\n\n                var oReq = new XMLHttpRequest();\n                oReq.addEventListener(\"load\", reqListener);\n                oReq.open(\"GET\", path);\n                oReq.send();\n            },\n            evalAsModule: function evalAsModule(code) {\n                var module = { exports: {} };\n                code = '( function(module, exports, require){ ' + code + ' } )';\n                return eval(code).call(core, module, module.exports, function (id) {\n                    return core.modules[id];\n                });\n            }\n        };\n\n        done(source);\n    }\n};\n\n//# sourceURL=webpack:///./source/plugins/core.plugin.source/source.js?");

/***/ }),

/***/ "./source/plugins/core.plugin.state/core.plugin.state.js":
/*!***************************************************************!*\
  !*** ./source/plugins/core.plugin.state/core.plugin.state.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n    name: 'state',\n    events: ['change'],\n    init: function init(definition, done) {\n\n        var core = this;\n\n        var state = {};\n        var stateRef = {};\n\n        // define based on type in all setters\n\n        core.extend({\n            state: stateRef,\n            setState: function setState(nextState) {\n                plugin.set(nextState);\n            },\n            onStateChange: function onStateChange(listener) {\n                plugin.on('change', listener);\n                return function () {\n                    plugin.off('change', listener);\n                };\n            }\n        });\n\n        function find(path, target) {\n            var t = void 0;\n            path.map(function (k) {\n                t = target[k];\n            });\n            return t;\n        }\n\n        function defineProperty(path, key, ref, value) {\n            var newPath = path.concat(key);\n            var id = newPath.join('/');\n            state[id] = value;\n            Object.defineProperty(ref, key, {\n                get: function get() {\n                    return state[id];\n                },\n                set: function set(value) {\n                    define(path, key, ref, value);\n                    plugin.emit('change', { value: value, path: path, key: key });\n                },\n                enumerable: true,\n                configurable: true\n            });\n        }\n        function objectRef(path, value) {\n            var newPath = void 0,\n                id = void 0;\n            var ref = {};\n            for (var key in value) {\n                define(path, key, ref, value[key]);\n            }\n            return ref;\n        }\n        function arrayRef(path, value) {\n            var newPath = void 0,\n                id = void 0;\n            var ref = [];\n            for (var key in value) {\n                define(path, key, ref, value[key]);\n            }\n            return ref;\n        }\n        function define(path, key, ref, value) {\n            var type = core.typeOf(value);\n            if (type === 'object') {\n                value = objectRef(path.concat(key), value);\n            }\n            // else if(type === 'array'){\n            //     value = arrayRef(path, value)\n            // }\n            defineProperty(path, key, ref, value);\n        }\n\n        var plugin = {\n            define: function define() {},\n\n            state: state,\n            set: function set(nextState) {\n                for (var key in nextState) {\n                    define([], key, stateRef, nextState[key]);\n                }\n                return plugin;\n            }\n        };\n\n        done(plugin);\n    }\n};\n\n//# sourceURL=webpack:///./source/plugins/core.plugin.state/core.plugin.state.js?");

/***/ }),

/***/ "./source/plugins/core.plugin.state/index.js":
/*!***************************************************!*\
  !*** ./source/plugins/core.plugin.state/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./core.plugin.state.js */ \"./source/plugins/core.plugin.state/core.plugin.state.js\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/core.plugin.state/index.js?");

/***/ }),

/***/ "./source/plugins/core.web.divide/components/Horizontal.jsx":
/*!******************************************************************!*\
  !*** ./source/plugins/core.web.divide/components/Horizontal.jsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar ReactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\nvar PropTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar style = {\n  position: 'absolute',\n  top: 0,\n  bottom: 0,\n  overflow: 'auto'\n};\nvar boxStyle = _extends({}, style, {\n  top: 0,\n  bottom: 0\n});\n\nmodule.exports = {\n  name: 'Horizontal',\n  dependencies: ['divide.HorizontalLine'],\n  get: function get(VerticalLine) {\n    return {\n      propTypes: {\n        ns: PropTypes.string,\n        onMoveComplete: PropTypes.func,\n        height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),\n        from: PropTypes.oneOf(['top', 'bottom']),\n        min: PropTypes.number,\n        disabled: PropTypes.bool,\n        lineStyle: PropTypes.object,\n        paneStyle: PropTypes.object\n      },\n      getInitialState: function getInitialState() {\n        var height;\n        if (this.props.ns) height = localStorage.getItem(this.props.ns + '.height');\n        this.height = height || this.props.height || '50%';\n        this.isActive = false;\n        this.containerTop = 0;\n        return null;\n      },\n      componentDidMount: function componentDidMount() {\n        this.el = this.refs.box;\n        document.body.addEventListener('mouseleave', this.onWindowMouseLeave, false);\n      },\n      componentWillUnmount: function componentWillUnmount() {\n        document.body.removeEventListener('mouseleave', this.onWindowMouseLeave, false);\n      },\n      componentWillReceiveProps: function componentWillReceiveProps(newProps) {\n        if (newProps.height !== this.props.height) {\n          this.height = newProps.height;\n          this.moveLine(newProps.height);\n        }\n      },\n      activate: function activate() {\n        if (this.props.disabled) return;\n        this.isActive = true;\n        var top = 0;\n        var target = this.el;\n        while (target) {\n          top += target.offsetTop;\n          target = target.offsetParent;\n        }\n        this.containerTop = top;\n      },\n      onWindowMouseLeave: function onWindowMouseLeave(e) {\n        if (e.target === document.body) {\n          this.deactivate();\n        }\n      },\n      deactivate: function deactivate() {\n        if (this.isActive) {\n          this.isActive = false;\n          if (this.props.onMoveComplete) {\n            this.props.onMoveComplete(this.height);\n          }\n        }\n      },\n      onMouseMove: function onMouseMove(e) {\n        if (!this.isActive) {\n          return;\n        }\n        var _props = this.props,\n            ns = _props.ns,\n            from = _props.from,\n            _props$min = _props.min,\n            min = _props$min === undefined ? 0 : _props$min;\n\n        e.preventDefault();\n        var pageY = e.nativeEvent.pageY;\n        var height,\n            top = pageY - this.containerTop;\n        if (from === 'bottom') {\n          height = Math.max(this.el.clientHeight - top, min) + 'px'; // removed this.state.top :/\n        } else if (from === 'top') {\n          height = Math.max(top, min) + 'px';\n        } else {\n          height = Math.max(top / this.el.clientHeight * 100, min) + '%';\n        }\n        if (ns) localStorage.setItem(ns + '.height', height);\n        this.height = Horizontal;\n        this.moveLine(height);\n        if (this.props.onResize) this.props.onResize(top, height);\n      },\n      moveLine: function moveLine(height) {\n        var el = this.el;\n        var from = this.props.from;\n        var leftElement = el.children[0];\n        var lineElement = el.children[1];\n        var rightElement = el.children[2];\n\n        if (!from || from === 'top') {\n          leftElement.style.height = height;\n          lineElement.style.top = height;\n          rightElement.style.top = height;\n        } else {\n          leftElement.style.bottom = height;\n          lineElement.style.bottom = height;\n          rightElement.style.height = height;\n        }\n      },\n      renderTop: function renderTop(height) {\n        var _props2 = this.props,\n            from = _props2.from,\n            paneStyle = _props2.paneStyle;\n\n        height = this.props.isHidden ? 0 : height;\n        var topStyle = _extends({}, style, {\n          top: 0\n        }, paneStyle);\n        if (!from || from === 'top') {\n          topStyle.height = height;\n        } else {\n          topStyle.bottom = height;\n        }\n        // var child = this.props.children ? (this.props.children[0] || null) : null;\n        return React.createElement(\n          'div',\n          { style: topStyle },\n          this.props.children[0]\n        );\n      },\n      renderBottom: function renderBottom(height) {\n        var _props3 = this.props,\n            from = _props3.from,\n            paneStyle = _props3.paneStyle;\n\n        var bottomStyle = _extends({}, style, {\n          bottom: 0\n        }, paneStyle);\n        if (from === 'bottom') {\n          bottomStyle.height = height;\n        } else {\n          bottomStyle.top = height;\n        }\n        // var child = this.props.children ? (this.props.children[1] || null) : null;\n        return React.createElement(\n          'div',\n          { style: bottomStyle },\n          this.props.children[1]\n        );\n      },\n      renderLine: function renderLine(top, bottom) {\n        // if(this.props.disabled) return null;\n        var rightProps = this.props.isHidden ? {} : { bottom: bottom };\n        return React.createElement(VerticalLine, _extends({\n          top: top\n        }, rightProps, {\n          // bottom={ bottom }\n          onMouseDown: this.activate,\n          lineStyle: this.props.lineStyle,\n          disabled: this.props.disabled }));\n      },\n      render: function render() {\n        var top,\n            bottom,\n            height = this.height;\n        if (this.props.from === 'bottom') bottom = height;else top = height;\n        return React.createElement(\n          'div',\n          { style: boxStyle, onMouseMove: this.onMouseMove, onMouseUp: this.deactivate, ref: 'box' },\n          this.renderTop(height),\n          this.props.isHidden ? null : this.renderLine(top, bottom),\n          this.props.isHidden ? null : this.renderBottom(height)\n        );\n      }\n    };\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/core.web.divide/components/Horizontal.jsx?");

/***/ }),

/***/ "./source/plugins/core.web.divide/components/HorizontalLine.jsx":
/*!**********************************************************************!*\
  !*** ./source/plugins/core.web.divide/components/HorizontalLine.jsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar style = {\n  position: 'absolute',\n  left: 0,\n  right: 0\n};\n\nvar handleStyle = _extends({}, style, {\n  top: '-10px',\n  bottom: '-10px',\n  cursor: 'ns-resize'\n});\nvar markerStyle = _extends({}, style, {\n  top: '10px',\n  height: '1px',\n  background: '#888'\n});\n\nmodule.exports = {\n  name: 'HorizontalLine',\n  dependencies: [],\n  get: function get() {\n\n    return {\n      render: function render() {\n\n        var centerStyle = _extends({}, style, {\n          zIndex: 2\n        });\n\n        if (this.props.bottom) centerStyle.bottom = this.props.bottom;else centerStyle.top = this.props.top;\n\n        return React.createElement(\n          'div',\n          { style: centerStyle, onMouseDown: this.props.onMouseDown },\n          React.createElement(\n            'div',\n            { style: handleStyle },\n            React.createElement('div', { style: markerStyle })\n          )\n        );\n      }\n    };\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/core.web.divide/components/HorizontalLine.jsx?");

/***/ }),

/***/ "./source/plugins/core.web.divide/components/SlideOpen/SlideOpen.jsx":
/*!***************************************************************************!*\
  !*** ./source/plugins/core.web.divide/components/SlideOpen/SlideOpen.jsx ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n    name: \"SlideOpen\",\n    description: '',\n    propTypes: {\n        // name: 'string',\n        // title: { type: 'string' },\n        // isOpen: false,\n        // onChange(){}\n    },\n    dependencies: [],\n    get: function get() {\n\n        var core = this;\n\n        var _core$imports = core.imports,\n            React = _core$imports.React,\n            PropTypes = _core$imports.PropTypes;\n\n\n        return {\n            propTypes: {\n                style: PropTypes.object,\n                isOpen: PropTypes.bool,\n                transition: PropTypes.string\n            },\n\n            getInitialState: function getInitialState() {\n                var isOpen = this.props.isOpen;\n                // this.watcher = core.plugins.widgets.watch(type, id, this.update);\n\n                return {\n                    height: isOpen ? 'auto' : 0\n                };\n            },\n            componentDidMount: function componentDidMount() {\n                if (this.props.isOpen) {\n                    this.setState({\n                        height: this.getHeight()\n                    });\n                }\n            },\n            componentWillReceiveProps: function componentWillReceiveProps(nextProps) {\n                if (nextProps.isOpen !== this.props.isOpen) {\n                    nextProps.isOpen ? this.open() : this.close();\n                }\n            },\n            componentWillUnmout: function componentWillUnmout() {\n                this.clearTimeout();\n                // this.watcher.kill();\n            },\n            clearTimeout: function (_clearTimeout) {\n                function clearTimeout() {\n                    return _clearTimeout.apply(this, arguments);\n                }\n\n                clearTimeout.toString = function () {\n                    return _clearTimeout.toString();\n                };\n\n                return clearTimeout;\n            }(function () {\n                if (this.heightTimeout) {\n                    clearTimeout(this.heightTimeout);\n                    this.heightTimeout = null;\n                }\n            }),\n            getHeight: function getHeight() {\n                return this.content ? this.content.clientHeight : 240;\n            },\n            getDefaultProps: function getDefaultProps() {\n                return {\n                    isOpen: false\n                };\n            },\n            setHeightAuto: function setHeightAuto() {\n                this.setState({\n                    height: 'auto'\n                });\n            },\n            setHeightZero: function setHeightZero() {\n                this.setState({\n                    height: 0\n                });\n            },\n            open: function open() {\n                this.clearTimeout();\n                this.setState({\n                    isOpen: true,\n                    height: this.getHeight()\n                });\n                this.heightTimeout = setTimeout(this.setHeightAuto, 300);\n            },\n            close: function close() {\n                this.clearTimeout();\n                this.setState({\n                    isOpen: false,\n                    height: this.getHeight()\n                });\n                this.heightTimeout = setTimeout(this.setHeightZero, 40);\n            },\n            render: function render() {\n                var _this = this;\n\n                var _props = this.props,\n                    isOpen = _props.isOpen,\n                    renderHeader = _props.renderHeader,\n                    children = _props.children,\n                    _props$transition = _props.transition,\n                    transition = _props$transition === undefined ? '0.2s ease' : _props$transition;\n                var height = this.state.height;\n\n\n                return React.createElement(\n                    'div',\n                    { style: {\n                            position: 'relative'\n                        } },\n                    React.createElement(\n                        'div',\n                        null,\n                        children[0] || null\n                    ),\n                    React.createElement(\n                        'div',\n                        { style: {\n                                position: 'relative',\n                                height: height,\n                                MsTransition: transition,\n                                OTransition: transition,\n                                MozTransition: transition,\n                                WebkitTransition: transition,\n                                transition: transition,\n                                overflowY: 'hidden'\n                            } },\n                        React.createElement(\n                            'div',\n                            { ref: function ref(el) {\n                                    return _this.content = el;\n                                } },\n                            children[1] || null\n                        )\n                    )\n                );\n            }\n        };\n    }\n};\n\n//# sourceURL=webpack:///./source/plugins/core.web.divide/components/SlideOpen/SlideOpen.jsx?");

/***/ }),

/***/ "./source/plugins/core.web.divide/components/SlideOpen/index.js":
/*!**********************************************************************!*\
  !*** ./source/plugins/core.web.divide/components/SlideOpen/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./SlideOpen.jsx */ \"./source/plugins/core.web.divide/components/SlideOpen/SlideOpen.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/core.web.divide/components/SlideOpen/index.js?");

/***/ }),

/***/ "./source/plugins/core.web.divide/components/Vertical.jsx":
/*!****************************************************************!*\
  !*** ./source/plugins/core.web.divide/components/Vertical.jsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar ReactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\nvar PropTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar style = {\n  position: 'absolute',\n  top: 0,\n  bottom: 0,\n  overflow: 'auto'\n};\nvar boxStyle = _extends({}, style, {\n  left: 0,\n  right: 0\n});\n\nmodule.exports = {\n  name: 'Vertical',\n  dependencies: ['divide.VerticalLine'],\n  get: function get(VerticalLine) {\n    return {\n      propTypes: {\n        ns: PropTypes.string,\n        onMoveStart: PropTypes.func,\n        onMoveComplete: PropTypes.func,\n        width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),\n        from: PropTypes.oneOf(['left', 'right']),\n        min: PropTypes.number,\n        disabled: PropTypes.bool,\n        lineStyle: PropTypes.object,\n        paneStyle: PropTypes.object\n      },\n      getInitialState: function getInitialState() {\n        var width;\n        if (this.props.ns) width = localStorage.getItem(this.props.ns + '.width');\n        this.width = width || this.props.width || '50%';\n        if (this.props.width === 0) {\n          this.width = 0;\n        }\n        this.isActive = false;\n        this.containerLeft = 0;\n        return null;\n      },\n      componentDidMount: function componentDidMount() {\n        this.el = this.refs.box;\n        document.body.addEventListener('mouseleave', this.onWindowMouseLeave, false);\n      },\n      componentWillUnmount: function componentWillUnmount() {\n        document.body.removeEventListener('mouseleave', this.onWindowMouseLeave, false);\n      },\n      componentWillReceiveProps: function componentWillReceiveProps(newProps) {\n        if (newProps.width !== this.props.width) {\n          this.width = newProps.width;\n          this.moveLine(newProps.width);\n        }\n      },\n      activate: function activate() {\n        var _props = this.props,\n            onMoveStart = _props.onMoveStart,\n            disabled = _props.disabled;\n\n        if (disabled) return;\n        this.isActive = true;\n        var left = 0;\n        var target = this.el;\n        while (target) {\n          left += target.offsetLeft;\n          target = target.offsetParent;\n        }\n        this.containerLeft = left;\n        if (onMoveStart) {\n          onMoveStart();\n        }\n      },\n      onWindowMouseLeave: function onWindowMouseLeave(e) {\n        if (e.target === document.body) {\n          this.deactivate();\n        }\n      },\n      deactivate: function deactivate() {\n        if (this.isActive) {\n          this.isActive = false;\n          if (this.props.onMoveComplete) {\n            this.props.onMoveComplete(this.width);\n          }\n        }\n      },\n      onMouseMove: function onMouseMove(e) {\n        if (!this.isActive) {\n          return;\n        }\n        var _props2 = this.props,\n            ns = _props2.ns,\n            from = _props2.from,\n            _props2$min = _props2.min,\n            min = _props2$min === undefined ? 0 : _props2$min;\n\n        e.preventDefault();\n        var pageX = e.nativeEvent.pageX;\n        var width,\n            left = pageX - this.containerLeft;\n        if (from === 'right') {\n          width = Math.max(this.el.clientWidth - left, min) + 'px'; // removed this.state.left :/\n        } else if (from === 'left') {\n          width = Math.max(left, min) + 'px';\n        } else {\n          width = Math.max(left / this.el.clientWidth * 100, min) + '%';\n        }\n        if (ns) localStorage.setItem(ns + '.width', width);\n        this.width = width;\n        this.moveLine(width);\n        if (this.props.onResize) this.props.onResize();\n      },\n      moveLine: function moveLine(width) {\n        var el = this.el;\n        var from = this.props.from;\n        var leftElement = el.children[0];\n        var lineElement = el.children[1];\n        var rightElement = el.children[2];\n\n        if (!from || from === 'left') {\n          leftElement.style.width = width;\n          lineElement.style.left = width;\n          rightElement.style.left = width;\n        } else {\n          leftElement.style.right = width;\n          lineElement.style.right = width;\n          rightElement.style.width = width;\n        }\n      },\n      renderLeft: function renderLeft(width) {\n        var _props3 = this.props,\n            from = _props3.from,\n            paneStyle = _props3.paneStyle;\n\n        width = this.props.isHidden ? 0 : width;\n        var leftStyle = _extends({}, style, {\n          left: 0\n        }, paneStyle);\n        if (!from || from === 'left') {\n          leftStyle.width = width;\n        } else {\n          leftStyle.right = width;\n        }\n        // var child = this.props.children ? (this.props.children[0] || null) : null;\n        return React.createElement(\n          'div',\n          { style: leftStyle },\n          this.props.children[0]\n        );\n      },\n      renderRight: function renderRight(width) {\n        var _props4 = this.props,\n            from = _props4.from,\n            paneStyle = _props4.paneStyle;\n\n        var rightStyle = _extends({}, style, {\n          right: 0\n        }, paneStyle);\n        if (from === 'right') {\n          rightStyle.width = width;\n        } else {\n          rightStyle.left = width;\n        }\n        // var child = this.props.children ? (this.props.children[1] || null) : null;\n        return React.createElement(\n          'div',\n          { style: rightStyle },\n          this.props.children[1]\n        );\n      },\n      renderLine: function renderLine(left, right) {\n        // if(this.props.disabled) return null;\n        var rightProps = this.props.isHidden ? {} : { right: right };\n        return React.createElement(VerticalLine, _extends({\n          left: left\n        }, rightProps, {\n          // right={ right }\n          onMouseDown: this.activate,\n          lineStyle: this.props.lineStyle,\n          disabled: this.props.disabled }));\n      },\n      render: function render() {\n        var left,\n            right,\n            width = this.width;\n        var _props5 = this.props,\n            isHidden = _props5.isHidden,\n            from = _props5.from;\n\n        var isRight = this.props.from === 'right';\n        if (isRight) right = width;else left = width;\n        return React.createElement(\n          'div',\n          { style: boxStyle, onMouseMove: this.onMouseMove, onMouseUp: this.deactivate, ref: 'box' },\n          this.renderLeft(width),\n          isHidden ? null : this.renderLine(left, right),\n          isHidden ? null : this.renderRight(width)\n        );\n      }\n    };\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/core.web.divide/components/Vertical.jsx?");

/***/ }),

/***/ "./source/plugins/core.web.divide/components/VerticalLine.jsx":
/*!********************************************************************!*\
  !*** ./source/plugins/core.web.divide/components/VerticalLine.jsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar style = {\n  position: 'absolute',\n  top: 0,\n  bottom: 0\n};\n\nvar handleStyle = {\n  position: 'absolute',\n  top: 0,\n  bottom: 0,\n  left: '-10px',\n  right: '-10px',\n  cursor: 'ew-resize'\n};\nvar markerStyle = {\n  position: 'absolute',\n  top: 0,\n  bottom: 0,\n  left: '10px',\n  width: '1px',\n  background: '#888'\n};\n\nmodule.exports = {\n  name: 'VerticalLine',\n  dependencies: [],\n  get: function get() {\n\n    var core = this;\n\n    return {\n      render: function render() {\n\n        var centerStyle = {\n          position: 'absolute',\n          top: 0,\n          bottom: 0,\n          zIndex: 2\n        };\n\n        if (this.props.right) centerStyle.right = this.props.right;else centerStyle.left = this.props.left;\n\n        return React.createElement(\n          'div',\n          { style: centerStyle, onMouseDown: this.props.onMouseDown },\n          React.createElement(\n            'div',\n            { style: handleStyle },\n            React.createElement('div', { style: markerStyle })\n          )\n        );\n      }\n    };\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/core.web.divide/components/VerticalLine.jsx?");

/***/ }),

/***/ "./source/plugins/core.web.divide/index.js":
/*!*************************************************!*\
  !*** ./source/plugins/core.web.divide/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n    name: 'divide',\n    dependencies: [],\n    components: [__webpack_require__(/*! ./components/SlideOpen */ \"./source/plugins/core.web.divide/components/SlideOpen/index.js\"), __webpack_require__(/*! ./components/HorizontalLine.jsx */ \"./source/plugins/core.web.divide/components/HorizontalLine.jsx\"), __webpack_require__(/*! ./components/Horizontal.jsx */ \"./source/plugins/core.web.divide/components/Horizontal.jsx\"), __webpack_require__(/*! ./components/VerticalLine.jsx */ \"./source/plugins/core.web.divide/components/VerticalLine.jsx\"), __webpack_require__(/*! ./components/Vertical.jsx */ \"./source/plugins/core.web.divide/components/Vertical.jsx\")]\n};\n\n//# sourceURL=webpack:///./source/plugins/core.web.divide/index.js?");

/***/ }),

/***/ "./source/plugins/flatTemplate/components/Template/Template.jsx":
/*!**********************************************************************!*\
  !*** ./source/plugins/flatTemplate/components/Template/Template.jsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nmodule.exports = {\n    name: \"Template\",\n    description: '',\n    propTypes: {\n        // name: 'string',\n        // title: { type: 'string' },\n        // isOpen: false,\n        // onChange(){}\n    },\n    dependencies: ['flatTemplate.TemplateElement'],\n    get: function get(TemplateElement) {\n\n        var core = this;\n\n        var _core$imports = core.imports,\n            React = _core$imports.React,\n            PropTypes = _core$imports.PropTypes,\n            ReactDom = _core$imports.ReactDom;\n\n\n        return {\n            propsTypes: {\n                // title: PropTypes.string\n            },\n            getDefaultProps: function getDefaultProps() {\n                return {\n                    renderElement: function renderElement(element, cb) {\n                        return cb(element);\n                    }\n                };\n            },\n            getInitialState: function getInitialState() {\n\n                return null;\n            },\n            componentDidMount: function componentDidMount() {},\n            componentWillUnmount: function componentWillUnmount() {},\n            renderTemplateItem: function renderTemplateItem(item, template, parent) {\n                var _this = this;\n\n                return React.createElement(\n                    TemplateElement,\n                    {\n                        item: item,\n                        key: item.id\n                    },\n                    this.props.renderElement(item, function (item) {\n                        var element = item.value;\n                        if (item.type === 'templateText') {\n                            return element;\n                        }\n                        var type = element.type,\n                            props = element.props;\n\n                        var Component = core.components[type] || type;\n                        if (!Component) {\n                            console.warn('cannot find component ' + type);\n                            return null;\n                        }\n                        var children = (element.children || []).map(function (id) {\n                            var child = template[id];\n                            return _this.renderTemplateItem(child, template, element);\n                        });\n                        var args = [Component, _extends({ key: element.id }, props)].concat(children);\n                        return React.createElement.apply(React, args);\n                    })\n                );\n            },\n            render: function render() {\n                var id = this.props.id;\n\n                var source = core.source.get();\n                var root = source[id];\n                return root ? this.renderTemplateItem(root, source, null) : null;\n            }\n        };\n    }\n};\n\n//# sourceURL=webpack:///./source/plugins/flatTemplate/components/Template/Template.jsx?");

/***/ }),

/***/ "./source/plugins/flatTemplate/components/Template/index.js":
/*!******************************************************************!*\
  !*** ./source/plugins/flatTemplate/components/Template/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./Template.jsx */ \"./source/plugins/flatTemplate/components/Template/Template.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/flatTemplate/components/Template/index.js?");

/***/ }),

/***/ "./source/plugins/flatTemplate/components/TemplateElement/TemplateElement.jsx":
/*!************************************************************************************!*\
  !*** ./source/plugins/flatTemplate/components/TemplateElement/TemplateElement.jsx ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n    name: \"TemplateElement\",\n    description: '',\n    propTypes: {\n        // name: 'string',\n        // title: { type: 'string' },\n        // isOpen: false,\n        // onChange(){}\n    },\n    dependencies: [],\n    get: function get() {\n\n        var core = this;\n\n        var _core$imports = core.imports,\n            React = _core$imports.React,\n            PropTypes = _core$imports.PropTypes,\n            ReactDom = _core$imports.ReactDom;\n\n\n        return {\n            propsTypes: {\n                // title: PropTypes.string\n            },\n            getDefaultProps: function getDefaultProps() {\n                return {};\n            },\n            getInitialState: function getInitialState() {\n\n                return { error: null };\n            },\n            componentDidMount: function componentDidMount() {\n                var element = this.element = ReactDom.findDOMNode(this);\n                if (element.type !== 1) {\n                    element = element.parentElement;\n                }\n                element[\"core.template.element\"] = this.props.item;\n                if (!element.style.position) {\n                    element.style.position = 'relative';\n                }\n                core.plugins.flatTemplate.on('update', this.onUpdate);\n            },\n            componentWillUnmount: function componentWillUnmount() {\n                core.plugins.flatTemplate.off('update', this.onUpdate);\n            },\n            onUpdate: function onUpdate() {\n                var element = ReactDom.findDOMNode(this);\n                if (element.type !== 1) {\n                    element = element.parentElement;\n                }\n                if (element !== this.element) {\n                    element[\"core.template.element\"] = this.props.item;\n                    if (!element.style.position) {\n                        element.style.position = 'relative';\n                    }\n                    this.element = element;\n                }\n            },\n            componentWillReceiveProps: function componentWillReceiveProps(nextProps) {\n                if (nextProps.item !== this.props.item) {\n                    this.element[\"core.template.element\"] = nextProps.item;\n                }\n            },\n            componentDidCatch: function componentDidCatch(err) {\n                this.setState({ error: err.toString() });\n            },\n            render: function render() {\n\n                return this.state.error || this.props.children;\n            }\n        };\n    }\n};\n\n//# sourceURL=webpack:///./source/plugins/flatTemplate/components/TemplateElement/TemplateElement.jsx?");

/***/ }),

/***/ "./source/plugins/flatTemplate/components/TemplateElement/index.js":
/*!*************************************************************************!*\
  !*** ./source/plugins/flatTemplate/components/TemplateElement/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./TemplateElement.jsx */ \"./source/plugins/flatTemplate/components/TemplateElement/TemplateElement.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/flatTemplate/components/TemplateElement/index.js?");

/***/ }),

/***/ "./source/plugins/flatTemplate/flatTemplate.js":
/*!*****************************************************!*\
  !*** ./source/plugins/flatTemplate/flatTemplate.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n    name: 'flatTemplate',\n    components: [__webpack_require__(/*! ./components/Template */ \"./source/plugins/flatTemplate/components/Template/index.js\"), __webpack_require__(/*! ./components/TemplateElement */ \"./source/plugins/flatTemplate/components/TemplateElement/index.js\")],\n    events: ['flatTemplate.edit', 'flatTemplate.update'],\n    tree: {\n        isSelecting: false\n    },\n    init: function init(definition, done) {\n\n        var core = this;\n\n        core.Type({\n            name: 'flatTemplate.body'\n        });\n\n        core.Type({\n            name: 'flatTemplate',\n            schema: [{\n                key: \"name\",\n                type: \"string\"\n            }, {\n                key: \"schema\",\n                type: \"schema\"\n            }, {\n                key: \"body\",\n                type: \"flatTemplate.body\"\n            }],\n            build: function build(element, done) {\n                var name = element.name,\n                    schema = element.schema,\n                    body = element.body,\n                    id = element.id;\n\n                core.Component({\n                    name: name,\n                    schema: schema,\n                    get: function get() {\n\n                        return {\n                            render: function render() {\n                                var Template = flatTemplate.components.Template;\n\n                                return React.createElement(Template, { id: id });\n                            }\n                        };\n                    },\n\n                    done: done\n                });\n            }\n        });\n\n        var maskStyle = {\n            position: 'absolute',\n            width: '100%',\n            height: '100%',\n            right: 0,\n            bottom: 0,\n            border: '2px solid #6bf',\n            zIndex: 9999,\n            background: 'rgba(120, 200, 255, 0.3)',\n            cursor: 'pointer',\n            pointerEvents: 'none'\n        };\n\n        var mask = document.createElement('div');\n        var hoveredElement = null;\n        var mouseX = 0,\n            mouseY = 0;\n\n        Object.assign(mask.style, maskStyle);\n\n        function findElement(el) {\n            while (el) {\n                if (el[\"core.template.element\"]) {\n                    return el;\n                }\n                el = el.parentElement;\n            }\n        }\n\n        function onClick(e) {\n\n            if (flatTemplate.get('isSelecting')) {\n                if (hoveredElement) {\n                    if (hoveredElement.contains(e.target)) {\n                        e.stopPropagation();\n                        e.preventDefault();\n                        flatTemplate.emit('flatTemplate.selection', hoveredElement[\"core.template.element\"]);\n                    }\n                }\n            }\n        }\n\n        function onMouseMove(e) {\n            if (e.target === hoveredElement) {\n                return;\n            }\n            var element = findElement(e.target);\n            if (!element) {\n                if (mask.parentElement) {\n                    mask.parentElement.removeChild(mask);\n                }\n                hoveredElement = null;\n                return;\n            }\n            hoveredElement = element;\n            if (!flatTemplate.get('isSelecting')) {\n                return;\n            }\n            element.appendChild(mask);\n        }\n\n        function onMouseLeave() {\n            if (flatTemplate.get('isSelecting')) {\n                if (hoveredElement) {\n                    if (mask.parentElement) {\n                        mask.parentElement.removeChild(mask);\n                    }\n                    hoveredElement = null;\n                }\n            }\n        }\n\n        document.body.addEventListener('mousemove', onMouseMove);\n        document.body.addEventListener('mouseleave', onMouseLeave);\n        document.body.addEventListener('click', onClick);\n\n        var flatTemplate = {\n            hoveredId: null,\n            startSelecting: function startSelecting() {\n                if (hoveredElement) {\n                    hoveredElement.appendChild(mask);\n                }\n                flatTemplate.set(['isSelecting'], true);\n                flatTemplate.emit('flatTemplate.startSelecting', true);\n            },\n            stopSelecting: function stopSelecting() {\n                if (mask.parentElement) {\n                    mask.parentElement.removeChild(mask);\n                }\n                flatTemplate.set(['isSelecting'], false);\n                flatTemplate.emit('flatTemplate.stopSelecting', false);\n            },\n            toggleSelecting: function toggleSelecting() {\n                if (flatTemplate.get(['isSelecting'])) {\n                    flatTemplate.stopSelecting();\n                } else {\n                    flatTemplate.startSelecting();\n                }\n            }\n        };\n        done(flatTemplate);\n    }\n};\n\n//# sourceURL=webpack:///./source/plugins/flatTemplate/flatTemplate.js?");

/***/ }),

/***/ "./source/plugins/flatTemplate/index.js":
/*!**********************************************!*\
  !*** ./source/plugins/flatTemplate/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./flatTemplate.js */ \"./source/plugins/flatTemplate/flatTemplate.js\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/flatTemplate/index.js?");

/***/ }),

/***/ "./source/plugins/interact/components/Interaction/Interaction.jsx":
/*!************************************************************************!*\
  !*** ./source/plugins/interact/components/Interaction/Interaction.jsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n    name: \"Interaction\",\n    description: '',\n    propTypes: {\n        // name: 'string',\n        // title: { type: 'string' },\n        // isOpen: false,\n        // onChange(){}\n    },\n    dependencies: [],\n    get: function get() {\n\n        var core = this;\n\n        var _core$imports = core.imports,\n            React = _core$imports.React,\n            PropTypes = _core$imports.PropTypes,\n            ReactDom = _core$imports.ReactDom;\n\n\n        return {\n            propsTypes: {\n                refs: PropTypes.object\n            },\n            getInitialState: function getInitialState() {\n\n                return {\n                    isHovered: false,\n                    isPressed: false,\n                    isFocused: false\n                };\n            },\n            componentDidMount: function componentDidMount() {\n                var element = this.element = ReactDom.findDOMNode(this);\n                element.addEventListener('mouseenter', this.onMouseEnter);\n                element.addEventListener('mouseleave', this.onMouseLeave);\n                element.addEventListener('mousedown', this.onMouseDown);\n                element.addEventListener('focus', this.onFocus);\n                element.addEventListener('blur', this.onBlur);\n                document.body.addEventListener('mouseleave', this.onMouseLeave);\n                document.body.addEventListener('mouseup', this.onMouseUp);\n            },\n            componentWillUnmount: function componentWillUnmount() {\n                this.element.removeEventListener('mouseenter', this.onMouseEnter);\n                this.element.removeEventListener('mouseleave', this.onMouseLeave);\n                this.element.removeEventListener('mousedown', this.onMouseDown);\n                this.element.removeEventListener('focus', this.onFocus);\n                this.element.removeEventListener('blur', this.onBlur);\n                document.body.removeEventListener('mouseleave', this.onMouseLeave);\n                document.body.removeEventListener('mouseup', this.onMouseUp);\n            },\n            onMouseEnter: function onMouseEnter() {\n                var onHover = this.props.onHover;\n\n                this.setState({\n                    isHovered: true\n                });\n                onHover && onHover(true, this);\n            },\n            onMouseLeave: function onMouseLeave() {\n                if (this.state.isHovered) {\n                    this.setState({\n                        isHovered: false\n                    });\n                }\n            },\n            onMouseDown: function onMouseDown() {\n                this.setState({\n                    isPressed: true\n                });\n            },\n            onMouseUp: function onMouseUp() {\n                if (this.state.isPressed) {\n                    this.setState({\n                        isPressed: false\n                    });\n                }\n            },\n            onFocus: function onFocus() {\n                this.setState({\n                    isFocused: true\n                });\n            },\n            onBlur: function onBlur() {\n                if (this.state.isFocused) {\n                    this.setState({\n                        isFocused: false\n                    });\n                }\n            },\n            render: function render() {\n                return this.props.children(this.state);\n            }\n        };\n    }\n};\n\n//# sourceURL=webpack:///./source/plugins/interact/components/Interaction/Interaction.jsx?");

/***/ }),

/***/ "./source/plugins/interact/components/Interaction/index.js":
/*!*****************************************************************!*\
  !*** ./source/plugins/interact/components/Interaction/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./Interaction.jsx */ \"./source/plugins/interact/components/Interaction/Interaction.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/interact/components/Interaction/index.js?");

/***/ }),

/***/ "./source/plugins/interact/index.js":
/*!******************************************!*\
  !*** ./source/plugins/interact/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./interact.js */ \"./source/plugins/interact/interact.js\");\n\n//# sourceURL=webpack:///./source/plugins/interact/index.js?");

/***/ }),

/***/ "./source/plugins/interact/interact.js":
/*!*********************************************!*\
  !*** ./source/plugins/interact/interact.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n    name: 'interaction',\n    components: [__webpack_require__(/*! ./components/Interaction */ \"./source/plugins/interact/components/Interaction/index.js\")],\n    init: function init(definition, done) {\n\n        var core = this;\n\n        var _interact = {};\n\n        core.extend({\n            interact: function interact(render) {\n                var Interaction = _interact.components.Interaction;\n                var React = core.imports.React;\n\n                return React.createElement(\n                    Interaction,\n                    null,\n                    render\n                );\n            }\n        });\n\n        done(_interact);\n    }\n};\n\n//# sourceURL=webpack:///./source/plugins/interact/interact.js?");

/***/ }),

/***/ "./source/plugins/login/components/Login/Login.jsx":
/*!*********************************************************!*\
  !*** ./source/plugins/login/components/Login/Login.jsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n    name: \"Login\",\n    description: '',\n    propTypes: {\n        // name: 'string',\n        // title: { type: 'string' },\n        // isOpen: false,\n        // onChange(){}\n    },\n    dependencies: ['agent'],\n    get: function get(agent) {\n\n        var core = this;\n\n        var _core$imports = core.imports,\n            React = _core$imports.React,\n            PropTypes = _core$imports.PropTypes;\n\n\n        return {\n            propsTypes: {\n                // title: PropTypes.string\n            },\n            getDefaultProps: function getDefaultProps() {\n                return {};\n            },\n            getInitialState: function getInitialState() {\n\n                return {\n                    email: '',\n                    password: '',\n                    name: '',\n                    signup: false,\n                    ranAuth: false,\n                    error: null\n                };\n            },\n            componentDidMount: function componentDidMount() {\n                var _this = this;\n\n                agent.on('unauthorized', this.onUnauthorized);\n                agent.post('/auth').end(function (err, res) {\n\n                    var user = res.body && res.body.user;\n                    if (!err && user) {\n                        core.plugins.login.set('user', user);\n                        _this.onLogin(user);\n                    }\n                    setTimeout(function (e) {\n                        _this.setState({\n                            ranAuth: true\n                        });\n                        // history.replaceState({}, document.title, '/');\n                    }, 20);\n                });\n            },\n            componentWillUnmount: function componentWillUnmount() {\n                agent.off('unauthorized', this.onUnauthorized);\n            },\n            onUnauthorized: function onUnauthorized() {\n                if (core.plugins.login.get('user')) {\n                    core.plugins.login.set('user', null);\n                }\n            },\n            onLogin: function onLogin(user) {\n                if (this.props.onLogin) {\n                    this.props.onLogin(user);\n                }\n            },\n            login: function login() {\n                var _this2 = this;\n\n                var _state = this.state,\n                    email = _state.email,\n                    password = _state.password;\n\n                if (this.state.error) {\n                    this.setState({ error: null });\n                }\n                agent.post('/login').send({ email: email, password: password }).end(function (err, res) {\n                    if (err) {\n                        return _this2.setState({ error: res.text || res.statusText || String(err) });\n                    }\n                    var user = res.body.user;\n                    if (user) {\n                        core.plugins.login.set('user', user);\n                        _this2.onLogin(user);\n                        // setTimeout(e => {\n                        //     history.replaceState({}, document.title, '/');\n                        // }, 20)\n                    }\n                });\n            },\n            signUp: function signUp() {\n                var _this3 = this;\n\n                if (this.state.error) {\n                    this.setState({ error: null });\n                }\n                var _state2 = this.state,\n                    name = _state2.name,\n                    email = _state2.email,\n                    password = _state2.password;\n\n                agent.post('/signup').send({ name: name, email: email, password: password, parentId: '' }).end(function (err, res) {\n                    if (err) {\n                        return _this3.setState({ error: res.text || res.statusText || String(err) });\n                    }\n                    var user = res.body.user;\n                    if (user) {\n                        core.plugins.login.set('user', user);\n                        _this3.onLogin(user);\n                    }\n                });\n            },\n            submit: function submit() {\n                var signup = this.state.signup;\n\n                signup ? this.signUp() : this.login();\n            },\n            renderLogin: function renderLogin() {\n                var _this4 = this;\n\n                var _state3 = this.state,\n                    signup = _state3.signup,\n                    error = _state3.error;\n\n                return React.createElement(\n                    'div',\n                    { style: { width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' } },\n                    React.createElement(\n                        'div',\n                        {\n                            style: {\n                                width: '300px',\n                                background: '#ddd',\n                                padding: 26,\n                                boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)'\n                            } },\n                        signup ? React.createElement('input', {\n                            name: 'name'\n                            // autoComplete=\"username\"\n                            , style: { marginBottom: 26, width: '100%', borderRadius: '6px', height: '34px', padding: '0 10px' },\n                            type: 'text',\n                            placeholder: 'Name',\n                            value: this.state.name,\n                            onChange: function onChange(e) {\n                                return _this4.setState({ name: e.target.value });\n                            } }) : null,\n                        React.createElement('input', {\n                            name: 'email'\n                            // autoComplete=\"email\" \n                            , style: { marginBottom: 26, width: '100%', borderRadius: '6px', height: '34px', padding: '0 10px' },\n                            type: 'email',\n                            placeholder: 'Email',\n                            value: this.state.email,\n                            onChange: function onChange(e) {\n                                return _this4.setState({ email: e.target.value });\n                            } }),\n                        React.createElement('input', {\n                            name: 'password'\n                            // autoComplete=\"current-password\"\n                            , style: { marginBottom: 26, width: '100%', borderRadius: '6px', height: '34px', padding: '0 10px' },\n                            type: 'password',\n                            placeholder: 'Password', value: this.state.password,\n                            onChange: function onChange(e) {\n                                return _this4.setState({ password: e.target.value });\n                            } }),\n                        React.createElement(\n                            'button',\n                            { style: {\n                                    borderRadius: '6px',\n                                    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 1px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px',\n                                    border: '0',\n                                    marginBottom: 18,\n                                    height: '34px',\n                                    width: '100%',\n                                    color: '#fff',\n                                    cursor: 'pointer',\n                                    fontSize: '14px',\n                                    outline: 0,\n                                    background: 'rgb(67, 69, 136)' }, onClick: this.submit },\n                            signup ? 'Sign Up' : 'Log In'\n                        ),\n                        React.createElement(\n                            'div',\n                            { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '14px' } },\n                            React.createElement(\n                                'div',\n                                null,\n                                React.createElement(\n                                    'a',\n                                    { href: '#', onClick: function onClick(e) {\n                                            _this4.setState({ signup: !signup });e.preventDefault();\n                                        } },\n                                    signup ? 'Log In' : 'Sign Up'\n                                )\n                            ),\n                            React.createElement(\n                                'div',\n                                null,\n                                React.createElement(\n                                    'span',\n                                    { style: { color: '#e63535', fontSize: '14px' } },\n                                    error\n                                )\n                            )\n                        )\n                    )\n                );\n            },\n            render: function render() {\n                var _this5 = this;\n\n                var login = core.plugins.login;\n                var children = this.props.children;\n                var ranAuth = this.state.ranAuth;\n\n                if (!ranAuth) {\n                    return null;\n                }\n                return login.bind(['user'], function (user) {\n                    return user ? children : _this5.renderLogin();\n                });\n            }\n        };\n    }\n};\n\n//# sourceURL=webpack:///./source/plugins/login/components/Login/Login.jsx?");

/***/ }),

/***/ "./source/plugins/login/components/Login/index.js":
/*!********************************************************!*\
  !*** ./source/plugins/login/components/Login/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./Login.jsx */ \"./source/plugins/login/components/Login/Login.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/login/components/Login/index.js?");

/***/ }),

/***/ "./source/plugins/login/index.js":
/*!***************************************!*\
  !*** ./source/plugins/login/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./login.js */ \"./source/plugins/login/login.js\");\n\n//# sourceURL=webpack:///./source/plugins/login/index.js?");

/***/ }),

/***/ "./source/plugins/login/login.js":
/*!***************************************!*\
  !*** ./source/plugins/login/login.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n    name: 'login',\n    components: [__webpack_require__(/*! ./components/Login */ \"./source/plugins/login/components/Login/index.js\")],\n    tree: {\n        user: null\n    },\n    init: function init(definition, done) {\n\n        var core = this;\n\n        done({});\n    }\n};\n\n//# sourceURL=webpack:///./source/plugins/login/login.js?");

/***/ }),

/***/ "./source/plugins/reactor/components/Button/Button.jsx":
/*!*************************************************************!*\
  !*** ./source/plugins/reactor/components/Button/Button.jsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _ButtonBase = __webpack_require__(/*! @material-ui/core/ButtonBase */ \"./node_modules/@material-ui/core/ButtonBase/index.js\");\n\nvar _ButtonBase2 = _interopRequireDefault(_ButtonBase);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = {\n    name: \"Button\",\n    description: '',\n    propTypes: {\n        // name: 'string',\n        // title: { type: 'string' },\n        // isOpen: false,\n        // onChange(){}\n    },\n    dependencies: [],\n    get: function get() {\n\n        var core = this;\n\n        var _core$imports = core.imports,\n            React = _core$imports.React,\n            PropTypes = _core$imports.PropTypes;\n\n\n        return {\n            propsTypes: {\n                // title: PropTypes.string\n            },\n            getDefaultProps: function getDefaultProps() {\n                return {};\n            },\n            getInitialState: function getInitialState() {\n\n                return {};\n            },\n            componentDidMount: function componentDidMount() {},\n            componentWillUnmount: function componentWillUnmount() {},\n            render: function render() {\n\n                return React.createElement(\n                    _ButtonBase2.default,\n                    _extends({ style: { width: '100%', color: '#eee' } }, this.props),\n                    React.createElement(\n                        'div',\n                        { style: { justifyContent: 'flex-start', width: '100%', display: 'flex', padding: '10px 6px', fontSize: 14 } },\n                        this.props.children\n                    )\n                );\n            }\n        };\n    }\n};\n\n//# sourceURL=webpack:///./source/plugins/reactor/components/Button/Button.jsx?");

/***/ }),

/***/ "./source/plugins/reactor/components/Button/index.js":
/*!***********************************************************!*\
  !*** ./source/plugins/reactor/components/Button/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./Button.jsx */ \"./source/plugins/reactor/components/Button/Button.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/reactor/components/Button/index.js?");

/***/ }),

/***/ "./source/plugins/reactor/components/CodeEditor/CodeEditor.jsx":
/*!*********************************************************************!*\
  !*** ./source/plugins/reactor/components/CodeEditor/CodeEditor.jsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactMonacoEditor = __webpack_require__(/*! react-monaco-editor */ \"./node_modules/react-monaco-editor/lib/index.js\");\n\nvar _reactMonacoEditor2 = _interopRequireDefault(_reactMonacoEditor);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = {\n    name: \"CodeEditor\",\n    description: '',\n    propTypes: {\n        // name: 'string',\n        // title: { type: 'string' },\n        // isOpen: false,\n        // onChange(){}\n    },\n    bindings: {\n        codeEditor: 'codeEditor',\n        theme: 'theme'\n    },\n    dependencies: [],\n    get: function get(CodeMirror) {\n\n        var core = this;\n\n        var _core$imports = core.imports,\n            React = _core$imports.React,\n            PropTypes = _core$imports.PropTypes;\n\n\n        return {\n            propsTypes: {\n                // title: pt.string\n            },\n            getDefaultProps: function getDefaultProps() {\n                return {};\n            },\n            getInitialState: function getInitialState() {\n\n                return {};\n            },\n            componentDidMount: function componentDidMount() {},\n            componentWillUnmount: function componentWillUnmount() {},\n            updateCode: function updateCode(code) {},\n            apply: function apply() {\n                this.props.onApply(core.state.codeEditor);\n            },\n            onKeyDown: function onKeyDown(e) {\n                if (e.keyCode === 13 && (e.ctrlKey || e.metaKey)) {\n                    this.apply();\n                }\n            },\n            editorDidMount: function editorDidMount(editor) {\n                this.editor = editor;\n            },\n            resize: function resize() {\n                if (this.editor) {\n                    this.editor.layout();\n                }\n            },\n            render: function render() {\n                var onClose = this.props.onClose;\n                var _core$state = core.state,\n                    codeEditor = _core$state.codeEditor,\n                    theme = _core$state.theme;\n\n                return React.createElement(\n                    'div',\n                    { style: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column' }, onKeyDown: this.onKeyDown },\n                    React.createElement(\n                        'div',\n                        {\n                            onClick: onClose,\n                            style: {\n                                position: 'absolute',\n                                top: 0,\n                                right: 0,\n                                height: 26,\n                                width: 26,\n                                zIndex: 4,\n                                display: 'flex',\n                                alignItems: 'center',\n                                justifyContent: 'center',\n                                cursor: 'pointer'\n                            } },\n                        core.interact(function (_ref) {\n                            var isHovered = _ref.isHovered;\n                            return React.createElement('i', {\n                                className: 'fas fa-times',\n                                style: {\n                                    fontSize: '16px',\n                                    color: theme.iconColor1,\n                                    opacity: isHovered ? 1 : 0.8\n                                } });\n                        })\n                    ),\n                    React.createElement(\n                        'div',\n                        { style: { position: 'absolute', top: 26, left: 0, right: 0, bottom: 0 } },\n                        React.createElement(_reactMonacoEditor2.default, {\n                            onChange: function onChange(v) {\n                                return codeEditor.code = v;\n                            },\n                            value: codeEditor.code\n                            // editorWillMount={ this.editorWillMount }\n                            , editorDidMount: this.editorDidMount,\n                            options: {\n                                lineNumbers: 'off',\n                                minimap: { enabled: false }\n                            }\n                            // ref={(_ref) => {\n                            //     this.jsonEditor = _ref;                                    \n                            // }}\n                            , language: 'javascript'\n                        })\n                    )\n                );\n            }\n        };\n    }\n};\n\n//# sourceURL=webpack:///./source/plugins/reactor/components/CodeEditor/CodeEditor.jsx?");

/***/ }),

/***/ "./source/plugins/reactor/components/CodeEditor/index.js":
/*!***************************************************************!*\
  !*** ./source/plugins/reactor/components/CodeEditor/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./CodeEditor.jsx */ \"./source/plugins/reactor/components/CodeEditor/CodeEditor.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/reactor/components/CodeEditor/index.js?");

/***/ }),

/***/ "./source/plugins/reactor/components/ColorPicker/ColorPicker.jsx":
/*!***********************************************************************!*\
  !*** ./source/plugins/reactor/components/ColorPicker/ColorPicker.jsx ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _core = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/index.es.js\");\n\nvar _reactColor = __webpack_require__(/*! react-color */ \"./node_modules/react-color/lib/index.js\");\n\n// require('./colorPicker.scss')\nmodule.exports = {\n  name: \"ColorPicker\",\n  description: '',\n  propTypes: {},\n  dependencies: [],\n\n  get: function get() {\n\n    var core = this;\n\n    var _core$imports = core.imports,\n        React = _core$imports.React,\n        PropTypes = _core$imports.PropTypes;\n\n\n    return {\n      propsTypes: {\n        color: PropTypes.string,\n        anchorEl: PropTypes.object,\n        handleClose: PropTypes.func,\n        onChange: PropTypes.func\n      },\n\n      getInitialState: function getInitialState() {\n        return null;\n      },\n      getDefaultProps: function getDefaultProps() {\n        return {\n          color: '#3ab3ab',\n          anchorEl: null\n        };\n      },\n      componentDidMount: function componentDidMount() {\n        var color = this.props.color;\n\n        this.isUnmounted = false;\n      },\n      componentWillReceiveProps: function componentWillReceiveProps(nextProps) {},\n      componentWillUnmount: function componentWillUnmount() {\n        this.isUnmounted = true;\n      },\n      handleClose: function handleClose() {\n        if (this.props.handleClose) this.props.handleClose();\n      },\n      handleChangeComplete: function handleChangeComplete(color, e) {\n        var t = color.rgb;\n        if (t.a !== 1) {\n          return this.props.onChange('rgba(' + t.r + ',' + t.g + ',' + t.b + ',' + t.a + ')');\n        }\n        this.props.onChange(color.hex);\n      },\n      render: function render() {\n        var _props = this.props,\n            anchorEl = _props.anchorEl,\n            color = _props.color;\n\n\n        var open = Boolean(anchorEl);\n\n        return React.createElement(\n          _core.Popover,\n          {\n            id: 'simple-popper',\n            open: open,\n            PaperProps: { style: { padding: 15 } },\n            anchorEl: anchorEl,\n            onClose: this.handleClose,\n            anchorOrigin: { vertical: 'bottom', horizontal: 'center' },\n            transformOrigin: { vertical: 'top', horizontal: 'center' } },\n          React.createElement(\n            'div',\n            { style: { margin: '15px 0' } },\n            React.createElement(_reactColor.SketchPicker, { color: color, onChangeComplete: this.handleChangeComplete })\n          ),\n          React.createElement(\n            'div',\n            { style: { display: 'flex', justifyContent: 'space-between' } },\n            React.createElement(\n              _core.Button,\n              { onClick: this.handleClose, color: 'secondary', size: 'small' },\n              'Close'\n            )\n          )\n        );\n      }\n    };\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/reactor/components/ColorPicker/ColorPicker.jsx?");

/***/ }),

/***/ "./source/plugins/reactor/components/ColorPicker/index.js":
/*!****************************************************************!*\
  !*** ./source/plugins/reactor/components/ColorPicker/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./ColorPicker.jsx */ \"./source/plugins/reactor/components/ColorPicker/ColorPicker.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/reactor/components/ColorPicker/index.js?");

/***/ }),

/***/ "./source/plugins/reactor/components/Drawer/Drawer.jsx":
/*!*************************************************************!*\
  !*** ./source/plugins/reactor/components/Drawer/Drawer.jsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n    name: \"Drawer\",\n    description: '',\n    propTypes: {\n        // name: 'string',\n        // title: { type: 'string' },\n        // isOpen: false,\n        // onChange(){}\n    },\n    dependencies: ['divide.SlideOpen', 'reactor.Button'],\n    get: function get(SlideOpen, Button) {\n\n        var core = this;\n\n        var _core$imports = core.imports,\n            React = _core$imports.React,\n            PropTypes = _core$imports.PropTypes;\n\n\n        return {\n            propsTypes: {\n                // title: PropTypes.string\n            },\n            getDefaultProps: function getDefaultProps() {\n                return {};\n            },\n            getInitialState: function getInitialState() {\n\n                return {};\n            },\n            componentDidMount: function componentDidMount() {},\n            componentWillUnmount: function componentWillUnmount() {},\n            render: function render() {\n                var _props = this.props,\n                    isOpen = _props.isOpen,\n                    id = _props.id,\n                    onToggle = _props.onToggle,\n                    title = _props.title,\n                    children = _props.children,\n                    _props$borderColor = _props.borderColor,\n                    borderColor = _props$borderColor === undefined ? '#888' : _props$borderColor;\n\n                return React.createElement(\n                    SlideOpen,\n                    {\n                        isOpen: isOpen\n                    },\n                    React.createElement(\n                        Button,\n                        {\n                            style: { width: '100%', borderBottom: '1px solid ' + borderColor },\n                            onClick: function onClick(e) {\n                                return onToggle(id);\n                            } },\n                        React.createElement(\n                            'div',\n                            { style: { width: 20, textAlign: 'center' } },\n                            React.createElement('i', { className: 'fas ' + (isOpen ? 'fa-angle-down' : 'fa-angle-right') })\n                        ),\n                        React.createElement(\n                            'div',\n                            { style: { marginLeft: 6 } },\n                            title || '?'\n                        )\n                    ),\n                    React.createElement(\n                        'div',\n                        { style: { padding: '6px 6px 6px 15px' } },\n                        children\n                    )\n                );\n            }\n        };\n    }\n};\n\n//# sourceURL=webpack:///./source/plugins/reactor/components/Drawer/Drawer.jsx?");

/***/ }),

/***/ "./source/plugins/reactor/components/Drawer/index.js":
/*!***********************************************************!*\
  !*** ./source/plugins/reactor/components/Drawer/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./Drawer.jsx */ \"./source/plugins/reactor/components/Drawer/Drawer.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/reactor/components/Drawer/index.js?");

/***/ }),

/***/ "./source/plugins/reactor/components/Label/Label.jsx":
/*!***********************************************************!*\
  !*** ./source/plugins/reactor/components/Label/Label.jsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nmodule.exports = {\n    name: \"Label\",\n    description: '',\n    propTypes: {\n        // name: 'string',\n        // title: { type: 'string' },\n        // isOpen: false,\n        // onChange(){}\n    },\n    dependencies: [],\n    get: function get() {\n\n        var core = this;\n\n        var _core$imports = core.imports,\n            React = _core$imports.React,\n            PropTypes = _core$imports.PropTypes;\n\n\n        return {\n            propsTypes: {\n                // title: PropTypes.string\n            },\n            getDefaultProps: function getDefaultProps() {\n                return {};\n            },\n            getInitialState: function getInitialState() {\n\n                return {};\n            },\n            componentDidMount: function componentDidMount() {},\n            componentWillUnmount: function componentWillUnmount() {},\n            render: function render() {\n\n                return React.createElement(\n                    'div',\n                    { style: _extends({ fontSize: 12, padding: '4px 2px', color: '#888' }, this.props.style) },\n                    this.props.children\n                );\n            }\n        };\n    }\n};\n\n//# sourceURL=webpack:///./source/plugins/reactor/components/Label/Label.jsx?");

/***/ }),

/***/ "./source/plugins/reactor/components/Label/index.js":
/*!**********************************************************!*\
  !*** ./source/plugins/reactor/components/Label/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./Label.jsx */ \"./source/plugins/reactor/components/Label/Label.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/reactor/components/Label/index.js?");

/***/ }),

/***/ "./source/plugins/reactor/components/Reactor/Reactor.jsx":
/*!***************************************************************!*\
  !*** ./source/plugins/reactor/components/Reactor/Reactor.jsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nmodule.exports = {\n    name: \"Reactor\",\n    description: '',\n    propTypes: {\n        // name: 'string',\n        // title: { type: 'string' },\n        // isOpen: false,\n        // onChange(){}\n    },\n    dependencies: ['login.Login', 'flatTemplate.Template', 'divide.Vertical', 'snackbar.Snackbar', 'reactor.CodeEditor'],\n    get: function get(Login, Template, Vertical, Snackbar, CodeEditor) {\n\n        var core = this;\n\n        var _core$imports = core.imports,\n            React = _core$imports.React,\n            PropTypes = _core$imports.PropTypes;\n\n\n        return {\n            propsTypes: {\n                // title: PropTypes.string\n            },\n            getDefaultProps: function getDefaultProps() {\n                return {};\n            },\n            getInitialState: function getInitialState() {\n\n                return {\n                    openChilds: {},\n                    verticalMove: false\n                };\n            },\n            componentDidMount: function componentDidMount() {\n                var _this = this;\n\n                core.onStateChange(function (e) {\n                    return _this.forceUpdate();\n                });\n            },\n            componentWillUnmount: function componentWillUnmount() {},\n            onMoveStart: function onMoveStart() {\n                this.setState({ verticalMove: true });\n            },\n            onMoveComplete: function onMoveComplete(width) {\n                this.setState({ verticalMove: false });\n                localStorage.setItem('reactorEditWidth', width);\n            },\n            save: function save() {\n                core.plugins.agent.post('/api/setCoreObject').send({\n                    source: core.reactor.get('source'),\n                    name: 'test'\n                }).end(function (err, res) {\n                    if (err) {\n                        core.snack('Failed to save template', 'warning');\n                        console.error(err);\n                    } else {\n                        core.snack('Template saved', 'success');\n                    }\n                });\n            },\n            setChildProp: function setChildProp(elementId, propKey, value) {\n                var oldElement = core.reactor.get(['source', elementId]);\n                var element = _extends({}, oldElement, {\n                    value: _extends({}, oldElement.value, {\n                        props: _extends({}, oldElement.value.props, _defineProperty({}, propKey, value))\n                    })\n                });\n                core.reactor.action('setSourceElement', [element]);\n                core.reactor.set(['source', elementId], element);\n                core.tree.commit();\n            },\n            onIframeLoad: function onIframeLoad() {\n                var window = this.refs.iframe.contentWindow;\n                core.reactor.loadAppWindow(window);\n            },\n            toggleSelecting: function toggleSelecting() {\n                var isSelecting = !core.state.isSelecting;\n                core.reactor.action(isSelecting ? 'startSelecting' : 'stopSelecting');\n                core.state.isSelecting = isSelecting;\n            },\n            updateSourceCode: function updateSourceCode(codeEditor) {\n                var id = codeEditor.targetId;\n                core.reactor.updateSourceCode(id, codeEditor.code);\n                // core.reactor.set(['source', id, 'value', 'source'], codeEditor.code);\n                // core.plugins.agent.post('/api/transform').send({ code: codeEditor.code }).end(function(err, res){\n                //     if(err){\n                //         console.error(err);\n                //     }\n                //     else{\n                //         core.reactor.set(['source', id, 'value', 'code'], res.body.code);\n                //     }\n\n                // })\n            },\n            openCodeEditor: function openCodeEditor(targetId) {\n                console.log(['source', targetId, 'value', 'source']);\n                core.state.codeEditor = _extends({}, core.state.codeEditor, {\n                    isOpen: true,\n                    targetId: targetId,\n                    code: core.reactor.get(['source', targetId, 'value', 'source'])\n                });\n            },\n            onEditorResize: function onEditorResize() {\n                if (this.refs.codeEditor) {\n                    this.refs.codeEditor.resize();\n                }\n            },\n            renderTemplateText: function renderTemplateText(sourceElement) {\n                return React.createElement(\n                    'div',\n                    null,\n                    sourceElement.value\n                );\n            },\n            renderSelectedElement: function renderSelectedElement(selectedElement) {\n                var _this2 = this;\n\n                var codeEditor = core.state.codeEditor;\n                if (codeEditor.isOpen) {\n                    return React.createElement(CodeEditor, {\n                        ref: 'codeEditor',\n                        onClose: function onClose(e) {\n                            return codeEditor.isOpen = false;\n                        },\n                        onApply: this.updateSourceCode\n                    });\n                }\n                var isTemplateText = selectedElement.type === 'templateText';\n                if (isTemplateText) {\n                    return this.renderTemplateText(selectedElement);\n                }\n                var type = selectedElement.value.type;\n                var component = core.reactor.get(['components', { id: type }]);\n                var theme = core.state.theme;\n\n                if (!component) {\n                    return React.createElement(\n                        'div',\n                        null,\n                        'Cannot find type \"',\n                        type,\n                        '\"'\n                    );\n                }\n                if (!component.schema) {\n                    return React.createElement(\n                        'div',\n                        null,\n                        'Cannot find schema for type \"',\n                        type,\n                        '\"'\n                    );\n                }\n                var isInSource = core.reactor.get(['source', component.id]);\n                return React.createElement(\n                    'div',\n                    { style: { padding: 20 } },\n                    React.createElement(\n                        'div',\n                        { style: { display: 'flex', justifyContent: 'space-between' } },\n                        React.createElement(\n                            'div',\n                            null,\n                            component.id\n                        ),\n                        React.createElement(\n                            'div',\n                            { style: { display: 'flex' } },\n                            isInSource ? core.interact(function (_ref) {\n                                var isHovered = _ref.isHovered;\n                                return React.createElement(\n                                    'div',\n                                    {\n                                        onClick: function onClick(e) {\n                                            return _this2.openCodeEditor(component.id);\n                                        },\n                                        style: { width: 30, height: 30, cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' } },\n                                    React.createElement('i', {\n                                        className: 'far fa-edit',\n                                        style: {\n                                            fontSize: '16px',\n                                            color: theme.iconColor1,\n                                            opacity: isHovered ? 1 : 0.8\n                                        } })\n                                );\n                            }) : null,\n                            core.interact(function (_ref2) {\n                                var isHovered = _ref2.isHovered;\n                                return React.createElement(\n                                    'div',\n                                    {\n                                        onClick: function onClick(e) {\n                                            return core.state.selectedElement = null;\n                                        },\n                                        style: { width: 30, height: 30, cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' } },\n                                    React.createElement('i', {\n                                        className: 'fas fa-times',\n                                        style: {\n                                            fontSize: '16px',\n                                            color: theme.iconColor1,\n                                            opacity: isHovered ? 1 : 0.8\n                                        } })\n                                );\n                            })\n                        )\n                    ),\n                    component.schema.map(function (schemaItem) {\n                        var componentKeys = Object.keys(core.plugins.templateInputs.components);\n                        var key = componentKeys.find(function (t) {\n                            return t.toLowerCase() === schemaItem.type;\n                        });\n                        var Input = core.plugins.templateInputs.components[key];\n                        var id = selectedElement.id + '-' + schemaItem.key;\n                        if (!Input) {\n                            return React.createElement(\n                                'div',\n                                { key: id },\n                                'Cannot find input \"',\n                                schemaItem.type,\n                                '\"'\n                            );\n                        }\n                        var isOpen = _this2.state.openChilds[id];\n                        return React.createElement(\n                            'div',\n                            { style: { paddingBottom: 10 }, key: id },\n                            core.reactor.bind(['source', selectedElement.id], function (element) {\n                                return React.createElement(Input, {\n                                    style: { display: 'flex', flexDirection: 'row' },\n                                    label: schemaItem.label || schemaItem.key,\n                                    labelStyle: {},\n                                    value: element.value.props[schemaItem.key],\n                                    onChange: function onChange(value) {\n                                        return _this2.setChildProp(element.id, schemaItem.key, value);\n                                    }\n                                });\n                            })\n                        );\n                    })\n                );\n            },\n            render: function render() {\n                var flatTemplate = core.plugins.flatTemplate;\n                var verticalMove = this.state.verticalMove;\n                var _core$state = core.state,\n                    theme = _core$state.theme,\n                    selectedElement = _core$state.selectedElement;\n\n                var MasterTemplate = core.components['core.templates.master'];\n                return React.createElement(\n                    Login,\n                    null,\n                    React.createElement(\n                        'div',\n                        null,\n                        React.createElement(\n                            'header',\n                            {\n                                style: {\n                                    height: 40,\n                                    boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',\n                                    zIndex: 1,\n                                    position: 'relative',\n                                    display: 'flex',\n                                    justifyContent: 'space-between',\n                                    alignItems: 'center',\n                                    padding: '0 6px',\n                                    background: theme.background1,\n                                    color: theme.textColor1\n                                } },\n                            React.createElement(\n                                'div',\n                                { style: { display: 'flex' } },\n                                React.createElement(\n                                    'div',\n                                    {\n                                        style: { width: 36, height: 36, marginLeft: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' },\n                                        onClick: function onClick(e) {\n                                            return core.state.editorIsOpen = !core.state.editorIsOpen;\n                                        } },\n                                    React.createElement('i', {\n                                        className: 'fas fa-pencil-alt',\n                                        style: {\n                                            fontSize: '20px',\n                                            color: theme.textColor1,\n                                            opacity: core.state.editorIsOpen ? 1 : 0.4\n                                        } })\n                                ),\n                                React.createElement(\n                                    'div',\n                                    {\n                                        style: { width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' },\n                                        onClick: this.save },\n                                    React.createElement('i', {\n                                        className: 'fas fa-save',\n                                        style: {\n                                            fontSize: '20px',\n                                            color: theme.textColor1\n                                        } })\n                                ),\n                                React.createElement(\n                                    'div',\n                                    {\n                                        style: { width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' },\n                                        onClick: this.toggleSelecting },\n                                    React.createElement('i', {\n                                        className: 'fas fa-crosshairs',\n                                        style: {\n                                            fontSize: '20px',\n                                            color: theme.textColor1,\n                                            opacity: core.state.isSelecting ? 1 : 0.4\n                                        } })\n                                )\n                            )\n                        ),\n                        React.createElement(\n                            'div',\n                            { style: { position: 'absolute', top: 40, left: 0, right: 0, bottom: 0, overflow: 'auto' } },\n                            React.createElement(\n                                Vertical,\n                                {\n                                    from: 'left',\n                                    disabled: !core.state.editorIsOpen,\n                                    width: core.state.editorIsOpen ? localStorage.getItem('reactorEditWidth') || 240 : 0,\n                                    onMoveComplete: this.onMoveComplete,\n                                    onMoveStart: this.onMoveStart,\n                                    onResize: this.onEditorResize,\n                                    lineStyle: { color: theme.background1 }\n                                },\n                                selectedElement ? this.renderSelectedElement(selectedElement) : React.createElement(\n                                    'div',\n                                    null,\n                                    React.createElement(\n                                        'div',\n                                        { style: { padding: 20, borderBottom: '1px solid ' + theme.border1 } },\n                                        'reactor'\n                                    ),\n                                    'OK'\n                                ),\n                                React.createElement(\n                                    'div',\n                                    { style: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 } },\n                                    React.createElement('iframe', { ref: 'iframe', onLoad: this.onIframeLoad, src: 'www/test', width: '100%', height: '100%', style: { border: 0 } }),\n\n                                    // prevents text selection in iframe while dragging the divider\n                                    verticalMove ? React.createElement('div', { style: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 } }) : null\n                                )\n                            )\n                        ),\n                        React.createElement(Snackbar, null)\n                    )\n                );\n            }\n        };\n    }\n};\n\n//# sourceURL=webpack:///./source/plugins/reactor/components/Reactor/Reactor.jsx?");

/***/ }),

/***/ "./source/plugins/reactor/components/Reactor/index.js":
/*!************************************************************!*\
  !*** ./source/plugins/reactor/components/Reactor/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./Reactor.jsx */ \"./source/plugins/reactor/components/Reactor/Reactor.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/reactor/components/Reactor/index.js?");

/***/ }),

/***/ "./source/plugins/reactor/index.js":
/*!*****************************************!*\
  !*** ./source/plugins/reactor/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./reactor.js */ \"./source/plugins/reactor/reactor.js\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/reactor/index.js?");

/***/ }),

/***/ "./source/plugins/reactor/reactor.js":
/*!*******************************************!*\
  !*** ./source/plugins/reactor/reactor.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nmodule.exports = {\n    name: 'reactor',\n    tree: __webpack_require__(/*! ./tree */ \"./source/plugins/reactor/tree/index.js\"),\n    modules: [\n        // require('./modules/NAME'),\n    ],\n    components: [__webpack_require__(/*! ./components/Button */ \"./source/plugins/reactor/components/Button/index.js\"), __webpack_require__(/*! ./components/ColorPicker */ \"./source/plugins/reactor/components/ColorPicker/index.js\"), __webpack_require__(/*! ./components/Drawer */ \"./source/plugins/reactor/components/Drawer/index.js\"), __webpack_require__(/*! ./components/Label */ \"./source/plugins/reactor/components/Label/index.js\"), __webpack_require__(/*! ./components/CodeEditor */ \"./source/plugins/reactor/components/CodeEditor/index.js\"), __webpack_require__(/*! ./components/Reactor */ \"./source/plugins/reactor/components/Reactor/index.js\")],\n    actions: [\n        // require('./actions/NAME'),\n    ],\n    dependencies: ['flatTemplate'],\n    init: function init(definition, done) {\n\n        var core = this;\n\n        core.setState({\n            editorIsOpen: true,\n            selectedElement: null,\n            isSelecting: false,\n            codeEditor: {\n                isOpen: false,\n                code: '',\n                targetId: null\n            },\n            theme: {\n                textColor1: '#fff',\n                iconColor1: '#888',\n                background1: '#313763',\n                background2: '#2d1d33',\n                border1: '#222'\n            }\n        });\n\n        var reactor = core.reactor = {\n            callbacks: [],\n            api: {\n                load: function load(_ref) {\n                    var source = _ref.source,\n                        components = _ref.components;\n\n                    reactor.set('source', source);\n                    reactor.set('components', components);\n                    console.log('components', components);\n                },\n                selectElement: function selectElement(element) {\n                    core.state.selectedElement = element;\n                    core.state.codeEditor.isOpen = false;\n                },\n                reloadComponent: function reloadComponent(component) {\n                    var cursor = reactor.select(['components', { id: component.id }]);\n                    if (cursor.exists()) {\n                        console.log('1');\n                        cursor.set(component);\n                    } else {\n                        console.log('2');\n                        cursor.up().push(component);\n                    }\n                }\n            },\n            action: function action(name, args) {\n                reactor.postMessage({\n                    action: name,\n                    args: (args || []).map(function (arg) {\n                        if (core.isFunction(arg)) {\n                            var id = core.uuid();\n                            reactor.callbacks[id] = arg;\n                            return { \"core.reactor.callback\": id };\n                        }\n                        return arg;\n                    })\n                });\n            },\n            postMessage: function postMessage(message) {\n                // { ns: 'core.studio.message', action: 'init', arguments: ['1', '2'] }\n                if (reactor.appWindow) {\n                    var values = [];\n                    reactor.appWindow.postMessage(JSON.stringify(Object.assign({ ns: 'core.reactor' }, message), function (key, value) {\n                        if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {\n                            if (values.indexOf(value) > -1) {\n                                return '[Circular]';\n                            }\n                            values.push(value);\n                        }\n                        return value;\n                    }), '*');\n                }\n            },\n            onAppWindowMessage: function onAppWindowMessage(message) {\n                if (!core.isString(message.data)) {\n                    return;\n                }\n                if (message.data.indexOf('{') !== 0) {\n                    return;\n                }\n                try {\n                    message = JSON.parse(message.data);\n                    if (message && message.ns === 'core.reactor.bridge') {\n                        var _message = message,\n                            action = _message.action;\n\n                        if (action) {\n                            if (!core.isFunction(reactor.api[action])) {\n                                return console.warn('cannot find action \\'' + action + '\\'');\n                            }\n                            reactor.api[action].apply(reactor, (message.arguments || []).map(function (arg) {\n                                var id = arg && arg['core.reactor.callback'];\n                                if (!id) {\n                                    return arg;\n                                }\n                                return function (d) {\n                                    reactor.action('functionReturn', [id, [].slice.call(arguments)]);\n                                };\n                            }));\n                        }\n                    }\n                } catch (err) {\n                    throw err;\n                }\n            },\n            loadAppWindow: function loadAppWindow(win) {\n                reactor.appWindow = win;\n                win.addEventListener('message', reactor.onAppWindowMessage, false);\n            },\n            updateSourceCode: function updateSourceCode(id, code) {\n                var value = { source: code };\n                core.plugins.agent.post('/api/transform').send({ code: code }).end(function (err, res) {\n                    if (err) {\n                        console.error(err);\n                    } else {\n                        value.code = res.body.code;\n                        reactor.set(['source', id, 'value'], _extends({}, reactor.get(['source', id, 'value']), value));\n                        reactor.action('setSourceElement', [reactor.get(['source', id])]);\n                    }\n                });\n            },\n            transform: function transform(code, cb) {\n                core.plugins.agent.post('/api/transform').send({ code: code }).end(function (err, res) {\n                    cb(err, res && res.body && res.body.code);\n                });\n            }\n        };\n\n        done(reactor);\n    }\n};\n\n//# sourceURL=webpack:///./source/plugins/reactor/reactor.js?");

/***/ }),

/***/ "./source/plugins/reactor/tree/index.js":
/*!**********************************************!*\
  !*** ./source/plugins/reactor/tree/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {};\n\n//# sourceURL=webpack:///./source/plugins/reactor/tree/index.js?");

/***/ }),

/***/ "./source/plugins/snackbar/Snackbar.jsx":
/*!**********************************************!*\
  !*** ./source/plugins/snackbar/Snackbar.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _Snackbar = __webpack_require__(/*! @material-ui/core/Snackbar */ \"./node_modules/@material-ui/core/Snackbar/index.js\");\n\nvar _Snackbar2 = _interopRequireDefault(_Snackbar);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n__webpack_require__(/*! ./snackbar.css */ \"./source/plugins/snackbar/snackbar.css\");\n\nmodule.exports = {\n    name: 'Snackbar',\n    dependencies: [],\n    get: function get() {\n\n        return {\n            closeSnackbar: function closeSnackbar() {\n                core.plugins.snackbar.close();\n            },\n            renderMessage: function renderMessage() {\n                var snackbar = core.plugins.snackbar;\n                var icon = snackbar.icon,\n                    message = snackbar.message;\n\n                switch (icon) {\n                    case 'info':\n                        icon = React.createElement('i', {\n                            className: 'fas fa-info',\n                            style: { color: '#44b', fonSize: 18, marginRight: 6 }\n                        });\n                        break;\n                    case 'warning':\n                        icon = React.createElement('i', {\n                            className: 'fas fa-exclamation-triangle',\n                            style: { color: '#b44', fonSize: 18, marginRight: 6 }\n                        });\n                        break;\n                    case 'success':\n                        icon = React.createElement('i', {\n                            className: 'fas fa-check',\n                            style: { color: '#4b4', fonSize: 18, marginRight: 6 }\n                        });\n                        break;\n                    default:\n                        return message;\n                }\n                return React.createElement(\n                    'div',\n                    { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' } },\n                    React.createElement(\n                        'div',\n                        { style: { 'verticalAlign': 'middle', fontSize: 13, lineHeight: '18px', flex: 1 } },\n                        message\n                    ),\n                    React.createElement(\n                        'div',\n                        null,\n                        icon\n                    )\n                );\n            },\n            render: function render() {\n                var _this = this;\n\n                var snackbar = core.plugins.snackbar;\n                return snackbar.bind('isOpen', function (isOpen) {\n                    var icon = snackbar.icon,\n                        message = snackbar.message;\n\n                    switch (icon) {\n                        case 'info':\n                            icon = React.createElement('i', {\n                                className: 'fas fa-info',\n                                style: { color: 'rgb(87, 176, 236)', fontSize: '16px', width: 20, textAlign: 'center' }\n                            });\n                            break;\n                        case 'warning':\n                            icon = React.createElement('i', {\n                                className: 'fas fa-exclamation-triangle',\n                                style: { color: 'rgb(241, 200, 92)', fontSize: '18px', width: 20, textAlign: 'center' }\n                            });\n                            break;\n                        case 'success':\n                            icon = React.createElement('i', {\n                                className: 'fas fa-check',\n                                style: { color: 'rgb(92, 185, 92)', fontSize: '18px', width: 20, textAlign: 'center' }\n                            });\n                            break;\n                    }\n\n                    return React.createElement(_Snackbar2.default, _extends({\n                        anchorOrigin: {\n                            vertical: 'bottom',\n                            horizontal: 'center'\n                        },\n                        open: isOpen,\n                        autoHideDuration: 3000,\n                        onClose: _this.closeSnackbar,\n                        message: message,\n                        action: icon\n                    }, snackbar.props, {\n                        className: 'snackbar' + (snackbar.props && snackbar.props.className ? ' ' + snackbar.props.className : '')\n                    }));\n                });\n            }\n        };\n    }\n};\n\n//# sourceURL=webpack:///./source/plugins/snackbar/Snackbar.jsx?");

/***/ }),

/***/ "./source/plugins/snackbar/index.js":
/*!******************************************!*\
  !*** ./source/plugins/snackbar/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nmodule.exports = {\n    name: 'snackbar',\n    tree: {\n        isOpen: false\n    },\n    components: [__webpack_require__(/*! ./Snackbar.jsx */ \"./source/plugins/snackbar/Snackbar.jsx\")],\n    extend: {\n        snack: function snack(message, type) {\n            this.plugins.snackbar.open.apply(this.plugins.snackbar, arguments);\n        }\n    },\n    init: function init(def, done) {\n\n        var core = this;\n\n        function setProps(props) {\n            var snackbar = core.plugins.snackbar;\n\n            snackbar.icon = props.icon;\n            snackbar.props = props.props;\n\n            if (typeof props.message === \"string\") {\n                snackbar.message = props.message;\n            } else if (_typeof(props.message) === \"object\" && props.message.message) {\n                snackbar.message = props.message.message;\n            } else {\n                console.warn('The \"snackbar\" was opened without a message');\n                snackbar.message = core.translate(\"snackbar.errorOccurred\", \"An error has occurred\");\n                snackbar.icon = 'warning';\n            }\n        }\n\n        done({\n            messages: [],\n            open: function open(message, icon, props) {\n                var snackbar = core.plugins.snackbar;\n                snackbar.set('isOpen', false);\n                setTimeout(function () {\n                    var snackbarProps = {\n                        message: message,\n                        icon: icon,\n                        props: props\n                    };\n\n                    if (snackbar.get('isOpen')) {\n                        snackbar.messages.push(snackbarProps);\n                    } else {\n                        setProps(snackbarProps);\n                        snackbar.set('isOpen', true);\n                    }\n                }, 150);\n            },\n            close: function close() {\n                var snackbar = core.plugins.snackbar;\n                snackbar.message = null;\n                snackbar.icon = null;\n                snackbar.set('isOpen', false);\n                if (snackbar.messages.length) {\n                    setTimeout(function () {\n                        setProps(snackbar.messages.shift());\n                        snackbar.set('isOpen', true);\n                    }, 0);\n                }\n            }\n        });\n    }\n};\n\n//# sourceURL=webpack:///./source/plugins/snackbar/index.js?");

/***/ }),

/***/ "./source/plugins/snackbar/snackbar.css":
/*!**********************************************!*\
  !*** ./source/plugins/snackbar/snackbar.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./snackbar.css */ \"./node_modules/css-loader/index.js!./source/plugins/snackbar/snackbar.css\");\nif(typeof content === 'string') content = [[module.i, content, '']];\n// Prepare cssTransformation\nvar transform;\n\nvar options = {\"hmr\":true}\noptions.transform = transform\n// add the styles to the DOM\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./source/plugins/snackbar/snackbar.css?");

/***/ }),

/***/ "./source/plugins/templateInputs/components/Button/Button.jsx":
/*!********************************************************************!*\
  !*** ./source/plugins/templateInputs/components/Button/Button.jsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _ButtonBase = __webpack_require__(/*! @material-ui/core/ButtonBase */ \"./node_modules/@material-ui/core/ButtonBase/index.js\");\n\nvar _ButtonBase2 = _interopRequireDefault(_ButtonBase);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = {\n    name: \"Button\",\n    description: '',\n    propTypes: {\n        // name: 'string',\n        // title: { type: 'string' },\n        // isOpen: false,\n        // onChange(){}\n    },\n    dependencies: [],\n    get: function get() {\n\n        var core = this;\n\n        var _core$imports = core.imports,\n            React = _core$imports.React,\n            PropTypes = _core$imports.PropTypes;\n\n\n        return {\n            propsTypes: {\n                // title: PropTypes.string\n            },\n            getDefaultProps: function getDefaultProps() {\n                return {};\n            },\n            getInitialState: function getInitialState() {\n\n                return {};\n            },\n            componentDidMount: function componentDidMount() {},\n            componentWillUnmount: function componentWillUnmount() {},\n            render: function render() {\n\n                return React.createElement(\n                    _ButtonBase2.default,\n                    _extends({ style: { width: '100%', color: '#eee' } }, this.props),\n                    React.createElement(\n                        'div',\n                        { style: { justifyContent: 'flex-start', width: '100%', display: 'flex', padding: '10px 6px', fontSize: 14 } },\n                        this.props.children\n                    )\n                );\n            }\n        };\n    }\n};\n\n//# sourceURL=webpack:///./source/plugins/templateInputs/components/Button/Button.jsx?");

/***/ }),

/***/ "./source/plugins/templateInputs/components/Button/index.js":
/*!******************************************************************!*\
  !*** ./source/plugins/templateInputs/components/Button/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./Button.jsx */ \"./source/plugins/templateInputs/components/Button/Button.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/templateInputs/components/Button/index.js?");

/***/ }),

/***/ "./source/plugins/templateInputs/components/ColorPicker/ColorPicker.jsx":
/*!******************************************************************************!*\
  !*** ./source/plugins/templateInputs/components/ColorPicker/ColorPicker.jsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _core = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/index.es.js\");\n\nvar _reactColor = __webpack_require__(/*! react-color */ \"./node_modules/react-color/lib/index.js\");\n\n// require('./colorPicker.scss')\nmodule.exports = {\n  name: \"ColorPicker\",\n  description: '',\n  propTypes: {},\n  dependencies: [],\n\n  get: function get() {\n\n    var core = this;\n\n    var _core$imports = core.imports,\n        React = _core$imports.React,\n        PropTypes = _core$imports.PropTypes;\n\n\n    return {\n      propsTypes: {\n        color: PropTypes.string,\n        anchorEl: PropTypes.object,\n        handleClose: PropTypes.func,\n        onChange: PropTypes.func\n      },\n\n      getInitialState: function getInitialState() {\n        return null;\n      },\n      getDefaultProps: function getDefaultProps() {\n        return {\n          color: '#3ab3ab',\n          anchorEl: null\n        };\n      },\n      componentDidMount: function componentDidMount() {\n        var color = this.props.color;\n\n        this.isUnmounted = false;\n      },\n      componentWillReceiveProps: function componentWillReceiveProps(nextProps) {},\n      componentWillUnmount: function componentWillUnmount() {\n        this.isUnmounted = true;\n      },\n      handleClose: function handleClose() {\n        if (this.props.handleClose) this.props.handleClose();\n      },\n      handleChangeComplete: function handleChangeComplete(color, e) {\n        var t = color.rgb;\n        if (t.a !== 1) {\n          return this.props.onChange('rgba(' + t.r + ',' + t.g + ',' + t.b + ',' + t.a + ')');\n        }\n        this.props.onChange(color.hex);\n      },\n      render: function render() {\n        var _props = this.props,\n            anchorEl = _props.anchorEl,\n            color = _props.color;\n\n\n        var open = Boolean(anchorEl);\n\n        return React.createElement(\n          _core.Popover,\n          {\n            id: 'simple-popper',\n            open: open,\n            PaperProps: { style: { padding: 15 } },\n            anchorEl: anchorEl,\n            onClose: this.handleClose,\n            anchorOrigin: { vertical: 'bottom', horizontal: 'center' },\n            transformOrigin: { vertical: 'top', horizontal: 'center' } },\n          React.createElement(\n            'div',\n            { style: { margin: '15px 0' } },\n            React.createElement(_reactColor.SketchPicker, { color: color, onChangeComplete: this.handleChangeComplete })\n          ),\n          React.createElement(\n            'div',\n            { style: { display: 'flex', justifyContent: 'space-between' } },\n            React.createElement(\n              _core.Button,\n              { onClick: this.handleClose, color: 'secondary', size: 'small' },\n              'Close'\n            )\n          )\n        );\n      }\n    };\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/templateInputs/components/ColorPicker/ColorPicker.jsx?");

/***/ }),

/***/ "./source/plugins/templateInputs/components/ColorPicker/index.js":
/*!***********************************************************************!*\
  !*** ./source/plugins/templateInputs/components/ColorPicker/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./ColorPicker.jsx */ \"./source/plugins/templateInputs/components/ColorPicker/ColorPicker.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/templateInputs/components/ColorPicker/index.js?");

/***/ }),

/***/ "./source/plugins/templateInputs/components/Drawer/Drawer.jsx":
/*!********************************************************************!*\
  !*** ./source/plugins/templateInputs/components/Drawer/Drawer.jsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n    name: \"Drawer\",\n    description: '',\n    propTypes: {\n        // name: 'string',\n        // title: { type: 'string' },\n        // isOpen: false,\n        // onChange(){}\n    },\n    dependencies: ['divide.SlideOpen', 'templateInputs.Button'],\n    get: function get(SlideOpen, Button) {\n\n        var core = this;\n\n        var _core$imports = core.imports,\n            React = _core$imports.React,\n            PropTypes = _core$imports.PropTypes;\n\n\n        return {\n            propsTypes: {\n                // title: PropTypes.string\n            },\n            getDefaultProps: function getDefaultProps() {\n                return {};\n            },\n            getInitialState: function getInitialState() {\n\n                return {};\n            },\n            componentDidMount: function componentDidMount() {},\n            componentWillUnmount: function componentWillUnmount() {},\n            render: function render() {\n                var _props = this.props,\n                    isOpen = _props.isOpen,\n                    id = _props.id,\n                    onToggle = _props.onToggle,\n                    title = _props.title,\n                    children = _props.children,\n                    _props$borderColor = _props.borderColor,\n                    borderColor = _props$borderColor === undefined ? '#888' : _props$borderColor;\n\n                return React.createElement(\n                    SlideOpen,\n                    {\n                        isOpen: isOpen\n                    },\n                    React.createElement(\n                        Button,\n                        {\n                            style: { width: '100%', borderBottom: '1px solid ' + borderColor },\n                            onClick: function onClick(e) {\n                                return onToggle(id);\n                            } },\n                        React.createElement(\n                            'div',\n                            { style: { width: 20, textAlign: 'center' } },\n                            React.createElement('i', { className: 'fas ' + (isOpen ? 'fa-angle-down' : 'fa-angle-right') })\n                        ),\n                        React.createElement(\n                            'div',\n                            { style: { marginLeft: 6 } },\n                            title || '?'\n                        )\n                    ),\n                    React.createElement(\n                        'div',\n                        { style: { padding: '6px 6px 6px 15px' } },\n                        children\n                    )\n                );\n            }\n        };\n    }\n};\n\n//# sourceURL=webpack:///./source/plugins/templateInputs/components/Drawer/Drawer.jsx?");

/***/ }),

/***/ "./source/plugins/templateInputs/components/Drawer/index.js":
/*!******************************************************************!*\
  !*** ./source/plugins/templateInputs/components/Drawer/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./Drawer.jsx */ \"./source/plugins/templateInputs/components/Drawer/Drawer.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/templateInputs/components/Drawer/index.js?");

/***/ }),

/***/ "./source/plugins/templateInputs/components/Label/Label.jsx":
/*!******************************************************************!*\
  !*** ./source/plugins/templateInputs/components/Label/Label.jsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nmodule.exports = {\n    name: \"Label\",\n    description: '',\n    propTypes: {\n        // name: 'string',\n        // title: { type: 'string' },\n        // isOpen: false,\n        // onChange(){}\n    },\n    dependencies: [],\n    get: function get() {\n\n        var core = this;\n\n        var _core$imports = core.imports,\n            React = _core$imports.React,\n            PropTypes = _core$imports.PropTypes;\n\n\n        return {\n            propsTypes: {\n                // title: PropTypes.string\n            },\n            getDefaultProps: function getDefaultProps() {\n                return {};\n            },\n            getInitialState: function getInitialState() {\n\n                return {};\n            },\n            componentDidMount: function componentDidMount() {},\n            componentWillUnmount: function componentWillUnmount() {},\n            render: function render() {\n\n                return React.createElement(\n                    'div',\n                    { style: _extends({ fontSize: 12, padding: '4px 2px', color: '#888' }, this.props.style) },\n                    this.props.children\n                );\n            }\n        };\n    }\n};\n\n//# sourceURL=webpack:///./source/plugins/templateInputs/components/Label/Label.jsx?");

/***/ }),

/***/ "./source/plugins/templateInputs/components/Label/index.js":
/*!*****************************************************************!*\
  !*** ./source/plugins/templateInputs/components/Label/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./Label.jsx */ \"./source/plugins/templateInputs/components/Label/Label.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/templateInputs/components/Label/index.js?");

/***/ }),

/***/ "./source/plugins/templateInputs/index.js":
/*!************************************************!*\
  !*** ./source/plugins/templateInputs/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./templateInputs.js */ \"./source/plugins/templateInputs/templateInputs.js\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/templateInputs/index.js?");

/***/ }),

/***/ "./source/plugins/templateInputs/inputs/Boolean/Boolean.jsx":
/*!******************************************************************!*\
  !*** ./source/plugins/templateInputs/inputs/Boolean/Boolean.jsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nmodule.exports = {\n    name: \"Boolean\",\n    description: '',\n    propTypes: {\n        // name: 'string',\n        // title: { type: 'string' },\n        // isOpen: false,\n        // onChange(){}\n    },\n    dependencies: ['templateInputs.Label'],\n    get: function get(Label) {\n\n        var core = this;\n\n        var _core$imports = core.imports,\n            React = _core$imports.React,\n            PropTypes = _core$imports.PropTypes;\n\n\n        return {\n            propsTypes: {\n                // title: PropTypes.string\n            },\n            getDefaultProps: function getDefaultProps() {\n                return {};\n            },\n            getInitialState: function getInitialState() {\n\n                return {};\n            },\n            componentDidMount: function componentDidMount() {},\n            componentWillUnmount: function componentWillUnmount() {},\n            render: function render() {\n                var _props = this.props,\n                    value = _props.value,\n                    onChange = _props.onChange,\n                    description = _props.description,\n                    required = _props.required,\n                    label = _props.label,\n                    id = _props.id,\n                    style = _props.style,\n                    labelStyle = _props.labelStyle;\n\n\n                return React.createElement(\n                    'div',\n                    { title: description, key: id, style: _extends({\n                            display: 'flex',\n                            flexDirection: 'row',\n                            justifyContent: 'space-between',\n                            cursor: 'pointer',\n                            borderBottom: '1px solid #ddd'\n                        }, style),\n                        onClick: function onClick(e) {\n                            return onChange(!value);\n                        } },\n                    React.createElement(\n                        Label,\n                        {\n                            style: labelStyle },\n                        label\n                    ),\n                    React.createElement('input', { checked: value || false, type: 'checkbox', onChange: function onChange(e) {\n                            return true;\n                        } })\n                );\n            }\n        };\n    }\n};\n\n//# sourceURL=webpack:///./source/plugins/templateInputs/inputs/Boolean/Boolean.jsx?");

/***/ }),

/***/ "./source/plugins/templateInputs/inputs/Boolean/index.js":
/*!***************************************************************!*\
  !*** ./source/plugins/templateInputs/inputs/Boolean/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./Boolean.jsx */ \"./source/plugins/templateInputs/inputs/Boolean/Boolean.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/templateInputs/inputs/Boolean/index.js?");

/***/ }),

/***/ "./source/plugins/templateInputs/inputs/Color/Color.jsx":
/*!**************************************************************!*\
  !*** ./source/plugins/templateInputs/inputs/Color/Color.jsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nmodule.exports = {\n    name: \"Color\",\n    description: '',\n    propTypes: {\n        // name: 'string',\n        // title: { type: 'string' },\n        // isOpen: false,\n        // onChange(){}\n    },\n    dependencies: ['templateInputs.ColorPicker', 'templateInputs.String'],\n    get: function get(ColorPicker, String) {\n\n        var core = this;\n\n        var _core$imports = core.imports,\n            React = _core$imports.React,\n            PropTypes = _core$imports.PropTypes;\n\n\n        return {\n            propsTypes: {\n                // title: PropTypes.string\n            },\n            getDefaultProps: function getDefaultProps() {\n                return {\n                    pickerIsOpen: false\n                };\n            },\n            getInitialState: function getInitialState() {\n\n                return {};\n            },\n            componentDidMount: function componentDidMount() {},\n            componentWillUnmount: function componentWillUnmount() {},\n            render: function render() {\n                var _this = this;\n\n                var _props = this.props,\n                    value = _props.value,\n                    id = _props.id,\n                    label = _props.label,\n                    onChange = _props.onChange,\n                    style = _props.style,\n                    labelStyle = _props.labelStyle;\n                var pickerIsOpen = this.state.pickerIsOpen;\n\n                return React.createElement(\n                    'div',\n                    { style: _extends({ position: 'relative', display: 'flex', alignItems: 'flex-end' }, style) },\n                    React.createElement(String, {\n                        value: value,\n                        label: label,\n                        onChange: onChange,\n                        style: { flex: 1, marginRight: '8px' },\n                        labelStyle: labelStyle\n                    }),\n                    React.createElement(\n                        'div',\n                        {\n                            ref: 'picker',\n                            style: {\n                                width: 26,\n                                height: 26,\n                                cursor: 'pointer',\n                                position: 'relative',\n                                border: '1px solid #bbb',\n                                borderRadius: '3px',\n                                backgroundColor: '#ddd'\n                            },\n                            onClick: function onClick(e) {\n                                return _this.setState({ pickerIsOpen: !pickerIsOpen });\n                            } },\n                        React.createElement('div', {\n                            style: {\n                                position: 'absolute',\n                                left: 3,\n                                top: 3,\n                                background: value,\n                                width: 18,\n                                height: 18,\n                                display: 'flex',\n                                justifyContent: 'center',\n                                alignItems: 'center'\n                            }\n                        })\n                    ),\n                    React.createElement(ColorPicker, {\n                        anchorEl: pickerIsOpen ? this.refs.picker : null,\n                        color: value,\n                        handleClose: function handleClose(e) {\n                            return _this.setState({ pickerIsOpen: false });\n                        },\n                        onChange: onChange })\n                );\n            }\n        };\n    }\n};\n\n//# sourceURL=webpack:///./source/plugins/templateInputs/inputs/Color/Color.jsx?");

/***/ }),

/***/ "./source/plugins/templateInputs/inputs/Color/index.js":
/*!*************************************************************!*\
  !*** ./source/plugins/templateInputs/inputs/Color/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./Color.jsx */ \"./source/plugins/templateInputs/inputs/Color/Color.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/templateInputs/inputs/Color/index.js?");

/***/ }),

/***/ "./source/plugins/templateInputs/inputs/Image/Image.jsx":
/*!**************************************************************!*\
  !*** ./source/plugins/templateInputs/inputs/Image/Image.jsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nmodule.exports = {\n    name: \"Image\",\n    description: '',\n    propTypes: {\n        // name: 'string',\n        // title: { type: 'string' },\n        // isOpen: false,\n        // onChange(){}\n    },\n    dependencies: ['templateInputs.String'],\n    get: function get(String) {\n\n        var core = this;\n\n        var _core$imports = core.imports,\n            React = _core$imports.React,\n            PropTypes = _core$imports.PropTypes;\n\n\n        return {\n            propsTypes: {\n                // title: PropTypes.string\n            },\n            getDefaultProps: function getDefaultProps() {\n                return {};\n            },\n            getInitialState: function getInitialState() {\n\n                return {};\n            },\n            componentDidMount: function componentDidMount() {},\n            componentWillUnmount: function componentWillUnmount() {},\n            openGallery: function openGallery() {\n                // core.plugins.popovers.openLightbox({\n                //     title: {\n                //         title: 'Gallery',\n                //         hasInfo: false,\n                //     },\n                //     children: <Gallery/>,\n                // });\n            },\n            render: function render() {\n                var _this = this;\n\n                var _props = this.props,\n                    value = _props.value,\n                    id = _props.id,\n                    label = _props.label,\n                    onChange = _props.onChange,\n                    style = _props.style,\n                    labelStyle = _props.labelStyle;\n\n\n                return React.createElement(\n                    'div',\n                    { style: _extends({ position: 'relative', display: 'flex', alignItems: 'flex-end' }, style) },\n                    React.createElement(String, {\n                        value: value,\n                        label: label,\n                        onChange: onChange,\n                        style: { flex: 1, marginRight: '3px' },\n                        labelStyle: labelStyle\n                    }),\n                    React.createElement(\n                        'div',\n                        {\n                            ref: 'picker',\n                            style: {\n                                width: 26,\n                                height: 26,\n                                cursor: 'pointer',\n                                position: 'relative',\n                                border: '1px solid #bbb',\n                                borderRadius: '3px',\n                                backgroundColor: '#888'\n                            },\n                            onClick: function onClick(e) {\n                                return _this.openGallery();\n                            } },\n                        React.createElement(\n                            'div',\n                            {\n                                style: {\n                                    position: 'absolute',\n                                    left: 3,\n                                    top: 3,\n                                    background: value,\n                                    width: 18,\n                                    height: 18,\n                                    display: 'flex',\n                                    justifyContent: 'center',\n                                    alignItems: 'center'\n                                }\n                            },\n                            React.createElement('i', { className: 'far fa-image' })\n                        )\n                    )\n                );\n            }\n        };\n    }\n};\n\n//# sourceURL=webpack:///./source/plugins/templateInputs/inputs/Image/Image.jsx?");

/***/ }),

/***/ "./source/plugins/templateInputs/inputs/Image/index.js":
/*!*************************************************************!*\
  !*** ./source/plugins/templateInputs/inputs/Image/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./Image.jsx */ \"./source/plugins/templateInputs/inputs/Image/Image.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/templateInputs/inputs/Image/index.js?");

/***/ }),

/***/ "./source/plugins/templateInputs/inputs/Number/Number.js":
/*!***************************************************************!*\
  !*** ./source/plugins/templateInputs/inputs/Number/Number.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = {\n    name: \"Number\",\n    description: '',\n    propTypes: [{\n        key: 'value',\n        type: 'number',\n        input: 'String',\n        value: ''\n    }, {\n        key: 'onChange',\n        type: 'function',\n        input: 'Function',\n        value: '(value) => {  }',\n        arguments: ['value']\n    }],\n    dependencies: ['templateInputs.Label'],\n    get: function get(Label) {\n\n        var core = this;\n\n        var _core$imports = core.imports,\n            React = _core$imports.React,\n            PropTypes = _core$imports.PropTypes;\n\n\n        return {\n            propsTypes: {\n                value: _propTypes2.default.string,\n                onChange: _propTypes2.default.function,\n                description: _propTypes2.default.string\n            },\n            getDefaultProps: function getDefaultProps() {\n                return {\n                    value: '',\n                    onChange: function onChange() {}\n                };\n            },\n            getInitialState: function getInitialState() {\n\n                return {};\n            },\n            componentDidMount: function componentDidMount() {},\n            componentWillUnmount: function componentWillUnmount() {},\n            render: function render() {\n                var _this = this;\n\n                var _props = this.props,\n                    value = _props.value,\n                    _onChange = _props.onChange,\n                    description = _props.description,\n                    required = _props.required,\n                    label = _props.label,\n                    id = _props.id,\n                    style = _props.style,\n                    labelStyle = _props.labelStyle;\n\n                var inputStyle = _extends({\n                    width: '100%',\n                    borderRadius: 3,\n                    border: '1px solid #ddd',\n                    padding: '6px 4px',\n                    height: '26px'\n                }, this.props.inputStyle);\n                if (required) {\n                    inputStyle.borderLeft = '2px solid red';\n                }\n                return React.createElement(\n                    'div',\n                    { style: style },\n                    label ? React.createElement(\n                        Label,\n                        { style: labelStyle },\n                        label\n                    ) : null,\n                    React.createElement('input', {\n                        type: 'number',\n                        value: value,\n                        onChange: function onChange(e) {\n                            return _onChange(e.target.value);\n                        },\n                        ref: function ref(el) {\n                            return _this.input = el;\n                        },\n                        onFocus: function onFocus(e) {\n                            return _this.input.style.outline = '1px solid #888';\n                        },\n                        onBlur: function onBlur(e) {\n                            return _this.input.style.outline = '0';\n                        },\n                        style: inputStyle })\n                );\n            }\n        };\n    }\n};\n\n//# sourceURL=webpack:///./source/plugins/templateInputs/inputs/Number/Number.js?");

/***/ }),

/***/ "./source/plugins/templateInputs/inputs/Number/index.js":
/*!**************************************************************!*\
  !*** ./source/plugins/templateInputs/inputs/Number/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./Number.js */ \"./source/plugins/templateInputs/inputs/Number/Number.js\");\n\n//# sourceURL=webpack:///./source/plugins/templateInputs/inputs/Number/index.js?");

/***/ }),

/***/ "./source/plugins/templateInputs/inputs/Object/Object.jsx":
/*!****************************************************************!*\
  !*** ./source/plugins/templateInputs/inputs/Object/Object.jsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n    name: \"Object\",\n    description: '',\n    propTypes: {\n        // name: 'string',\n        // title: { type: 'string' },\n        // isOpen: false,\n        // onChange(){}\n    },\n    dependencies: ['templateInputs.Drawer'],\n    get: function get(Drawer) {\n\n        var core = this;\n\n        var _core$imports = core.imports,\n            React = _core$imports.React,\n            PropTypes = _core$imports.PropTypes;\n\n\n        return {\n            propsTypes: {\n                // title: PropTypes.string\n            },\n            getDefaultProps: function getDefaultProps() {\n                return {};\n            },\n            getInitialState: function getInitialState() {\n\n                return {};\n            },\n            componentDidMount: function componentDidMount() {},\n            componentWillUnmount: function componentWillUnmount() {},\n            renderItem: function renderItem(item) {\n                var _this = this;\n\n                var _props = this.props,\n                    onToggle = _props.onToggle,\n                    isOpen = _props.isOpen;\n\n\n                return React.createElement(\n                    Drawer,\n                    {\n                        id: element.id,\n                        title: 'Footer',\n                        isOpen: isOpen,\n                        onToggle: onToggle },\n                    React.createElement(\n                        'div',\n                        null,\n                        React.createElement('textarea', {\n                            style: {\n                                padding: '3px 6px',\n                                resize: 'vertical',\n                                width: '100%',\n                                minHeight: 300\n                            },\n                            value: html,\n                            onChange: function onChange(e) {\n                                return setProp(element.id, 'html', e.target.value);\n                            },\n                            ref: function ref(el) {\n                                return _this.input = el;\n                            },\n                            onFocus: function onFocus(e) {\n                                return _this.input.style.outline = '1px solid #888';\n                            },\n                            onBlur: function onBlur(e) {\n                                return _this.input.style.outline = '0';\n                            } })\n                    )\n                );\n            },\n            render: function render() {\n                var value = this.props.value;\n\n\n                return React.createElement('div', null);\n            }\n        };\n    }\n};\n\n//# sourceURL=webpack:///./source/plugins/templateInputs/inputs/Object/Object.jsx?");

/***/ }),

/***/ "./source/plugins/templateInputs/inputs/Object/index.js":
/*!**************************************************************!*\
  !*** ./source/plugins/templateInputs/inputs/Object/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./Object.jsx */ \"./source/plugins/templateInputs/inputs/Object/Object.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/templateInputs/inputs/Object/index.js?");

/***/ }),

/***/ "./source/plugins/templateInputs/inputs/String/String.js":
/*!***************************************************************!*\
  !*** ./source/plugins/templateInputs/inputs/String/String.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = {\n    name: \"String\",\n    description: '',\n    propTypes: [{\n        key: 'value',\n        type: 'string',\n        input: 'String',\n        value: ''\n    }, {\n        key: 'onChange',\n        type: 'function',\n        input: 'Function',\n        value: '(value) => {  }',\n        arguments: ['value']\n    }],\n    dependencies: ['templateInputs.Label'],\n    get: function get(Label) {\n\n        var core = this;\n\n        var _core$imports = core.imports,\n            React = _core$imports.React,\n            PropTypes = _core$imports.PropTypes;\n\n\n        return {\n            propsTypes: {\n                value: _propTypes2.default.string,\n                onChange: _propTypes2.default.function,\n                description: _propTypes2.default.string\n            },\n            getDefaultProps: function getDefaultProps() {\n                return {\n                    value: '',\n                    onChange: function onChange() {}\n                };\n            },\n            getInitialState: function getInitialState() {\n\n                return {};\n            },\n            componentDidMount: function componentDidMount() {},\n            componentWillUnmount: function componentWillUnmount() {},\n            render: function render() {\n                var _this = this;\n\n                var _props = this.props,\n                    value = _props.value,\n                    _onChange = _props.onChange,\n                    description = _props.description,\n                    required = _props.required,\n                    label = _props.label,\n                    id = _props.id,\n                    style = _props.style,\n                    labelStyle = _props.labelStyle;\n\n                console.log('style', style);\n                var inputStyle = _extends({\n                    width: '100%',\n                    borderRadius: 3,\n                    border: '1px solid #ddd',\n                    padding: '6px 4px',\n                    height: '26px'\n                }, this.props.inputStyle);\n                if (required) {\n                    inputStyle.borderLeft = '2px solid red';\n                }\n                return React.createElement(\n                    'div',\n                    { style: style },\n                    label ? React.createElement(\n                        Label,\n                        { style: _extends({ minWidth: 60 }, labelStyle) },\n                        label\n                    ) : null,\n                    React.createElement('input', {\n                        type: 'text',\n                        value: value,\n                        onChange: function onChange(e) {\n                            return _onChange(e.target.value);\n                        },\n                        ref: function ref(el) {\n                            return _this.input = el;\n                        },\n                        onFocus: function onFocus(e) {\n                            return _this.input.style.outline = '1px solid #888';\n                        },\n                        onBlur: function onBlur(e) {\n                            return _this.input.style.outline = '0';\n                        },\n                        style: inputStyle })\n                );\n            }\n        };\n    }\n};\n\n//# sourceURL=webpack:///./source/plugins/templateInputs/inputs/String/String.js?");

/***/ }),

/***/ "./source/plugins/templateInputs/inputs/String/index.js":
/*!**************************************************************!*\
  !*** ./source/plugins/templateInputs/inputs/String/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./String.js */ \"./source/plugins/templateInputs/inputs/String/String.js\");\n\n//# sourceURL=webpack:///./source/plugins/templateInputs/inputs/String/index.js?");

/***/ }),

/***/ "./source/plugins/templateInputs/inputs/Text/Text.jsx":
/*!************************************************************!*\
  !*** ./source/plugins/templateInputs/inputs/Text/Text.jsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nmodule.exports = {\n    name: \"Text\",\n    description: '',\n    propTypes: {\n        // name: 'string',\n        // title: { type: 'string' },\n        // isOpen: false,\n        // onChange(){}\n    },\n    dependencies: ['templateInputs.Label'],\n    get: function get(Label) {\n\n        var core = this;\n\n        var _core$imports = core.imports,\n            React = _core$imports.React,\n            PropTypes = _core$imports.PropTypes;\n\n\n        return {\n            propsTypes: {\n                // title: PropTypes.string\n            },\n            getDefaultProps: function getDefaultProps() {\n                return {};\n            },\n            getInitialState: function getInitialState() {\n\n                return {};\n            },\n            componentDidMount: function componentDidMount() {},\n            componentWillUnmount: function componentWillUnmount() {},\n            render: function render() {\n                var _this = this;\n\n                var _props = this.props,\n                    value = _props.value,\n                    _onChange = _props.onChange,\n                    label = _props.label,\n                    style = _props.style,\n                    labelStyle = _props.labelStyle;\n\n\n                var inputStyle = _extends(_defineProperty({\n                    padding: '3px 6px',\n                    resize: 'vertical',\n                    width: '100%',\n                    minHeight: 100,\n                    borderRadius: 3,\n                    border: '1px solid #ddd'\n                }, 'padding', '6px 4px'), this.props.inputStyle);\n                return React.createElement(\n                    'div',\n                    { style: style },\n                    label ? React.createElement(\n                        Label,\n                        { style: labelStyle },\n                        label\n                    ) : null,\n                    React.createElement('textarea', {\n                        style: inputStyle,\n                        value: value,\n                        onChange: function onChange(e) {\n                            return _onChange(e.target.value);\n                        },\n                        ref: function ref(el) {\n                            return _this.input = el;\n                        },\n                        onFocus: function onFocus(e) {\n                            return _this.input.style.outline = '1px solid #888';\n                        },\n                        onBlur: function onBlur(e) {\n                            return _this.input.style.outline = '0';\n                        } })\n                );\n            }\n        };\n    }\n};\n\n//# sourceURL=webpack:///./source/plugins/templateInputs/inputs/Text/Text.jsx?");

/***/ }),

/***/ "./source/plugins/templateInputs/inputs/Text/index.js":
/*!************************************************************!*\
  !*** ./source/plugins/templateInputs/inputs/Text/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./Text.jsx */ \"./source/plugins/templateInputs/inputs/Text/Text.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/templateInputs/inputs/Text/index.js?");

/***/ }),

/***/ "./source/plugins/templateInputs/templateInputs.js":
/*!*********************************************************!*\
  !*** ./source/plugins/templateInputs/templateInputs.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n    name: 'templateInputs',\n    components: [__webpack_require__(/*! ./components/ColorPicker */ \"./source/plugins/templateInputs/components/ColorPicker/index.js\"), __webpack_require__(/*! ./components/Drawer */ \"./source/plugins/templateInputs/components/Drawer/index.js\"), __webpack_require__(/*! ./components/Label */ \"./source/plugins/templateInputs/components/Label/index.js\"), __webpack_require__(/*! ./components/Button */ \"./source/plugins/templateInputs/components/Button/index.js\"), __webpack_require__(/*! ./inputs/Boolean */ \"./source/plugins/templateInputs/inputs/Boolean/index.js\"), __webpack_require__(/*! ./inputs/Color */ \"./source/plugins/templateInputs/inputs/Color/index.js\"), __webpack_require__(/*! ./inputs/Image */ \"./source/plugins/templateInputs/inputs/Image/index.js\"), __webpack_require__(/*! ./inputs/Number */ \"./source/plugins/templateInputs/inputs/Number/index.js\"), __webpack_require__(/*! ./inputs/Object */ \"./source/plugins/templateInputs/inputs/Object/index.js\"), __webpack_require__(/*! ./inputs/String */ \"./source/plugins/templateInputs/inputs/String/index.js\"), __webpack_require__(/*! ./inputs/Text */ \"./source/plugins/templateInputs/inputs/Text/index.js\")]\n};\n\n//# sourceURL=webpack:///./source/plugins/templateInputs/templateInputs.js?");

/***/ }),

/***/ "dll-reference monaco":
/*!*************************!*\
  !*** external "monaco" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = monaco;\n\n//# sourceURL=webpack:///external_%22monaco%22?");

/***/ }),

/***/ "dll-reference vendor":
/*!*************************!*\
  !*** external "vendor" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = vendor;\n\n//# sourceURL=webpack:///external_%22vendor%22?");

/***/ })

/******/ });