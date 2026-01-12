import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-light/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-serif font-semibold">
            Daily(ish) GenAI Experiments
          </Link>
          <div className="flex gap-8 items-center">
            <Link href="/experiments" className="hover:text-light/70 transition-colors">
              Experiments
            </Link>
            <Link href="/about" className="hover:text-light/70 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-light/70 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
