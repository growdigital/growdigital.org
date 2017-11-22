---
title: Reworking Groundwork Part 1 - semantic-release
date: 2017-11-21
layout: post.hbs
collections: posts
excerpt: 1 - Setup @github, @travisci installing semantic-release to automate semantic versioning for new Groundwork @metalsmithio template

---

[semantic-release](https://www.npmjs.com/package/semantic-release) is an npm package that automates [semantic versioning](https://semver.org/) for your project! I’ve set it up for the all new [Groundwork](https://www.groundwork.rocks/) [Metalsmith](http://www.metalsmith.io/) blog template.

Here’s a step-by-step guide for creating a Metalsmith blog template from scratch.

1. Create a new [GitHub](https://github.com/) repo. Mine is called `groundwork`
2. [Clone](https://help.github.com/articles/cloning-a-repository/) to your local machine.
3. Add an open source [license](https://help.github.com/articles/cloning-a-repository/) and [.gitignore](https://help.github.com/articles/ignoring-files/)
4. Download the [latest Metalsmith](https://github.com/segmentio/metalsmith/archive/master.zip)
5. Extract the `static-site` [example](https://github.com/segmentio/metalsmith/tree/master/examples/static-site), add files to your project directory.
6. Set up a [Travis](https://travis-ci.org/) account, linked to your GitHub account, and add your project repository.
7. Install [semantic-release](https://www.npmjs.com/package/semantic-release)! I used [@kentcdodds](https://twitter.com/kentcdodds) [instructions](https://egghead.io/lessons/javascript-automating-releases-with-semantic-release) from his [@eggheadio](https://twitter.com/eggheadio) video. In short, [setup](https://www.npmjs.com/package/semantic-release#setup) is:
    1. `npm install -g semantic-release-cli`
    2. `cd your-project`
    3. `semantic-release-cli setup`
8. semantic-release adds a `.travis.yml` file and scripts to `package.json`
9. I modified `package.json` by adding `"version": "0.0.0-semantic-release"`, to emphasise that semantic-release is dealing with versioning.
10. semantic-release works on [git commit conventions](https://www.npmjs.com/package/semantic-release#default-commit-message-format):
    1. `fix(pencil): stop graphite breaking when too much pressure applied`
    2. `feat(pencil): add 'graphiteWidth' option`
    3. `perf(pencil): remove graphiteWidth option`  
    `BREAKING CHANGE: The graphiteWidth option has been removed.`

Way to go, it worked for me 😁 🚀
