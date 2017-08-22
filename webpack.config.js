/**
 * Created by Administrator on 2017/8/13.
 */
const pxtorem = require('postcss-pxtorem');
const path = require('path');
const webpack = require('webpack');

const svgDirs = [
    require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
    path.resolve(__dirname, 'app/svgs'),  // 2. 自己私人的 svg 存放目录
];

module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/app/main.js", // 唯一入口文件      __dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
    output: {
        path: __dirname+ "/public", // 打包后的文件存放的地方
        filename: "bundle.js" // 打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        //port:"3000",    //省略的话，默认端口为8080
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    resolve: {
        //modules: ['node_modules', path.join(__dirname, '../node_modules')],
        modules: [path.resolve(__dirname, "app"), "node_modules"],
        extensions: ['.web.js', '.js', '.json'],
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,   //针对于jsx和js结尾的文件
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test:/\.(css|less)$/,    //配置css
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            },
            {
                test: /\.(eot|ttf|woff|woff2|png)\w*/,  //针对于fontawesome文件
                loader: "file-loader",
            },
            {
                test: /\.(svg)$/i,
                loader: 'svg-sprite-loader',
                include: svgDirs,  // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
            },
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                /*postcss: function(){ //webpack新版必须用postcss.config.js
                    return [
                        require("autoprefixer")({
                            browsers: ['ie>=8','>1% in CN']
                        }),
                        pxtorem({
                            rootValue: 100,
                            propWhiteList: [],
                        }),
                    ]
                }*/
            }
        })
    ]

}
