---
title: But I’m not popular enough to create my own acronym!
date: 2018-08-14
layout: post.hbs
collection: post
draft: true
excerpt: After rearranging all my code to fit the Inverted CSS Triangle, I decided it was time for a new acronym, ICT

---

Spurred on by [Lindsay Grizzard](https://twitter.com/lindsaygrizzard)’s post [Creating the “Perfect” CSS System](https://medium.com/gusto-design/creating-the-perfect-css-system-fa38f5bcdd9e) and an email from  [Joel](https://twitter.com/jhooks) from [Egghead](https://twitter.com/eggheadio), I’ve reorganised the “Modular CSS” workflow in my [Hugo](https://gohugo.io/) starter kit [Indiego](https://github.com/growdigital/indiego/tree/master/themes/starter/src).

It’s based on [Harry Robert](https://twitter.com/csswizardry)’s [Inverted Triangle CSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) (ITCSS), from general, site-wide rules at the top of the inverted triangle, down to very specific, utility rules at the inverted tip:

![Inverted Code Triangle rainbow-coloured illustration](https://www.indiego.org.uk/assets/img/inverted-code-triangle.png)

Firstly, following Lindsay’s suggestion, I put number prefixes on everything, to make it all super clear:

1. Variables
2. Base
3. Objects
4. Components
5. Utilities
6. Shame

Secondly, **all files** follow the inverted triangle structure, including JavaScript, JPEGs, PNGs, SVGs etc. There is no `/src/assets/` directory any more…

But I felt uncomfortable with the term ITCSS, there’s just too much… _CSS_ in it, which might put off JavaScript developers. So, I have thirdly decided upon a new acronym, and I give to you:

## ICT

**Inverted Code Triangle**

![Homer Simpson in a pink shirt coming into work in a crowd of a people, being watched on CCTV](https://farm2.staticflickr.com/1833/43983236272_03f0d37469_o_d.jpg)

As [Homer Simpson](https://en.wikipedia.org/wiki/Homer_Simpson) put it so eloquently, ”But I’m not popular enough to be different!”, I really don’t imagine being popular enough for it to catch on. At least it’s out there 🙂

