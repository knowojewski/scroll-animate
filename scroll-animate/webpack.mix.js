const mix = require('laravel-mix');

mix.sass('./src/scss/main.scss', './dist/css/styles.css', {
        sassOptions: {
            outputStyle: 'compressed'
        }
    })
    .copy('./src/js/index.js', './dist/js/scroll-animate.js')
    .copy('./src/js/modules/*.js', './dist/js/modules')
    .copy('./src/js/helpers/*.js', './dist/js/helpers');