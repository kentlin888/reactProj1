const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
    merge
} = require('webpack-merge');
const commonConfig_func = require('./webpack.config.common.js');

module.exports = (env, options) => {
    rtnConfig = {
        entry: {
            //[name] 的意思就是 entry 的名字
            index: './index.js',
            //ReactApp: './pages/ReactApp/ReactApp.js',
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'js/[name].bundle.js',// : 'js/[chunkhash].bundle.js',
            publicPath: '',
            //'/ming2/multipage/dist/ming2/assets/'
            // /ming2/multipage/dist/ming2/assets/
        },
        plugins: [            
            new HtmlWebpackPlugin({
                template: './index.htm', //path.join(__dirname, 'src', 'index.htm'),
                filename: './index.bundle.htm',
                chunks: ['index'],
                //inject: false,
                //base:'./dist/ming2/',
                inject: 'true', //js插入的位置，true/'head'/'body'/false
                // alwaysWriteToDisk: true
                title: 'Index666',
                hash: true,
                myPageHeader: 'Hello World',
                //publicPath: path.join(__dirname, 'dist', 'ming2'),

                //favicon: './assets/favicon.png', //favicon路径
                /*
                因为和 webpack 4 的兼容性问题，chunksSortMode 参数需要设置为 none
                https://github.com/jantimon/html-webpack-plugin/issues/870
                */
                //chunksSortMode: 'none',
            }),
            
        ],
        devServer: {
            // aa:console.log(1111),
            //代表的是 Web Server 運行起來的根目錄 contentBase
            //告诉服务器从哪个目录中提供内容 也可以从多个目录提供内容
            //contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'assets')]
            contentBase: path.resolve(__dirname, 'dist'),
            // contentBasePublicPath: '/serve-content-base-at-this-url',
            //设置为 true 时，此选项绕过主机检查 CORS
            //disableHostCheck: true
            compress: false,
            port: 9006,
            //quiet: true, // lets WebpackDashboard do its thing --quiet
            //contentBase: './dist',
            historyApiFallback: {
                index: "/index.bundle.htm",
                // rewrites: [
                //     // {
                //     //     from: /^\/$/,
                //     //     to: '/index.bundle.htm'
                //     // },
                //     // {
                //     //     from: /^\/subpage/,
                //     //     to: '/views/subpage.html'
                //     // },
                //     {
                //         from: /./,
                //         to: '/pages/index/index.bundle.htm'
                //     }
                // ]
            },
            //Enables Hot Module Replacement 
            //hotOnly: true,
            //启用 webpack 的 模块热替换 功能：
            //注意，必须有 webpack.HotModuleReplacementPlugin 才能完全启用 HMR
            //hot: true,
            //watchContentBase: true,
            //如果 output.filename 设置为 'bundle.js' ，devServer.filename 用法如下
            //现在只有在请求 /bundle.js 时候，才会编译 bundle。
            //当启用 devServer.lazy 时，dev-server 只有在请求时才编译包
            //(bundle)。这意味着 webpack 不会监视任何文件改动。我们称之为惰性模式
            // lazy: true,
            // filename: 'bundle.js',
            //指定使用一个 host。默认是 localhost。如果你希望服务器外部可访问，指定如下
            //host: '0.0.0.0'

            //告诉 dev-server 在 server 启动后打开浏览器
            // open: true,
            // openPage: '/dist/index2.html',
            //open:'Google Chrome'

            //https: true
            //以上设置使用了自签名证书，但是你可以提供自己的：
            // https: {
            //     key: fs.readFileSync('/path/to/server.key'),
            //     cert: fs.readFileSync('/path/to/server.crt'),
            //     ca: fs.readFileSync('/path/to/ca.pem'),
            //   }

            //publicPath: '/assets/'
        },
    }

    function getConfig_devMode() {
        return {
            mode:  'development' ,//: 'production',
            //建议每个输出的 js 文件的大小不要超过 250k -- 暫時關閉這提醒
            performance: {
                hints: false,// : 'warning'
            },
            devtool: 'eval-cheap-module-source-map' ,//: 'hidden-source-map',
        }
    }
    
    rtnConfig = merge(rtnConfig, getConfig_devMode())
    let commonConfig = commonConfig_func(true,options)
    rtnConfig = merge(commonConfig, rtnConfig)
    return rtnConfig
}