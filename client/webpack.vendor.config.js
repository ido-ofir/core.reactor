const path = require('path');
const webpack = require('webpack');

const outputPath = path.join(__dirname, 'output');
const buildPath = path.join(outputPath, 'build');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

let exclude = ['react-monaco-editor']; //['react-monaco-editor']; //['monaco-editor'];
const dependencies = Object.keys(
    require('./package.json').dependencies
).filter(function(d){
    return exclude.indexOf(d) < 0;
});

module.exports = {
    context: process.cwd(),
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.less', '.css', '.scss'],
        modules: [__dirname, 'node_modules'],
        // exclude: ["font-awesome"]
    },

    // optimization: {
    //     minimizer: [
    //       new UglifyJsPlugin({
    //         cache: true,
    //         sourceMap: false,
    //         parallel: true,
    //       }),
    //     ],
    //   },  

    entry: {
        vendor: dependencies
    },
    output: {
        filename: '[name].dll.js',
        path: path.resolve(__dirname, './output/build'),
        library: '[name]',
        publicPath: 'build/'
    },
    plugins: [
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