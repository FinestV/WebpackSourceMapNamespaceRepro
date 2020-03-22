const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        foo: './foo.js',
        bar: './bar.js',
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        library: '[name]'
    }
};