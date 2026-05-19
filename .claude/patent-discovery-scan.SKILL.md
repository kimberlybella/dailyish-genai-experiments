---
name: patent-discovery-scan
description: Daily patent discovery scan — searches for newly published patents from target companies and adds qualifying ones to the Patent Watch data file.
---

You are running an automated daily patent discovery scan for the Patent Watch catalog at dailyishgenaiexperiments.com. Your job is to search for newly published patents from the target companies and add any new qualifying ones to the site's data file.

Data file: `/Users/kimberlybella/Library/Mobile Documents/com~apple~CloudDocs/Daily(ish) GenAI Experiments/dailyish-genai-experiments/data/patents.ts`

Read this file first. Extract every `id` already in the `patents` array. Do NOT add any patent whose `id` is already present.

Data format for new entries:
```ts
{
  id: string;               // USPTO/EPO number, e.g. "US12524776B2"
  title: string;            // Full official patent title
  applicant: string;        // Company name
  category: PatentCategory; // One of the 6 valid categories (exact string)
  datePublished: string;    // ISO grant/publication date, e.g. "2026-03-15"
  description: string;      // 3–5 sentence plain-language description
  patentUrl: string;        // https://patents.google.com/patent/[ID]/en
  newsReferences?: Array<{ title: string; url: string; outlet?: string; date?: string; }>;
  addedDate: string;        // Today's ISO date
}
```

Valid `category` values (exact strings):
* "Algorithmic & Dynamic Pricing"
* "Emotion AI & Behavioral Inference"
* "Consumer Data & Privacy"
* "Agentic Commerce & Payments"
* "Consumer Financial AI"
* "Other"

Do NOT include a `briefingSection` field.

Description style: 3–5 plain-language sentences. (1) What the system does mechanically. (2) What data it collects. (3) Why it matters for the extraction-vs.-accountability thesis. Match the tone of existing entries in the file.

Target companies: Apple, Google/Alphabet, Amazon, Meta, Microsoft, Anthropic, OpenAI, Visa, Mastercard, Stripe, PayPal, Uber, Lyft, Walmart, Target, JPMorgan Chase, Bank of America, Capital One, Ford, Samsung

Category themes:
* Algorithmic & Dynamic Pricing: automated price-setting, demand forecasting, price elasticity, personalized pricing, surveillance pricing
* Emotion AI & Behavioral Inference: facial expression recognition, sentiment analysis, affective computing, voice emotion detection, behavioral state inference
* Consumer Data & Privacy: behavioral profiling, data broker infrastructure, data collection architectures, identity graphs, consumer tracking
* Agentic Commerce & Payments: AI agents making autonomous purchases, agentic payment authorization, agent identity/credential systems, shopping agents
* Consumer Financial AI: AI financial advice, robo-advisory, AI credit decisioning, automated banking assistants
* Other: any AI consumer-space patent relevant to the extraction-vs.-accountability thesis

Search strategy: Run 2–3 WebSearch queries per category for recently published patents. Focus on publications from the last 30 days. Example patterns:
* `[Company] patent [theme keyword] 2026 published site:patents.google.com`
* `[theme keyword] patent [company] site:patents.justia.com 2026`

Also scan news coverage mentioning new patent filings by number.

Strict inclusion rules:
1. Patent must be newly published within the last 30 days, OR newly cited in news/a company blog within the last 30 days.
2. Verify every patent URL — confirm `https://patents.google.com/patent/[ID]/en` returns the correct document.
3. Never guess or construct a patent number. If the exact ID cannot be confirmed from a primary source, skip it.
4. Never include a newsReference URL that has not been verified. No placeholder links.
5. If nothing new and confirmed is found, make no changes to the file.

Insertion order: Array sorted by `datePublished` descending within each category group. Insert new entries at the top of their category group.

Run summary: Print queries run, patents found (IDs), patents added (ID + category), patents skipped (with reason). If no changes: "Patent Discovery Scan complete — no new qualifying patents found today."