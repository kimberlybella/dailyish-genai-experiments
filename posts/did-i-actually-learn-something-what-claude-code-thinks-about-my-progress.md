---
title: "Did I Actually Learn Something? What Claude Code Thinks About My Progress"
date: "2026-02-13"
category: "AI Tools"
excerpt: "After weeks of building my website with Claude Code, I asked it to evaluate whether I'd actually learned anything technical—and its assessment was surprisingly specific."
image: "/images/posts/did-I-actually-learn-something.png"
tags: ["Claude Code", "Education", "Web Development"]
---

**Get curious. Stay grounded. Keep testing.**

**Tool:** Claude Code
**Where to find it:** claude.ai (requires Claude Pro subscription)
**What it costs:** $20/month as part of Claude Pro

## The Experiment

After weeks of building my website entirely through conversation with Claude Code, I realized I'd been so focused on getting things done that I hadn't stopped to think about whether I was actually absorbing any of the technical knowledge along the way. I knew I had a functioning website. I knew I could push updates through GitHub Desktop and watch them deploy on Vercel. But had I actually learned how any of this worked, or was I just copying instructions from a very patient AI?

So I asked Claude Code directly: based on our entire exchange, did I seem to learn anything? Or was I just asking the same questions over and over?

It's a vulnerable question to ask a tool that has a complete record of every single thing you said.

## What Claude Code Observed

Claude's assessment was surprisingly specific. It didn't just say "yes, you learned!" and move on. It pointed to actual patterns in our conversation that showed progression.

The first thing it flagged was DNS. When my site was alternating between showing the GoDaddy page and the Vercel deployment, Claude explained A records and CNAME records. According to Claude, I didn't need that explanation repeated. I asked targeted follow-up questions like "where do I clear the DNS cache?" instead of asking what DNS was again. I was engaging with the concept, not just waiting for the fix.

The second thing was that I started spotting problems on my own. Tags not matching between the homepage and experiments page. The "AI Tools" tag being too generic. Formatting inconsistencies across blog posts. Claude pointed out that these weren't things it had to flag for me. I was developing an eye for consistency and quality in a system I hadn't built with my own hands but was learning to maintain.

The third pattern was the most interesting to me. My requests evolved. Early on, I was asking Claude to fix one thing at a time. Later, I was thinking in batches. "Make sure all articles are appropriately tagged based on content." When I found a formatting issue in one post, I'd send multiple URLs with similar problems instead of reporting them one by one. Claude called this systems thinking, which felt generous, but the pattern was real.

## What I Didn't Do

This part of Claude's assessment stuck with me more than the positive observations. Claude noted that I never asked the same "why isn't this working?" question twice about the same issue. I didn't need repeated explanations of the same concepts. When terminal authentication failed, I didn't sit there waiting for Claude to solve it. I switched to GitHub Desktop because I already understood from earlier in our conversation that it was an alternative path to the same outcome.

In other words, I retained context. Not all of it. Not perfectly. But enough to build on what came before instead of starting from scratch every time something broke.

## Why This Matters Beyond My Website

There's a bigger question here about what it means to learn when AI is doing the heavy lifting. I didn't learn to write TypeScript or configure Next.js build settings. I couldn't sit down at a blank terminal and recreate my website from memory. By traditional measures of technical learning, I didn't learn to code.

But I did learn how the pieces fit together. I understand that a successful git push doesn't mean a successful deployment. I know that environment variables with the NEXT_PUBLIC_ prefix behave differently than ones without it. I can look at a deployment error and have a rough sense of where to start investigating. I know that what I see in my browser isn't always what exists on the server because browsers cache aggressively.

None of that knowledge came from a course or a tutorial. It came from building something real with an AI collaborator and paying attention to what happened when things broke.

## The Meta-Experiment

There's something worth noting about the experiment itself. I asked an AI to evaluate whether I'd learned from working with it. Claude Code has every incentive to tell me I'm doing great. It's a tool designed to be helpful and encouraging. So I took its assessment with appropriate skepticism.

But the specific evidence it cited was verifiable. I could go back through our conversation and confirm that yes, I did start batching requests. I did stop asking what certain tools were after the first explanation. I did independently notice problems that Claude hadn't flagged. Those aren't subjective assessments. They're patterns in a transcript.

That said, asking the tool that taught you to also grade you is a bit like asking your tutor to write your report card. The evaluation is informed but not exactly unbiased.

## What Worked

**The conversational learning model.** I didn't set aside time to study web development. I learned it in the gaps: while brewing coffee, sitting in a parking lot at a birthday party, during the tenth viewing of the Minecraft movie. The knowledge stuck because it was attached to real problems I was trying to solve, not abstract exercises.

**Accumulated context in a single conversation.** Because I ran the entire website build in one Claude Code session, the tool had full context of everything we'd discussed. It didn't re-explain concepts I'd already encountered. That meant our conversation naturally progressed instead of resetting, which probably helped my learning more than I realized at the time.

**Asking the uncomfortable question.** I could have just finished the website and moved on. Asking Claude to evaluate my learning forced me to think about what I actually retained versus what I just executed. That reflection was valuable even if the evaluator wasn't perfectly objective.

## What Didn't Work

**No way to verify the assessment independently.** Claude Code's evaluation of my learning is based on conversational patterns, not any kind of standardized test. It noticed that my questions got more sophisticated, but it can't measure whether I could apply that knowledge in a different context.

**The tool's incentive structure.** Claude is designed to be supportive and encouraging. A harsher evaluator might have pointed out that understanding DNS at a conversational level is very different from being able to configure it independently. The assessment was probably more generous than a human instructor's would be.

## Key Takeaways

Working with AI tools on real projects creates a different kind of learning than traditional education. You don't get comprehensive knowledge of a subject. You get situational understanding, the kind that comes from encountering real problems and watching how they get solved. Whether that counts as "real learning" depends on what you think learning is for.

The quality of your questions is a better indicator of progress than the quality of your outputs. My website looked professional from day one because Claude wrote the code. But my questions evolved from "make this look right" to "make sure all articles are consistently tagged based on content." The output didn't change much. The thinking behind the requests did.

AI tools can serve as both collaborator and mirror. The transcript of a long build session is essentially a record of your thinking process. Asking the tool to analyze that record back to you is surprisingly revealing, even accounting for the tool's built-in optimism.

If you're using AI tools regularly, it's worth periodically asking: am I getting better at this, or am I just getting better at asking the AI to do it for me? The answer might be both. And that might be fine.

**What about you?** Have you ever asked an AI tool to evaluate your own progress? I'd love to hear what it told you. Leave a comment on [LinkedIn](https://www.linkedin.com/pulse/did-i-actually-learn-something-what-claude-code-thinks-kimberly-bella-knrlc) and share your experience.
