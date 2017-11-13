---
title:  "Discourse Slack Bot"
date:   2017-03-03 16:34:25
startdate:  2017-02-19 17:26:13
permalink: /project/discourse-slack-bot
redirect_from: /project/discourse-slack-bot/
categories:
- Experience
- Project
- Headline
layout: project
tags:
- Ruby-on-Rails
- Slack-Bot
image: /assets/article_images/2017-03-03-discourse-slack-bot/discourse-slack-bot-2-2000c.png
image2: /assets/article_images/2017-03-03-discourse-slack-bot/discourse-slack-bot-2-1000c.png
excerpt: Added search feature to Discourse Slack Bot that returns top 5 search results with author links and calculated reading time.
seo_title: "Discourse Slack Bot | Andrew Paradi"
position: Discourse Slack Bot
company: GitHub
summary: |
  - Added command to return query with author links &amp; reading time
---

**As we worked on a custom [Discourse forum](https://www.discourse.org/) for internal use, it was determined that Atomic needed a Slack bot.**

With a Slack bot, colleagues across the company could quickly search for resources, information, and people on the internal Atomic forum.

I was tasked with installing the Slack bot plugin into Discourse but realized that there was no `/discourse search` style functionality.

Forking the open source plugin, I added search functionality using Ruby-on-Rails.

Though the Atomic project ended up pivoting away from Discourse to a custom built ReactJS/Node.js solution, Atomic encouraged me to open source the improvements I made with a [pull request into the original Discourse-Slack-Official repo](https://github.com/discourse/discourse-slack-official/pull/19).

[Check out the pull request on GitHub.](https://github.com/discourse/discourse-slack-official/pull/19)
---
