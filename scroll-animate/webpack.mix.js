const mix = require('laravel-mix');

mix.sass('./src/scss/main.scss', './dist/css/styles.css', {
        sassOptions: {
            outputStyle: 'compressed'
        }
    });