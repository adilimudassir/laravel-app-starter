const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


mix.setPublicPath('public')
    .setResourceRoot('../') // Turns assets paths in css relative to css file
    .sass('resources/sass/app.scss', 'css')
    .js('resources/js/app.js', 'js')
    .extract([
        'jquery',
        'jquery-browser',
        'jquery.placeholder',
        'magnific-popup',
        'nanoscroller',
        'bootstrap',
        'popper.js',
        'axios',
        'lodash',
        'alpinejs',
        'bootstrap-datepicker',
        'animate.css',
        '@fortawesome/fontawesome-free',
        'sweetalert2'

    ])
    .sourceMaps();

if (mix.inProduction()) {
    mix.version()
        .options({
            // Optimize JS minification process
            terser: {
                cache: true,
                parallel: true,
                sourceMap: true
            }
        });
} else {
    // Uses inline source-maps on development
    mix.webpackConfig({
        devtool: 'inline-source-map'
    });
}
