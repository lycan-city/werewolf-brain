const path = require('path');

module.exports = {
    context: __dirname,
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'werewolf-brain',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            { test: /\.json$/, use: 'json-loader' },
            {
                test: /\.js$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                use: 'babel-loader'
            }
        ]
    }
};
