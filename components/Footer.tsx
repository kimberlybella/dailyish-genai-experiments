export default function Footer() {
  return (
    <footer className="bg-dark border-t border-light/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-light/60 text-sm">
          © {new Date().getFullYear()} Daily(ish) GenAI Experiments. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
