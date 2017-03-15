var Metalsmith  = require('metalsmith');
var cleanCSS    = require('metalsmith-clean-css');
var concat      = require('metalsmith-concat');
var drafts      = require('metalsmith-drafts');
var layouts     = require('metalsmith-layouts');
var markdown    = require('metalsmith-markdown');
var permalinks  = require('metalsmith-permalinks');
var postcss     = require('metalsmith-postcss');

Metalsmith(__dirname)
  .metadata({
    title: "Grow Digital",
    description: "We make websites. Honestly.",
    generator: "Metalsmith",
    url: "https://growdigital.org/"
  })
  // The order is important
  .use(concat({
    files:  [
              'assets/css/settings/variables.css', 
              'assets/css/settings/base.css', 
              'assets/css/settings/responsive.css', 
              'assets/css/objects/**/*.css', 
              'assets/css/components/**/**/*.css', 
              'assets/css/utilities/*.css', 
              'assets/css/shame.css'
            ],
    output: './src/assets/styles.css'
  }))
  .use(postcss({
    plugins: {
      'postcss-cssnext': {}
    }
  }))
  .use(cleanCSS({
    files: './src/assets/styles.css',
    cleanCSS: {
      rebase: true
    }
  }))
  .source('./src')
  .destination('./dist')
  .clean(true)
  .use(drafts())
  .use(markdown())
  .use(permalinks({
    pattern: './posts/:title'
  }))
  .use(layouts({
    engine: 'handlebars'
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
