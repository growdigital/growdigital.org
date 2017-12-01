---
title: Why Static Site Generators are SuperCool
date: 2017-09-28
layout: post.hbs
collection: post
draft: false
excerpt: Static Site Generators are the New Hotness of the past few years, and they play a crucial role in the Open Web.

---

[@smashingmag](https://twitter.com/smashingmag) recently [redesigned their online magazine](https://next.smashingmagazine.com/2017/03/a-little-surprise-is-waiting-for-you-here--meet-the-next-smashing-magazine/) using the [@GoHugoIO](https://twitter.com/GoHugoIO) Static Site Generator. Their switch away from [WordPress](https://wordpress.org/) was a humongous endeavour and shone a light on the performance gains from serving static HTML files.

Peformance is just one of the gains. Arguably as important is the lowering of barriers (both price and knowledge) to publishing a website.

Like a lot of Hotness, static sites have been around for a long time (see [StaticGen](https://www.staticgen.com/) for a full list and [Smashing Magazine](https://www.smashingmagazine.com/search-results/?q=static+site+generator) for more reading).

The usual process is that posts are written using [Markdown](https://daringfireball.net/projects/markdown/), generated into HTML with a build process, then committed to a Git repository, triggering deployment to a website.

This is cool but has always a bit on the… _technical_ side. Who wants to teach their clients Markdown and Git? **But** the supercool are the new tools now available for managing a static site:

1. There are a good number of super-simple and super-cheap hosting options for static sites. I’ve mostly used [Netlify](https://www.netlify.com/) and they have a very slick workflow and interface (and the pro version is **free** [for Open Source projects](https://www.netlify.com/pricing/)). I used [Surge.sh](https://surge.sh/) just yesterday, really simple publishing of any static files. And I’ve heard good things about [now](https://zeit.co/now) as well, and they even have a desktop drag‘n’drop app. In the old days, I used to use [Heroku](https://www.heroku.com/).
2. People are building <acronym title="Graphical User Interface">GUI</acronym>s for static sites rather than having to rely on text editors and terminals. The one I’ve started playing with is [NetlifyCMS](https://www.netlifycms.org/) by, er, Netlify. It’s a [React](https://facebook.github.io/react/) app which interfaces with your [GitHub](https://github.com/) repo. It looks simple enough for clients to use.
3. Comments have been an weak spot of static sites. Third party services like [Disqus](https://disqus.com/) have come under [a lot of flak](https://ma.tt/2014/11/disqus-spam-ads/). [Webmention](https://indieweb.org/webmentions) by the [IndieWeb](https://indieweb.org/) is promising though somewhat challenging to set up. Of particular interest is [Mozilla](https://mozilla.org)’s offshoot project called [Talk](https://coralproject.net/products/talk.html) which is being integrated across [washingtonpost.com](https://www.washingtonpost.com/).
4. Image hosting. Now, there are 3rd party options such as [Flickr](https://www.flickr.com/) but then there are the privacy and tracking issues. The ability to host your own [responsive images](https://cloudfour.com/thinks/responsive-images-101-definitions/) cheaply and easily would be ideal. [Object Storage](https://en.wikipedia.org/wiki/Object_storage) as offered by [Amazon S3 web services](https://en.wikipedia.org/wiki/Amazon_S3) looks like the right technology. [Digital Ocean](https://www.digitalocean.com/) recently announced [Scalable Object Storage](https://blog.digitalocean.com/introducing-spaces-object-storage/) at $5 a month with hopefully a more accessible interface. If only someone would build a web app to upload images to a static site…

All of this means that Static Site Generators are _very_ cheap to deploy with increasingly lower technical barriers to setting up. With comments and cheap image hosting, I think we’re moving towards a more Open Web.
