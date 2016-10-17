---
title:  "HTTPS Sites Don't Load on your Mac?"
date:   2016-10-16 12:00:00
categories: blog
tags:
- devops
- security
- tech
image: /assets/article_images/2016-10-16-fix-mac-globalsign-https/https-error.png
excerpt: How to fix the GlobalSign HTTPS error messing up your Mac's browser
seo-title: "Fix your Mac's HTTPS GlobalSign Error | Andrew Paradi"
---

**I couldn't access any class websites for days, deleting a single certificate fixed it all.**

As reported across the web ([1](http://www.computerworld.com/article/3131487/security/globalsign-certificate-revocation-error-leaves-some-sites-inaccessible.html), [2](http://www.theregister.co.uk/2016/10/13/globalsigned_off/), ...), GlobalSign cancelled HTTPS certificates used by many websites including Wikipedia and University of Waterloo among many others.

When trying to load most uwaterloo.ca sites, I was met with this error:

![GlobalSign HTTPS Error in Google Chrome](/assets/article_images/2016-10-16-fix-mac-globalsign-https/https-error.png)

After some digging, it turns out that the issue was an expired `DigiCert High Assurance EV Root CA` root certificate.

But when I tried to delete it from `Applications/Utilities/Keychain Access.app`, I got an error:

![Deleting a root certificate error](/assets/article_images/2016-10-16-fix-mac-globalsign-https/keychain-error.png)

Turns out deleting a root certificate is blocked by Apple's System Integrity Protection. To disable it, I needed to boot into the recovery partition (hold down `cmd + r` while rebooting).

Then in terminal, enter the command `csrutil disable`.

After rebooting back to my regular account, I could delete the certificate and access University of Waterloo websites. I would also recommmend rebooting back to recovery to restore security protection with `csrutil enable`.

Hope this helps if you've been having issues with your Mac (PC users got lucky this time since this bug didn't affect them). 

*Join the andrewnotes email list for more posts like this*

<script src="https://blitzen.com/scripts/blitzenForm.js" type="text/javascript"></script> <iframe src="https://andrew.blitzen.com/form/andrewnotes-footer-1?page=20161016-globalsign" id="017ce06a18c93534f49cdb840176f9" onload="resizeCrossDomainIframe('017ce06a18c93534f49cdb840176f9', 'https://andrew.blitzen.com');" width="100%" style="border: none;" resize="true"></iframe>