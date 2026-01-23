---
title: "Trapped in the Chat: Why I Rebuilt My Claude App in Gemini 3"
date: "2025-11-24"
category: "Tool Comparison"
excerpt: "We often talk about \"Vendor Lock-in\" with enterprise software, but I recently discovered a new flavor of it: \"Prompt Lock-in.\""
image: "/images/posts/trapped-in-the-chat-why-i-rebuilt-my-claude-app-in-gemini-3.jpg"
tags: ["Gemini"]
---



We often talk about "Vendor Lock-in" with enterprise software, but I recently discovered a new flavor of it: "Prompt Lock-in."

I recently wrote a post about building a "Juicy Word Finder" for my second grader using Claude. As I detailed then, the experience was incredible. The concept was simple: she types in a boring word (like "said"), and the app suggests "juicier" modifiers (like "exclaimed" or "whispered").

Because Claude is "smart" and dynamic, the app it built was essentially a window into a supercomputer. It could access a near-infinite vocabulary. If my daughter typed in a complex or obscure word, the AI backend could handle it instantly.

## The Problem: The Ferrari in the Garage

But as I moved from "building" to "sharing," I hit a wall. When I asked, "How do I put this on my website?" the answer was a list of technical hurdles.

Because the app relied on Claude's live "brain" to function, I couldn't just copy-paste it. To share it with friends or put it on my site, I would have needed to set up a React environment, generate an API key, and pay for usage. I had built a Ferrari, but I couldn't take it out of the garage. It was an amazing tool that was completely stuck inside the chat window.

## The Gemini Shift: "Dumbing It Down" to Ship It

I took the exact same concept to Gemini, but with a new constraint. I didn't just ask for the app; I asked for code I could actually deploy to my GoDaddy website.

Gemini took a completely different architectural approach. Instead of building a tool that "thinks" every time you click a button, it built a static app. It wrote a self-contained list of words and definitions directly into the JavaScript code.

## The Trade-off

The Gemini version wasn't infinite. In fact, on the first test run, the app didn't even know the word "fun."

Me: "It doesn't know 'fun'."
Gemini: "Updating the internal library now..."

I had to manually ask it to expand the library of words. It was technically "dumber" than the Claude version because it wasn't connected to a live AI brain.

## The Lesson

But here is the win: It was portable. Because it didn't need an API key or a backend server, I could copy-paste the code directly onto my site and share it with my family immediately.

There is a massive difference between a Prototype (what I built in Claude) and a Product (what I shipped with Gemini). Sometimes, you have to sacrifice the "infinite intelligence" of the model to get something tangible you can actually use.



## Tools Used

Tool tested: Gemini 3

