module.exports = {
    plugins: [
        require('autoprefixer')({browsers:'ios >= 8'}),
        require('postcss-pxtorem')({rootValue: 100, propWhiteList: [],})
    ]
}