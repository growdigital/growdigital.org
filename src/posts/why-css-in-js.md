---
title: Why CSS in JS?
date: 2018-08-13
layout: post.hbs
collection: post
draft: true
excerpt: As a CSS frontend designer/developer without much ReactJS experience, it’s taken me a while to understand why CSS-in-JS is so popular in the React world. Now I think I know…

---

[Ethan Marcotte](https://twitter.com/beep) wrote an excellent blog post called [Weft](https://ethanmarcotte.com/wrote/weft/):

> The frameworks we build, the visual languages we formalize—they’re artifacts that ultimately live in a broader organizational context.

Two days previously, [Joel Hooks](https://mobile.twitter.com/jhooks/) sent a mailout about a [CSS-in-JS](https://egghead.io/courses/convert-scss-sass-to-css-in-js) [Egghead](https://mobile.twitter.com/eggheadio) course:

> CSS-in-JS means that our style sheets are written and stored in JavaScript files.

I sent Joel an email, saying why not [Block Element Modifier](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) CSS and [Inverted Triangle CSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)? And he replied:

>  BEM made me (and the rest of the team) the saddest. 

I did not understand. Thanks to the stellar work of [Nicole Sullivan](https://twitter.com/stubbornella), [Jonathon Snook](https://smacss.com/), [Nicolas Gallagher](https://github.com/suitcss/), [Brad Frost](http://bradfrost.com/) and many more, we have choices of syntax and ways of conceptually and visually organising the CSS ([BEM](https://bem.info/) and [Inverted Triangle CSS](https://github.com/sonniesedge/inuitcss-guide) by [Harry Roberts](https://csswizardry.com/) being my favourites).

![Inverted Code Triangle rainbow-coloured illustration](https://www.indiego.org.uk/assets/img/inverted-code-triangle.png)

It’s easy:

* **Base styles**: variables, unclassed HTML elements
* **Objects**: prefixed with `o-`, cosmetic-free abstractions
* **Components**: discrete blocks of UI
* **Utilties**: high specificity, very explicit helper classes

The components are organised by uniquely named directory, each containing the CSS, JS, SVG etc required for that component. Hell, you can even include HTML template snippets for the excellent [Fractal]() component library. So why the need for CSS-in-JS? 

Ethan’s words came back to me…

> …artifacts that ultimately live in a broader organizational context

## Me: CSS developer / You: JS developer

[Brad Traversy](http://traversymedia.com/) has an excellent [Modern JavaScript From The Beginning](http://traversymedia.com/#courses) course, and I was struck by his use of [Bootstrap](https://getbootstrap.com/). It’s a JavaScript course, he doesn’t have time to get into the CSS, so in that context, Bootstrap is **good enough**.

The light bulb moment 💡, I realised that CSS-in-JS and CSS utility frameworks _are for JavaScript developers, specifically React developers_. 

* **Base styles**: write lightweight ones yourself
* **Components**: eg [Emotion](https://emotion.sh/), which is CSS-in-JS specific to React components 
* **Utilities**: eg [Tailwind](https://tailwindcss.com/docs/what-is-tailwind/) utility first CSS framework

This is **component CSS in the context of JavaScript developers**, with less cognitive overhead. The last word goes to Joel:

> I've got enough things to get my mind around. hah
