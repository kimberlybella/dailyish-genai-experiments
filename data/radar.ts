// ─────────────────────────────────────────────────────────────────────────────
// On My Radar — data file
// A running, reverse-chronological feed of articles surfaced by the daily
// AI / Pricing / Privacy briefing. Each item is something worth reading on the
// beats this site follows — not original reporting, but curated signal.
//
// ADDING ITEMS: prepend new entries to the top of the `radarItems` array below
// (newest first). Each item can carry one or more categories; readers click a
// category to filter the feed to everything tagged with it.
//
// Required: id, title, url, summary, categories, date, addedDate
// Optional: outlet, mediaType, viaInbox, subscription
// ─────────────────────────────────────────────────────────────────────────────

export type RadarCategory =
  | "AI & Consumers"
  | "Consumer Finance AI"
  | "Surveillance & Dynamic Pricing"
  | "Privacy & Data Rights"
  | "Agentic Commerce"
  | "Regulation & Litigation"
  | "Consumer Backlash";

export const RADAR_CATEGORIES: RadarCategory[] = [
  "AI & Consumers",
  "Consumer Finance AI",
  "Surveillance & Dynamic Pricing",
  "Privacy & Data Rights",
  "Agentic Commerce",
  "Regulation & Litigation",
  "Consumer Backlash",
];

export const CATEGORY_DESCRIPTIONS: Record<RadarCategory, string> = {
  "AI & Consumers":
    "How AI is being pointed at consumers — behavioral tracking, emotion AI, and the accountability-versus-extraction posture of the major players.",
  "Consumer Finance AI":
    "AI advisors, robo-advisors, AI credit and banking, and agentic tools that touch consumers' money.",
  "Surveillance & Dynamic Pricing":
    "Personalized, dynamic, and data-driven pricing — the research, the products, and the laws now reining it in.",
  "Privacy & Data Rights":
    "State privacy laws, data-broker rules, deletion rights, and the research on how consumer data actually gets used.",
  "Agentic Commerce":
    "Autonomous shopping and payment agents, agentic checkout, and the protocols and trust questions underneath them.",
  "Regulation & Litigation":
    "FTC, CFPB, DOJ, and state-AG enforcement, plus the lawsuits shaping algorithmic pricing and consumer-data practices.",
  "Consumer Backlash":
    "Boycotts, polling, advocacy campaigns, and the broader shift in how the public feels about AI being used on them.",
};

export type RadarMediaType =
  | "article"
  | "video"
  | "podcast"
  | "research"
  | "regulatory"
  | "data";

export interface RadarItem {
  /** Stable slug, e.g. "2026-06-12-mastercard-agent-pay" */
  id: string;
  title: string;
  /** Canonical link to the primary source */
  url: string;
  outlet?: string;
  /** 1–2 sentence plain-language note on why it's worth a look */
  summary: string;
  categories: RadarCategory[];
  /** ISO date the piece was published (approximate is fine) */
  date: string;
  /** ISO date this item was added to the radar — feed sorts newest-added first */
  addedDate: string;
  mediaType?: RadarMediaType;
  /** Surfaced via the Reading List inbox rather than web search */
  viaInbox?: boolean;
  /** Outlet behind a subscription the reader may hold */
  subscription?: "WSJ" | "NYT" | "HBR" | "MIT Sloan";
}

// Newest first. Prepend new entries at the top.
export const radarItems: RadarItem[] = [
  {
    id: "2026-06-12-mastercard-agent-pay",
    title: "Mastercard launches Agent Pay for Machines",
    url: "https://www.mastercard.com/us/en/news-and-trends/press/2026/june/mastercard-launches-agent-pay-for-machines.html",
    outlet: "Mastercard",
    summary:
      "A protocol letting AI agents transact continuously with on-chain permissioning and multi-rail settlement across 30+ partners. The notable twist is an audit trail by design — accountability built into the rails rather than bolted on later.",
    categories: ["Agentic Commerce", "Consumer Finance AI"],
    date: "2026-06-10",
    addedDate: "2026-06-12",
    mediaType: "regulatory",
  },
  {
    id: "2026-06-12-mastercard-fortune",
    title: "Mastercard's AI payments protocol and the agentic-finance race",
    url: "https://fortune.com/2026/06/10/mastercard-ai-payments-protocol-launch-agentic-finance/",
    outlet: "Fortune",
    summary:
      "Coverage of the launch and what it signals about who controls the payment layer as autonomous agents start spending on people's behalf.",
    categories: ["Agentic Commerce"],
    date: "2026-06-10",
    addedDate: "2026-06-12",
    mediaType: "article",
  },
  {
    id: "2026-06-12-checkout-trust-lag",
    title:
      "Consumer demand for AI shopping is forming fast, but trust for agentic commerce is catching up",
    url: "https://www.checkout.com/newsroom/consumer-demand-for-ai-shopping-is-forming-fast-but-trust-for-agentic-commerce-is-still-catching-up",
    outlet: "Checkout.com",
    summary:
      "Fresh survey data showing consumer trust lagging well behind the infrastructure — and no consensus yet on who's liable when an agent buys the wrong thing.",
    categories: ["Agentic Commerce", "Consumer Backlash"],
    date: "2026-06-09",
    addedDate: "2026-06-12",
    mediaType: "data",
  },
  {
    id: "2026-06-12-ftc-cox-active-listening",
    title:
      "FTC to require Cox Media Group and two firms to pay nearly $1M over 'Active Listening' claims",
    url: "https://www.ftc.gov/news-events/news/press-releases/2026/05/ftc-require-cox-media-group-two-other-firms-pay-nearly-1-million-settle-charges-they-deceived",
    outlet: "FTC",
    summary:
      "Settlement over claims that an AI tool listened through phone microphones and fed targeting data into sold email lists. A clean example of the 'know, deny, settle' arc playing out in real time.",
    categories: ["Privacy & Data Rights", "Regulation & Litigation"],
    date: "2026-05-26",
    addedDate: "2026-06-12",
    mediaType: "regulatory",
  },
  {
    id: "2026-06-12-secure-data-act",
    title: "House committee releases SECURE Data Act, a new federal privacy framework",
    url: "https://www.consumerfinancemonitor.com/2026/05/12/u-s-house-committee-releases-secure-data-act-to-establish-new-federal-privacy-framework/",
    outlet: "Consumer Finance Monitor",
    summary:
      "A first read on the federal bill that would set a national baseline for consumer-data rules — worth watching against the patchwork of state laws now in effect.",
    categories: ["Privacy & Data Rights", "Regulation & Litigation"],
    date: "2026-05-12",
    addedDate: "2026-06-12",
    mediaType: "article",
  },
  {
    id: "2026-06-12-ai-backlash-grows",
    title: "AI backlash grows across US, UK and Canada as customers reject bots for human support",
    url: "https://www.prnewswire.com/news-releases/ai-backlash-grows-across-us-uk-and-canada-more-customers-reject-bots-for-human-support-in-2026-302770476.html",
    outlet: "PR Newswire",
    summary:
      "2026 survey data on consumers actively opting out of AI customer service — a useful data point on how fast sentiment is hardening.",
    categories: ["Consumer Backlash", "AI & Consumers"],
    date: "2026-06-04",
    addedDate: "2026-06-12",
    mediaType: "data",
  },
  {
    id: "2026-06-11-ma-data-privacy-act",
    title: "Massachusetts House passes the Consumer Data Privacy Act, 146–0",
    url: "https://malegislature.gov/PressRoom/Detail?pressReleaseId=1396",
    outlet: "Massachusetts Legislature",
    summary:
      "Bans the sale of precise cell-phone location data and keeps a private right of action despite heavy industry lobbying. The 'regulate' stage of the playbook, arriving on schedule.",
    categories: ["Privacy & Data Rights", "Regulation & Litigation"],
    date: "2026-06-11",
    addedDate: "2026-06-11",
    mediaType: "regulatory",
  },
  {
    id: "2026-06-11-ring-face-scanning",
    title: "Amazon-owned Ring should pay Americans for scanning their faces, lawsuit says",
    url: "https://arstechnica.com/tech-policy/2026/06/amazon-owned-ring-should-pay-americans-for-scanning-their-faces-lawsuit-says/",
    outlet: "Ars Technica",
    summary:
      "A biometric-privacy suit testing whether face-scanning at the doorbell triggers the same liability as workplace fingerprint cases.",
    categories: ["Privacy & Data Rights", "Regulation & Litigation"],
    date: "2026-06-09",
    addedDate: "2026-06-11",
    mediaType: "article",
    viaInbox: true,
  },
  {
    id: "2026-06-11-robinhood-agentic-trading",
    title: "Robinhood launches agentic trading and an AI-agent credit card",
    url: "https://fortune.com/2026/05/27/robinhood-ai-agents/",
    outlet: "Fortune",
    summary:
      "Agents that can trade and buy on a user's behalf — the consumer-finance and agentic-commerce threads converging in one product.",
    categories: ["Consumer Finance AI", "Agentic Commerce"],
    date: "2026-05-27",
    addedDate: "2026-06-11",
    mediaType: "article",
  },
  {
    id: "2026-06-11-google-universal-cart",
    title: "Google Shopping's Universal Cart and agentic checkout",
    url: "https://blog.google/products-and-platforms/products/shopping/google-shopping-cart/",
    outlet: "Google",
    summary:
      "Google's move to let its assistant complete purchases across merchants — a look at how the checkout layer gets consolidated.",
    categories: ["Agentic Commerce"],
    date: "2026-05-20",
    addedDate: "2026-06-11",
    mediaType: "article",
  },
  {
    id: "2026-06-11-ny-personalized-pricing",
    title: "New York legislature passes key bill to curb personalized pricing",
    url: "https://advocacy.consumerreports.org/press_release/new-york-legislature-passes-key-bill-to-curb-personalized-pricing/",
    outlet: "Consumer Reports",
    summary:
      "New York becomes the third state to move against data-driven 'surveillance' pricing, now awaiting the governor's signature.",
    categories: ["Surveillance & Dynamic Pricing", "Regulation & Litigation"],
    date: "2026-06-05",
    addedDate: "2026-06-11",
    mediaType: "regulatory",
  },
  {
    id: "2026-06-10-doj-realpage-settlement",
    title: "DOJ and RealPage settle rental price-fixing case",
    url: "https://www.propublica.org/article/doj-realpage-settlement-rental-price-fixing-case",
    outlet: "ProPublica",
    summary:
      "The settlement requires RealPage to stop sharing competitively sensitive data — the highest-profile algorithmic-pricing case yet, and a template for what comes next.",
    categories: ["Regulation & Litigation", "Surveillance & Dynamic Pricing"],
    date: "2026-06-08",
    addedDate: "2026-06-10",
    mediaType: "regulatory",
  },
  {
    id: "2026-06-10-bloomberg-advisor-jobs",
    title: "AI is upending traditional financial-advisor jobs",
    url: "https://www.bloomberg.com/news/features/2026-06-05/ai-is-upending-traditional-financial-advisor-jobs",
    outlet: "Bloomberg",
    summary:
      "A feature on how AI advisory tools are reshaping who gives financial advice and what that means for the consumers receiving it.",
    categories: ["Consumer Finance AI"],
    date: "2026-06-05",
    addedDate: "2026-06-10",
    mediaType: "article",
  },
  {
    id: "2026-06-10-walmart-pricing-patents",
    title: "Walmart wins patents for AI-powered price changes",
    url: "https://gizmodo.com/walmart-wins-patents-for-ai-powered-price-changes-2000735833",
    outlet: "Gizmodo",
    summary:
      "Granted patents covering automated, data-driven price adjustment — the kind of infrastructure the surveillance-pricing debate is really about.",
    categories: ["Surveillance & Dynamic Pricing", "AI & Consumers"],
    date: "2026-06-02",
    addedDate: "2026-06-10",
    mediaType: "article",
  },
  {
    id: "2026-06-10-dark-patterns-optout",
    title: "The dark patterns keeping you from opting out of data sharing are darker than ever",
    url: "https://gizmodo.com/the-dark-patterns-keeping-you-from-opting-out-of-data-sharing-are-darker-than-ever-study-finds-2000761379",
    outlet: "Gizmodo",
    summary:
      "A study on how opt-out flows are engineered to fail — concrete evidence for the gap between privacy rights on paper and in practice.",
    categories: ["Privacy & Data Rights", "AI & Consumers"],
    date: "2026-06-03",
    addedDate: "2026-06-10",
    mediaType: "research",
  },
  {
    id: "2026-06-08-faegre-surveillance-pricing",
    title: "Surveillance pricing: the next frontier of privacy litigation",
    url: "https://www.faegredrinker.com/en/insights/publications/2026/5/surveillance-pricing-the-next-frontier-of-privacy-litigation",
    outlet: "Faegre Drinker",
    summary:
      "A defense-side read on why personalized pricing is about to generate a wave of privacy class actions — useful for seeing where the legal risk is heading.",
    categories: ["Surveillance & Dynamic Pricing", "Regulation & Litigation"],
    date: "2026-05-28",
    addedDate: "2026-06-08",
    mediaType: "article",
  },
];
