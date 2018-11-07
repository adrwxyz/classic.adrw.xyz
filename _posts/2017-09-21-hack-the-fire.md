---
title:  "Hack the Fire"
date:   2017-09-21 16:34:25
startdate:  2017-09-19 17:26:13
permalink: /project/hack-the-fire
redirect_from: /project/hack-the-fire/
categories:
- Experience
- Hackathon
- Featured
layout: project
tags:
- Machine-Learning
- Python
- Pandas
- NumPy
image: /assets/article_images/2017-09-21-hack-the-fire/hack-the-fire-2000c.png
image2: /assets/article_images/2017-09-21-hack-the-fire/hack-the-fire-1000c.png
excerpt: Implemented Machine Learning Perceptron algorithm to predict Calgary Fire Dept response times
seo_title: "Hack the Fire | Andrew Paradi Alexander"
position: Hack the Fire
company: HackTheNorth
summary: |
  - Machine Learning Perceptron to predict Calgary Fire Dept response times
---

**2 weeks into CS489 Machine Learning, I applied what I learned to Calgary Fire Department open data.**

I was excited to take what I was learning in my CS489 Machine Learning course at University of Waterloo and apply it to a new data set.

When I walked by the [Canada's Open Data Exchange (CODX)](https://codx.ca/) booth at Hack the North, I realized what a perfect opportunity I had found.

Searching through the countless data sets, I found an interesting one from the City of Calgary Fire Department that contained response times by different scenario categories.

Writing this weeks after the hacking was finished, I realize that a naive perceptron algorithm was not the best algorithm to use for this type of regression problem. I've also since learned the importance of regularization and massaging the data so a model can be trained effectively on it.

All of that being said, the naive perceptron still predicted at 95% accuracy after 500 iterations on the data set below.

Another great Hack the North, 4th year in a row!

Data Source
---
- City of Calgary Open Data
- Title: Fire Emergency Response Calls
- Last Updated: Sept 14, 2017
- Total Records: 17,510
- Accessed at: [https://data.calgary.ca/Government/Fire-Emergency-Response-Calls/bdez-pds9](https://data.calgary.ca/Government/Fire-Emergency-Response-Calls/bdez-pds9)

Tech Stack
---
- Python 3.6
- Pandas
- NumPy
- Jupyter

Check out the [submission on Devpost](https://devpost.com/software/hack-the-fire) and [repo on GitHub](https://github.com/adrw/hack-the-fire).
---
