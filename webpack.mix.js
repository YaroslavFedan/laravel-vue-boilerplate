const mix = require('laravel-mix');
require('laravel-mix-alias');
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
mix.alias('@', '/resources/js/src/');
// mix.webpackConfig({
//   resolve: {
//       alias: {
//           '@': path.resolve(__dirname, '/resources/js/src/')
//       }
//   }
// });
// mix.alias({
//   '@':  __dirname + '/resources/js/src',
//   // '@components': '/resources/js/src/components',
// });


mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css').version();
