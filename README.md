portfolio &amp; andrewnotes blog
========

Proudly built in Waterloo with Jekyll, Ruby, Sass, and is hosted on Github Pages.

Some of the features I've built out with this theme:

Category Layout for a Powerful Homepage
---
Instead of a single feed on the homepage, you can now define categories in `_config.yml` that you want to feature. These will then auto-generate the toggle menu and footer links for respective posts using [liquid markup](https://github.com/shopify/liquid/wiki/Liquid-for-Designers) and Ruby.

Modularized Footer and Social Bar
---
Footer was by default hard coded into page layouts. Now both footer and social bar is modularized with respective CSS so that both can easily be added to any page or section.

Better Schema SEO in Layouts
---
In page, post, and project layouts, I've added meta description HTML tags and [Schema](http://schema.org/) syntax with [liquid markup](https://github.com/shopify/liquid/wiki/Liquid-for-Designers). This will improve search engine crawl success and better populate sharing descriptions on Facebook and Twitter.

Improved Readability
---
Extra wide columns of text are difficult to read! Text columns are sized to make reading as easy as reading a book or newspaper.

Annotations for Embedded Media
---
By default, including alt text to your Markdown image tag [alt text](/image/link.jpg) shows a caption below the image. Now this functionality is extended using `<figcaption>this is my caption</figcaption>` tags so captions can be added to embedded media and HTML5 videos.

Mobile Optimized, Fast Load Speed
---
Transitioning from Wordpress was a huge undertaking but well worth it. According to [Google Developer PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/), website performance has increased by more than 2x:

- **75/100** on mobile, previously **34/100**
- **88/100** on desktop, previously **39/100**

Combined with a lightning fast Github Pages CDN, images are heavily optimized and resized for delivery. I've cut site size by over 80% using [JPEGmini](http://www.jpegmini.com/), [ImageAlpha](https://pngmini.com/) for pngs, [Pixelmator](http://www.pixelmator.com/mac/), &amp; [Affinity Photo](https://affinity.serif.com/en-gb/photo/).

Tags, Tags, Tags
---
Tags on category, page, project, &amp; post layouts. Used `{% for %}` loops and conditional `{% if %}` statements in [liquid markup](https://github.com/shopify/liquid/wiki/Liquid-for-Designers) to only show tags on categories when enabled in `_config.yml`.

Feedback
---
Let me know what you think, email [me@andrewparadi.com](me@andrewparadi.com).

Resources
---
Inspired by [*Mediator Jekyll* theme](https://github.com/dirkfabisch/mediator) by [@dirkfabisch](https://twitter.com/dirkfabisch).
