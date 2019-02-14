var HtmlWebpackPlugin = require('html-webpack-plugin');

loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_compontents)/,
        use: ['babel-loader']
      }

],


module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
          },
          {
            test: /\.(css|less)$/,
            use: ["style-loader", "css-loader"]
          }

        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })]


    ,
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    }
}
