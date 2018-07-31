---
title: Social connectivity service for IndieWeb
date: 2018-07-31
layout: post.hbs
collection: post
draft: false
excerpt: Publishing your RSS feeds to your social networks could be easier with a dedicated social network connection service!

---

This is a follow-up blog post to [Static Site Generators & the IndieWeb](https://www.growdigital.org/posts/static-site-generators-the-indieweb/), brought about because of two excellent talks at [Swansea Software Development Meetup](https://www.meetup.com/Swansea-Software-Development-Meetup/events/250343517/) by [Lewis Denham-Parry](https://denhamparry.co.uk/) and [Salman Iqbal](https://twitter.com/soulmaniqbal) both of [Cloud Native Wales](https://cloudnativewales.io/). Salman talked about [GitOps](https://speakerdeck.com/salmaniqbal/accelerate-application-development-through-gitops) and Lewis gave an overview of the Cloud Native roadmap.

I want to build a service that enables easy social connectivity for people who want to [Publish (on your) Own Site, Syndicate Elsewhere](https://indieweb.org/POSSE). Currently, I have signed up to the free tiers on [Hootsuite](https://hootsuite.com/#) for Facebook & WordPress.com, and on [dlvr.it](https://dlvrit.com/) for Twitter, Google+ & LinkedIn. That‘s a lot of signing up.

Far better to have a workflow like the hosted blogging platform [WordPress.com](https://wordpress.com/), where connecting your social network is a matter of **clicking a button** and granting permission:

<img src="https://farm1.staticflickr.com/935/43737373971_6c2304b511_z_d.jpg" alt="Screenshot of WordPress.com social network connections">

Ideally, this is a service that a <abbr title="Platform as a Service">PaaS</abbr> like [Netlify](https://www.netlify.com/) could offer. But in the meantime, I would like to build my own **Cloud Native App** with pointers from the able and far more knowledgable Salman and Lewis! This is as much an opportunity to learn about cloud native and create a proof-of-concept, as well as hopefully a useful service for those interested in [IndieWeb](https://indieweb.org) independent publishing.

In the first instance, I’ll concentrate on the big three: Facebook, Twitter and Google+. My guess it will involve a lot of [OAuth](https://en.wikipedia.org/wiki/OAuth) and a lot of form-filling. Will post updates here on this blog 🙂
