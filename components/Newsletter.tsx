"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // TODO: Integrate with your newsletter service (Mailchimp, ConvertKit, etc.)
    // For now, just show a success message
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
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
