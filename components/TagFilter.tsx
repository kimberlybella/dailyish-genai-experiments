"use client";

import Link from "next/link";

interface TagFilterProps {
  tags: string[];
}

export default function TagFilter({ tags }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/experiments/tag/${encodeURIComponent(tag)}`}
          className="px-6 py-2 rounded-full border-2 border-dark bg-transparent text-dark hover:bg-dark hover:text-light transition-all"
        >
          {tag}
        </Link>
      ))}
    </div>
  );
}
