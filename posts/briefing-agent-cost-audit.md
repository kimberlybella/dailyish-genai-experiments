---
title: "My AI Agent's Biggest Expense Was the Instructions, Not the Work"
date: "2026-05-28"
category: "AI Tools"
excerpt: "When I published the piece about setting up my daily briefing agent, Gokula Mishra asked a question I had not bothered to answer for myself, which is what running this thing every morning actually costs. I knew it was a heavy task. What I had not done was the math."
image: "/images/posts/briefing-agent-cost-audit.png"
tags: ["Claude"]
---

When I published the piece about setting up my daily briefing agent, Gokula Mishra asked a question I had not bothered to answer for myself, which is what running this thing every morning actually costs. I knew it was a heavy task. The agent reads my inbox, runs nineteen or so web searches against a structured set of beats, drafts a briefing in HTML, and emails it to me, all under a set of instructions long enough to be its own document, and all of that compounds. What I had not done was the math.

So I asked Claude to estimate it for me. The number that came back was useful in the way these self-audits tend to be, which is that the headline figure was less interesting than the shape of the spend underneath it.

## Where the Tokens Actually Go

A single morning run came in somewhere around 120,000 to 150,000 input tokens and another 22,000 output tokens. At the per-token rates Claude quoted for Sonnet 4.6 in our exchange, the rough hypothetical worked out to sixty-nine to seventy-eight cents per run, or twenty to twenty-three dollars a month at thirty runs. That is not a bill I am actually getting, since the scheduled task lives inside my paid Claude subscription and the token cost is absorbed there, but the figure is still a useful proxy for resource footprint, and it is the kind of thing worth knowing if I ever want to move this setup to a direct API integration later.

The more interesting part was the breakdown. The single largest contributor to input cost was not the web searches or the inbox reads, which is what I would have guessed, but the instruction file itself, the SKILL.md document that defines how the agent should behave, which gets injected in full at the start of every run and stays in context the whole time. On the output side, the largest single line item was the email body, where the agent was generating both an HTML version and a plain-text fallback that essentially duplicated the same briefing in a format almost no modern email client actually needs.

Anyone running a similar recurring agent should know that the visible work, the searches and the reading and the drafting, is not where the budget goes, and that the wrappers around that work, the instructions on how to do it and the alternate formats of the output, are what compound silently across every run because they are easy to set and forget.

## The Changes I Adopted

Claude proposed six optimizations and I adopted five of them. The sixth was a feature available only through direct API usage, which my Cowork setup does not currently use, so it was inapplicable rather than declined.

The instruction file was the biggest target. The original SKILL.md had grown across several iterations and carried duplicate guidance in multiple sections, with detailed rules for source linking, subscription tagging, patent entry formatting, and inbox query suggestions, several of which restated the same idea in slightly different ways. We rewrote it to be roughly thirty-five to forty percent shorter while preserving every operational instruction the agent needs to do its job. The patent entry rules, which only apply on the rare runs where the agent actually finds a qualifying patent, were left in, but the instruction now tells the agent not to read the underlying catalog file unless a qualifying patent is found, which keeps another three thousand or so tokens out of the average run.

The plain-text email fallback was cut down to a stub containing just the date, a two-sentence top story, and a labeled list of source URLs. Modern email clients render HTML reliably and I have never opened my own briefing in something that would need a text-only version, so this was straightforward to drop, and it saves a few thousand output tokens per run with no impact on the version I read.

Two of the beats I track, the AI financial tools beat and the agentic commerce beat, are reliably quiet on most weekdays, and the instructions now cap web queries on those beats at two per run, with a note to call the beat quiet and move on if the results are thin, rather than running through five or six searches looking for something that is not there. The HTML output was also tightened to use a single style block at the top of the document rather than verbose inline styles repeated on every element, which was bloating the email body unnecessarily without changing the rendered result.

## The Quality Change That Came With It

Before working through the six optimizations, I had also made one related change to the agent's inbox behavior that turned out to be more about quality than tokens. The original instructions had the agent searching my full Gmail inbox for newsletter content relevant to the day's briefing, which meant it had to evaluate and discard marketing emails, receipts, and unrelated threads on every run. I have all of my newsletter subscriptions auto-filtering into a single Gmail label called Reading List, so we updated the agent's inbox queries to scope to that label only. The agent now only sees curated signal rather than the full inbox, which means less noise in the results and fewer false positives eating output tokens summarizing something that was never going to belong in a briefing.

This is the change I am most curious to watch over time, because the cost impact is small but the quality impact should compound. On a quiet day the agent had been wasting attention on Apple terms of service updates and loan promotions before deciding they did not belong in the briefing, and with the scope tightened, that work no longer happens.

## What I Am Watching For

The unknown here is whether any of the trimming will surface in the output as a quality drop. Compressing an instruction file by forty percent is the kind of change that tends to look fine in isolation and then quietly degrades behavior in edge cases I have not seen yet, and the agent might handle a busy news day differently with less detailed guidance about how to prioritize, or it might miss a categorization nuance that the longer rules used to enforce. I am giving it a few weeks of normal runs before drawing conclusions, and the briefings themselves are the dataset.

Asking the agent to audit its own resource usage turned out to be a more efficient diagnostic than I would have gotten from instrumenting the run externally, because it already had access to its own context size, the documents it was loading, and the work it was producing, and the suggestions it returned were specific enough to act on without further investigation.

## What Worked

- The token estimate gave me an honest accounting of where the spend actually accumulates, which turned out to be the instruction file and the output wrappers rather than the visible research work I would have guessed.
- Compressing the SKILL.md, capping queries on the quiet beats, and skipping the patent catalog read on most runs each addressed a specific identified cost driver, and together should cut the per-run token load meaningfully.
- Scoping inbox searches to the Reading List label is the one change I expect to improve both cost and output quality at the same time, since the agent no longer wastes attention on emails that were never going to be briefing material.

## What Didn't

- The per-run dollar estimate is hypothetical rather than a real bill, since my setup runs inside a paid Claude subscription rather than direct API usage, which means the resource picture is useful but the cost framing requires an asterisk.
- Prompt caching, which would have been the highest impact change of all according to the audit, is not available through Cowork's scheduled task runner and would only apply if I moved the briefing to a direct API integration later.
- I will not know for a few weeks whether any of the compression I did to the instruction file degrades the briefing in ways I have not anticipated, and the only way to find out is to keep running the new version daily and pay attention to what the outputs look like.



## Tools Used

Tool: Claude (Cowork scheduled tasks) - Where to Find It: Cowork tab in the Claude desktop app; "+ New task" and the "Scheduled" sidebar, or /schedule inside an open task - Cost: Included with any paid Claude plan (Pro, Max, Team, or Enterprise)
