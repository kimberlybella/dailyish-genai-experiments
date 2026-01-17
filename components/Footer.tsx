export default function Footer() {
  return (
    <footer className="bg-dark border-t border-light/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4">
          <a
            href="https://www.linkedin.com/in/kimberlybella/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-light/80 hover:text-light transition-colors"
          >
            Connect on LinkedIn →
          </a>
          <p className="text-light/60 text-sm">
            © {new Date().getFullYear()} Daily(ish) GenAI Experiments. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
