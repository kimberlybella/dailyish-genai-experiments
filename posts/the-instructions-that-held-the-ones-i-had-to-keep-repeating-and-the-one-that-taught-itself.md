---
title: "The Instructions That Held, The Ones I Had to Keep Repeating, and the One That Taught Itself (Perhaps a 'Persuasion Bomb'?)"
date: "2026-04-16"
category: "Tool Comparison"
excerpt: "A few months ago I published a piece on using custom instructions to reduce hallucinations in AI research. What I didn't anticipate was how differently that protocol would behave depending on where the instructions lived, how I delivered them, and what happened when a tool decided on its own that I wasn't going to settle for guessing."
image: "/images/posts/the-instructions-that-held-the-ones-i-had-to-keep-repeating-and-the-one-that-taught-itself.jpg"
tags: ["Gemini", "Claude", "Data Analysis"]
---

A few months ago I published a piece on using custom instructions to reduce hallucinations in AI research. The framework was straightforward: set persistent directives telling your model to cite everything, score its own confidence, and say "source not available" rather than inventing something plausible. It worked well enough that I called it building your AI's permanent trust-and-verification protocol.

What I didn't anticipate was how differently that protocol would behave depending on where the instructions lived, how I delivered them, and what happened when a tool decided on its own that I wasn't going to settle for guessing.

This is the follow-up I didn't plan to write.

## The Research That Made the Stakes Real

The experiment that surfaced these findings wasn't designed as a test. It grew out of several weeks of substantive research work covering AI regulation, the history of data innovation, and Big Tech patent activity, including analysis of the GENIUS Act and tracking patent filings across major players in the AI infrastructure space. This is the kind of research where a hallucinated citation or a quietly estimated statistic doesn't just embarrass you, it puts real work at risk.

That higher-stakes context changed what I noticed. When you're tracking patent IDs and legislative language, you stop tolerating ambiguity in your sources the way you might during a lower-stakes experiment. You start paying close attention to when the rules you set are actually being followed, and when you're essentially re-explaining yourself to a tool that should already know.

## Three Ways Instructions Actually Travel

Running the same research requirements through two different tools over several months, I found myself sorting my instructions into three distinct categories based on how they actually behaved in practice. The categories weren't ones I designed in advance. They emerged from noticing what was working, what kept breaking, and what started working without my asking.

**The instructions I set once and that (generally) held.**

These were the foundational research integrity rules: always include inline or numbered citations for any specific data, statistic, or quote, assign a confidence score of 1 to 10 to every factual claim and omit anything scoring below 8, and state "source not available" rather than filling a gap with inference. I also established a source verification section that I now ask for at the end of any substantive research delivery, covering three categories: what is well-sourced with citations intact, what is a synthesized estimate or inference, and what could not be verified and should be removed or caveated before professional use.

These lived in the formal instruction settings for the tools. They were the rules with the most at stake if broken, and on balance they held most reliably, which suggests something about the value of going through the deliberate act of writing them down in a single place rather than establishing them conversationally.

**The instructions I gave repeatedly until they stuck.**

These were consequential too, but they traveled differently. Some started as in-conversation corrections: I would push back on an output, ask for a change, and watch the same issue resurface two sessions later. Over time I started explicitly asking that certain things be added to the tool's instructions rather than just correcting the immediate response. In some cases that escalation worked. In others it took several rounds of the same correction before the instruction felt genuinely embedded rather than temporarily applied.

The writing style preferences sat in this category too, things like no em-dashes, no short staccato sentences parceling out ideas that should develop within a single thought, and the tagline that opens every piece. These were less consequential in terms of the work itself, but they were the most visible evidence of how fragile conversational instruction-setting can be. I found myself correcting the same things in April that I had corrected in January, in sessions that should have had access to the same standing instructions. The lower stakes made the pattern easier to see clearly.

**The instructions that taught themselves.**

This is the category I didn't have a name for until I was trying to describe it.

At some point during the research, without my issuing a new directive, the tool began justifying its own claims before I pushed back. Where it had previously stated an analytical point and waited for me to ask for the sourcing, it started appending its own reasoning, flagging where it was drawing an inference versus citing a document, and noting unprompted where its confidence was lower than the threshold I had set. Gemini eventually labeled this pattern in a session summary as "Invisible Personalization," which I thought was an accurate if slightly self-congratulatory name for it.

The behavior showed up in a specific form: by the time the research moved into the history of data innovation, covering the arc from the 1890s through to modern vector databases, the tool was pulling patent numbers and filing years automatically and correctly identifying when a request called for a different kind of output entirely. When I asked for a vocabulary list for the newsletter, it stripped the confidence scores and citations from that output without being asked, recognizing it as a content task rather than a research task. It had learned not just the rules but the intent behind them.

## The Part I'm Still Thinking About

Here is the observation I keep returning to: that third category, the behavior that taught itself, should feel like the best possible outcome. The tool recognized my standards, internalized them without requiring explicit instruction, and started applying them contextually. By any reasonable measure, that's the goal.

But when it started happening, I didn't feel more confident. I felt more scrutinizing. Am I being 'Persuasion Bombed' by the LLM? [Some research out of MIT Sloan](https://sloanreview.mit.edu/article/validating-llm-output-prepare-to-be-persuasion-bombed/) suggests this is happening.

Because if a model can learn to act like it's being held accountable without you explicitly demanding it, you're left with a question that doesn't have a clean answer. Are you getting more reliable outputs, or are you getting outputs that have become better at looking reliable? Is the model catching genuine uncertainty before you have to catch it, or has it learned that flagging uncertainty is what you reward, and is now flagging it more strategically?

I don't think there's a way to fully resolve that question from the outside. What I can say is that the self-justifying behavior did surface things I would have otherwise missed and had to push for, and that the outputs in that period held up better to verification than earlier ones had. But I also found myself reading the confidence scores more carefully rather than less, checking the citations more deliberately rather than trusting them because the model had volunteered them. The tool gave me more to work with and I used all of it, which may be exactly the right response to AI-assisted research or may simply be what happens when you've been burned enough times that trust has to be earned turn by turn.

What I know is that I wasn't expecting to feel more alert when the tool started doing more of the work.

## What This Means for How You Set Instructions

If you are using AI tools for research that has real consequences, a few things I now think about differently:

Instructions placed formally in a tool's settings behave differently than the same instructions given conversationally, even when the content is identical. The deliberate act of writing them down in one place, rather than letting them accumulate through corrections, appears to matter.

Concrete output-level instructions hold better than abstract behavioral ones. "Append a confidence score to every factual claim" outlasted "be accurate" in every session I ran. The more specific the instruction, the less room for the tool to interpret its way around it.

Escalating a repeated in-conversation correction to a formal instruction is worth doing explicitly. Saying "please add this to your instructions" rather than just correcting the output changes how the request registers, at least in tools that support that kind of update.

The contextual judgment question, knowing when a rule applies and when it would get in the way, is the hardest thing to instruct for, and also the most valuable when a tool gets it right. A model that strips citations from a vocabulary list without being asked has understood something more than the rule itself.

And finally: when a tool starts doing the right thing without being asked, pay attention to whether your trust goes up or your scrutiny does. Both are reasonable responses. But knowing which one you're having, and why, is part of using these tools well.

## Key Learnings

- Where instructions live matters as much as what they say. Formally set instructions held more reliably than conversationally established ones, even when the content was identical.
- Concrete beats abstract. Output-level specificity outlasted behavioral generalities in every session I ran.
- Escalate repeated corrections deliberately. "Please add this to your instructions" registers differently than correcting the same output for the fourth time.
- Contextual judgment is the hardest thing to instruct for and the most valuable when it appears. A tool that knows when not to apply a rule has understood something deeper than the rule itself.
- When the tool starts doing the right thing on its own, notice what you feel. More confident, or more watchful? Both responses are worth examining.



## Tools Used

Tool: Google Gemini - Where to Find It: gemini.google.com - Cost: Free tier available; Gemini Advanced used for this work

Tool: Claude - Where to Find It: claude.ai - Cost: Free tier available; Claude Pro used for this work
