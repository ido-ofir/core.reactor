(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([[16],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/javascript/javascript.js":
/*!************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/javascript/javascript.js ***!
  \************************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/* harmony import */ var _typescript_typescript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../typescript/typescript.js */ \"./node_modules/monaco-editor/esm/vs/basic-languages/typescript/typescript.js\");\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n\n// Allow for running under nodejs/requirejs in tests\nvar _monaco = (typeof monaco === 'undefined' ? self.monaco : monaco);\nvar conf = _typescript_typescript_js__WEBPACK_IMPORTED_MODULE_0__[\"conf\"];\nvar language = {\n    // Set defaultToken to invalid to see what you do not tokenize yet\n    defaultToken: 'invalid',\n    tokenPostfix: '.js',\n    keywords: [\n        'break', 'case', 'catch', 'class', 'continue', 'const',\n        'constructor', 'debugger', 'default', 'delete', 'do', 'else',\n        'export', 'extends', 'false', 'finally', 'for', 'from', 'function',\n        'get', 'if', 'import', 'in', 'instanceof', 'let', 'new', 'null',\n        'return', 'set', 'super', 'switch', 'symbol', 'this', 'throw', 'true',\n        'try', 'typeof', 'undefined', 'var', 'void', 'while', 'with', 'yield',\n        'async', 'await', 'of'\n    ],\n    typeKeywords: [],\n    operators: _typescript_typescript_js__WEBPACK_IMPORTED_MODULE_0__[\"language\"].operators,\n    symbols: _typescript_typescript_js__WEBPACK_IMPORTED_MODULE_0__[\"language\"].symbols,\n    escapes: _typescript_typescript_js__WEBPACK_IMPORTED_MODULE_0__[\"language\"].escapes,\n    digits: _typescript_typescript_js__WEBPACK_IMPORTED_MODULE_0__[\"language\"].digits,\n    octaldigits: _typescript_typescript_js__WEBPACK_IMPORTED_MODULE_0__[\"language\"].octaldigits,\n    binarydigits: _typescript_typescript_js__WEBPACK_IMPORTED_MODULE_0__[\"language\"].binarydigits,\n    hexdigits: _typescript_typescript_js__WEBPACK_IMPORTED_MODULE_0__[\"language\"].hexdigits,\n    regexpctl: _typescript_typescript_js__WEBPACK_IMPORTED_MODULE_0__[\"language\"].regexpctl,\n    regexpesc: _typescript_typescript_js__WEBPACK_IMPORTED_MODULE_0__[\"language\"].regexpesc,\n    tokenizer: _typescript_typescript_js__WEBPACK_IMPORTED_MODULE_0__[\"language\"].tokenizer,\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/monaco-editor/esm/vs/basic-languages/javascript/javascript.js?");

/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/typescript/typescript.js":
/*!************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/typescript/typescript.js ***!
  \************************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n// Allow for running under nodejs/requirejs in tests\nvar _monaco = (typeof monaco === 'undefined' ? self.monaco : monaco);\nvar conf = {\n    wordPattern: /(-?\\d*\\.\\d\\w*)|([^\\`\\~\\!\\@\\#\\%\\^\\&\\*\\(\\)\\-\\=\\+\\[\\{\\]\\}\\\\\\|\\;\\:\\'\\\"\\,\\.\\<\\>\\/\\?\\s]+)/g,\n    comments: {\n        lineComment: '//',\n        blockComment: ['/*', '*/']\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    onEnterRules: [\n        {\n            // e.g. /** | */\n            beforeText: /^\\s*\\/\\*\\*(?!\\/)([^\\*]|\\*(?!\\/))*$/,\n            afterText: /^\\s*\\*\\/$/,\n            action: { indentAction: _monaco.languages.IndentAction.IndentOutdent, appendText: ' * ' }\n        },\n        {\n            // e.g. /** ...|\n            beforeText: /^\\s*\\/\\*\\*(?!\\/)([^\\*]|\\*(?!\\/))*$/,\n            action: { indentAction: _monaco.languages.IndentAction.None, appendText: ' * ' }\n        },\n        {\n            // e.g.  * ...|\n            beforeText: /^(\\t|(\\ \\ ))*\\ \\*(\\ ([^\\*]|\\*(?!\\/))*)?$/,\n            action: { indentAction: _monaco.languages.IndentAction.None, appendText: '* ' }\n        },\n        {\n            // e.g.  */|\n            beforeText: /^(\\t|(\\ \\ ))*\\ \\*\\/\\s*$/,\n            action: { indentAction: _monaco.languages.IndentAction.None, removeText: 1 }\n        }\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"', notIn: ['string'] },\n        { open: '\\'', close: '\\'', notIn: ['string', 'comment'] },\n        { open: '`', close: '`', notIn: ['string', 'comment'] },\n        { open: \"/**\", close: \" */\", notIn: [\"string\"] }\n    ],\n    folding: {\n        markers: {\n            start: new RegExp(\"^\\\\s*//\\\\s*#?region\\\\b\"),\n            end: new RegExp(\"^\\\\s*//\\\\s*#?endregion\\\\b\")\n        }\n    }\n};\nvar language = {\n    // Set defaultToken to invalid to see what you do not tokenize yet\n    defaultToken: 'invalid',\n    tokenPostfix: '.ts',\n    keywords: [\n        'abstract', 'as', 'break', 'case', 'catch', 'class', 'continue', 'const',\n        'constructor', 'debugger', 'declare', 'default', 'delete', 'do', 'else',\n        'enum', 'export', 'extends', 'false', 'finally', 'for', 'from', 'function',\n        'get', 'if', 'implements', 'import', 'in', 'infer', 'instanceof', 'interface',\n        'is', 'keyof', 'let', 'module', 'namespace', 'never', 'new', 'null', 'package',\n        'private', 'protected', 'public', 'readonly', 'require', 'global', 'return',\n        'set', 'static', 'super', 'switch', 'symbol', 'this', 'throw', 'true', 'try',\n        'type', 'typeof', 'unique', 'var', 'void', 'while', 'with', 'yield', 'async',\n        'await', 'of'\n    ],\n    typeKeywords: [\n        'any', 'boolean', 'number', 'object', 'string', 'undefined'\n    ],\n    operators: [\n        '<=', '>=', '==', '!=', '===', '!==', '=>', '+', '-', '**',\n        '*', '/', '%', '++', '--', '<<', '</', '>>', '>>>', '&',\n        '|', '^', '!', '~', '&&', '||', '?', ':', '=', '+=', '-=',\n        '*=', '**=', '/=', '%=', '<<=', '>>=', '>>>=', '&=', '|=',\n        '^=', '@',\n    ],\n    // we include these common regular expressions\n    symbols: /[=><!~?:&|+\\-*\\/\\^%]+/,\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n    digits: /\\d+(_+\\d+)*/,\n    octaldigits: /[0-7]+(_+[0-7]+)*/,\n    binarydigits: /[0-1]+(_+[0-1]+)*/,\n    hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,\n    regexpctl: /[(){}\\[\\]\\$\\^|\\-*+?\\.]/,\n    regexpesc: /\\\\(?:[bBdDfnrstvwWn0\\\\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})/,\n    // The main tokenizer for our languages\n    tokenizer: {\n        root: [\n            [/[{}]/, 'delimiter.bracket'],\n            { include: 'common' }\n        ],\n        common: [\n            // identifiers and keywords\n            [/[a-z_$][\\w$]*/, {\n                    cases: {\n                        '@typeKeywords': 'keyword',\n                        '@keywords': 'keyword',\n                        '@default': 'identifier'\n                    }\n                }],\n            [/[A-Z][\\w\\$]*/, 'type.identifier'],\n            // [/[A-Z][\\w\\$]*/, 'identifier'],\n            // whitespace\n            { include: '@whitespace' },\n            // regular expression: ensure it is terminated before beginning (otherwise it is an opeator)\n            [/\\/(?=([^\\\\\\/]|\\\\.)+\\/([gimuy]*)(\\s*)(\\.|;|\\/|,|\\)|\\]|\\}|$))/, { token: 'regexp', bracket: '@open', next: '@regexp' }],\n            // delimiters and operators\n            [/[()\\[\\]]/, '@brackets'],\n            [/[<>](?!@symbols)/, '@brackets'],\n            [/@symbols/, {\n                    cases: {\n                        '@operators': 'delimiter',\n                        '@default': ''\n                    }\n                }],\n            // numbers\n            [/(@digits)[eE]([\\-+]?(@digits))?/, 'number.float'],\n            [/(@digits)\\.(@digits)([eE][\\-+]?(@digits))?/, 'number.float'],\n            [/0[xX](@hexdigits)/, 'number.hex'],\n            [/0(@octaldigits)/, 'number.octal'],\n            [/0[bB](@binarydigits)/, 'number.binary'],\n            [/(@digits)/, 'number'],\n            // delimiter: after number because of .\\d floats\n            [/[;,.]/, 'delimiter'],\n            // strings\n            [/\"([^\"\\\\]|\\\\.)*$/, 'string.invalid'],\n            [/'([^'\\\\]|\\\\.)*$/, 'string.invalid'],\n            [/\"/, 'string', '@string_double'],\n            [/'/, 'string', '@string_single'],\n            [/`/, 'string', '@string_backtick'],\n        ],\n        whitespace: [\n            [/[ \\t\\r\\n]+/, ''],\n            [/\\/\\*\\*(?!\\/)/, 'comment.doc', '@jsdoc'],\n            [/\\/\\*/, 'comment', '@comment'],\n            [/\\/\\/.*$/, 'comment'],\n        ],\n        comment: [\n            [/[^\\/*]+/, 'comment'],\n            [/\\*\\//, 'comment', '@pop'],\n            [/[\\/*]/, 'comment']\n        ],\n        jsdoc: [\n            [/[^\\/*]+/, 'comment.doc'],\n            [/\\*\\//, 'comment.doc', '@pop'],\n            [/[\\/*]/, 'comment.doc']\n        ],\n        // We match regular expression quite precisely\n        regexp: [\n            [/(\\{)(\\d+(?:,\\d*)?)(\\})/, ['regexp.escape.control', 'regexp.escape.control', 'regexp.escape.control']],\n            [/(\\[)(\\^?)(?=(?:[^\\]\\\\\\/]|\\\\.)+)/, ['regexp.escape.control', { token: 'regexp.escape.control', next: '@regexrange' }]],\n            [/(\\()(\\?:|\\?=|\\?!)/, ['regexp.escape.control', 'regexp.escape.control']],\n            [/[()]/, 'regexp.escape.control'],\n            [/@regexpctl/, 'regexp.escape.control'],\n            [/[^\\\\\\/]/, 'regexp'],\n            [/@regexpesc/, 'regexp.escape'],\n            [/\\\\\\./, 'regexp.invalid'],\n            ['/', { token: 'regexp', bracket: '@close' }, '@pop'],\n        ],\n        regexrange: [\n            [/-/, 'regexp.escape.control'],\n            [/\\^/, 'regexp.invalid'],\n            [/@regexpesc/, 'regexp.escape'],\n            [/[^\\]]/, 'regexp'],\n            [/\\]/, '@brackets.regexp.escape.control', '@pop'],\n        ],\n        string_double: [\n            [/[^\\\\\"]+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/\"/, 'string', '@pop']\n        ],\n        string_single: [\n            [/[^\\\\']+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/'/, 'string', '@pop']\n        ],\n        string_backtick: [\n            [/\\$\\{/, { token: 'delimiter.bracket', next: '@bracketCounting' }],\n            [/[^\\\\`$]+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/`/, 'string', '@pop']\n        ],\n        bracketCounting: [\n            [/\\{/, 'delimiter.bracket', '@bracketCounting'],\n            [/\\}/, 'delimiter.bracket', '@pop'],\n            { include: 'common' }\n        ],\n    },\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/monaco-editor/esm/vs/basic-languages/typescript/typescript.js?");

/***/ })

}]);