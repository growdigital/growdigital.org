---
title: Static Site Generators & the IndieWeb
date: 2018-07-30
layout: post.hbs
collection: post
draft: false
excerpt: An overview of how static sites could help promote independent, connected web content

---

[Static Site Generators (SSGs)](https://www.smashingmagazine.com/2015/11/modern-static-website-generators-next-big-thing/) are a way to publish on the web with negligible costs and minimal overhead, as they create static <abbr title="HyperText Markup Language">HTML</abbr> files which can be hosted on a [Platform as a Service (PaaS)](https://en.wikipedia.org/wiki/Platform_as_a_service) without need of a database. Combined with [reactive](https://blog.redelastic.com/what-is-reactive-programming-bc9fa7f4a7fc) frontend [User Interfaces (UIs)](https://en.wikipedia.org/wiki/User_interface), enhanced <abbr title="Platform as a Service">PaaS</abbr> features & integrations, cheap [mass storage](https://en.wikipedia.org/wiki/Object_storage) for media files and the offline capabilities of [Progressive Web Apps (PWAs)](https://www.smashingmagazine.com/2016/08/a-beginners-guide-to-progressive-web-apps/), there is the opportunity for the massive growth of decentralised publishing along the lines of [IndieWeb principles](https://indieweb.org/principles).

What is great about this whole area is that **it does not rely on one technology stack or service provider**. Because it is “just” plain HTML, it is ultimately portable.

## Barriers

Currently I can see 4 overlapping barriers to this growth:

1. Technical
2. Cost
3. Workflow
4. Connectivity


### 1. Technical

The majority of people aren’t inclined or able to school themselves in the technical skills currently required. I’ve been building websites for 20 years and I still balk at the prospect of setting up [Webmentions](https://discourse.gohugo.io/t/anyone-for-webmention/10411). **This stuff needs to be push-button easy**.

### 2. Cost

If you’re setting up a [WordPress](https://wordpress.org/), you’ll need a database with hosting, which will cost you about $5 per month. That is prohibitive for many, in terms of price and expertise to set up. <abbr title="Platform as a Service">PaaS</abbr> companies like [Netlify](), [Now](), [Surge.sh]() etc. have greatly reduced these barriers to entry. **But** image & video hosting is still a pain point, in terms of cost and workflow.

### 3. Workflow

Currently, I don’t know a way to easily publish resized & responsive images to my <abbr title="Static Site Generator">SSG</abbr> blog from my mobile. Likewise, <abbr title="Static Site Generator">SSG</abbr> interfaces like [Netlify CMS](https://www.netlifycms.org/) at the moment [don’t work on mobile](https://github.com/netlify/netlify-cms/issues/441). 

### 4. Connectivity

To hook up my blog and status posts using [RSS](https://en.wikipedia.org/wiki/RSS) news feeds to my social networks, I currently have to use _two_ 3rd party services ([HootSuite](https://hootsuite.com/#) and [dlvrit](https://dlvrit.com/)). That’s more setup than most people can stomach. Connecting your posts to your social networks needs to be as easy at the hosted [WordPress.com](https://wordpress.com/) service `Sharing` options:

<img src="https://farm1.staticflickr.com/935/43737373971_6c2304b511_z_d.jpg" alt="Screenshot of WordPress.com Sharing options" />

## What we need

What we need is good push-button User Interface (no terminal or text editor required) that is accessible no matter the device or skill level. [Netlify CMS](https://www.netlifycms.org/), an [Open Source](https://en.wikipedia.org/wiki/Open-source_software) project from [Netlify](https://www.netlify.com/), has [an admirable aim](https://www.netlifycms.org/docs/contributor-guide):

> We're hoping that Netlify CMS will do for the JAMstack what WordPress did for dynamic sites back in the day. 

To that end, these are some of the things what we need:

1. Decent user interface for creating (configuring) websites, rather like point 5 of the famous [WordPress 5 minute installation](https://codex.wordpress.org/Installing_WordPress#Famous_5-Minute_Installation).
2. Simple social connectivity, like the [WordPress.com](https://wordpress.com/) example above, and including options for self-hosted comments like [Staticman](https://staticman.net/) and the more ethereal [Webmentions](https://webmention.rocks/). 
3. User interfaces, like [Netlify CMS](https://www.netlifycms.org/), need to be responsive and work on all devices. 
4. User interfaces/applications need to be [Progressive Web Apps](https://www.smashingmagazine.com/2016/08/a-beginners-guide-to-progressive-web-apps/), so that they can be used with limited internet connectivity (**offline**).
5. <abbr title="Static Site Generator">SSG</abbr> templates need to be marked up with [socially aware](https://www.indiego.org.uk/social/), ie they need to be marked up with [microformats](https://en.wikipedia.org/wiki/Microformat) for social networks.
6. Someone really needs to build an image hosting service that is practically free, hosts different sized responsive images with title, description and EXIF data and _can be used from a mobile_ (as this is what most people use to take photos…). 

## How can I help?

I’m glad you asked. You can:

1. Put these jumbled thoughts of mine into some sort of order. 
2. Follow what [Laura Kalbag](https://laurakalbag.com/) and [Aral Balkan](https://ar.al/) are doing for an independent web.
3. Build a Static Site Generator theme that uses microformats (see [Indiego](https://www.indiego.org.uk/) theme for some ideas/pointers)
4. Build a simple social connectivity app.
5. Make Webmentions easier to use!
6. Work on a fix for the [Slate](https://www.slatejs.org/#/rich-text) editor so that it [works on mobile](https://github.com/netlify/netlify-cms/issues/441#issuecomment-350426891)
7. Write some more lists…

Thanks for Laura for push to get these thoughts out there 🙂.
