---
title:  "ADRW Jekyll Theme"
date:   2017-11-09 18:00:00
startdate:  2015-12-22 9:05:00
permalink: /project/adrw-jekyll
redirect_from: /project/adrw-jekyll/
redirect_from: /project/andrewparadi-github-io
redirect_from: /project/andrewparadi-github-io/
categories:
- Project
- Experience
layout: project
tags:
- Bash ZSH Shell
- Docker
- Jekyll
- HTML
- Sass
- Javascript ES5/ES6/ES7
image: /assets/article_images/adrw-jekyll/index-1-1500c.png
image2: /assets/article_images/adrw-jekyll/index-1-1000c.png
excerpt: Personal portfolio and blog website, Jekyll on GitHub Pages
seo_title: "Building ADRW Jekyll Theme | Andrew Paradi Alexander"
position: ADRW Jekyll Theme
company: GitHub
summary: |
  - Portfolio &amp; Blog with custom cards, menu, and tag cloud components
---

**Since 2009, I have built websites with Windows Live Sites, static HTML, and Wordpress. Then I discovered Jekyll on GitHub Pages.**

In 2015, I was excited to keep building my developer skills and loved the opportunity that Jekyll provided to build my own site.

Using other themes as inspiration, I've built many new features as outlined below to help make the site easier to navigate and more effective at displaying content.

If you find any bugs or have any questions, please [email me](mailto:account+github@adrw.ch?subject=ADRW%20Jekyll%20Bug)!

Mobile Friendly Menu
---
Menu that dynamically scales to all screen sizes and auto-hides on mobile.

![Desktop Menu Closed](/assets/article_images/adrw-jekyll/menu-closed-1c.png)
![Desktop Menu](/assets/article_images/adrw-jekyll/desktop-menu-1c.png)
![Mobile Menu](/assets/article_images/adrw-jekyll/mobile-menu-1c.png)

Cards
---
Built image grid to feature images from posts and projects for use on homepage, project, and blog pages. Displays all posts in a given category.

![Cards](/assets/article_images/adrw-jekyll/cards-1c.png)

Card Sections
---
Extension of cards to allow for sections of posts by category with buttons to more related posts. See on [`/index`](http://www.classic.adrw.xyz), [`/projects`](http://www.classic.adrw.xyz/projects), and [`/blog`](http://www.classic.adrw.xyz/blog) pages.

![Card Sections](/assets/article_images/adrw-jekyll/card_sections-2-1500c.png)

Resume Layout
---
Resume layout that pulls from `work`, `hackathon`, `project`, `freelance`, and `volunteer` categories and formats following meta data into well formated resume. Seen on [`/experience`](http://www.classic.adrw.xyz/experience) page.
- `date` : end date of position
- `startdate` : start date of position
- `position` : job title/role , team
- `company` : firm or organization
- `summary` : markdown description of experience

![Resume Layout](/assets/article_images/adrw-jekyll/resume-1.png)

Tag and Category Clouds
---
Tags on category, page, project, &amp; post layouts. Used `{ % for % }` loops and conditional `{ % if % }` statements in [liquid markup](https://github.com/shopify/liquid/wiki/Liquid-for-Designers) to only show tags on categories when enabled in `_config.yml`.


Archive layout that pulls from categories and tags to create easy navigation of all categories and tags with their respective totals of posts. See on [`/c`](http://www.classic.adrw.xyz/c) and [`/t`](http://www.classic.adrw.xyz/t) pages.

![Category Cloud](/assets/article_images/adrw-jekyll/archive-cloud-1c.png)

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
By default, including alt text to your Markdown image tag `[alt text](/path/to/image.jpg)` shows a caption below the image. Now this functionality is extended using `<figcaption>this is my caption</figcaption>` tags so captions can be added to embedded media and HTML5 videos.

Super Fast, Mobile Optimized, Async CSS, &amp; Font Loading
---
Transitioning from Wordpress was a huge undertaking but well worth it. According to [Google Developer PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/), website performance has increased by more than 2.3x thanks to optimized images and asynchronous static loading of CSS and fonts.

- **92/100** on mobile, previously **34/100**
- **78/100** on desktop, previously **39/100**

Combined with a lightning fast Github Pages CDN, images are heavily optimized and resized for delivery. I've cut site size by over 80% using [JPEGmini](http://www.jpegmini.com/), [ImageAlpha](https://pngmini.com/) for pngs, [Pixelmator](http://www.pixelmator.com/mac/), &amp; [Affinity Photo](https://affinity.serif.com/en-gb/photo/).

Resources
---
- [Source code on GitHub](https://github.com/adrw/adrw.github.io)
- [*Mediator Jekyll* theme](https://github.com/dirkfabisch/mediator) by [@dirkfabisch](https://twitter.com/dirkfabisch)
- [*Jekyll Modern Blog* theme](https://github.com/inded/Jekyll_modern-blog) by [@inded](https://github.com/inded)
- [Trianglify](https://github.com/qrohlf/trianglify) by [@qrholf](http://qrohlf.com/)
