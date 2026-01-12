import Link from "next/link";
import { Post } from "@/lib/posts";

interface ExperimentCardProps {
  post: Post;
}

export default function ExperimentCard({ post }: ExperimentCardProps) {
  // Add 'T00:00:00' to ensure proper parsing
  const dateString = post.date.includes('T') ? post.date : `${post.date}T00:00:00`;
  const formattedDate = new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link
      href={`/experiments/${post.slug}`}
      className="group block bg-white border-2 border-dark rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      {post.image && (
        <div className="aspect-video bg-gray-200 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3 text-sm text-dark/60">
          <span className="font-semibold">{post.category}</span>
          <span>—</span>
          <time>{formattedDate}</time>
        </div>
        <h3 className="text-2xl font-serif font-semibold mb-3 group-hover:underline">
          {post.title}
        </h3>
        <p className="text-dark/70 line-clamp-3">{post.excerpt}</p>
      </div>
    </Link>
  );
}
