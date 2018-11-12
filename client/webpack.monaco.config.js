const path = require('path');
const webpack = require('webpack');

const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
    context: process.cwd(),

    entry: {
        monaco: ['react-monaco-editor']
    },
    output: {
        filename: '[name].dll.js',
        path: path.resolve(__dirname, './output/build'),
        library: '[name]',
        publicPath: 'build/'
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./output/build/vendor.json')
        }),
        new MonacoWebpackPlugin({
            // languages: ['javascript', 'css', 'json'],
            // features: [
            //     'bracketMatching',
            //     'caretOperations',
            //     'clipboard',
            //     'codeAction',
            //     'colorDetector',
            //     'comment',
            //     'contextmenu',
            //     'coreCommands',
            //     'cursorUndo',
            //     'dnd',
            //     'find',
            //     'folding',
            //     'fontZoom',
            //     'format',
            //     'gotoError',
            //     'gotoLine',
            //     'hover',
            //     'inPlaceReplace',
            //     'linesOperations',
            //     'links',
            //     'multicursor',
            //     'parameterHints',
            //     'quickOutline',
            //     'referenceSearch',
            //     'rename',
            //     'smartSelect',
            //     'snippets',
            //     'suggest',
            //     'toggleHighContrast',
            //     'toggleTabFocusMode',
            //     'transpose',
            //     'wordHighlighter',
            //     'wordOperations',
            //     'wordPartOperations'
            // ]
        }),
        new webpack.DllPlugin({
            name: '[name]',
            path: path.resolve(__dirname, './output/build/[name].json')
        })
    ],
    module: {
        rules : [
            {
                test : /\.css$/,
                loader : 'style-loader!css-loader'
            },
            {
                test : /\.scss$/,
                loader : 'style-loader!css-loader!sass-loader'
            },
            {
                test: /^(?:(?!module\.jsx$).)*\.jsx?$/,  // .jsx but not .module.jsx
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:
                {
                  presets:['react','env', 'stage-0']
                }
            },
            { test: /.png$/, loader: "url?mimetype=image/png" },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
	},
    node: {
        fs: "empty",
        tls: "empty",
    }
};