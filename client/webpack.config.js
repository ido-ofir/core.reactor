

var webpack = require('webpack');
var path = require('path');
var publicPath = '/output/';
var outputPath = path.join(__dirname, 'output');
var buildPath = path.join(outputPath, 'build');
// const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

var entry = path.resolve(__dirname, 'source/App.jsx');

var config = {

    entry : entry,

    devtool : 'eval',

    output: {
        path : buildPath,
        filename : 'bundle.js',
        publicPath: 'build/'
    },

    plugins : [
        // new MonacoWebpackPlugin()
    //     new webpack.optimize.CommonsChunkPlugin({
    //         name: 'vendor',
    //         filename: 'vendor.bundle.js',
    //         minChunks(module, count) {    // include all modules not in 'appPath' folder in the vendor bundle
    //         return (module.resource && (module.resource.indexOf(path.join(__dirname, 'source')) === -1));
    //     }
    // }),
    // new webpack.DllReferencePlugin({
    //     context: __dirname,
    //     manifest: require('./output/build/react.json')
    // }),
    new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: require('./output/build/monaco.json')
    }),
    new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: require('./output/build/vendor.json')
    }),
    // new webpack.DllReferencePlugin({
    //     context: __dirname,
    //     manifest: require('./output/build/monaco.json')
    // }),
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoErrorsPlugin(),
        // new webpack.ProvidePlugin({   // the 'core' module is global
        //     core: corePath
        // })
    ],
    module : {
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
            {
                test: /\.module.jsx?$/,  // just module.js
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:
                {
                  presets:['client-core','env', 'stage-0']
                }
            },
            { test: /.png$/, loader: "url?mimetype=image/png" },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    },
    watchOptions: {
        ignored: /node_modules/
    },
    // resolve: {
    //     // you can now require('file') instead of require('file.js')
    //     extensions: ['', '.js', '.jsx']
    // }
};


module.exports = config;
