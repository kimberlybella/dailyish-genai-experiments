import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function ExperimentPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  // Add 'T00:00:00' to ensure proper parsing
  const dateString = post.date.includes('T') ? post.date : `${post.date}T00:00:00`;
  const formattedDate = new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen pt-20">
      <article className="py-16 px-6 bg-light text-dark">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/experiments"
            className="inline-flex items-center gap-2 text-dark/60 hover:text-dark mb-8 transition-colors"
          >
            ← Back to Experiments
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4 text-sm text-dark/60">
              <span className="font-semibold">{post.category}</span>
              <span>—</span>
              <time>{formattedDate}</time>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-xl text-dark/70 leading-relaxed">{post.excerpt}</p>
            )}
          </header>

          {post.image && (
            <div className="max-w-2xl mx-auto mb-12">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto rounded-lg"
              />
            </div>
          )}

          <div
            className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-semibold prose-a:text-dark prose-a:underline hover:prose-a:text-dark/70"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-dark/10">
              <h3 className="text-lg font-semibold mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/experiments/tag/${encodeURIComponent(tag)}`}
                    className="px-4 py-2 bg-dark/5 hover:bg-dark/10 rounded-full text-sm font-semibold transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
