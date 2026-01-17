import { getAllPosts, getAllCategories } from "@/lib/posts";
import ExperimentCard from "@/components/ExperimentCard";
import CategoryFilter from "@/components/CategoryFilter";

export default function ExperimentsPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const allPosts = getAllPosts();
  const categories = getAllCategories();
  const selectedCategory = searchParams.category;

  const filteredPosts = selectedCategory
    ? allPosts.filter((post) => post.category === selectedCategory)
    : allPosts;

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 px-6 bg-dark">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8">
            Experiments
          </h1>
          <p className="text-xl text-light/80 max-w-3xl mb-8">
            Real-world AI tool testing with honest documentation of what works, what doesn't, and what you need to know.
          </p>
          <a
            href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7382070120430346241"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center text-center text-white rounded-full bg-[#0A66C2] hover:bg-[#004182] transition-colors no-underline"
            style={{
              fontFamily: '"SF Pro Text", Helvetica, sans-serif',
              padding: '7px',
              width: '200px',
              height: '32px'
            }}
          >
            Subscribe on LinkedIn
          </a>
        </div>
      </section>

      <section className="py-12 px-6 bg-light text-dark border-b border-dark/10">
        <div className="max-w-7xl mx-auto">
          <CategoryFilter categories={categories} selectedCategory={selectedCategory} />
        </div>
      </section>

      <section className="py-16 px-6 bg-light text-dark">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-2xl text-dark/60">No experiments yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <ExperimentCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
