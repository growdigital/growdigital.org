---
title: Simple image hosting for Static Sites
date: 2018-08-01
layout: post.hbs
collection: post
draft: false
excerpt: A simple way to upload photos from your mobile and host images for your static site

---

This is another follow-up blog post to [Static Site Generators & the IndieWeb](https://www.growdigital.org/posts/static-site-generators-the-indieweb/), the other one being [Social connectivity service for IndieWeb](https://www.growdigital.org/posts/social-connectivity-service-for-indieweb/). 

I am building things to make independent web publishing (the [IndieWeb](https://indieweb.org/)) easier. [Lewis Denham-Parry](https://denhamparry.co.uk/) and [Salman Iqbal](https://twitter.com/soulmaniqbal) are from [Cloud Native Wales](https://cloudnativewales.io/) and have offered to give some pointers to help me build them with [cloud native](https://www.cncf.io/) technologies.

One of the big problems I have with my own [Hugo](https://gohugo.io/) static site [forestgarden.wales](https://www.forestgarden.wales/) is hosting the images. I currently use Flickr, as I can upload garden photos from my mobile easily. However, I don’t think they’re keen on [hotlinking](https://en.wikipedia.org/wiki/Inline_linking) and I’m not keen on trusting all my photos to a 3rd party that is probably selling my data.

Unfortunately, I can’t find a cost-effective alternative. The closest I’ve come is [Cloudinary](https://cloudinary.com/), which has great functionality, but their free tier only has 10GB storage, then after that it’s $99 a month!

So, the solution is to roll my own solution. This is a wish list:

* Upload photos from mobile
* Option to upload low-res photo from mobile
* Upload progress indicator
* Capability to resume interrupted uploads
* Images automatically resized to presets
* Option to customise presets
* Metadata: title, description, tags, EXIF data
* Simple web interface, thumbnails listed by date
* Simple search facility
* URL-based options eg `/photo-name.jpg` & `/photo-name-small-320.jpg`
* “Click to copy” URL 

This is a screenshot of Flickr’s size presets:

<img src="https://farm1.staticflickr.com/862/43732447292_52a3297e81_z_d.jpg" alt="Screenshot of Flickrs all sizes presets">

And here is a screenshot of the “upload low-res photo” from the iPhone:

<img src="https://farm1.staticflickr.com/851/42880146375_986145ccaa_m_d.jpg" alt="Screenshot of iPhone, showing options to resize image">

## Stack

I have no clear idea! I was thinking of a very simple [Gatsby](https://www.gatsbyjs.org/) frontend, as it’s a [Progressive Web App](https://www.smashingmagazine.com/2016/08/a-beginners-guide-to-progressive-web-apps/) out of the box, and there are [ways to resize images in browser](http://nodeca.github.io/pica/demo/). I think it would also make sense to use React functionality for an upload indicator and resuming interrupted uploads. 

An alternative is to use [Functions as a Service (FaaS)](https://en.wikipedia.org/wiki/Function_as_a_service) to process the image resizing.

As for _where_ the images are uploaded, I was thinking of cloud-based [Object Storage](https://en.wikipedia.org/wiki/Object_storage) such as [Amazon S3](https://aws.amazon.com/s3/). 

## Workflow

1. Take photo on mobile
2. Upload photo
  * Full-res on wifi
  * Lo-res on mobile
3. Create post
4. Copy & paste title, alt text & URL from web interface

## Some sort of conclusion

A lot of this work is already being done by [Netlify CMS](https://www.netlifycms.org/), where there is an issue to [Host images using a 3rd party service](https://github.com/netlify/netlify-cms/issues/432), relating to [Backend restructure - Integrations](https://github.com/netlify/netlify-cms/issues/1171). I think my energy would be best suited to supporting these efforts rather than creating a behemoth of my own!
