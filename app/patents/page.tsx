import {
  patents,
  PATENT_CATEGORIES,
  CATEGORY_DESCRIPTIONS,
  type Patent,
  type PatentCategory,
} from "@/data/patents";
import PatentNewsList from "@/components/PatentNewsList";

export const metadata = {
  title: "Patent Watch | Daily(ish) GenAI Experiments",
  description:
    "A running catalog of AI consumer-space patents surfaced by the daily AI, Pricing & Privacy briefing — organized by category.",
};

function ApplicantBadge({ name }: { name: string }) {
  const colors: Record<string, string> = {
    Walmart: "bg-blue-900 text-blue-100",
    Amazon: "bg-orange-900 text-orange-100",
    Google: "bg-green-900 text-green-100",
    Alphabet: "bg-green-900 text-green-100",
    Meta: "bg-indigo-900 text-indigo-100",
    Apple: "bg-gray-700 text-gray-100",
    Microsoft: "bg-sky-900 text-sky-100",
    Anthropic: "bg-purple-900 text-purple-100",
    OpenAI: "bg-teal-900 text-teal-100",
    Visa: "bg-yellow-900 text-yellow-100",
    Mastercard: "bg-red-900 text-red-100",
    Stripe: "bg-violet-900 text-violet-100",
    PayPal: "bg-blue-800 text-blue-100",
    Uber: "bg-gray-800 text-gray-100",
    Lyft: "bg-pink-900 text-pink-100",
    Target: "bg-red-800 text-red-100",
    JPMorgan: "bg-stone-700 text-stone-100",
    "Bank of America": "bg-red-900 text-red-100",
    "Capital One": "bg-red-800 text-red-100",
  };
  const cls = colors[name] ?? "bg-zinc-700 text-zinc-100";
  return (
    <span
      className={`inline-block px-2 py-0.5 rounded text-xs font-medium font-sans ${cls}`}
    >
      {name}
    </span>
  );
}

function PatentCard({ patent }: { patent: Patent }) {
  const pubDate = new Date(patent.datePublished).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
  const addedDate = new Date(patent.addedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="border border-dark/15 rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
      {/* Header row */}
      <div className="flex flex-wrap items-start gap-3 mb-3">
        <ApplicantBadge name={patent.applicant} />
        <span className="text-xs font-sans text-dark/50 pt-0.5">
          Published {pubDate}
        </span>
        {patent.briefingSection && (
          <span className="text-xs font-sans text-dark/40 pt-0.5 ml-auto">
            {patent.briefingSection}
          </span>
        )}
      </div>

      {/* Title + patent ID */}
      <h3 className="text-lg font-serif font-semibold text-dark leading-snug mb-1">
        <a
          href={patent.patentUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-blue-800 transition-colors"
        >
          {patent.title}
        </a>
      </h3>
      <p className="text-sm font-sans text-dark/50 mb-3">
        <a
          href={patent.patentUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline font-mono"
        >
          {patent.id}
        </a>{" "}
        &middot; Google Patents ↗
      </p>

      {/* Description */}
      <p className="text-sm text-dark/80 leading-relaxed mb-4 font-sans">
        {patent.description}
      </p>

      {/* News references */}
      {patent.newsReferences && patent.newsReferences.length > 0 && (
        <PatentNewsList references={patent.newsReferences} />
      )}

      {/* Footer */}
      <p className="text-xs font-sans text-dark/30 mt-4 pt-3 border-t border-dark/8">
        Added to catalog {addedDate}
      </p>
    </div>
  );
}

export default function PatentsPage() {
  const totalCount = patents.length;
  const categoriesWithPatents = PATENT_CATEGORIES.filter((cat) =>
    patents.some((p) => p.category === cat)
  );
  const emptySections = PATENT_CATEGORIES.filter(
    (cat) => !patents.some((p) => p.category === cat)
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Dark header */}
      <section className="py-16 px-6 bg-dark">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-sans uppercase tracking-widest text-light/50 mb-3">
            AI, Pricing &amp; Privacy Briefing
          </p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Patent Watch
          </h1>
          <p className="text-xl text-light/80 max-w-3xl mb-4 font-sans">
            A running catalog of AI consumer-space patents surfaced by the daily
            briefing — organized by theme and linked to primary sources.
          </p>
          <p className="text-sm text-light/50 font-sans max-w-3xl">
            <strong className="text-light/70">Coverage note:</strong> US patent
            applications typically publish ~18 months after filing, so
            &ldquo;new&rdquo; here means newly published, not newly filed. A
            patent is added to this catalog when it is first published, or when
            it is newly referenced in news coverage or a company blog post (e.g.,
            a firm&rsquo;s academic fellows page).
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-4 px-6 bg-dark border-t border-light/10">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-6 text-sm font-sans text-light/60">
          <span>
            <strong className="text-light">{totalCount}</strong> patent
            {totalCount !== 1 ? "s" : ""} catalogued
          </span>
          <span>
            <strong className="text-light">{categoriesWithPatents.length}</strong>{" "}
            of {PATENT_CATEGORIES.length} categories populated
          </span>
          <span>
            Last updated{" "}
            <strong className="text-light">
              {new Date(
                Math.max(...patents.map((p) => new Date(p.addedDate).getTime()))
              ).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </strong>
          </span>
        </div>
      </section>

      {/* Patent categories */}
      <section className="py-12 px-6 bg-light text-dark">
        <div className="max-w-5xl mx-auto space-y-16">
          {PATENT_CATEGORIES.map((category) => {
            const categoryPatents = patents
              .filter((p) => p.category === category)
              .sort(
                (a, b) =>
                  new Date(b.datePublished).getTime() -
                  new Date(a.datePublished).getTime()
              );

            return (
              <div key={category} id={category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>
                {/* Section header */}
                <div className="flex items-baseline gap-4 mb-2">
                  <h2 className="text-2xl font-serif font-bold text-dark">
                    {category}
                  </h2>
                  {categoryPatents.length > 0 && (
                    <span className="text-sm font-sans text-dark/40">
                      {categoryPatents.length} patent
                      {categoryPatents.length !== 1 ? "s" : ""}
                    </span>
                  )}
                </div>
                <div className="h-0.5 bg-dark mb-4" />
                <p className="text-sm font-sans text-dark/60 mb-6 max-w-3xl">
                  {CATEGORY_DESCRIPTIONS[category]}
                </p>

                {categoryPatents.length === 0 ? (
                  <div className="border border-dark/10 rounded-lg p-6 bg-dark/3 text-center">
                    <p className="text-dark/40 font-sans text-sm">
                      No patents catalogued in this category yet. The briefing
                      will add entries here as they surface.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {categoryPatents.map((patent) => (
                      <PatentCard key={patent.id} patent={patent} />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer note */}
      <section className="py-10 px-6 bg-light text-dark border-t border-dark/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-sans text-dark/50 max-w-3xl">
            This catalog is maintained by the automated AI, Pricing &amp;
            Privacy daily briefing. Patents are added when they are newly
            published by the USPTO or EPO, or when a news article, regulatory
            filing, or company publication brings a relevant patent to our
            attention. It is not an exhaustive survey of all filings in these
            spaces. All patent links lead to Google Patents or the USPTO.
          </p>
        </div>
      </section>
    </div>
  );
}
