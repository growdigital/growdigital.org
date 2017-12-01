---
title: Reworking Groundwork 3. nodemon & BrowserSync
date: 2017-11-23
layout: post.hbs
collections: posts
excerpt: Part 3 of building a Metalsmith blog template from scratch is setting up Node file monitoring with nodemon and synchronised browser testing with BrowserSync
---

Part of any web building process is the ability to see your changes in the browser. No more `save-switch-refresh`! Use your build process to automatically refresh changes in your browser.

In [Metalsmith](http://www.metalsmith.io/), there is a plugin called [metalsmith-watch](https://www.npmjs.com/package/metalsmith-watch). **DON’T USE IT!!**. Apparently, it causes problems with various plugins.

Luckily, [Woody Goodricke](https://twitter.com/AndrewGoodricke) has written a set of instructions on [Watching Metalsmith](https://slack-files.com/T0ANJK399-F1D16ATAA-4e3e06088c) – essentially, separate out the watching from the building by using [nodemon](https://nodemon.io/) by the eminently brilliant [@rem](https://twitter.com/rem) to check for changes in your files and [BrowserSync](https://browsersync.io/) by [@wearejh](https://twitter.com/wearejh) to synchronise displaying changes in your browsers. It’s a win-win-win for everybody 😁.
