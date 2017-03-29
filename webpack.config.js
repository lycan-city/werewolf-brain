module.exports = {
    context: __dirname,
    entry: './index.js',
    output: {
        path: 'dist',
        filename: 'index.js',
        library: 'werewolf-brain',
        libraryTarget: 'umd',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            { test: /\.json$/, loader: 'json' }
        ]
    }
};
