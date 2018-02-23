AndrewParadi.com Portfolio &amp; Blog
========

Proudly built in Waterloo with Jekyll, Ruby, Sass, and is hosted on Github Pages.

Some of the features I've built out with this theme:

Mobile Friendly Menu
---
Menu that dynamically scales to all screen sizes and auto-hides on mobile.

![Desktop Menu Closed](/assets/article_images/andrewparadi.github.io/menu-closed-1c.png)
![Desktop Menu](/assets/article_images/andrewparadi.github.io/desktop-menu-1c.png)
![Mobile Menu](/assets/article_images/andrewparadi.github.io/mobile-menu-1c.png)

Cards
---
Built image grid to feature images from posts and projects for use on homepage, project, and blog pages. Displays all posts in a given category.

![Cards](/assets/article_images/andrewparadi.github.io/cards-1c.png)

Card Sections
---
Extension of cards to allow for sections of posts by category with buttons to more related posts. See on [`/index`](https://www.andrewparadi.com/), [`/projects`](https://www.andrewparadi.com/projects), and [`/blog`](https://www.andrewparadi.com/blog) pages.

![Card Sections](/assets/article_images/andrewparadi.github.io/card_sections-1c.png)

Resume Layout
---
Resume layout that pulls from `work`, `hackathon`, `project`, `freelance`, and `volunteer` categories and formats following meta data into well formated resume. Seen on [`/experience`](https://www.andrewparadi.com/experience) page.
- `date` : end date of position
- `startdate` : start date of position
- `position` : job title/role , team
- `company` : firm or organization
- `summary` : markdown description of experience

![Resume Layout](/assets/article_images/andrewparadi.github.io/resume-1.png)

Tag and Category Clouds
---
Tags on category, page, project, &amp; post layouts. Used `{ % for % }` loops and conditional `{ % if % }` statements in [liquid markup](https://github.com/shopify/liquid/wiki/Liquid-for-Designers) to only show tags on categories when enabled in `_config.yml`.


Archive layout that pulls from categories and tags to create easy navigation of all categories and tags with their respective totals of posts. See on [`/c`](https://www.andrewparadi.com/c) and [`/t`](https://www.andrewparadi.com/t) pages.

![Category Cloud](/assets/article_images/andrewparadi.github.io/archive-cloud-1c.png)

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

Super Fast, Mobile Optimized, Async CSS, &amp; Font Loading
---
Transitioning from Wordpress was a huge undertaking but well worth it. According to [Google Developer PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/), website performance has increased by more than 2.3x thanks to optimized images and asynchronous static loading of CSS and fonts.

- **92/100** on mobile, previously **34/100**
- **78/100** on desktop, previously **39/100**

Combined with a lightning fast Github Pages CDN, images are heavily optimized and resized for delivery. I've cut site size by over 80% using [JPEGmini](http://www.jpegmini.com/), [ImageAlpha](https://pngmini.com/) for pngs, [Pixelmator](http://www.pixelmator.com/mac/), &amp; [Affinity Photo](https://affinity.serif.com/en-gb/photo/).

Feedback
---
Let me know what you think, email [me@andrewparadi.com](me@andrewparadi.com).

Resources
---
- [*Mediator Jekyll* theme](https://github.com/dirkfabisch/mediator) by [@dirkfabisch](https://twitter.com/dirkfabisch)
- [*Jekyll Modern Blog* theme](https://github.com/inded/Jekyll_modern-blog) by [@inded](https://github.com/inded)
- [Trianglify](https://github.com/qrohlf/trianglify) by [@qrholf](http://qrohlf.com)
- [Stylish Portfolio Jekyll](https://github.com/volny/stylish-portfolio-jekyll) by [@volny](https://github.com/volny)