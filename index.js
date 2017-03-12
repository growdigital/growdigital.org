var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');
var drafts      = require('metalsmith-drafts');

Metalsmith(__dirname)
  .metadata({
    title: "Grow Digital",
    description: "We make websites. Honestly.",
    generator: "Metalsmith",
    url: "https://growdigital.org/"
  })
  .source('./src')
  .destination('./dist')
  .clean(false)
  .use(drafts())
  .use(markdown())
  .use(permalinks())
  .use(layouts({
    engine: 'handlebars'
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
