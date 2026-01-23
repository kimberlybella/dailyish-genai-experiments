---
title: "Claude Code, Part 2: The Accidental Education in Website Infrastructure"
date: "2026-01-22"
category: "AI Tools"
excerpt: "Building a website with Claude Code taught me five unexpected lessons about how the web actually works—not through tutorials, but through real debugging with immediate stakes."
image: "/images/posts/claude-code-part-2.png"
tags: ["Claude Code", "Web Development", "Education"]
---

**Get curious. Stay grounded. Keep testing.**

**Tool:** Claude Code
**Where to find it:** claude.ai (requires Claude Pro subscription)
**What it costs:** $20/month as part of Claude Pro

In [Part 1](https://www.linkedin.com/pulse/claude-code-part-1-how-non-coder-built-custom-website-kimberly-bella-jjw8c), I explained how Claude Code helped me build a custom website despite having zero coding experience. What I didn't expect was how much I'd learn about web infrastructure along the way.

I didn't set out to get an education in file systems, URL structures, or browser caching. I just wanted a working website. But every time something broke, I had to understand *why* it broke to fix it. That process—debugging real problems with real stakes—taught me more than any tutorial could have.

Here are five things I learned the hard way.

## 1. File Names Are Not Just Labels—They're Functional References

I uploaded an image called `rapid-protoyping-with-real-limitations.png` when the code was looking for a `.jpg` file. The image didn't appear. No error message. Just...nothing.

Then I discovered case sensitivity matters. I uploaded `Headshot.jpg` with a capital H, but the code was searching for `headshot.jpg` with a lowercase h. Same result. Invisible image.

**The lesson:** File names aren't cosmetic. They're functional references. A single character difference—one wrong letter, one wrong extension, one capitalization mismatch—and the system can't find what it needs.

This seems obvious in retrospect, but when you're not a developer, you don't think about file names as code. You think of them as labels. Learning that they're actually instructions was a mindset shift.

## 2. Image Formats Actually Matter

I kept uploading PNG files when the code expected JPG files. Every time, the images would disappear from the site with no explanation.

Eventually, Claude had to write me a script to automatically check and fix all the image format mismatches across my blog posts.

**The lesson:** The system doesn't tell you when formats don't match. It just fails silently. You have to know what the system expects and give it exactly that.

## 3. Formatting Isn't Aesthetic—It's Functional

When I pasted content from LinkedIn into my blog posts, I forgot to add markdown formatting like header symbols.

I also discovered that `#How I Used It#` with hash marks on both sides isn't valid markdown. The system just ignored it entirely and rendered it as plain text.

**The lesson:** Formatting isn't about making things look nice. It's instructions to the system about how to render content. Get the syntax wrong, and the system doesn't interpret your intent—it just does nothing.

## 4. The "Slug" Is Your Post's Real Name

A slug is the URL-friendly version of a post title. It's what shows up in the web address.

For example, the post titled "Claude Code, Part 1: How a Non-Coder Built a Custom Website" becomes `claude-code-part-1-how-a-non-coder-built-a-custom-website` in the URL.

The slug connects everything: the markdown file, the cover image, the URL itself. One typo and nothing connects.

I had an image named `apid-protoyping.png` instead of `rapid-protoyping.png`—one missing letter. That single typo broke the entire connection between the markdown file, the cover image, and the URL.

**The lesson:** The slug is the real identifier. Everything else references it. Get it wrong, and the whole system falls apart.

## 5. Browser Cache Is Both Friend and Enemy

I'd make changes to the code, refresh the page, and...nothing. It looked like my edits didn't work.

Except they did work. The browser was just showing me a cached version of the old code.

**The lesson:** What you see in your browser isn't always what exists on the server. Caching speeds up the web, but it also creates confusion when you're actively making changes.

Learning to clear the cache became a regular part of my workflow.

## What I Didn't Expect

I didn't set out to learn about file systems, URL structures, or browser caching. I just wanted to build a website.

But every time something broke, I had to understand *why* it broke to fix it. And because the problems were real—my actual website wasn't working—the stakes were high enough that the lessons stuck.

That's very different from following a tutorial where everything works the first time. When you're debugging real problems, you learn in a way that theoretical knowledge can't replicate.

## The Takeaway

Claude Code didn't just build me a website. It gave me an accidental education in how the web actually works.

The knowledge wasn't structured or formal. It was organic, born out of necessity. But it was also practical and immediately applicable.

If you're learning to build something new—whether it's a website, a tool, or anything else—expect to learn more from the things that break than from the things that work.

**Next up in Part 3:** Why hard refreshes matter, why email filters are important, and what happens when AI tools go down mid-project.

**What about you?** Have you learned something technical by accident while trying to build something? Leave a comment on [LinkedIn](https://www.linkedin.com/pulse/claude-code-part-2-accidental-education-website-kimberly-bella-5stlc) and share your experience.
