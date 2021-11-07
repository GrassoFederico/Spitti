const path = require('path')

module.exports = {
    entry: {
        app: './src/index.ts',
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }, ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'spitti.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};