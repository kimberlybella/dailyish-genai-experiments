import Link from "next/link";

const categories = [
  { name: "Document & Data Processing", slug: "document-data-processing" },
  { name: "Creative & Visual Tools", slug: "creative-visual" },
  { name: "Research & Information Gathering", slug: "research-information" },
  { name: "Education & Learning", slug: "education-learning" },
  { name: "Personal & Family Tasks", slug: "personal-family" },
  { name: "Tool Comparison", slug: "tool-comparison" },
  { name: "Safety & Limitations", slug: "safety-limitations" },
];

export default function Categories() {
  return (
    <section className="py-24 px-6 bg-light text-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <img src="/images/logo.png" alt="" className="w-12 h-12" />
          <h2 className="text-3xl md:text-4xl font-serif font-semibold">
            Experiment Categories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/experiments?category=${category.slug}`}
              className="border-2 border-dark rounded-full px-6 py-4 text-center hover:bg-dark hover:text-light transition-all duration-300"
            >
              {category.name} →
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
