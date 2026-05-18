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
        title:
          "Walmart Secures Two AI Pricing Patents, Raising Dynamic Pricing Concerns",
        url: "https://techspot.com/news/111752-walmart-secures-two-ai-pricing-patents-raising-dynamic.html",
        outlet: "TechSpot",
        date: "2026",
      },
      {
        title:
          "The Algorithm Knows What You'll Pay: Inside Walmart's Patent Push for Machine-Driven Pricing",
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
        title:
          "Walmart Patents AI Pricing Tools Amid Dynamic Pricing Scrutiny",
        url: "https://thepaypers.com/payments/news/walmart-patents-algorithmic-pricing-tools-amid-us-dynamic-pricing-debate",
        outlet: "The Paypers",
        date: "2026",
      },
    ],
    briefingSection: "C · Dynamic Pricing & Surveillance Pricing",
    addedDate: "2026-05-17",
  },
];
