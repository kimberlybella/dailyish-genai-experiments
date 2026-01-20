'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:hello@dailyishgenaiexperiments.com?subject=Newsletter Subscription&body=New subscriber: ${encodeURIComponent(email)}`;
    window.location.href = mailtoLink;
    setEmail('');
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 px-6 bg-dark min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8">
              Get in Touch
            </h1>
            <p className="text-xl text-light/80">
              Have questions about an experiment? Want to suggest a tool to test? Let's connect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-serif font-semibold mb-6">Contact Information</h2>
              <div className="space-y-4 text-light/80">
                <p>
                  <strong className="text-light">Email:</strong><br />
                  hello@dailyishgenaiexperiments.com
                </p>
                <p>
                  <strong className="text-light">Follow:</strong><br />
                  <a href="https://www.linkedin.com/in/kimberlybella/" target="_blank" rel="noopener noreferrer" className="underline hover:text-light transition-colors">LinkedIn</a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-semibold mb-6">Newsletter</h2>
              <p className="text-light/80 mb-6">
                Subscribe to get new experiments delivered to your inbox weekly.
              </p>

              <div className="mb-6">
                <a
                  href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7382070120430346241"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center text-center text-white rounded-full bg-[#0A66C2] hover:bg-[#004182] transition-colors no-underline w-full"
                  style={{
                    fontFamily: '"SF Pro Text", Helvetica, sans-serif',
                    padding: '12px 24px',
                    fontSize: '16px'
                  }}
                >
                  Subscribe on LinkedIn
                </a>
              </div>

              <p className="text-sm text-light/60 mb-4">
                Don't have a LinkedIn account? Subscribe here and I'll send you a link when I publish a new experiment.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full px-6 py-3 rounded-full bg-light text-dark border-2 border-light focus:outline-none focus:ring-2 focus:ring-light/50"
                />
                <button
                  type="submit"
                  className="w-full px-8 py-3 rounded-full bg-light text-dark font-semibold hover:bg-light/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
