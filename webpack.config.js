const HtmlWebpackPlugins = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        hello: './src/components/Hello.tsx',
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugins({ template: '.src/index.html' }),
    ],
};