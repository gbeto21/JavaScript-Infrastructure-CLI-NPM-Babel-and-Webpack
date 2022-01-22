const path = require('path')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    //entry:"./js/entry.js",
    entry:{
        page:'./js/entry.js',
        card:'./js/card.js'
    },
    output:{
        filename:'bundle.[name].js',
        path:path.resolve(__dirname,'dist')
    },
    mode:'production',
    optimization:{
        splitChunks:{
            chunks:'all'
        },
        minimizer:[
            new optimizeCssAssetsWebpackPlugin(),
            new uglifyjsWebpackPlugin()
        ]
    },
    devServer:{
        contentBase:'./dist',
        port:3030,
        hot:true
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-env'],
                    plugins:[
                        '@babel/plugin-transform-runtime',
                        "@babel/plugin-syntax-dynamic-import"
                    ]
                }
            },
            {
                test:/\.css$/,
                use:[{
                    loader:miniCssExtractPlugin.loader,
                    options:{
                        publicPath:'/webpack_practice/dist/'
                    }
                },'css-loader']
            },
            {
                test:/\.mp4$/,
                loader:'file-loader',
                options:{
                    name:'[name].[ext]',
                    outputPath:'video/'
                }
            },
            {
                test:/\.(jpg|jpeg|png|gif)$/,
                loader:'file-loader',
                options:{
                    name:'[name].[ext]',
                    outputPath:'image/',
                    //publicPath:'/webpack_practice/dist/image'
                    // do not set publicPath and see what happens
                    // output CSS codes into a CSS file...
                }
            },
            {
                test:/\.ico$/,
                loader:'file-loader'
            }
        ]
    },
    plugins:[
        new miniCssExtractPlugin({
            filename:'css/[name].css'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new cleanWebpackPlugin(['./dist']),
        new htmlWebpackPlugin({
            filename:'index.html',
            template:'./template.html',
            favicon:'./favicon.ico'
        })
    ]
}