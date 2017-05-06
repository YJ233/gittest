var path = require('path')
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, './bin'),
        filename: 'index.js'
    }
}