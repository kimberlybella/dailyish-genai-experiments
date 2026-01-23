---
title: "Custom Instructions to Combat GenAI Hallucinations"
date: "2025-11-07"
category: "Tool Comparison"
excerpt: "On Wednesday I shared an example of a wild hallucination that resulted from the Gamma implementation of GPT5. Today, I'd like to share some tips on how to use custom instructions in the models you use..."
image: "/images/posts/custom-instructions-to-combat-genai-hallucinations.png"
tags: ["Claude", "ChatGPT", "Gemini", "Perplexity"]
---



On Wednesday I shared an example of a wild hallucination that resulted from the Gamma implementation of GPT5. Today, I'd like to share some tips on how to use custom instructions in the models you use to help reduce the hallucination risk and get better outputs.

One of the biggest challenges in working with Large Language Models (LLMs) is the risk of hallucinations—outputs that sound plausible but are factually incorrect or poorly sourced.

The good news? A simple technique can drastically reduce this: Custom Instructions.

## What Are Custom Instructions?

Custom Instructions are persistent, high-level directives you set within a GenAI tool (like ChatGPT, Gemini, Claude, and others) that the model considers for every single prompt in that conversation or session.

Think of them as your AI's permanent "trust and verification" protocol. By leveraging this feature, you move beyond basic prompting to program the model's core behavior.

## How to Use Them to Stop the Lies

You can instruct the AI to adopt a strict, evidence-based mindset. Here are three powerful, actionable instructions you can implement today to get more trustworthy outputs:

## Directive: Strict Sourcing

Goal: Enforce grounding in verifiable data.
Example Instruction: "You must only use information you can cite. If you cannot find a source, state 'Source not available' instead of guessing."

## Directive: Confidence Scoring

Goal: Make the AI flag its own uncertainty.
Example Instruction: "For any factual claim, assign a confidence score (on a 1-10 scale). Only include claims with an 8 or higher in the final output."

## Directive: Citation Requirement

Goal: Demand inline references for all data and statistics.
Example Instruction: "Ensure immediate, transparent traceability."Always include in-line or numbered citations (even for web-search results) for any specific data, statistic, or quote."

Pro Tip: If you are writing fiction or want to do a creative brainstorming session that pushes the boundaries of reality with a LLM, you may want to remove the suggested custom instructions in those cases

## The Power of Persistence

The real value of custom instructions is that they don't need to be repeated. Once set, the AI's internal logic is persistently recalibrated, leading to a more consistent and reliable experimental partner.

By being explicit about your need for accuracy, sourcing, and transparency, you teach the model to prioritize evidence over fluency, transforming it from a creative storyteller into a rigorous research assistant.

Here is how to set custom instructions on some of the major systems (at the time I wrote this newsletter)

1. Claude (by Anthropic)

Click on the gear icon > Settings > General > add your instructions to the "What personal preferences should Claude consider in responses?"

## 2. Gemini (by Google)

Click on the gear icon > Instructions for Gemini > slide the toggle to the right > "Add" > add your instructions.

## 3. ChatGPT (OpenAI)

Click on your name on the bottom left corner > Settings > Personalization > Enable customization > add your instructions

## 4. Perplexity

I cannot yet figure out how to set these instructions in Perplexity, the only thing I can find is an option to give it personal details about me, not to improve the model itself. If I figure it out, I will post it.

## 5. Duck.ai (by DuckDuckGo)

Duck.ai's approach is slightly different: it focuses on setting the tone, length, or role (like "Chef" or "Teacher") directly within the chat interface, rather than a separate, custom instruction panel like ChatGPT's.

In the search box, click Customize > scroll down > add your custom instructions > Apply



## Tools Used

Tools: Claude, Gemini, ChatGPT, Perplexity, Duck.ai

