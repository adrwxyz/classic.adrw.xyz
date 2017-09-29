---
title:  "10 Million Hotel Rooms Still Vulnerable"
date:   2017-09-29 14:34:25
permalink: /blog/hotel-hack
redirect_from: /blog/hotel-hack/
tags: security
categories: blog
image: /assets/article_images/2017-09-29-hotel-hack/hotel-lock-c.jpg
image2: /assets/article_images/2017-09-29-hotel-hack/hotel-lock-500c.jpg
excerpt: A 2012 vulnerability still can let anyone break in to millions of hotel rooms.
seo_title: "10 Million Hotel Rooms Still Vulnerable | Andrew Paradi"
---

**In 2012, Cody Brocious presented at Black Hat in Las Vegas that over 10 million hotel room locks were vulnerable to being unlocked in seconds with $50 of consumer grade hardware from Radio Shack [[1](https://www.wired.com/2017/08/the-hotel-hacker/)].**

In his research paper, Brocious outlines numerous vulnerabilities for Onity hotel locks including weak custom written encryption algorithms and full access to memory through the DC port on the bottom the locks [[2](https://www.forbes.com/sites/andygreenberg/2012/07/23/hacker-will-expose-potential-security-flaw-in-more-than-four-million-hotel-room-keycard-locks/#7d283a68eb85)]. He describes countless easily possible attacks including opening any locked door, creating guest keys or master keys for all locks in the hotel, and even framing hotel staff for murder by manipulating the audit logs [[3](http://demoseen.com/bhpaper.html)].

The hack in and of itself is deceptively simple. Authentication for the lock requires matching a number stored in the guest key card to a hotel specific site number stored in each lock's memory. This site number is stored at the same address in memory in every lock. By sending it back to the lock as if read off a guest key, the door unlocks immediately [[4](http://www.extremetech.com/computing/133448-black-hat-hacker-gains-access-to-4-million-hotel-rooms-with-arduino-microcontroller)]. Brocious even provided at the end of his paper, two appendices outlining the weak encryption algorithm and the basic Arduino code to build a working exploit device [[5](http://demoseen.com/bhpaper.html)].

The public revelation of these vulnerabilities was not an easy decision for Brocious who knew that the information in the short term could lead to black hat hotel robberies using the exploit. Yet, he noted that in the over 10 years that Onity had been selling the lock, no fixes had arrived despite such easily recognizable flaws likely being raised within the company. Despite the risks of disclosure, Brocious ultimately published in hopes that the publicity would force the company to produce a fix. Keeping the vulnerability in the dark only meant that whoever next discovered it might have free reign over all vulnerable hotel rooms [[6](http://demoseen.com/bhpaper.html)].

Exploit, Exploited
---
His concern was well warranted. In the months that followed the Brocious Black Hat presentation, many YouTube videos were posted with hackers from across the country confirming that both brand new Onity locks and ones installed at local hotels could be opened in seconds [[7](https://www.forbes.com/sites/andygreenberg/2012/08/28/videos-show-hackers-reproducing-and-refining-hotel-lock-trick-that-opens-millions-of-rooms/#35c0c52a5a5a)]. One ambitious hacker even fit the required components into a felt tip marker so he could simply take off the cap, insert into the lock hardware, and conspicuously gain access to any hotel room [[8](https://www.forbes.com/sites/andygreenberg/2012/10/02/hackers-crack-hotel-room-locks-with-a-tool-disguised-as-a-dry-erase-marker/#1001fcb37d5a)]. Onity attempted to reassure customers by issuing small hardware "security covers" to hide the DC port at the cost of the hotels. After months of pressure, they agreed to new circuit boards for a more resilient fix yet still at a cost to hotels causing very slow adoption and most hotels to remain vulnerable [[9](https://arstechnica.com/information-technology/2012/12/fix-for-hotels-electronic-door-lock-hack-slow-to-roll-out/)].

The hack was so easy to build that within weeks, non-hacker types were learning Arduino and leaving police departments baffled how hotel rooms across central Arizona could be robbed with no fingerprints or forced entry [10](https://www.wired.com/2017/08/the-hotel-hacker/).

$500,000 from a $50 Arduino kit
---
The most notorious of these technology empowered thieves was a repeat convict named Aaron Cashatt. When Cashatt heard of the Brocious exploit and found the instructions online, he got to work fitting an Arduino board into his sunglasses case. Recently released after serving time for a misdemeanor, Cashatt's new found skills from the computer hardware course he took while behind bars came in handy. In the following 11 months, Cashatt conducted over 100 heists raking in over $500,000 of stolen goods from unsuspecting hotel guests in Arizona, Ohio, and Tennessee [[11](https://www.wired.com/2017/08/the-hotel-hacker/)].

When Wired reporter Andy Greenberg met with Cashatt behind the bars to complete the epic story of the heists this summer, Greenberg decided to test if the vulnerability still existed like it did in 2012. As of his article publish date (August 29, 2017), Greenberg found that many larger hotel chains, previously vulnerable in 2012 and 2013 like Marriot and Holiday Inn, had upgraded to locks now impenetrable with the attack. Smaller chains though still have not fixed their locks. At an unnamed smaller chain hotel, just outside of New York City, Greenberg realized just this, that a reporter with an Arduino board was still capable of wreaking havoc many hotels worldwide [[12](https://www.wired.com/2017/08/the-hotel-hacker/)].

Still Vulnerable
---
Despite research papers, hacker enthusiasts, and over 100 real criminal robberies using the Onity exploit since 2012, this vulnerability continues to remain open to exploit, relevant, and a story being updated in 2017 because these locks can't be patched over the air with a software update. And when the company responsible for securing their faulty locks makes it imperatively expensive to do so, hotel guests around the world must continue to take on the risk of trusting a room lock with their valuables that can be unlocked by anyone.

Can this be prevented given the limitations of hardware updates? Should there be legal liability for Onity for failing to adequately fix their vulnerability? Are there any special measures to stay more secure in hotel rooms?

**Brocious unfortunately concludes that for rooms with vulnerable locks, only the flimsy door chain can save you [[13](http://www.extremetech.com/computing/133448-black-hat-hacker-gains-access-to-4-million-hotel-rooms-with-arduino-microcontroller)].**

Written for CS458 Cryptography, Security and Privacy course at University of Waterloo.
