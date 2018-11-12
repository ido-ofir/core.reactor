(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([[10],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/fsharp/fsharp.js":
/*!****************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/fsharp/fsharp.js ***!
  \****************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    comments: {\n        lineComment: '//',\n        blockComment: ['(*', '*)'],\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' }\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' }\n    ],\n    folding: {\n        markers: {\n            start: new RegExp(\"^\\\\s*//\\\\s*#region\\\\b|^\\\\s*\\\\(\\\\*\\\\s*#region(.*)\\\\*\\\\)\"),\n            end: new RegExp(\"^\\\\s*//\\\\s*#endregion\\\\b|^\\\\s*\\\\(\\\\*\\\\s*#endregion\\\\s*\\\\*\\\\)\")\n        }\n    }\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.fs',\n    keywords: [\n        'abstract', 'and', 'atomic', 'as',\n        'assert', 'asr', 'base', 'begin',\n        'break', 'checked', 'component',\n        'const', 'constraint', 'constructor',\n        'continue', 'class', 'default',\n        'delegate', 'do', 'done', 'downcast',\n        'downto', 'elif', 'else', 'end',\n        'exception', 'eager', 'event', 'external',\n        'extern', 'false', 'finally', 'for',\n        'fun', 'function', 'fixed', 'functor',\n        'global', 'if', 'in', 'include', 'inherit',\n        'inline', 'interface', 'internal', 'land',\n        'lor', 'lsl', 'lsr', 'lxor', 'lazy', 'let',\n        'match', 'member', 'mod', 'module', 'mutable',\n        'namespace', 'method', 'mixin', 'new', 'not',\n        'null', 'of', 'open', 'or', 'object',\n        'override', 'private', 'parallel', 'process',\n        'protected', 'pure', 'public', 'rec', 'return',\n        'static', 'sealed', 'struct', 'sig', 'then',\n        'to', 'true', 'tailcall', 'trait',\n        'try', 'type', 'upcast', 'use',\n        'val', 'void', 'virtual', 'volatile',\n        'when', 'while', 'with', 'yield'\n    ],\n    // we include these common regular expressions\n    symbols: /[=><!~?:&|+\\-*\\^%;\\.,\\/]+/,\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n    integersuffix: /[uU]?[yslnLI]?/,\n    floatsuffix: /[fFmM]?/,\n    // The main tokenizer for our languages\n    tokenizer: {\n        root: [\n            // identifiers and keywords\n            [/[a-zA-Z_]\\w*/, {\n                    cases: {\n                        '@keywords': { token: 'keyword.$0' },\n                        '@default': 'identifier'\n                    }\n                }],\n            // whitespace\n            { include: '@whitespace' },\n            // [< attributes >].\n            [/\\[<.*>\\]/, 'annotation'],\n            // Preprocessor directive\n            [/^#(if|else|endif)/, 'keyword'],\n            // delimiters and operators\n            [/[{}()\\[\\]]/, '@brackets'],\n            [/[<>](?!@symbols)/, '@brackets'],\n            [/@symbols/, 'delimiter'],\n            // numbers\n            [/\\d*\\d+[eE]([\\-+]?\\d+)?(@floatsuffix)/, 'number.float'],\n            [/\\d*\\.\\d+([eE][\\-+]?\\d+)?(@floatsuffix)/, 'number.float'],\n            [/0x[0-9a-fA-F]+LF/, 'number.float'],\n            [/0x[0-9a-fA-F]+(@integersuffix)/, 'number.hex'],\n            [/0b[0-1]+(@integersuffix)/, 'number.bin'],\n            [/\\d+(@integersuffix)/, 'number'],\n            // delimiter: after number because of .\\d floats\n            [/[;,.]/, 'delimiter'],\n            // strings\n            [/\"([^\"\\\\]|\\\\.)*$/, 'string.invalid'],\n            [/\"\"\"/, 'string', '@string.\"\"\"'],\n            [/\"/, 'string', '@string.\"'],\n            // literal string\n            [/\\@\"/, { token: 'string.quote', next: '@litstring' }],\n            // characters\n            [/'[^\\\\']'B?/, 'string'],\n            [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],\n            [/'/, 'string.invalid']\n        ],\n        whitespace: [\n            [/[ \\t\\r\\n]+/, ''],\n            [/\\(\\*(?!\\))/, 'comment', '@comment'],\n            [/\\/\\/.*$/, 'comment'],\n        ],\n        comment: [\n            [/[^\\*]+/, 'comment'],\n            [/\\*\\)/, 'comment', '@pop'],\n            [/\\*/, 'comment']\n        ],\n        string: [\n            [/[^\\\\\"]+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/(\"\"\"|\"B?)/, {\n                    cases: {\n                        '$#==$S2': { token: 'string', next: '@pop' },\n                        '@default': 'string'\n                    }\n                }]\n        ],\n        litstring: [\n            [/[^\"]+/, 'string'],\n            [/\"\"/, 'string.escape'],\n            [/\"/, { token: 'string.quote', next: '@pop' }]\n        ],\n    },\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/monaco-editor/esm/vs/basic-languages/fsharp/fsharp.js?");

/***/ })

}]);