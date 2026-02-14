---
title: "The Data Trail We Leave Behind - Part 1: The Fragmented Picture Problem"
date: "2026-02-09"
category: "Safety & Limitations"
excerpt: "I have professional training in data privacy and years of experience studying how permissioning experiences affect user trust—and I still can't clearly articulate what the tradeoffs of using AI tools actually mean for everyday users."
image: "/images/posts/the-data-trail-we-leave-behind-when-AI-gets-too-useful-to-avoid.png"
tags: ["Data Privacy", "ChatGPT", "Claude", "Google Gemini"]
---

**Get curious. Stay grounded. Keep testing.**

I've been deliberately careful about data privacy throughout my AI experiments. My background in consumer research and product testing in the data privacy space taught me early what the real costs are when you hand over personal information to tech platforms. Part of that work involved studying consumer behavior around data permissioning experiences and how different approaches either built or destroyed trust between users and companies. For months, I mostly stuck to low-risk experiments where exposed data doesn't matter much.

The experiments worth doing increasingly require real data to be meaningful. Testing whether ChatGPT can edit a generic stock photo tells you almost nothing useful. Testing whether it can identify and remove a stranger from your actual vacation photo reveals whether the tool works in practice. Analyzing a sanitized spreadsheet of fake purchases misses all the messy real-world edge cases. Analyzing your actual Costco receipts shows you what these tools can and can't handle when data doesn't arrive pre-cleaned.

The better these AI tools get, the harder it becomes to test them authentically without sharing information I'd previously have kept off some company's servers entirely.

## The Tools I've Been Using

For context if you have not been following along, my experiments have involved:

- **ChatGPT** (OpenAI)
- **Claude** (Anthropic)
- **Google Gemini** (Google)
- **Perplexity** (Perplexity AI)
- **DuckDuckGo and DuckAI** (DuckDuckGo)
- **Various specialized tools:** FaceTune, Picture This, ScholarAI, Microsoft Copilot, Canva
- **Browser extensions and AI agents:** ChatGPT's Atlas browser, Chrome extensions

Most use free or freemium tiers, which means their business models currently depend on something other than my subscription fees. That "something" is worth understanding, but good luck finding clear explanations of what it actually is.

## The Shift in What's Worth Testing

Early on, I could run interesting experiments with minimal data exposure. Questions about whether AI understands recipe conversions or can explain homework concepts don't require personal information, aside from the inference it could make that I have children of certain ages based on the questions.

As AI capabilities expand, the valuable experiments shift toward tasks that actually matter in daily life. Those tasks inherently involve personal data. Photo editing and analysis requires uploading actual images from your life, not carefully selected stock photos that conveniently avoid showing anything identifying. Financial data analysis using real purchase histories matters because fake data doesn't capture the inconsistencies, categorization challenges, and calculation edge cases that reveal whether a tool actually works for you.

Calendar and scheduling assistance needs access to real appointments, locations and commitments to test whether AI can meaningfully help with time management. Document processing with genuine PDFs and files contains the formatting quirks, scanning artifacts, and structural variations that sanitized test documents never include. Code and web development requires sharing enough context about actual projects to determine if AI can function as a useful development partner rather than just a toy for demo purposes. Plant identification and home project help means uploading photos that inevitably reveal details about where you live and how your space looks.

The experiments I'm most interested in now require sharing information I spent years advising others to try and protect from tech platforms. What keeps me up at night about all of this innovation is that I have professional training in data privacy and years of experience studying how permissioning experiences affect user trust, and I still can't clearly articulate what these tradeoffs actually mean in practical terms for everyday users.

## What I've Actually Shared (And Where It Lives)

When I map out my recent experiments, the data exposure is significant. More interesting is how fragmented it is across platforms, and how differently each platform has interpreted the data I've given it.

ChatGPT has seen my Costco purchase history and generated a caricature of me based on our conversations. That caricature was telling precisely because of what it captured and what it missed. It reflected a slice of who I am based on the specific interactions I'd had with that platform, but it was clearly incomplete. The version of me that exists in ChatGPT's data is someone interested in AI experimentation and newsletter writing, someone who shops at Costco and asks questions about data analysis. It's accurate as far as it goes, but it's a fragment.

Claude has a different fragment. Through my website building experiments with Claude Code, it knows about my technical capabilities and the tools I use. Through our conversations about newsletter structure and writing style, it understands my communication preferences. Through the countless questions I've asked while testing its features, it has a profile of my curiosity patterns and how I approach problem-solving.

Google Gemini revealed something particularly striking about how these platforms build their understanding. When I asked it to describe my persona based on what it knows about me, it built almost the entire character sketch around the custom instructions I'd given it at the beginning. I'd told Gemini to include confidence scores in its responses and always source everything. Its description of me centered on someone who values rigorous methodology, evidence-based analysis, and transparent uncertainty quantification.

That's not wrong exactly. Those are real aspects of how I approach my work. The problem is that Gemini weighted those instructions (which took me two minutes to write as formatting preferences) as heavily as or more heavily than everything else I'd shared through actual experiments and conversations. The persona it built was based more on how I'd asked it to format responses than on the substance of what I'd actually used it for. It's like meeting someone at a party and building your entire impression of them around the fact that they asked you to speak clearly because the room is loud.

DuckDuckGo and DuckAI have their own slice of my search patterns and questions. Perplexity has my research patterns and the questions I ask when I'm trying to understand complex topics. Picture This has a record of every plant in my garden and yard. FaceTune has edited photos from my actual life.

Each platform holds a different piece of the puzzle. None of them has the complete picture, which is both reassuring and unsettling. It's reassuring because no single company can build a comprehensive profile of me from their data alone. It's unsettling because I have no way to see what that complete picture would look like if all these fragments were combined, and I have no guarantee they won't eventually be.

## The Browser Extension Risk Layer

The browser-based AI tools represent a particular challenge because they require architectural permissions that create vulnerabilities the average user has no framework for understanding.

When I tested ChatGPT's Atlas browser integration, I wasn't naive about what access I was granting. I know what browser extensions can do. Explaining that risk to someone without a technical background is where things get murky.

The risks I understand include code injection vulnerabilities where extensions with elevated permissions become attractive targets for exploitation, regardless of whether the parent company is trustworthy. The architecture itself creates the risk. Traffic routing through third-party servers when AI browsing agents process your requests adds another entity to the chain that handles your browsing data beyond your ISP and destination websites.

Operating within authenticated sessions means AI tools interacting with sites where you're logged in have access to anything you can access in that session. Persistent permissions remain active across your browsing even when you're not actively using the AI features, because that's how browser extensions work.

What I can't explain clearly is the actual probability of these vulnerabilities being exploited. What's the real-world harm scenario for a typical user? The technical risks exist, but translating them into concrete "this could happen to you" warnings feels like guesswork even for someone who understands the mechanisms.

The companies building these tools certainly aren't providing that clarity. Their messaging focuses on convenience and capability, not on helping users understand what they're exposing or what reasonable worst-case scenarios look like. From a trust perspective, this approach works in the short term because users are drawn to the promised benefits. My research showed that this is exactly when users are most vulnerable to accepting permissions they don't understand, because the immediate value proposition overshadows the abstract future risks.

## The Local Access Problem

Browser extensions aren't the only AI tools requiring deep system access. When I built my newsletter website with Claude Code, I had to grant it significant permissions to my local file system and development environment.

Claude Code needed the ability to create and modify files across my project directories, install packages and dependencies, run terminal commands with elevated privileges, and access my development tools. This level of access is necessary for any coding assistant to actually function as a development partner rather than just a suggestion engine. Without it, the tool can only suggest code that I'd have to implement myself, which defeats the purpose of having an AI assistant handle the actual development work.

The tradeoff is that Claude Code could see and potentially interact with far more than just the website files I was actively working on. Any other projects, configuration files, or sensitive information stored in accessible directories on my machine became part of what I was exposing to make the tool work effectively.

This creates a different kind of vulnerability than browser extensions. Instead of intercepting web traffic or operating within authenticated browser sessions, local development tools have direct access to your file system. That means access to code repositories, API keys stored in environment files, database credentials, SSH keys, project files, personal documents that happen to be in nearby directories, and anything else that lives on your machine within the permissions you grant.

I understood this tradeoff when I started using Claude Code. The alternative would have been building my website entirely manually, which would have taken significantly longer and wouldn't have let me test whether AI coding assistants are actually useful for real development work. The tension I'm experiencing is that meaningful testing requires meaningful access, and meaningful access creates meaningful exposure.

What I can't assess clearly is what happens to the information Claude Code accessed during our development sessions. The code it wrote and the files it created are obvious. What about the context it needed to understand my project structure? What about the glimpses it got of other directories when navigating my file system? What metadata about my development environment, installed tools, and system configuration got captured? The privacy policy provides the usual vague language about improving services and protecting user data, but it doesn't help me understand specifically what data persists from these local interactions.

The thought of testing something like clawdbot personal AI assistants, now moltbot, absolutely terrifies me and I fully appreciate many people's instinct to buy a separate computer just for testing purposes. That is not currently in my "experimenting for fun" budget.

## The Incomplete Picture Problem

The fragmented nature of my data across platforms creates an interesting paradox. On one hand, no single company has enough information to fully profile me. The caricature ChatGPT generated and the character description Gemini wrote both proved that point. ChatGPT captured elements of my personality and interests that came through in our conversations, but it was obviously incomplete. Gemini's description was even more telling in its incompleteness because it revealed how much weight these systems can place on relatively arbitrary inputs.

It also leads me to think Google has not yet determined how to incorporate how much it knows me as a user into the Gemini experience for paid users. In the early days I had to repeatedly tell it to stop using my location data in the bedtime stories it was writing for my kids. Back then it tried to convince me that I had told it to use my location in the stories, when I had explicitly asked it to "Stop" and "Do not" use my location.

Fast forward to now and the formatting instructions I gave Gemini to help me evaluate the quality of its responses became, in its understanding, core aspects of my identity. That's a strange kind of distortion where the meta-level preferences (how I wanted information presented) overshadowed the actual content level information (what I was actually using the tool for, what questions I asked, what problems I was solving).

Anyone who knows me would recognize aspects of both the ChatGPT caricature and the Gemini description while also immediately spotting what's missing. Neither representation captures my actual work in data privacy, my years of consumer research experience studying trust and permissioning behavior, my family life, my interests outside of AI experimentation, or dozens of other aspects that make up who I am.

On the other hand, I have no idea whether that fragmentation actually provides meaningful protection. The companies I'm sharing data with aren't required to tell me which third-party partners have access to my information. They aren't required to disclose whether they're contributing my data to shared advertising networks or analytics platforms that could theoretically connect the dots across services.

Each platform has its representation of me, drawn from the specific interactions I've had with their tools and weighted according to whatever internal logic their systems use to determine what matters most. Those representations are incomplete individually and oddly distorted by factors I couldn't have predicted (like formatting preferences dominating a character sketch). The question isn't whether any single platform fully understands me. The question is whether the fragments I've distributed can be reassembled, and if so, by whom and under what circumstances.

The caricature ChatGPT made of me and the character sketch Gemini wrote both live somewhere on their respective companies' servers as representations of who their AIs think I am based on our interactions. They're both partial and somewhat distorted, each one emphasizing different aspects based on what data each platform had access to and how their systems weighted that information. Every other platform I've used has its own version of that representation, each one different, each one incomplete, each one storing a slice of my life that I handed over to test whether their tools actually work.

## The Tradeoffs I'm Making Without Really Knowing What They Mean

I could run all my experiments with sanitized data, rotating anonymous accounts, and carefully controlled test scenarios that limit exposure. That would fundamentally change what I'm testing and what value these experiments provide.

My newsletter exists to show how AI tools work in real-world conditions with actual data and genuine use cases. Authentic testing means accepting similar privacy tradeoffs that regular users face, often without the professional background to fully understand what they're accepting.

Even with the background, including years of studying exactly how permissioning experiences affect user trust and decision-making, I still can't make fully informed decisions because the information needed to make them doesn't exist in clear, actionable form.

I'm making calculated decisions about data exposure. I'm distributing sensitive data across platforms rather than giving any single company a complete profile. This probably reduces risk, but I can't quantify by how much or whether it matters if these companies eventually share data with common partners.

My financial data lives with one platform, my photos with another, my technical work with a third. I made those distribution choices deliberately, treating it as a form of compartmentalization. If one platform gets breached or changes its data practices in ways I find unacceptable, at least they only have access to a portion of my information.

The limitation of this strategy is that I have no visibility into whether it actually matters. If these companies are already sharing data with the same advertising networks or analytics partners, my careful distribution across platforms might be meaningless. The privacy policies hint at third-party sharing but rarely specify which third parties or under what circumstances. I'm playing a defensive game without knowing where the actual boundaries are.

## What This Means for Regular People

The examples I've shared aren't unique to me. Every user of these AI tools is creating their own set of fragmented profiles across platforms. Your ChatGPT has its version of you. Your Gemini has its version. Your Claude, your Perplexity, your various specialized tools all have their pieces of the puzzle.

What makes this challenging is that you have no way to see what those representations look like or predict how they might be distorted. You don't know if your formatting preferences will overshadow your actual usage patterns. You don't know if that casual mention of where you live will be weighted more heavily than the substantial work project you discussed in detail. You don't know which fragments might eventually be connected through third-party partnerships you're not aware of.

The question you need to ask yourself for each experiment or use case isn't just "am I comfortable sharing this specific piece of data with this specific platform?" It's also "am I comfortable with how this platform might interpret this data in ways I can't predict, store it alongside other data in combinations I can't see, and potentially share it with partners I don't know about?"

That's a much harder question to answer, especially when the companies building these tools provide almost no information to help you answer it.

## Looking Ahead

In Part 2, I'll dig into the trust gap that makes these decisions even harder. We'll explore what happens when business models evolve, how policy changes affect data you shared months ago, and why the permissioning experiences AI companies have chosen are the opposite of what research shows builds sustainable user trust. We'll also look at what companies could do differently to provide the clarity users need to make genuinely informed decisions.

For now, the takeaway is this: your data lives in fragments across these platforms, each fragment potentially distorted in unpredictable ways, and you have no visibility into whether those fragments stay separate or get reassembled. That's not a reason to stop using AI tools if they're valuable to you. It's a reason to be strategic about which data you share with which platforms, and to recognize that even that strategy might not provide the protection you think it does.

## Key Learnings

The better AI tools become at handling real-world tasks, the harder it is to test them meaningfully without exposing personal data, creating a fundamental tension between authentic experimentation and privacy protection that companies do nothing to help users navigate.

Each AI platform builds its own fragmented profile of users based on specific interactions, but these profiles can be unpredictably weighted and distorted (like Gemini building a persona primarily from formatting instructions rather than substantive content), making it impossible to know what representation is actually being created.

Distributing personal data across multiple AI platforms creates incomplete individual profiles, but users have no visibility into whether fragmentation provides real protection or whether data gets reassembled through undisclosed third-party partnerships and shared services.

Browser-based AI tools and extensions introduce architectural vulnerabilities that most users cannot assess, and companies market these tools on convenience while providing no framework for understanding realistic harm scenarios or exploitation probabilities.

Even with a professional background in data privacy and consumer behavior research, making informed decisions about AI tool usage remains difficult because the specific information needed to assess tradeoffs (including how systems weight different data types, which third parties access information, and under what circumstances fragments might be connected) simply isn't provided in clear, actionable terms. In many cases I would wager the platforms themselves don't yet know what they'll do or what they'll have to do to continue funding growth in the future.

**What about you?** How do you think about the data you share with AI tools? Leave a comment on [LinkedIn](https://www.linkedin.com/pulse/data-trail-we-leave-behind-part-1-fragmented-picture-kimberly-bella-uabkc/?trackingId=ReZRLFquT3iDHvmSpIKGFg%3D%3D) and share your approach.
