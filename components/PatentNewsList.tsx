"use client";

import { useState } from "react";
import type { PatentNewsRef } from "@/data/patents";

const DEFAULT_VISIBLE = 4;

export default function PatentNewsList({
  references,
}: {
  references: PatentNewsRef[];
}) {
  const [expanded, setExpanded] = useState(false);

  const hasMore = references.length > DEFAULT_VISIBLE;
  const visible = expanded ? references : references.slice(0, DEFAULT_VISIBLE);
  const hiddenCount = references.length - DEFAULT_VISIBLE;

  return (
    <div>
      <p className="text-xs font-sans font-semibold text-dark/40 uppercase tracking-wide mb-1.5">
        In the news
        {references.length > 0 && (
          <span className="ml-1 text-dark/30">({references.length})</span>
        )}
      </p>
      <ul className="space-y-1">
        {visible.map((ref, i) => (
          <li key={i} className="text-sm font-sans">
            <a
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              {ref.title}
            </a>
            {(ref.outlet || ref.date) && (
              <span className="text-dark/40 ml-1">
                &mdash; {[ref.outlet, ref.date].filter(Boolean).join(", ")}
              </span>
            )}
          </li>
        ))}
      </ul>

      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 text-xs font-sans font-semibold text-blue-700 hover:underline focus:outline-none"
          aria-expanded={expanded}
        >
          {expanded ? "Show fewer" : `Show ${hiddenCount} more`}
        </button>
      )}
    </div>
  );
}
