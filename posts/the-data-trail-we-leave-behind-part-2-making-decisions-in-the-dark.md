---
title: "The Data Trail We Leave Behind - Part 2: Making Decisions in the Dark"
date: "2026-02-19"
category: "AI Tools"
excerpt: "In Part 1, I explored how my data lives in fragments across AI platforms, with each company holding incomplete and potentially distorted representations of who I am. The deeper problem isn't just that these fragments exist. It's that the companies controlling them are making choices that undermine the very trust they need from users..."
image: "/images/posts/the-data-trail-we-leave-behind-part-2-making-decisions-in-the-dark.jpg"
tags: ["Privacy", "Claude Code", "ChatGPT", "Gemini", "Claude"]
---

In Part 1, I explored how my data lives in fragments across AI platforms, with each company holding incomplete and potentially distorted representations of who I am. The ChatGPT caricature captured some aspects while missing others. Gemini built its understanding primarily from formatting instructions I'd given it rather than from substantive content. Each platform has its own partial picture.

The deeper problem isn't just that these fragments exist. It's that the companies controlling them are making choices that undermine the very trust they need from users in the long run. My background in consumer research included years studying how data permissioning experiences affect user trust. What I'm seeing in the AI industry contradicts almost everything that work taught me about building sustainable relationships between companies and users.

## What I Know About Trust and Permissioning

My consumer research work taught me that people make trust decisions based on several factors when they're asked to share data. Clear explanations of what data will be used for and how long it will be kept matter. Granular control over what gets shared versus blanket "accept all" approaches matter. Transparency about who else will have access to the data matters. The ability to revoke permissions and actually have that revocation mean something matters.

The AI tools I'm testing fail on almost all of these dimensions. The permissioning experience is typically binary: use the tool with full data access or don't use it at all. The explanations of data usage are deliberately vague. The disclosure of third-party access is minimal. The clarity around retention and deletion is murky at best.

These are exactly the conditions that would make users feel uncomfortable and uncertain about whether to proceed. The difference is that with AI tools, the capabilities are compelling enough that many users (including me) proceed anyway, accepting permissioning terms that in other contexts would trigger immediate rejection.

## The All-or-Nothing Problem in Practice

The binary permissioning problem becomes particularly clear with tools like Claude Code that need local file system access to function. When I was building my newsletter website, the choice wasn't "grant access to this specific project folder" or "allow these specific operations." The choice was "grant broad file system access and terminal command privileges" or "don't use the tool at all."

Claude Code required access to create and modify files across my project directories, install packages, run terminal commands, and navigate my development environment. That's genuinely necessary for it to function as a coding assistant rather than just a suggestion engine. Without that access, it couldn't actually build my website.

The problem isn't that the tool needs access. The problem is that I had no way to grant limited access that matched my actual use case. I couldn't say "you can access only this project folder and nothing else" or "you can create files but not read existing ones outside the project directory." The granularity that would have let me feel confident I was granting exactly the access needed and nothing more simply isn't available.

This all-or-nothing approach makes sense from the company's development perspective. Building granular permission systems is complex and expensive. Supporting users who grant partial permissions and then complain when features don't work creates support costs.

The tradeoff is that users who grant broad permissions because they have no other choice will eventually question whether they should have trusted so completely, especially if they later learn their data was used in ways they didn't anticipate.

What makes this particularly frustrating is that the technical capabilities to build granular permission systems exist. Operating systems have sophisticated access control mechanisms. Containerization and sandboxing technologies can limit what applications can see and do. The choice not to implement granular controls for AI tools is a business decision, not a technical limitation.

## The Monetization Question Nobody's Answering

We're in an awkward phase where consumer AI tools are building user bases faster than they're building sustainable business models. I've watched this pattern before in other technology sectors, and I know how it typically resolves. What I don't know is how it will resolve specifically for AI tools.

Right now, many AI companies are focused on capability demonstrations and user acquisition. The data that makes these tools genuinely useful (understanding context, remembering preferences, learning your patterns) is exactly the data that would enable effective targeted advertising. Most companies haven't explicitly moved to advertising models yet, but the economic incentives are clear.

What happens to all the data users are sharing right now? The honest answer is that we don't know. The privacy policies contain language that technically allows for various uses, but they don't explain what those uses will actually be or when they might change.

When Anthropic changed its policy on training with consumer chat data, it was legal and disclosed. Users were notified. How many people actually understood what that change meant for conversations they'd had months earlier? How many knew they could opt out, or understood what opting out actually prevented versus what it didn't?

This lack of clarity isn't unique to Anthropic. It's industry-wide. Companies are navigating uncertain business model territory while preserving optionality in their policies. That makes sense from a business perspective (why commit publicly to constraints you might want to change?) but it leaves users making decisions with incomplete information about what those decisions actually cost.

When users feel they made a decision based on one set of terms and then discover those terms changed after the fact (even with legal notification), it creates lasting skepticism about the company's reliability. Every vague policy that later gets clarified in ways users didn't anticipate can feel like a bait-and-switch, even if that wasn't the intent.

The fragmented nature of my data across platforms might offer some protection if these companies remain truly separate. If they start forming partnerships, sharing data with common advertising networks, or selling access to third parties, those fragments could be reassembled. The caricature ChatGPT made of me could be combined with the technical profile Claude has built, the oddly instruction-focused persona Gemini created, the photo metadata Google has collected, and the purchasing patterns revealed in my Costco analysis. What would that composite look like? I genuinely don't know, and I have no way to find out.

## What I'm Watching For

Based on my background in this space, I can identify concerning patterns as they develop.

The convergence of AI assistants with advertising platforms will probably happen, but I can't tell you when or exactly how your AI chat history will connect with ad targeting. The companies themselves may not have decided yet.

Data pooling across sister products is technically possible and economically logical, but which data gets pooled with what, under what circumstances, and with what notice to users? That's not clearly disclosed.

Third-party integration expansion extends AI tool access and creates complex data-sharing relationships, but good luck finding clear documentation of which third parties get access to what data under which conditions.

The training data question about whether derivatives of user conversations persist in models even after account deletion remains genuinely unclear across most platforms. The answers seem to vary by company, by model, and possibly by how old your conversations are.

Normalization of extensive data sharing is definitely happening as AI tools shift from experimental novelties to essential productivity tools. Whether that normalization is happening faster than user understanding is also happening, I genuinely don't know. Rapid normalization without corresponding growth in user understanding is exactly when trust problems emerge, usually after something goes wrong that users didn't anticipate.

These patterns concern me, but I can't translate them into specific user guidance because the specific outcomes remain speculative. I can say "this could happen" but I can't say "this will happen, at this time, and you should prepare this way."

## The Core Tension Nobody's Solving

The experiments I find most valuable now require data exposure I would have avoided entirely a few years ago. Not because I've become careless about privacy, but because AI capabilities have reached a threshold where sanitized testing stops being meaningful.

I'm also aware that I'm testing these tools without clear information about what I'm really agreeing to, what the data will ultimately be used for, or what the practical risks actually are. I have more information than most users, including specific training in how permissioning experiences should work to build trust, and it's still not enough to make fully informed choices.

Testing AI tools authentically requires real data. Real data has privacy implications. What those implications actually are in practical terms remains frustratingly opaque, even for someone actively trying to understand them.

I'm choosing which experiments justify which exposures based on instinct and professional judgment more than concrete risk assessment, because concrete risk assessment isn't possible with available information. I'm documenting these tradeoffs transparently so readers can make different choices than I do, though I'm aware that what I'm documenting is my uncertainty as much as any clear guidance.

## The Takeaway

You can test AI tools carefully with minimal data exposure, or you can test them authentically with real-world applications. Increasingly, you can't do both.

When you decide to upload that photo or share that document with an AI tool, you're betting on how future business models will use your data, whether policy changes will apply retroactively, whether third parties will handle your information responsibly, and whether data fragments across platforms will stay separate or get reassembled. That's substantial uncertainty when companies could provide more clarity but choose to preserve flexibility instead.

Even with professional training in data privacy and years studying how permissioning experiences affect trust, I can't tell you exactly what happens to the data you share with AI tools or how to meaningfully protect yourself beyond vague strategies. My data lives in fragments across platforms, and I can't determine whether that provides real protection or just an illusion of it.

That's not because I'm not trying. It's because companies are navigating uncertain territory while preserving optionality, leaving users to experiment in the dark about what it costs in privacy terms to find out what these tools can do.
