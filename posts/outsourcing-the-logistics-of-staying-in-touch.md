---
title: "Outsourcing the Logistics of Staying in Touch"
date: "2026-05-18"
category: "Tool Comparison"
excerpt: "I have a group of girlfriends from business school who are scattered across the country, all of us over 40, most of us with little kids, and the kind of busy where months can disappear without anyone realizing nobody has texted the group chat. We landed on a small ritual to fix that..."
image: "/images/posts/outsourcing-the-logistics-of-staying-in-touch.jpg"
tags: ["Claude", "Gemini"]
---

I have a group of girlfriends from business school who are scattered across the country, all of us over 40, most of us with little kids, and the kind of busy where months can disappear without anyone realizing nobody has texted the group chat. We landed on a small ritual to fix that. On the 15th of every month, someone sends a prompt, everyone responds, and we get a low-effort window into each other's lives without having to read the same book, coordinate a Zoom or wait for the next reunion. The question I brought to Claude was less about whether the idea was any good and more about whether I could outsource the entire setup, from prompt brainstorming to a deployable calendar invite, in one sitting.

## Starting Broad, Then Narrowing

The first "connection prompt" list Claude generated was fine but too generic. Twelve prompts, a reasonable mix of photo prompts and share-something prompts, but several of them ("send a screenshot of your phone home screen," "share the last text you sent") were tuned for a younger or differently configured group. When I told Claude the group was all over 40 with little kids, but that I specifically did not want prompts centered on the kids or on our partners, it adjusted the entire list to keep the focus on us as people rather than the roles we occupy for others. That instruction mattered more than I expected. Without it, the prompts drifted toward family and relationship content, which is not what we were going for.

One connection prompt I changed manually was a "send a photo of something that made you laugh" framing, because not everything funny has a visual, and asking for a picture sometimes kills the impulse to share at all. Claude rewrote it as a plain share, which is a tiny edit but the kind of thing that determines whether people actually respond on a busy Tuesday.

## The Part of the Exercise That Saved the Most Time

The brainstorm was the easy half. The harder half, the part I expected to do manually, was turning twelve prompts into twelve calendar invites with reasonable times across Hawaii, Pacific, Mountain, Central, and Eastern, without landing in someone's middle-of-the-night, middle-of-quarterly-board-meeting, or right-when-school-pickup-happens window. Claude generated an .ics file with each prompt on the 15th, times varied between noon and 4pm Central so every time zone stayed inside business hours, and pop-up notifications set to fire when the event begins. Because we already have a shared group calendar, I only had to import the file once on my end and the events appeared for everyone automatically, which means the rest of the group just needs to confirm the shared calendar is visible in their view and notifications are turned on. That is one nudge in the group chat rather than a twelve-step import for twelve people. The prompt itself is the event title, so when someone glances at their calendar that morning they see what they are being asked to share rather than a generic "friend group" placeholder.

That last detail, putting the prompt in the title rather than the description, was something I asked for at the very end of the exchange, but I wished Claude had recommended it. It is a small design choice with a real effect on whether anyone follows through on a busy day. For these types of experiments going forward, I plan to test some custom instructions for Claude to think about the design decisions and user outcomes in systems I am designing.

## What's Next, Also Outsourced

The same group has a harder coordination problem queued up, which is actually planning the next in-person trip. The constraints are messy in the way real-life logistics always are, including flights out of different home airports, a shared calendar already marked up with everyone's no-go weekends, and a loose sense of what kind of get-together we want before we know where we are going. I started brainstorming that one in Gemini as a logistics optimizer that can pull flight availability against the no-go calendar and surface the windows where the math actually works. It is a bigger ask than a calendar of prompts, and it sits closer to the agentic territory I usually approach more cautiously, so the next experiment will be as much about where the tool stops being trustworthy as where it starts being useful.

## What Worked

- Iterating with group-specific context (over 40, kids in the picture but not the subject, no partner content) reshaped the entire prompt list in one turn rather than requiring me to edit each one manually
- Because our shared group calendar was already in place, the .ics file only had to be imported once on my end and the invites surfaced for everyone automatically, which removed the friction point of asking twelve people to load a file themselves or accept 12 invites since the titles and exact times vary month-to-month
- Putting the prompt in the event title rather than the description made the calendar notification self-explanatory at a glance

## What Didn't Work

- The first pass leaned generic and skewed younger than my group, which I would not have caught if I had taken it at face value
- One prompt needed a manual edit to drop the "send a photo" framing, because Claude defaulted to photo prompts even when a plain share would land better
- I had to explicitly rule out kids and partners as prompt subjects, otherwise the list would have drifted toward family content rather than staying focused on us

## Key Takeaway

For me, it was not that Claude can brainstorm a list of icebreaker prompts, which is squarely in the easy-AI-task category, but that it can walk the whole distance from "I have a vague friend group idea" to "here are twelve months of invites already sitting on the shared calendar." Most of the AI experiments I run lean toward heavier territory like privacy trade-offs, sourcing problems, and agentic risk. This one was the opposite. Low stakes, high warmth, and a reminder that some of the most useful applications are the ones that quietly handle the logistics of the soft things we mean to do but never quite get around to. The trip planner is next, and that one will probably test the edges harder.



## Tools Used

Tool: Claude (web interface) - Where to Find It: claude.ai - Cost: Free tier available

Tool: Google Gemini - Where to Find It: gemini.google.com - Cost: Free tier available
