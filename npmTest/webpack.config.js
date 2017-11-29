module.exports = {
    entry: {
        app: './src/app'
    },
    output: {
        filename: './dist/bundle.js'
    },
    module: {
        rules: [
            { test: /\.scss/, use: ['style-loader','css-loader','sass-loader'] }
        ]
    },
    devtool: 'source-map'
};