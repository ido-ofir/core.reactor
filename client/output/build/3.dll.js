(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([[3],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/bat/bat.js":
/*!**********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/bat/bat.js ***!
  \**********************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    comments: {\n        lineComment: 'REM'\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n    ],\n    surroundingPairs: [\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n    ],\n    folding: {\n        markers: {\n            start: new RegExp(\"^\\\\s*(::\\\\s*|REM\\\\s+)#region\"),\n            end: new RegExp(\"^\\\\s*(::\\\\s*|REM\\\\s+)#endregion\")\n        }\n    }\n};\nvar language = {\n    defaultToken: '',\n    ignoreCase: true,\n    tokenPostfix: '.bat',\n    brackets: [\n        { token: 'delimiter.bracket', open: '{', close: '}' },\n        { token: 'delimiter.parenthesis', open: '(', close: ')' },\n        { token: 'delimiter.square', open: '[', close: ']' }\n    ],\n    keywords: /call|defined|echo|errorlevel|exist|for|goto|if|pause|set|shift|start|title|not|pushd|popd/,\n    // we include these common regular expressions\n    symbols: /[=><!~?&|+\\-*\\/\\^;\\.,]+/,\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n    // The main tokenizer for our languages\n    tokenizer: {\n        root: [\n            [/^(\\s*)(rem(?:\\s.*|))$/, ['', 'comment']],\n            [/(\\@?)(@keywords)(?!\\w)/, [{ token: 'keyword' }, { token: 'keyword.$2' }]],\n            // whitespace\n            [/[ \\t\\r\\n]+/, ''],\n            // blocks\n            [/setlocal(?!\\w)/, 'keyword.tag-setlocal'],\n            [/endlocal(?!\\w)/, 'keyword.tag-setlocal'],\n            // words\n            [/[a-zA-Z_]\\w*/, ''],\n            // labels\n            [/:\\w*/, 'metatag'],\n            // variables\n            [/%[^%]+%/, 'variable'],\n            [/%%[\\w]+(?!\\w)/, 'variable'],\n            // punctuations\n            [/[{}()\\[\\]]/, '@brackets'],\n            [/@symbols/, 'delimiter'],\n            // numbers\n            [/\\d*\\.\\d+([eE][\\-+]?\\d+)?/, 'number.float'],\n            [/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/, 'number.hex'],\n            [/\\d+/, 'number'],\n            // punctuation: after number because of .\\d floats\n            [/[;,.]/, 'delimiter'],\n            // strings:\n            [/\"/, 'string', '@string.\"'],\n            [/'/, 'string', '@string.\\''],\n        ],\n        string: [\n            [/[^\\\\\"'%]+/, {\n                    cases: {\n                        '@eos': { token: 'string', next: '@popall' },\n                        '@default': 'string'\n                    }\n                }],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/%[\\w ]+%/, 'variable'],\n            [/%%[\\w]+(?!\\w)/, 'variable'],\n            [/[\"']/, {\n                    cases: {\n                        '$#==$S2': { token: 'string', next: '@pop' },\n                        '@default': 'string'\n                    }\n                }],\n            [/$/, 'string', '@popall']\n        ],\n    }\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/monaco-editor/esm/vs/basic-languages/bat/bat.js?");

/***/ })

}]);