import { getAllPosts } from "@/lib/posts";
import ExperimentCard from "@/components/ExperimentCard";
import Link from "next/link";

export function generateStaticParams() {
  const posts = getAllPosts();
  const tags = new Set<string>();

  posts.forEach(post => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach(tag => tags.add(tag));
    }
  });

  return Array.from(tags).map((tag) => ({
    tag: tag,
  }));
}

export default function TagPage({ params }: { params: { tag: string } }) {
  const allPosts = getAllPosts();
  const tagName = decodeURIComponent(params.tag);

  const filteredPosts = allPosts.filter((post) =>
    post.tags && post.tags.includes(tagName)
  );

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 px-6 bg-dark">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/experiments"
            className="inline-block mb-6 text-light/70 hover:text-light transition-colors"
          >
            ← Back to all experiments
          </Link>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            {tagName}
          </h1>
          <p className="text-xl text-light/80">
            {filteredPosts.length} {filteredPosts.length === 1 ? 'experiment' : 'experiments'} tagged with "{tagName}"
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-light text-dark">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-2xl text-dark/60">No experiments found with this tag.</p>
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
