"use client";

import { useState } from "react";
import {
  radarItems,
  RADAR_CATEGORIES,
  CATEGORY_DESCRIPTIONS,
  type RadarItem,
  type RadarCategory,
} from "@/data/radar";

const MEDIA_ICON: Record<string, string> = {
  article: "📄",
  video: "🎥",
  podcast: "🎧",
  research: "🧪",
  regulatory: "⚖️",
  data: "📊",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function CategoryChip({
  label,
  active,
  onClick,
  small = false,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  small?: boolean;
}) {
  const size = small ? "px-3 py-1 text-xs" : "px-5 py-2 text-sm";
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${size} rounded-full border-2 border-dark font-sans transition-all ${
        active
          ? "bg-dark text-light"
          : "bg-transparent text-dark hover:bg-dark hover:text-light"
      }`}
    >
      {label}
    </button>
  );
}

function RadarCard({
  item,
  onTagClick,
  activeCategory,
}: {
  item: RadarItem;
  onTagClick: (c: RadarCategory) => void;
  activeCategory: RadarCategory | null;
}) {
  return (
    <article className="border border-dark/15 rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
      <div className="flex flex-wrap items-center gap-3 mb-2 text-xs font-sans text-dark/50">
        <span>{formatDate(item.date)}</span>
        {item.outlet && (
          <>
            <span className="text-dark/25">·</span>
            <span className="font-medium text-dark/60">{item.outlet}</span>
          </>
        )}
        {item.subscription && (
          <span className="inline-block px-2 py-0.5 rounded bg-amber-200 text-amber-900 font-semibold">
            {item.subscription}
          </span>
        )}
        {item.viaInbox && (
          <span className="inline-block px-2 py-0.5 rounded bg-dark/10 text-dark/60">
            📬 via inbox
          </span>
        )}
        {item.mediaType && MEDIA_ICON[item.mediaType] && (
          <span className="ml-auto" title={item.mediaType}>
            {MEDIA_ICON[item.mediaType]}
          </span>
        )}
      </div>

      <h3 className="text-lg font-serif font-semibold text-dark leading-snug mb-2">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-blue-800 transition-colors"
        >
          {item.title} <span className="text-dark/30 font-normal">↗</span>
        </a>
      </h3>

      <p className="text-sm text-dark/80 leading-relaxed mb-4 font-sans">
        {item.summary}
      </p>

      <div className="flex flex-wrap gap-2">
        {item.categories.map((cat) => (
          <CategoryChip
            key={cat}
            label={cat}
            small
            active={activeCategory === cat}
            onClick={() => onTagClick(cat)}
          />
        ))}
      </div>
    </article>
  );
}

export default function RadarFeed() {
  const [activeCategory, setActiveCategory] = useState<RadarCategory | null>(null);

  const sorted = [...radarItems].sort(
    (a, b) => new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime()
  );

  const visible = activeCategory
    ? sorted.filter((item) => item.categories.includes(activeCategory))
    : sorted;

  const toggle = (cat: RadarCategory) =>
    setActiveCategory((cur) => (cur === cat ? null : cat));

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-3 mb-4">
        <CategoryChip
          label="All"
          active={activeCategory === null}
          onClick={() => setActiveCategory(null)}
        />
        {RADAR_CATEGORIES.map((cat) => (
          <CategoryChip
            key={cat}
            label={cat}
            active={activeCategory === cat}
            onClick={() => toggle(cat)}
          />
        ))}
      </div>

      {/* Active-filter context line */}
      <p className="text-sm font-sans text-dark/50 mb-8">
        {activeCategory ? (
          <>
            Showing <strong className="text-dark/70">{visible.length}</strong>{" "}
            item{visible.length !== 1 ? "s" : ""} tagged{" "}
            <strong className="text-dark/70">{activeCategory}</strong>.{" "}
            <span className="block mt-1 max-w-3xl">
              {CATEGORY_DESCRIPTIONS[activeCategory]}
            </span>
          </>
        ) : (
          <>
            Showing all <strong className="text-dark/70">{visible.length}</strong>{" "}
            items, newest first. Click any tag to filter.
          </>
        )}
      </p>

      {/* Feed */}
      {visible.length === 0 ? (
        <div className="border border-dark/10 rounded-lg p-10 bg-dark/3 text-center">
          <p className="text-dark/40 font-sans text-sm">
            Nothing tagged here yet. The daily scan will add items as they
            surface.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {visible.map((item) => (
            <RadarCard
              key={item.id}
              item={item}
              activeCategory={activeCategory}
              onTagClick={toggle}
            />
          ))}
        </div>
      )}
    </div>
  );
}
