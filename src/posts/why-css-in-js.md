---
title: Why CSS in JS?
date: 2018-08-13
layout: post.hbs
collection: post
draft: true
excerpt: As a CSS frontend designer/developer without much ReactJS experience, it’s taken me a while to understand why CSS-in-JS is so popular in the React world. Now I think I know…

---

[Ethan Marcotte](https://twitter.com/beep) recently wrote an excellent blog post called [Weft](https://ethanmarcotte.com/wrote/weft/):

> The frameworks we build, the visual languages we formalize—they’re artifacts that ultimately live in a broader organizational context.

Then, [Joel Hooks](https://mobile.twitter.com/jhooks/) send a mailout about a [CSS-in-JS](https://egghead.io/courses/convert-scss-sass-to-css-in-js) [Egghead](https://mobile.twitter.com/eggheadio) course:

> CSS-in-JS means that our style sheets are written and stored in JavaScript files.

I sent Joel an email, saying why not [Block Element Modifier](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) CSS and [Inverted Triangle CSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)? And he replied:

>  BEM made me (and the rest of the team) the saddest. 

I did not understand. Thanks to the stellar work of [Nicole Sullivan](https://twitter.com/stubbornella), [Jonathon Snook](https://smacss.com/), [Nicolas Gallagher](https://github.com/suitcss/), [Brad Frost](http://bradfrost.com/) and many more, we had choices of syntax and ways of conceptually and visually organising the CSS ([BEM](https://bem.info/) and [Inverted Triangle CSS](https://github.com/sonniesedge/inuitcss-guide) by [Harry Roberts](https://csswizardry.com/) being my favourites).

![Inverted CSS Triangle rainbow-coloured illustration](https://www.indiego.org.uk/assets/img/inverted-css-triangle.png)

It’s easy – there are **base styles** (variables, unclassed HTML elements), **objects** (prefixed with `o-`, cosmetic-free abstractions), **components** (discrete blocks of UI) and **utilties** (high specificity, very explicit helper classes). 

And then, Ethan’s words came back to me…

> …artifacts that ultimately live in a broader organizational context

## Me: CSS developer / You: JS developer

[Brad Traversy](http://traversymedia.com/) has an excellent [Modern JavaScript From The Beginning](http://traversymedia.com/#courses) course, 


The light bulb moment 💡. This is pretty much the same as “Modular CSS” but with less cognitive overhead:
* [Tachyons](http://tachyons.io/) is a ready-rolled CSS kit, a super-lightweight CSS framework
* Lightweight **base** styles
* [Emotion](https://emotion.sh/) is CSS-in-JS specific to React **components**. 

This is **CSS in the context of JavaScript developers**. The last word goes to Joel:

> I've got enough things to get my mind around. hah
