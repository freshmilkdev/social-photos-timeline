// More info on Webpack's Node API here: https://webpack.github.io/docs/node.js-api.html
// Allowing console calls below since this is a build file.
/*eslint-disable no-console */
var webpack = require('webpack');
var config = require('./webpack.config.prod');
var colors = require('colors');

console.log('Generating minified bundle for production via Webpack. This will take a moment...'.blue);
//the same we can run from CMD with command: node_modules\.bin\webpack -p --config ./webpack.config.prod.js
webpack(config).run(function (err, stats) {
    if (err) { // so a fatal error occurred. Stop here.
        console.log(err.bold.red);
        return 1;
    }

    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(function (error) {
            console.log(error.red);
        });
    }

    if (jsonStats.hasWarnings) {
        console.log('Webpack generated the following warnings: '.bold.yellow);
        jsonStats.warnings.map(function (warning) {
            console.log(warning.yellow);
        });
    }

    console.log(`Webpack stats: ${stats}`);

    // if we got this far, the build succeeded.
    console.log('Your app has been compiled in production mode and written to /dist. It\'s ready to roll!'.green);

    return 0;
});
