'use client';

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
    <div className="group bg-white border-2 border-dark rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
      <Link href={`/experiments/${post.slug}`}>
        {post.image && (
          <div className="aspect-video bg-gray-200 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
          </div>
        )}
      </Link>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3 text-sm text-dark/60">
          <span className="font-semibold">{post.category}</span>
          <span>—</span>
          <time>{formattedDate}</time>
        </div>
        <Link href={`/experiments/${post.slug}`}>
          <h3 className="text-2xl font-serif font-semibold mb-3 group-hover:underline">
            {post.title}
          </h3>
        </Link>
        <p className="text-dark/70 line-clamp-3 mb-4">{post.excerpt}</p>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/experiments/tag/${encodeURIComponent(tag)}`}
                className="inline-block px-3 py-1 text-xs font-semibold bg-dark/5 hover:bg-dark/10 rounded-full transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                {tag}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
