import Link from "next/link";
import RobotLogo from "./RobotLogo";

const tags = [
  "ChatGPT",
  "Claude",
  "Claude Code",
  "Data Analysis",
  "Education",
  "Food & Wine",
  "Gemini",
  "Houseplants",
  "Images",
  "Music",
  "Parties",
  "Perplexity",
  "Poe.com",
  "Privacy",
  "Shopping",
  "Sports",
  "Travel",
  "Web Development",
];

export default function Categories() {
  return (
    <section className="py-24 px-6 bg-light text-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <RobotLogo src="/images/Robot-Logo-BLK.png" alt="" className="w-12 h-auto" />
          <h2 className="text-3xl md:text-4xl font-serif font-semibold">
            Browse by Tag
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/experiments/tag/${encodeURIComponent(tag)}`}
              className="inline-block px-6 py-3 bg-dark/5 hover:bg-dark hover:text-light rounded-full text-sm font-semibold transition-all duration-300 border-2 border-dark"
            >
              {tag}
            </Link>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-3xl md:text-4xl font-serif font-semibold mb-8">
            Tools Tested
          </h3>
          <p className="text-lg leading-relaxed text-dark/70">
            ChatGPT, Claude, Gemini, Midjourney, DALL-E, Runway, NotebookLM, Perplexity, and more...
          </p>
        </div>
      </div>
    </section>
  );
}
