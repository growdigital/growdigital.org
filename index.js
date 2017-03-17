var Metalsmith  = require('metalsmith');
var cleanCSS    = require('metalsmith-clean-css');
var collections = require('metalsmith-collections');
var concat      = require('metalsmith-concat');
var drafts      = require('metalsmith-drafts');
var layouts     = require('metalsmith-layouts');
var markdown    = require('metalsmith-markdown');
var permalinks  = require('metalsmith-permalinks');
var postcss     = require('metalsmith-postcss');
var tags        = require('metalsmith-tags');

Metalsmith(__dirname)
  .metadata({
    title: "Grow Digital",
    description: "We make websites. Honestly.",
    generator: "Metalsmith",
    url: "https://growdigital.org/"
  })
  .source('./src')
  .destination('./build')
  .clean(true)
  // The order is important
  .use(concat({
    files: [
      'assets/css/settings/variables.css',
      'assets/css/settings/base.css',
      'assets/css/settings/responsive.css',
      'assets/css/objects/**/*.css',
      'assets/css/components/**/**/*.css',
      'assets/css/utilities/*.css',
      'assets/css/shame.css'
    ],
    output: 'assets/styles.css'
  }))
  .use(postcss({
    plugins: {
      'postcss-cssnext': {}
    }
  }))
  .use(cleanCSS({
    cleanCSS: {
      rebase: true
    }
  }))
  .use(drafts())
  // .use(collections({
  //   posts: {
  //     pattern: '*.md',
  //     sortBy: 'date',
  //     reverse: true
  //   }
  // }))
  // .use(tags({
  //   handle: 'tags',
  //   path:'tag/:tag.html',
  //   layout:'/layouts/tag.hbt',
  //   sortBy: 'date',
  //   reverse: true,
  //   skipMetadata: false,
  //   slug: {mode: 'rfc3986'}
  // }))
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
