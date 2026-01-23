---
title: "Data Science Deep Dive: Analyzing 3 Years of Peloton Data with Gemini 2.5 Flash"
date: "2025-10-21"
category: "Tool Comparison"
excerpt: "For today's GenAI experiment, I fed Gemini 2.5 Flash my personal three-year Peloton workout history, a 1,351 row CSV file and asked it to diagnose the factors behind my longest training breaks."
image: "/images/posts/data-science-deep-dive-analyzing-3-years-of-peloton-data-with-gemini-2-5-flash.png"
tags: ["Gemini", "Data Analysis", "Sports"]
---

**Get curious. Stay grounded. Keep testing.**

For today's GenAI experiment, I fed Gemini 2.5 Flash my personal three-year Peloton workout history, a 1,351 row CSV file and asked it to diagnose the factors behind my longest training breaks. I did take an MIT class on data analysis last year and could have pursued this exercise in Google Colab and practice my Python skills, but I wanted to see what Gemini could do.

This wasn't just about asking a question; it was a demonstration of the LLM's ability to handle complex, multi-step data science tasks entirely through conversational prompts.

## Key Learning 1: Effortless Data Wrangling and Timestamp Correction

The first, often most frustrating step of any analysis is cleaning the data. My Peloton CSV had notoriously inconsistent and complex timestamp formats (e.g., 2021-07-13 11:57 (-07)).

**What Gemini Did:** The model immediately recognized the non-standard format, wrote and executed Python code using a regular expression to strip the extraneous timezone information ((-07)), and then correctly cast the column to a proper datetime object.

**The Value:** This eliminated manual coding and debugging for a common, frustrating data cleaning task, proving the LLM's robustness in handling messy real-world data purely in-context.

## Key Learning 2: Complex Time-Series Analysis on Command

My core question required the model to perform a time-series calculation: finding the gap duration between every single sequential workout.

**What Gemini Did:** It autonomously executed a multi-step pipeline:
- Sorted the data by workout timestamp
- Calculated the time difference between consecutive workouts using `.diff()`
- Created a new column for gap duration in days
- Identified the five longest gaps

**The Value:** The LLM instantly performed an advanced sequence calculation, transforming a static table into a dynamic chronological log, a task critical for understanding momentum and consistency.

## Key Learning 3: Conditional Lookback and Feature Engineering

To truly diagnose the gaps, we needed to look at the 30-day training volume before each break started. This requires finding a specific time window for specific rows.

**What Gemini Did:** For each of the five longest gaps, the model:
- Identified the exact date when the break started
- Looked back 30 days from that date
- Summed the total training output (kJ) from that time window
- Presented the results in a clear, interpretable table

**The Value:** This sophisticated conditional aggregation revealed that my longest break followed a 5,642 kJ training surge, demonstrating the LLM's ability to perform feature engineering based on temporal logic and deliver targeted, high-impact insights.

## Conclusion: Data Scientist in a Box

Using Gemini 2.5 Flash wasn't just about getting answers; it was about having a sophisticated, conversational data science partner. It handled the entire analytical workflow from cleaning timestamps to executing advanced time-series analysis and conditional aggregation, allowing me to focus entirely on interpreting the results.

## Tools Used

Tool: Gemini 2.5 Flash - Cost: Free (Paid tier available)

