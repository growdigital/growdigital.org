---
title: Creating a 404 error page in Metalsmith
excerpt: Creating a 404 page in Metalsmith is easy, you simply have to generate a 404.html page in the root of your website
date: 2017-12-03
update: 
thumbnail: 
layout: post.hbs
collection: post
---

Just a quick post for those that are looking on how to create a [404 error page](https://en.wikipedia.org/wiki/HTTP_404) using [Metalsmith](http://www.metalsmith.io/). Simply generate a `04.html` page in the root of the website. This would mean creating a `404.md` page in `/src/`, maing sure to add the [front matter](https://jekyllrb.com/docs/frontmatter/) definition of `permalinks: false` eg:

```
title: 404 not found page
layout: post.hbs
permalinks: false
```

This is so that `/404.html` is created rather than `404/index.html`, as is the default. 

Also, you _may_ need to configure your webserver so that the `404.html` is picked up when a page isn’t found. FWIW, [Netlify](https://www.netlify.com/) will pick up a 404.html page automatically.
