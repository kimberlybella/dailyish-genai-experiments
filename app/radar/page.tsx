import { radarItems, RADAR_CATEGORIES } from "@/data/radar";
import RadarFeed from "@/components/RadarFeed";

export const metadata = {
  title: "On My Radar | Daily(ish) GenAI Experiments",
  description:
    "A running, reverse-chronological feed of the articles worth reading on AI, pricing, and privacy — curated daily from the topics this site follows. Not original reporting; the signal I'm tracking.",
};

export default function RadarPage() {
  const totalCount = radarItems.length;
  const lastUpdated = new Date(
    Math.max(...radarItems.map((i) => new Date(i.addedDate).getTime()))
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Dark header */}
      <section className="py-16 px-6 bg-dark">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-sans uppercase tracking-widest text-light/50 mb-3">
            AI, Pricing &amp; Privacy
          </p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            On My Radar
          </h1>
          <p className="text-xl text-light/80 max-w-3xl mb-4 font-sans">
            The articles, filings, and research worth reading on the topics I
            write about — gathered daily and posted newest-first. This isn&rsquo;t
            my reporting; it&rsquo;s the signal I&rsquo;m tracking, with a one-line
            note on why each piece is here.
          </p>
          <p className="text-sm text-light/50 font-sans max-w-3xl">
            Every item links straight to its primary source. Tap a category to
            see everything I&rsquo;ve catalogued on that topic.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-4 px-6 bg-dark border-t border-light/10">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-6 text-sm font-sans text-light/60">
          <span>
            <strong className="text-light">{totalCount}</strong> item
            {totalCount !== 1 ? "s" : ""} on the radar
          </span>
          <span>
            <strong className="text-light">{RADAR_CATEGORIES.length}</strong>{" "}
            topics
          </span>
          <span>
            Last updated{" "}
            <strong className="text-light">{lastUpdated}</strong>
          </span>
        </div>
      </section>

      {/* Feed */}
      <section className="py-12 px-6 bg-light text-dark">
        <div className="max-w-5xl mx-auto">
          <RadarFeed />
        </div>
      </section>

      {/* Footer note */}
      <section className="py-10 px-6 bg-light text-dark border-t border-dark/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-sans text-dark/50 max-w-3xl">
            This feed is maintained by the automated daily AI, Pricing &amp;
            Privacy scan. Items are added when they surface in that day&rsquo;s
            reading — from web sources and a curated inbox — and are selected for
            relevance to the consumer-AI, pricing, and privacy beats this site
            follows. It is a reading list, not a comprehensive index. For the
            companion catalog of relevant patents, see{" "}
            <a
              href="/patents"
              className="text-blue-700 hover:underline"
            >
              Patent Watch
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
