---
title: Reworking Groundwork 2. Prettier & ESLint
date: 2017-11-22
layout: post.hbs
collections: posts
excerpt: In part 2 of building a Metalsmith blog template from scratch, I look at Prettier and ESLint for making my code right and nice

---

I am by nature very tidy with my code. But still I get in a kafuddle, so after listening to Folks That Know™ like [@wesbos](https://twitter.com/wesbos), [@una](https://twitter.com/una) and [@chrisdhanaraj](https://twitter.com/chrisdhanaraj), I installed [vscode](https://code.visualstudio.com/) and added the [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) formatting package and [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) linting package.

By adding these things at the beginning of the re-working of [Groundwork](https://www.groundwork.rocks/), I hope that my code is in a more consistent state at the end of the road.

Installing the extensions is straightforward in vscode and I added them both as dev dependencies for the project, as I think they should be an integral part. 

I then ran the `$ eslint --init` command to install a config file locally, choosing a well-recommended [Airbnb style](https://www.npmjs.com/package/eslint-config-airbnb) without the side salad of React, in a JSON sauce.

The only tricky bit is [Integrating Prettier with ESLint](https://prettier.io/docs/en/eslint.html), for there is a bit of overlap between formatting and linting. I went with [turning off ESLint’s formatting rules](https://prettier.io/docs/en/eslint.html#turn-off-eslint-s-formatting-rules) with a `$ npm install --save-dev eslint-config-prettier`. 

It’s all installed. It’s all committed. Doubtless I will be shouting at my computer ”NOT LIKE THAT” in the days to come…

## UPDATE:

Indeed I did start shouting at my computer, specifically not to wrap my Markdown prose. Luckily, [Ryan Zimmerman](https://github.com/RyanZim) pointed out on the [Prettier Gitter channel](https://gitter.im/jlongster/prettier) that there is a [prose wrap](https://prettier.io/docs/en/options.html#prose-wrap) setting for Markdown. 

I’m also using single quotes, as that’s what all the cool kids seem to be doing, and installed a [.prettierrc.json](https://prettier.io/docs/en/configuration.html) for these options.
