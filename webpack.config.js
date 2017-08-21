/**
 * Created by Administrator on 2017/8/13.
 */

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
        mainFiles: ["index.web","index"],// 这里哦
        modules: [path.resolve(__dirname, "src"), "node_modules"],
        extensions: ['.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,   //针对于jsx和js结尾的文件
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,    //配置css
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png)\w*/,  //针对于fontawesome文件
                loader: "file-loader",
            },

        ]
    }

}
