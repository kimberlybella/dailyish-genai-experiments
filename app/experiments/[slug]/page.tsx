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

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
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
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-12">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div
            className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-semibold prose-a:text-dark prose-a:underline hover:prose-a:text-dark/70"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-dark/10">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-dark/5 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
