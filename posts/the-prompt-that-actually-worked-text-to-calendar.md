---
title: "The Prompt That Actually Worked: Text to Calendar"
date: "2025-10-14"
category: "Tool Comparison"
excerpt: "Yesterday I shared how I turned the park district's basketball schedule into a clean calendar file. Today I'm sharing the exact prompt template I used, because the magic wasn't in the AI, it was in be..."
image: "/images/posts/the-prompt-that-actually-worked-text-to-calendar.png"
tags: ["ChatGPT"]
---



Yesterday I shared how I turned the park district's basketball schedule into a clean calendar file. Today I'm sharing the exact prompt template I used, because the magic wasn't in the AI, it was in being specific about what I needed.

Here's What I Actually Typed
"I have a list of youth basketball games. Each week includes a date, time, location, and two teams.

Our team is Team A. The first team listed is always home (wears white). The second team is away (wears blue).

Please generate an .ics file for import into Google Calendar, include game duration of 60 minutes, and set 30-minute reminders before each event. Use America/Chicago timezone."

Then I pasted the schedule below that.

Why This Worked
I taught the AI my business rules. Not just "make me a calendar" but "here's how jersey colors work" and "here's who 'we' are." Context transforms generic output into something actually useful.

I was specific about the format. .ics file. Google Calendar. 60-minute duration. 30-minute reminders. When you know what you want, say what you want.

I included the timezone. Because time without timezone context is just a number that will haunt you later when half the games are wrong (or you miss the first one like I did).

What You Can Adapt
This same pattern works for:

Class schedules ("Professor office hours are in Building C unless noted...")
Work rotations ("Weekend shifts get +$5/hr in the title...")
Medication reminders ("Morning meds before 8am, evening after 6pm...")
Project milestones ("Flag anything due within 3 days as high priority...")

The structure is always:

Here's my data
Here's the context you need to understand it
Here's the format I need back
Here are the specific rules to follow

Try It Yourself
Open ChatGPT or Claude. Drop in any schedule or list that needs structure. Start with:

"Turn this into a calendar (.ics) with these rules..."

Then tell it your rules.

If it works, you just saved yourself 30 minutes. If it doesn't, you learned something about how to prompt better next time. Either way, you're experimenting, and that's the point.



## Tools Used

Tool: ChatGPTWhere to Find It: chat.openai.comCost: Free tier available; Plus subscription ($20/month) for enhanced features

