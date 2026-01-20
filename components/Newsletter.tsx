"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Send email to hello@dailyishgenaiexperiments.com
    const mailtoLink = `mailto:hello@dailyishgenaiexperiments.com?subject=Newsletter Subscription&body=New subscriber: ${encodeURIComponent(email)}`;
    window.location.href = mailtoLink;

    setStatus("success");
    setEmail("");
  };

  return (
    <section className="py-24 px-6 bg-dark">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
          Get Experiment Updates
        </h2>
        <p className="text-lg text-light/80 mb-8">
          Subscribe to receive new experiments and honest AI tool reviews delivered to your inbox.
        </p>

        <div className="mb-6">
          <a
            href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7382070120430346241"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center text-center text-white rounded-full bg-[#0A66C2] hover:bg-[#004182] transition-colors no-underline"
            style={{
              fontFamily: '"SF Pro Text", Helvetica, sans-serif',
              padding: '10px 24px',
              fontSize: '16px'
            }}
          >
            Subscribe on LinkedIn
          </a>
        </div>

        <p className="text-sm text-light/60 mb-4">
          Don't have a LinkedIn account? Subscribe here and I'll send you a link when I publish a new experiment.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 px-6 py-3 rounded-full bg-light text-dark border-2 border-light focus:outline-none focus:ring-2 focus:ring-light/50"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-8 py-3 rounded-full bg-light text-dark font-semibold hover:bg-light/90 transition-colors disabled:opacity-50"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-light/80">Thanks for subscribing!</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-400">Something went wrong. Please try again.</p>
        )}
      </div>
    </section>
  );
}
