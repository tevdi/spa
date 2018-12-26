const webpack = require('webpack')

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const path = require('path')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractSCSS = new ExtractTextPlugin('stylesheets/[name].css')
//const CopyWebpackPlugin = require('copy-webpack-plugin')

const devBuild = process.env.NODE_ENV !== 'production'
const nodeEnv = devBuild ? 'development' : 'production'

var HtmlWebpackPlugin = require('html-webpack-plugin');

var host;

// Usage: host=http://host:port npm run webpack-dev-redux --port port

// Simple usage (will use port 8080 for the webserver and 8000 for the proxy): npm run webpack-dev-redux

// Using another host for the proxy and another host for the webserver: host=http://localhost:8001 npm run webpack-dev-redux --port 8002

if (process.env.host) {
    host = process.env.host;
} else {
    host = "http://localhost:8000";
}
console.log('Using host for proxy: '+host);

const config = {
    entry: {
        // Add polyfills
        'client-bundle': [ 'babel-polyfill', 'whatwg-fetch', './client/js/clientEntryPointDev-Redux.js' ],
    },
    output: {
        // path: path.resolve(__dirname, '../web/webpack-client'),
        filename: '[name].js',
        publicPath: '/webpack-client',
    },
    resolve: {
        extensions: [ '.js', '.jsx' ],
    },
    plugins: [
        new CaseSensitivePathsPlugin(),
        extractSCSS,
        // Provide jQuery and lodash to every module (remove if you don't need these)
        new webpack.ProvidePlugin({
            _: 'lodash',
            $: 'jquery',
            'jQuery'              : 'jquery',
            'window.jQuery'       : 'jquery',
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(nodeEnv),
            },
        }),
        new HtmlWebpackPlugin({
            template: 'dev.html'     /* Index file for the webpack-dev project. */
        }),
    ],
    module: {
        rules: [
            // Expose webpacks jQuery to the browser so we can reuse this instance e.g. to chain loaded plugins
            { test: require.resolve('jquery'), loader: 'expose-loader?$!expose-loader?jQuery' },
            { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.scss$/i, loader: extractSCSS.extract([ 'css-loader','sass-loader' ]) },
            { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: { limit: 10000, mimetype: 'application/font-woff' }
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: { limit: 10000, mimetype: 'application/octet-stream' }
            },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: { limit: 10000, mimetype: 'image/svg+xml' }
            },
            { test: /\.jpe?g$/, loader: 'file-loader' }
        ],
    },
    devServer: {
        host: 'localhost',
        port: 8080,
        historyApiFallback: {
            index: '/webpack-client',
        },
        proxy: {
            '/rest/**': {
            target: host,
	}
    }
    },
}

if (devBuild) {
    console.log('Webpack dev build')
    config.devtool = '#eval-source-map'
} else {
    config.plugins.push(
        new webpack.optimize.DedupePlugin()
    )
    console.log('Webpack production build')
}

module.exports = config
