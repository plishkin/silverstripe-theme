const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const path = require('path');
const { getPathsAsync } = require('@expo/webpack-config/env');
const {FaviconWebpackPlugin} = require("@expo/webpack-config/plugins");

module.exports = async function (env, argv) {

    if (env.mode === 'development') {
        //
    }

    if (env.mode === 'production') {
        env.locations = await getPathsAsync(env.projectRoot);
        env.locations.servedPath = '/_resources/themes/app/build/';
        env.locations.production.folder = path.resolve(__dirname, 'build');
        env.locations.production.indexHtml = path.resolve(__dirname, 'templates/Page.ss');
        env.pwa = false;
    }
    console.log(env)

    // Customize the config before returning it.
    const config = await createExpoWebpackConfigAsync(env, argv);

    if (config.mode === 'development') {
        //
    }

    if (config.mode === 'production') {
        config.output.path = path.resolve(__dirname, 'build');
        config.output.publicPath = '/_resources/themes/app/build/';
        config.IgnorePlugin({ resourceRegExp: 'favicon'});
    }

    console.log(config)

    return config;
};
