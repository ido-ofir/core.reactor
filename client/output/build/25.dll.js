(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([[25],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/r/r.js":
/*!******************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/r/r.js ***!
  \******************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    comments: {\n        lineComment: '#'\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n    ]\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.r',\n    roxygen: [\n        '@param',\n        '@return',\n        '@name',\n        '@rdname',\n        '@examples',\n        '@include',\n        '@docType',\n        '@S3method',\n        '@TODO',\n        '@aliases',\n        '@alias',\n        '@assignee',\n        '@author',\n        '@callGraphDepth',\n        '@callGraph',\n        '@callGraphPrimitives',\n        '@concept',\n        '@exportClass',\n        '@exportMethod',\n        '@exportPattern',\n        '@export',\n        '@formals',\n        '@format',\n        '@importClassesFrom',\n        '@importFrom',\n        '@importMethodsFrom',\n        '@import',\n        '@keywords',\n        '@method',\n        '@nord',\n        '@note',\n        '@references',\n        '@seealso',\n        '@setClass',\n        '@slot',\n        '@source',\n        '@title',\n        '@usage'\n    ],\n    constants: [\n        'NULL',\n        'FALSE',\n        'TRUE',\n        'NA',\n        'Inf',\n        'NaN ',\n        'NA_integer_',\n        'NA_real_',\n        'NA_complex_',\n        'NA_character_ ',\n        'T',\n        'F',\n        'LETTERS',\n        'letters',\n        'month.abb',\n        'month.name',\n        'pi',\n        'R.version.string'\n    ],\n    keywords: [\n        'break',\n        'next',\n        'return',\n        'if',\n        'else',\n        'for',\n        'in',\n        'repeat',\n        'while',\n        'array',\n        'category',\n        'character',\n        'complex',\n        'double',\n        'function',\n        'integer',\n        'list',\n        'logical',\n        'matrix',\n        'numeric',\n        'vector',\n        'data.frame',\n        'factor',\n        'library',\n        'require',\n        'attach',\n        'detach',\n        'source'\n    ],\n    special: [\n        '\\\\n',\n        '\\\\r',\n        '\\\\t',\n        '\\\\b',\n        '\\\\a',\n        '\\\\f',\n        '\\\\v',\n        '\\\\\\'',\n        '\\\\\"',\n        '\\\\\\\\'\n    ],\n    brackets: [\n        { open: '{', close: '}', token: 'delimiter.curly' },\n        { open: '[', close: ']', token: 'delimiter.bracket' },\n        { open: '(', close: ')', token: 'delimiter.parenthesis' }\n    ],\n    tokenizer: {\n        root: [\n            { include: '@numbers' },\n            { include: '@strings' },\n            [/[{}\\[\\]()]/, '@brackets'],\n            { include: '@operators' },\n            [/#'/, 'comment.doc', '@roxygen'],\n            [/(^#.*$)/, 'comment'],\n            [/\\s+/, 'white'],\n            [/[,:;]/, 'delimiter'],\n            [/@[a-zA-Z]\\w*/, 'tag'],\n            [/[a-zA-Z]\\w*/, {\n                    cases: {\n                        '@keywords': 'keyword',\n                        '@constants': 'constant',\n                        '@default': 'identifier'\n                    }\n                }]\n        ],\n        // Recognize Roxygen comments\n        roxygen: [\n            [/@\\w+/, {\n                    cases: {\n                        '@roxygen': 'tag',\n                        '@eos': { token: 'comment.doc', next: '@pop' },\n                        '@default': 'comment.doc'\n                    }\n                }],\n            [/\\s+/, {\n                    cases: {\n                        '@eos': { token: 'comment.doc', next: '@pop' },\n                        '@default': 'comment.doc'\n                    }\n                }],\n            [/.*/, { token: 'comment.doc', next: '@pop' }]\n        ],\n        // Recognize positives, negatives, decimals, imaginaries, and scientific notation\n        numbers: [\n            [/0[xX][0-9a-fA-F]+/, 'number.hex'],\n            [/-?(\\d*\\.)?\\d+([eE][+\\-]?\\d+)?/, 'number']\n        ],\n        // Recognize operators\n        operators: [\n            [/<{1,2}-/, 'operator'],\n            [/->{1,2}/, 'operator'],\n            [/%[^%\\s]+%/, 'operator'],\n            [/\\*\\*/, 'operator'],\n            [/%%/, 'operator'],\n            [/&&/, 'operator'],\n            [/\\|\\|/, 'operator'],\n            [/<</, 'operator'],\n            [/>>/, 'operator'],\n            [/[-+=&|!<>^~*/:$]/, 'operator']\n        ],\n        // Recognize strings, including those broken across lines\n        strings: [\n            [/'/, 'string.escape', '@stringBody'],\n            [/\"/, 'string.escape', '@dblStringBody']\n        ],\n        stringBody: [\n            [/\\\\./, {\n                    cases: {\n                        '@special': 'string',\n                        '@default': 'error-token'\n                    }\n                }],\n            [/'/, 'string.escape', '@popall'],\n            [/./, 'string'],\n        ],\n        dblStringBody: [\n            [/\\\\./, {\n                    cases: {\n                        '@special': 'string',\n                        '@default': 'error-token'\n                    }\n                }],\n            [/\"/, 'string.escape', '@popall'],\n            [/./, 'string'],\n        ]\n    }\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/monaco-editor/esm/vs/basic-languages/r/r.js?");

/***/ })

}]);