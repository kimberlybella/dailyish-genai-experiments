// ─────────────────────────────────────────────────────────────────────────────
// Patent Watch — data file
// Populated by the daily AI/Pricing/Privacy briefing each time a patent is
// newly published, or newly referenced in news or a company blog post.
//
// ADDING A NEW PATENT: append to the `patents` array below.
// Required: id, title, applicant, category, datePublished, description, patentUrl, addedDate
// Optional: newsReferences (news/blog posts that surfaced it), briefingSection
// ─────────────────────────────────────────────────────────────────────────────

export interface PatentNewsRef {
  title: string;
  url: string;
  outlet?: string;
  date?: string;
}

export interface Patent {
  /** USPTO or EPO patent number, e.g. "US12524776B2" */
  id: string;
  title: string;
  applicant: string;
  category: PatentCategory;
  /** ISO date string — when the patent was published/granted (not necessarily filed) */
  datePublished: string;
  /** 2–4 sentence plain-language description */
  description: string;
  /** Google Patents or USPTO canonical URL */
  patentUrl: string;
  /** News articles, company blog posts, or academic papers that surfaced this patent */
  newsReferences?: PatentNewsRef[];
  /** Which newsletter section this patent relates to */
  briefingSection?: string;
  /** ISO date this entry was added to this catalog */
  addedDate: string;
}

export type PatentCategory =
  | "Algorithmic & Dynamic Pricing"
  | "Emotion AI & Behavioral Inference"
  | "Consumer Data & Privacy"
  | "Agentic Commerce & Payments"
  | "Consumer Financial AI"
  | "Other";

export const PATENT_CATEGORIES: PatentCategory[] = [
  "Algorithmic & Dynamic Pricing",
  "Emotion AI & Behavioral Inference",
  "Consumer Data & Privacy",
  "Agentic Commerce & Payments",
  "Consumer Financial AI",
  "Other",
];

export const CATEGORY_DESCRIPTIONS: Record<PatentCategory, string> = {
  "Algorithmic & Dynamic Pricing":
    "Patents covering automated price-setting systems, demand forecasting, price elasticity modeling, and personalized or dynamic pricing engines. Includes both market-condition dynamic pricing and consumer-characteristic personalized pricing.",
  "Emotion AI & Behavioral Inference":
    "Patents covering facial expression recognition, sentiment analysis, affective computing, and systems that infer or respond to user emotional states for commercial purposes.",
  "Consumer Data & Privacy":
    "Patents covering data collection architectures, behavioral profiling systems, data broker infrastructure, and consumer data deletion or privacy-preserving mechanisms.",
  "Agentic Commerce & Payments":
    "Patents covering AI agents making autonomous purchases, agentic payment authorization protocols, AI shopping agents, and agent identity verification systems.",
  "Consumer Financial AI":
    "Patents covering AI-driven financial advice, robo-advisory systems, AI credit decisioning, automated banking assistants, and sentiment-aware financial tools.",
  "Other":
    "AI consumer-space patents relevant to the extraction-vs.-accountability thesis that don't fit neatly into the above categories.",
};

// ─────────────────────────────────────────────────────────────────────────────
// PATENT DATA
// Sorted by datePublished descending (newest first).
// ─────────────────────────────────────────────────────────────────────────────

export const patents: Patent[] = [

  // ── Algorithmic & Dynamic Pricing ─────────────────────────────────────────

  {
    id: "US12572954B2",
    title:
      "Machine Learning Demand Prediction and Price Recommendation Using Third-Party Data",
    applicant: "Walmart",
    category: "Algorithmic & Dynamic Pricing",
    datePublished: "2026-03-01",
    description:
      "A machine learning model trained on purchase history, payment methods, customer identification, and third-party data sources to predict item demand and generate recommended prices. The schematic in the filing explicitly shows third-party data as an input to the pricing engine — making this the more controversial of Walmart's two 2026 pricing patents, directly analogous to airline surveillance pricing that uses consumer identity signals to set fares. Where US12524776B2 automates markdown timing, this patent closes the loop by incorporating outside behavioral data to calibrate what price a given consumer will bear.",
    patentUrl: "https://patents.google.com/patent/US12572954B2/en",
    newsReferences: [
      {
        title: "Walmart's AI-Driven Surveillance Pricing Sparks Public Backlash and State Bans",
        url: "https://oecd.ai/en/incidents/2026-05-26-4cae",
        outlet: "OECD AI Policy Observatory",
        date: "May 2026",
      },
      {
        title: "How surveillance pricing could raise — or lower — your grocery costs",
        url: "https://www.newsweek.com/how-surveillance-pricing-could-raise-or-lower-your-grocery-costs-12005121",
        outlet: "Newsweek",
        date: "May 2026",
      },
      {
        title: "Americans demand ban on dynamic pricing — while a baffling portion prefer real-time price fluctuations",
        url: "https://nypost.com/2026/05/27/lifestyle/majority-of-americans-support-ban-on-electronic-dynamic-pricing/",
        outlet: "New York Post",
        date: "May 2026",
      },
      {
        title: "Most Americans want digital shelf labels and surveillance pricing banned amid grocery price fears",
        url: "https://www.techspot.com/news/112545-most-americans-want-digital-shelf-labels-surveillance-pricing.html",
        outlet: "TechSpot",
        date: "May 2026",
      },
      {
        title: "Commentary: Your personal data shouldn't be used to raise the price of your groceries",
        url: "https://www.timesunion.com/opinion/article/personal-data-shouldn-t-used-raise-grocery-prices-22278837.php",
        outlet: "Times Union",
        date: "May 2026",
      },
      {
        title: "Maryland won't let stores stalk your buying history; does your state?",
        url: "https://www.yahoo.com/news/politics/articles/maryland-wont-let-stores-stalk-164403413.html",
        outlet: "Yahoo Finance",
        date: "May 2026",
      },
      {
        title: "Grocery stores would have to limit price increases under proposed NYC bill",
        url: "https://pix11.com/news/local-news/grocery-stores-would-have-to-limit-price-increases-under-proposed-nyc-bill/",
        outlet: "WPIX",
        date: "May 2026",
      },
      {
        title: "Americans Demand Halt to Surveillance Pricing as States Race to Ban Digital Shelf Tags",
        url: "https://www.webpronews.com/americans-demand-halt-to-surveillance-pricing-as-states-race-to-ban-digital-shelf-tags/",
        outlet: "WebProNews",
        date: "May 2026",
      },
      {
        title: "Majority Of Americans Want Surveillance Pricing Banned Before It Takes Over Grocery Stores",
        url: "https://www.gadgetreview.com/majority-of-americans-want-surveillance-pricing-banned-before-it-takes-over-grocery-stores",
        outlet: "Gadget Review",
        date: "May 2026",
      },
      {
        title: "Attorney General James Rallies in the Bronx to Ban Surveillance Pricing",
        url: "https://ag.ny.gov/press-release/2026/attorney-general-james-rallies-bronx-ban-surveillance-pricing",
        outlet: "New York State Attorney General",
        date: "May 2026",
      },
      {
        title: "Attorney General James Rallies in Syracuse to Ban Surveillance Pricing",
        url: "https://ag.ny.gov/press-release/2026/attorney-general-james-rallies-syracuse-ban-surveillance-pricing",
        outlet: "New York State Attorney General",
        date: "May 2026",
      },
      {
        title: "Walmart Draws a Line Between Smart Markdowns and Dynamic Pricing",
        url: "https://www.pymnts.com/walmart/2026/walmart-says-ai-merchandising-patents-shouldnt-raise-dynamic-pricing-fears/",
        outlet: "PYMNTS",
        date: "March 2026",
      },
      {
        title: "California state Assembly passes key bill to prohibit surveillance pricing",
        url: "https://advocacy.consumerreports.org/press_release/california-state-assembly-passes-key-bill-to-prohibit-surveillance-pricing/",
        outlet: "Consumer Reports",
        date: "May 2026",
      },
      {
        title: "Walmart patents new AI technology to 'automatically update item prices'",
        url: "https://www.themirror.com/lifestyle/shopping/walmart-patents-ai-powered-pricing-1750390",
        outlet: "The Mirror US",
        date: "March 2026",
      },
      {
        title: "What Walmart's AI Pricing Patents Mean for Every Retailer",
        url: "https://www.inc.com/christopher-yang/what-walmarts-ai-pricing-patents-mean-for-every-retailer/91350049",
        outlet: "Inc.",
        date: "May 2026",
      },
      {
        title: "Walmart Surveillance Pricing Push Alarms 68% of Americans, Three States Now Banned It",
        url: "https://www.techtimes.com/articles/317279/20260527/walmart-surveillance-pricing-push-alarms-68-americans-three-states-now-banned-it.htm",
        outlet: "Tech Times",
        date: "May 2026",
      },
      {
        title: "Majority of Americans Support Ban on Surveillance Pricing and Electronic Shelf Labels",
        url: "https://gizmodo.com/majority-of-americans-support-ban-on-surveillance-pricing-and-electronic-shelf-labels-2000762717",
        outlet: "Gizmodo",
        date: "May 2026",
      },
      {
        title: "Surveillance Pricing: You're Watching Consumers — and Government Is Watching You",
        url: "https://www.corporatecomplianceinsights.com/surveillance-pricing-government-watching/",
        outlet: "Corporate Compliance Insights",
        date: "May 2026",
      },
      {
        title: "DOJ's Antitrust Division Has Its Eye On 'Algorithmic Collusion'",
        url: "https://www.pymnts.com/cpi-posts/dojs-antitrust-division-has-its-eye-on-algorithmic-collusion/",
        outlet: "Competition Policy International",
        date: "May 2026",
      },
      {
        title: "The push to target surveillance pricing now lies in the New York Assembly",
        url: "https://spectrumlocalnews.com/nys/central-ny/politics/2026/05/19/surveillance-pricing-",
        outlet: "Spectrum News",
        date: "May 2026",
      },
      {
        title: "Why surveillance pricing bans are suddenly gaining traction this year (and not just in California)",
        url: "https://calmatters.org/economy/technology/2026/05/why-surveillance-pricing-bans-are-suddenly-gaining-traction-this-year-and-not-just-in-california/",
        outlet: "CalMatters",
        date: "May 2026",
      },
      {
        title: "States Rush to Ban AI-Generated 'Surveillance Pricing' That Uses Shoppers' Personal Data",
        url: "https://money.com/surveillance-pricing-grocery-laws/",
        outlet: "Money",
        date: "May 2026",
      },
      {
        title: "Union Seeks Ban on 'Surveillance Pricing' at Grocery Stores",
        url: "https://civileats.com/2026/05/19/union-seeks-ban-on-surveillance-pricing-at-grocery-stores/",
        outlet: "Civil Eats",
        date: "May 2026",
      },
      {
        title: "Gottheimer Announces New Bipartisan Legislation to Ban AI Surveillance Pricing at Grocery Stores & Delivery Services",
        url: "https://gottheimer.house.gov/posts/release-gottheimer-announces-new-bipartisan-legislation-to-ban-ai-surveillance-pricing-at-grocery-stores-delivery-services",
        outlet: "Office of Congressman Josh Gottheimer",
        date: "May 2026",
      },
      {
        title: "Walmart Secures Two AI Pricing Patents, Raising Dynamic Pricing Concerns",
        url: "https://techspot.com/news/111752-walmart-secures-two-ai-pricing-patents-raising-dynamic.html",
        outlet: "TechSpot",
        date: "2026",
      },
      {
        title: "Walmart Secures Machine Learning Patents to Aid Retail Pricing",
        url: "https://www.pymnts.com/walmart/2026/walmart-secures-machine-learning-patents-for-pricing-items/",
        outlet: "PYMNTS",
        date: "2026",
      },
      {
        title: "Walmart Wins Patents for AI-Powered Price Changes",
        url: "https://gizmodo.com/walmart-wins-patents-for-ai-powered-price-changes-2000735833",
        outlet: "Gizmodo",
        date: "2026",
      },
      {
        title: "Walmart Patents AI Pricing Tools Amid Dynamic Pricing Scrutiny",
        url: "https://thepaypers.com/payments/news/walmart-patents-algorithmic-pricing-tools-amid-us-dynamic-pricing-debate",
        outlet: "The Paypers",
        date: "2026",
      },
    ],
    addedDate: "2026-05-18",
  },

  {
    id: "US12524776B2",
    title:
      "System and Method for Dynamically and Automatically Updating Item Prices on E-Commerce Platform",
    applicant: "Walmart",
    category: "Algorithmic & Dynamic Pricing",
    datePublished: "2026-01-01",
    description:
      "A machine learning system that uses price elasticity data and predicted demand to automatically generate markdown prices across Walmart's e-commerce platform. The patent covers two model paths: a primary model that fires when both elasticity and demand data are available (enabling precise per-item optimization), and a decay-rate fallback for when they are not — both bounded by configurable upper and lower price limits. Walmart publicly characterizes this as a 'markdown tool' rather than a dynamic or personalized pricing engine, but the underlying data infrastructure — per-item elasticity modeling, real-time demand signals — would make consumer-characteristic pricing technically feasible at scale. This is one of approximately 50 US patents Walmart secured in 2026.",
    patentUrl: "https://patents.google.com/patent/US12524776B2/en",
    newsReferences: [
      {
        title: "Walmart's AI-Driven Surveillance Pricing Sparks Public Backlash and State Bans",
        url: "https://oecd.ai/en/incidents/2026-05-26-4cae",
        outlet: "OECD AI Policy Observatory",
        date: "May 2026",
      },
      {
        title: "How surveillance pricing could raise — or lower — your grocery costs",
        url: "https://www.newsweek.com/how-surveillance-pricing-could-raise-or-lower-your-grocery-costs-12005121",
        outlet: "Newsweek",
        date: "May 2026",
      },
      {
        title: "Americans demand ban on dynamic pricing — while a baffling portion prefer real-time price fluctuations",
        url: "https://nypost.com/2026/05/27/lifestyle/majority-of-americans-support-ban-on-electronic-dynamic-pricing/",
        outlet: "New York Post",
        date: "May 2026",
      },
      {
        title: "Most Americans want digital shelf labels and surveillance pricing banned amid grocery price fears",
        url: "https://www.techspot.com/news/112545-most-americans-want-digital-shelf-labels-surveillance-pricing.html",
        outlet: "TechSpot",
        date: "May 2026",
      },
      {
        title: "Commentary: Your personal data shouldn't be used to raise the price of your groceries",
        url: "https://www.timesunion.com/opinion/article/personal-data-shouldn-t-used-raise-grocery-prices-22278837.php",
        outlet: "Times Union",
        date: "May 2026",
      },
      {
        title: "Maryland won't let stores stalk your buying history; does your state?",
        url: "https://www.yahoo.com/news/politics/articles/maryland-wont-let-stores-stalk-164403413.html",
        outlet: "Yahoo Finance",
        date: "May 2026",
      },
      {
        title: "Grocery stores would have to limit price increases under proposed NYC bill",
        url: "https://pix11.com/news/local-news/grocery-stores-would-have-to-limit-price-increases-under-proposed-nyc-bill/",
        outlet: "WPIX",
        date: "May 2026",
      },
      {
        title: "Americans Demand Halt to Surveillance Pricing as States Race to Ban Digital Shelf Tags",
        url: "https://www.webpronews.com/americans-demand-halt-to-surveillance-pricing-as-states-race-to-ban-digital-shelf-tags/",
        outlet: "WebProNews",
        date: "May 2026",
      },
      {
        title: "Majority Of Americans Want Surveillance Pricing Banned Before It Takes Over Grocery Stores",
        url: "https://www.gadgetreview.com/majority-of-americans-want-surveillance-pricing-banned-before-it-takes-over-grocery-stores",
        outlet: "Gadget Review",
        date: "May 2026",
      },
      {
        title: "Attorney General James Rallies in the Bronx to Ban Surveillance Pricing",
        url: "https://ag.ny.gov/press-release/2026/attorney-general-james-rallies-bronx-ban-surveillance-pricing",
        outlet: "New York State Attorney General",
        date: "May 2026",
      },
      {
        title: "Attorney General James Rallies in Syracuse to Ban Surveillance Pricing",
        url: "https://ag.ny.gov/press-release/2026/attorney-general-james-rallies-syracuse-ban-surveillance-pricing",
        outlet: "New York State Attorney General",
        date: "May 2026",
      },
      {
        title: "Walmart Draws a Line Between Smart Markdowns and Dynamic Pricing",
        url: "https://www.pymnts.com/walmart/2026/walmart-says-ai-merchandising-patents-shouldnt-raise-dynamic-pricing-fears/",
        outlet: "PYMNTS",
        date: "March 2026",
      },
      {
        title: "California state Assembly passes key bill to prohibit surveillance pricing",
        url: "https://advocacy.consumerreports.org/press_release/california-state-assembly-passes-key-bill-to-prohibit-surveillance-pricing/",
        outlet: "Consumer Reports",
        date: "May 2026",
      },
      {
        title: "Walmart patents new AI technology to 'automatically update item prices'",
        url: "https://www.themirror.com/lifestyle/shopping/walmart-patents-ai-powered-pricing-1750390",
        outlet: "The Mirror US",
        date: "March 2026",
      },
      {
        title: "What Walmart's AI Pricing Patents Mean for Every Retailer",
        url: "https://www.inc.com/christopher-yang/what-walmarts-ai-pricing-patents-mean-for-every-retailer/91350049",
        outlet: "Inc.",
        date: "May 2026",
      },
      {
        title: "Walmart Surveillance Pricing Push Alarms 68% of Americans, Three States Now Banned It",
        url: "https://www.techtimes.com/articles/317279/20260527/walmart-surveillance-pricing-push-alarms-68-americans-three-states-now-banned-it.htm",
        outlet: "Tech Times",
        date: "May 2026",
      },
      {
        title: "Majority of Americans Support Ban on Surveillance Pricing and Electronic Shelf Labels",
        url: "https://gizmodo.com/majority-of-americans-support-ban-on-surveillance-pricing-and-electronic-shelf-labels-2000762717",
        outlet: "Gizmodo",
        date: "May 2026",
      },
      {
        title: "Surveillance Pricing: You're Watching Consumers — and Government Is Watching You",
        url: "https://www.corporatecomplianceinsights.com/surveillance-pricing-government-watching/",
        outlet: "Corporate Compliance Insights",
        date: "May 2026",
      },
      {
        title: "DOJ's Antitrust Division Has Its Eye On 'Algorithmic Collusion'",
        url: "https://www.pymnts.com/cpi-posts/dojs-antitrust-division-has-its-eye-on-algorithmic-collusion/",
        outlet: "Competition Policy International",
        date: "May 2026",
      },
      {
        title: "The push to target surveillance pricing now lies in the New York Assembly",
        url: "https://spectrumlocalnews.com/nys/central-ny/politics/2026/05/19/surveillance-pricing-",
        outlet: "Spectrum News",
        date: "May 2026",
      },
      {
        title: "Why surveillance pricing bans are suddenly gaining traction this year (and not just in California)",
        url: "https://calmatters.org/economy/technology/2026/05/why-surveillance-pricing-bans-are-suddenly-gaining-traction-this-year-and-not-just-in-california/",
        outlet: "CalMatters",
        date: "May 2026",
      },
      {
        title: "States Rush to Ban AI-Generated 'Surveillance Pricing' That Uses Shoppers' Personal Data",
        url: "https://money.com/surveillance-pricing-grocery-laws/",
        outlet: "Money",
        date: "May 2026",
      },
      {
        title: "Union Seeks Ban on 'Surveillance Pricing' at Grocery Stores",
        url: "https://civileats.com/2026/05/19/union-seeks-ban-on-surveillance-pricing-at-grocery-stores/",
        outlet: "Civil Eats",
        date: "May 2026",
      },
      {
        title: "Gottheimer Announces New Bipartisan Legislation to Ban AI Surveillance Pricing at Grocery Stores & Delivery Services",
        url: "https://gottheimer.house.gov/posts/release-gottheimer-announces-new-bipartisan-legislation-to-ban-ai-surveillance-pricing-at-grocery-stores-delivery-services",
        outlet: "Office of Congressman Josh Gottheimer",
        date: "May 2026",
      },
      {
        title: "Walmart Secures Two AI Pricing Patents, Raising Dynamic Pricing Concerns",
        url: "https://techspot.com/news/111752-walmart-secures-two-ai-pricing-patents-raising-dynamic.html",
        outlet: "TechSpot",
        date: "2026",
      },
      {
        title: "The Algorithm Knows What You'll Pay: Inside Walmart's Patent Push for Machine-Driven Pricing",
        url: "https://www.webpronews.com/the-algorithm-knows-what-youll-pay-inside-walmarts-patent-push-for-machine-driven-pricing/",
        outlet: "WebProNews",
        date: "2026",
      },
      {
        title: "Walmart Secures Machine Learning Patents to Aid Retail Pricing",
        url: "https://www.pymnts.com/walmart/2026/walmart-secures-machine-learning-patents-for-pricing-items/",
        outlet: "PYMNTS",
        date: "2026",
      },
      {
        title: "Walmart Patents AI Pricing Tools Amid Dynamic Pricing Scrutiny",
        url: "https://thepaypers.com/payments/news/walmart-patents-algorithmic-pricing-tools-amid-us-dynamic-pricing-debate",
        outlet: "The Paypers",
        date: "2026",
      },
    ],
    addedDate: "2026-05-17",
  },

  {
    id: "US7133848B2",
    title: "Dynamic Pricing System",
    applicant: "Amazon Technologies",
    category: "Algorithmic & Dynamic Pricing",
    datePublished: "2006-11-07",
    description:
      "Amazon's foundational dynamic pricing patent — the original architecture for adjusting prices in real time based on demand signals, competitor data, and inventory levels. Granted in 2006, this is the upstream ancestor of the entire algorithmic pricing patent landscape now being contested in regulatory proceedings and state legislatures. The infrastructure it describes — continuous price monitoring, automated adjustment triggers, competitive benchmarking — is what the FTC's 2024 surveillance-pricing study characterized as a systemic threat to consumer welfare.",
    patentUrl: "https://patents.google.com/patent/US7133848B2/en",
    newsReferences: [
      {
        title: "How Amazon's AI Algorithms Raise the Prices You Pay",
        url: "https://washingtonmonthly.com/2026/04/20/how-amazons-ai-algorithms-raise-the-prices-you-pay/",
        outlet: "Washington Monthly",
        date: "April 2026",
      },
      {
        title: "AI Pricing Isn't the Enemy Consumers Think It Is",
        url: "https://www.pymnts.com/news/artificial-intelligence/2026/ai-pricing-is-not-enemy-consumers-think-it-is/",
        outlet: "PYMNTS",
        date: "May 2026",
      },
      {
        title: "DOJ's Antitrust Division Has Its Eye On 'Algorithmic Collusion'",
        url: "https://www.pymnts.com/cpi-posts/dojs-antitrust-division-has-its-eye-on-algorithmic-collusion/",
        outlet: "Competition Policy International",
        date: "May 2026",
      },
    ],
    addedDate: "2026-05-18",
  },

  // ── Consumer Data & Privacy ───────────────────────────────────────────────

  {
    id: "US12513102B2",
    title: "Generating and Presenting Personalized Content Based on Historical User Data (Posthumous Digital Persona)",
    applicant: "Meta Platforms",
    category: "Consumer Data & Privacy",
    datePublished: "2026-02-01",
    description:
      "Constructs a persistent AI persona from a user's behavioral, emotional, and interaction data — including post-mortem operation (posthumous digital presence). The system analyzes a lifetime of platform activity to generate a digital twin capable of posting, reacting, and interacting on the user's behalf, including after death. Originally filed by Meta CTO Andrew Bosworth in 2023; granted December 2025 and published February 2026. Meta has stated it has no current plans to ship this as a product, describing it as a protective filing — the same framing used across the tobacco-playbook 'deny' phase. The most-cited patent across all daily briefing editions.",
    patentUrl: "https://patents.google.com/patent/US12513102B2/en",
    newsReferences: [
      {
        title: "Meta patents AI that could keep you posting from beyond the grave",
        url: "https://www.malwarebytes.com/blog/ai/2026/02/meta-patents-ai-that-could-keep-you-posting-from-beyond-the-grave",
        outlet: "Malwarebytes",
        date: "February 2026",
      },
      {
        title: "Your Voice Could Live On as a \"Ghostbot\" — Without Consent: Lawyers Warn AI Afterlife Rights Are Still a Legal Gray Area",
        url: "https://www.savingadvice.com/articles/2026/05/18/10736018_your-voice-could-live-on-as-a-ghostbot-without-consent-lawyers-warn-ai-afterlife-rights-are-still-a-legal-gray-area.html",
        outlet: "SavingAdvice.com",
        date: "May 2026",
      },
      {
        title: "Meta's AI Patent to Simulate Dead People Shows the Dangers of 'Spectral Labor'",
        url: "https://www.404media.co/metas-ai-patent-to-simulate-dead-people-shows-the-dangers-of-spectral-labor/",
        outlet: "404 Media",
        date: "2026",
      },
      {
        title: "My ghost is not for sale: The case against Meta's AI Afterlife patent",
        url: "https://www.tomsguide.com/computing/social-media/metas-new-digital-afterlife-patent-is-the-most-black-mirror-thing-ive-ever-seen-i-want-to-be-remembered-not-replicated",
        outlet: "Tom's Guide",
        date: "2026",
      },
      {
        title: "Are you ready for digital eternal life? Meta patents AI that can post after you die",
        url: "https://cybernews.com/ai-news/digital-eternal-life-meta-patents-ai-that-can-post-after-you-die/",
        outlet: "Cybernews",
        date: "2026",
      },
      {
        title: "Meta Patents AI That Could Keep Users Posting After Death",
        url: "https://www.eweek.com/news/meta-ai-patent-digital-afterlife-social-media/",
        outlet: "eWeek",
        date: "2026",
      },
    ],
    addedDate: "2026-05-18",
  },

  // ── Emotion AI & Behavioral Inference ────────────────────────────────────

  {
    id: "US20250061917A1",
    title: "Speech Emotion Recognition Using Large Language Models",
    applicant: "Google",
    category: "Emotion AI & Behavioral Inference",
    datePublished: "2025-02-01",
    description:
      "Applies large language models to real-time speech to infer the speaker's emotional state — enabling emotion-aware responses, personalization, and targeting at scale across Google's voice and search surfaces. The architecture moves emotion inference from keyword-based heuristics to continuous, context-sensitive LLM analysis of tone, prosody, and content together. Published February 2025; surfaced in the May 11 briefing in the context of the EU AI Act's August 2026 emotion-AI compliance deadline.",
    patentUrl: "https://patents.google.com/patent/US20250061917A1/en",
    newsReferences: [
      {
        title: "EU AI Act Omnibus extends high-risk deadlines to 2027, widens SME relief",
        url: "https://www.resultsense.com/news/2026-05-14-eu-ai-act-omnibus-deadlines-extension/",
        outlet: "Resultsense",
        date: "May 2026",
      },
      {
        title: "EU AI Act omnibus: what changed on 7 May 2026 and what to do about it",
        url: "https://verifywise.ai/blog/eu-ai-act-omnibus-what-changed",
        outlet: "VerifyWise",
        date: "May 2026",
      },
    ],
    addedDate: "2026-05-18",
  },

  {
    id: "US10453453B2",
    title: "Methods and Vehicles for Capturing Emotion of a Human Driver and Moderating Vehicle Response",
    applicant: "Ford Motor Company",
    category: "Emotion AI & Behavioral Inference",
    datePublished: "2019-10-22",
    description:
      "Captures facial expressions and voice patterns from a driver over time, fuses them to predict emotional state, and adjusts vehicle behavior accordingly — extending commercial emotion inference into the automobile. The system analyzes changes in facial expression across a sequence of camera frames and correlates them with voice profile shifts to generate an emotion prediction. Cited in the May 5 briefing as a 'know phase' marker in the tobacco-playbook arc: industry demonstrably knew how to capture and act on driver emotional state years before any regulatory framework existed to govern it.",
    patentUrl: "https://patents.google.com/patent/US10453453B2/en",
    addedDate: "2026-05-18",
  },

  {
    id: "US10276188B2",
    title: "Systems and Methods for Identifying Human Emotions and/or Mental Health States Based on Analyses of Audio Inputs and/or Behavioral Data Collected from Computing Devices",
    applicant: "Cogito Corporation",
    category: "Emotion AI & Behavioral Inference",
    datePublished: "2019-04-30",
    description:
      "Statistical models trained on passive mobile device behavioral signals — call frequency, SMS cadence, GPS movement patterns, accelerometer data — combined with vocal acoustic features extracted from audio diaries, to infer mental health states and emotion. The architecture describes continuous passive collection of behavioral traces from devices people carry at all times, with no active user input required. A foundational building block for the passive behavioral surveillance pipeline that underlies modern emotion AI products.",
    patentUrl: "https://patents.google.com/patent/US10276188B2/en",
    addedDate: "2026-05-18",
  },

  {
    id: "US10096319B1",
    title: "Voice-Based Determination of Physical and Emotional Characteristics of Users",
    applicant: "Amazon Technologies",
    category: "Emotion AI & Behavioral Inference",
    datePublished: "2018-10-09",
    description:
      "Alexa analyzes tone, pitch, speech pace, coughs, and sniffles to detect emotional and physical states — and the patent explicitly routes the findings toward 'highly targeted audio content, such as audio advertisements or promotions.' One example in the filing: a user coughs while asking about being hungry; Alexa detects the cough, infers illness, offers chicken soup, and when refused escalates to cough drops with one-hour delivery. The first confirmed instance of in-home emotion inference directly piped to an advertising and commerce engine.",
    patentUrl: "https://patents.google.com/patent/US10096319B1/en",
    newsReferences: [
      {
        title: "Amazon Files for Patent to Detect User Illness and Emotional State by Analyzing Voice Data",
        url: "https://voicebot.ai/2018/10/10/amazon-files-for-patent-to-detect-illness-by-analyzing-voice-data/",
        outlet: "Voicebot.ai",
        date: "2018",
      },
      {
        title: "Emotion and Accent Voice Recognition Capabilities Patented by Amazon Concern Privacy Experts",
        url: "https://www.biometricupdate.com/201811/emotion-and-accent-voice-recognition-capabilities-patented-by-amazon-concern-privacy-experts",
        outlet: "Biometric Update",
        date: "2018",
      },
      {
        title: "Amazon Patent Gives Alexa Ability to Detect Illness, Emotional State",
        url: "https://www.csoonline.com/article/566433/amazon-patent-gives-alexa-ability-to-detect-illness-emotional-abnormality.html",
        outlet: "CSO Online",
        date: "2018",
      },
    ],
    addedDate: "2026-05-18",
  },

  {
    id: "US20150242679A1",
    title: "Emotion Detection (Foundational)",
    applicant: "Meta Platforms",
    category: "Emotion AI & Behavioral Inference",
    datePublished: "2015-08-27",
    description:
      "An early Meta application for detecting user emotional states from platform interaction data — a foundational building block for the behavioral profiling pipeline later formalized in US12513102B2. Filed in 2015, the application describes inferring emotional states from how users engage with content: dwell time, interaction patterns, and response behaviors. No confirmed 2026-published equivalent; included as a foundational filing that establishes Meta's decade-long investment in emotion inference as a core platform capability.",
    patentUrl: "https://patents.google.com/patent/US20150242679A1/en",
    addedDate: "2026-05-18",
  },

  // ── Agentic Commerce & Payments ───────────────────────────────────────────

  {
    id: "US20260006023A1",
    title: "On Demand Tokenization Processing",
    applicant: "Visa International Service Association",
    category: "Agentic Commerce & Payments",
    datePublished: "2026-01-01",
    description:
      "Dynamic token generation and scoping for payment transactions — the underlying credential architecture for Visa's Intelligent Commerce Connect agent payment platform. The system enables AI agents to be issued payment credentials scoped to a specific agent identity, spending limits, and permitted merchant categories, so that an autonomous agent can complete purchases within a defined consent boundary without exposing the consumer's underlying card credentials. Filed June 2024; part of the broader Visa/Mastercard race to own the credential layer of agentic commerce.",
    patentUrl: "https://patents.google.com/patent/US20260006023A1/en",
    newsReferences: [
      {
        title: "Visa Debuts Agentic Program to Help Banks Test AI Payments",
        url: "https://www.pymnts.com/artificial-intelligence-2/2026/visa-launches-agentic-ready-program-to-help-banks-test-ai-payments/",
        outlet: "PYMNTS",
        date: "March 2026",
      },
      {
        title: "Card Networks Use Trust and Identity to Build Agentic Commerce",
        url: "https://www.pymnts.com/news/artificial-intelligence/2026/card-networks-use-trust-identity-build-agentic-commerce/",
        outlet: "PYMNTS",
        date: "May 2026",
      },
      {
        title: "Visa Wants to Make AI Shoppers as Trusted as Human Ones",
        url: "https://www.pymnts.com/visa/2026/visa-wants-to-make-ai-shoppers-as-trusted-as-human-ones/",
        outlet: "PYMNTS",
        date: "May 2026",
      },
      {
        title: "When AI shops for you: Visa and Mastercard bet on agentic payments",
        url: "https://www.electronicpaymentsinternational.com/analyst-comment/visa-mastercard-bet-agentic-payments/",
        outlet: "Electronic Payments International",
        date: "May 2026",
      },
    ],
    addedDate: "2026-05-18",
  },

  // ── Consumer Financial AI ─────────────────────────────────────────────────

  {
    id: "US20260111964A1",
    title:
      "Method and System for Training and Fine-Tuning Large Language Models in Generating Stock Ratings Predictions",
    applicant: "JPMorgan Chase",
    category: "Consumer Financial AI",
    datePublished: "2026-04-23",
    description:
      "The system constructs structured prompts from a company's historical stock data, financial fundamentals, and AI-compressed news summaries, then directs a large language model to produce analyst-style buy, hold, or sell ratings across 1-, 3-, 6-, 12-, and 18-month horizons. It ingests company identifiers, historical price returns, earnings and revenue figures, raw news articles filtered and summarized by a preprocessing LLM, and news-derived sentiment scores on a −5 to +5 scale. A chain-of-verification step asks the LLM to explain its reasoning and checks date calculations as a hallucination guard; the model can also be fine-tuned on ground-truth forward-return labels using LoRA. JPMorgan is patenting the infrastructure for AI-automated equity research — a system that could influence retail investor decisions through AI-generated ratings without the transparency or accountability requirements that apply to licensed human analysts.",
    patentUrl: "https://patents.google.com/patent/US20260111964A1/en",
    newsReferences: [
      {
        title: "JPMorgan Seeks Patent for AI-Generated Stock Ratings",
        url: "https://www.ai-street.co/p/jpmorgan-seeks-patent-for-ai-generated",
        outlet: "AI Street",
        date: "2026-05-19",
      },
    ],
    addedDate: "2026-05-22",
  },

  // ── Other ─────────────────────────────────────────────────────────────────

  {
    id: "US12536233B1",
    title: "AI-Generated Content Page Tailored to a Specific User",
    applicant: "Google LLC",
    category: "Other",
    datePublished: "2026-01-27",
    description:
      "Scores a retailer's landing page in real time against a user's search intent, past queries, location, and conversion signals. If the page underperforms a threshold — based on bounce rate, click-through rate, or conversion quality — Google automatically substitutes an AI-generated replacement page, without the retailer's knowledge or consent. Granted January 27, 2026; filed July 2024. Widely covered as 'Google patented the right to replace your website.' The consumer data implications are significant: the system requires continuous behavioral tracking of users across sessions to generate the intent signals that trigger replacement.",
    patentUrl: "https://patents.google.com/patent/US12536233B1/en",
    newsReferences: [
      {
        title: "Will Google replace your landing pages with AI versions?",
        url: "https://www.semrush.com/blog/google-ai-generated-landing-pages-patent/",
        outlet: "Semrush",
        date: "March 2026",
      },
      {
        title: "Google's AI Generated Landing Page Patent Is Limited To Shopping & Ads",
        url: "https://www.searchenginejournal.com/google-ai-generated-landing-page-patent-is-limited-to-shopping-ads/568650/",
        outlet: "Search Engine Journal",
        date: "March 2026",
      },
      {
        title: "Google Patent Signals New Search Layer",
        url: "https://www.practicalecommerce.com/google-patent-signals-new-search-layer",
        outlet: "Practical Ecommerce",
        date: "April 2026",
      },
      {
        title: "Google issued a patent for creating AI-generated product landing pages",
        url: "https://www.shopifreaks.com/google-issued-a-patent-for-creating-ai-generated-product-landing-pages/",
        outlet: "Shopifreaks",
        date: "2026",
      },
      {
        title: "New Patent Allows Google To Replace Retailers' Landing Pages",
        url: "https://retailmediabreakfastclub.com/new-patent-allows-google-to-replace-retailers-landing-pages/",
        outlet: "Retail Media Breakfast Club",
        date: "2026",
      },
      {
        title: "Google Doesn't Need Your Website Anymore (And It Has the Receipts to Prove It)",
        url: "https://www.99signals.com/google-ai-replace-landing-pages-patent/",
        outlet: "99signals",
        date: "2026",
      },
      {
        title: "Google's patent to replace your website with an AI page could change search forever",
        url: "https://ppc.land/googles-patent-to-replace-your-website-with-an-ai-page-could-change-search-forever/",
        outlet: "PPC Land",
        date: "2026",
      },
    ],
    addedDate: "2026-05-18",
  },

];
