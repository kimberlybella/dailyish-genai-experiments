"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory?: string;
}

export default function CategoryFilter({ categories, selectedCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href="/experiments"
        className={`px-6 py-2 rounded-full border-2 border-dark transition-all ${
          !selectedCategory
            ? "bg-dark text-light"
            : "bg-transparent text-dark hover:bg-dark hover:text-light"
        }`}
      >
        All
      </Link>
      {categories.map((category) => (
        <Link
          key={category}
          href={`/experiments?category=${encodeURIComponent(category)}`}
          className={`px-6 py-2 rounded-full border-2 border-dark transition-all ${
            selectedCategory === category
              ? "bg-dark text-light"
              : "bg-transparent text-dark hover:bg-dark hover:text-light"
          }`}
        >
          {category}
        </Link>
      ))}
    </div>
  );
}
