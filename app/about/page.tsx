export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 px-6 bg-light text-dark">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 border-2 border-dark rounded-full"></div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold">
              About the Experimenter
            </h1>
          </div>

          <div className="space-y-8 text-lg leading-relaxed">
            <p>
              My name is Kimberly Bella. I run Daily(ish) GenAI Experiments, where I test AI tools on real tasks and share what actually happens.
            </p>

            <p>
              I'm genuinely fascinated by how regular people use AI in their daily lives. Not tech workers or startup founders, but parents helping kids with homework, professionals dealing with PDFs, travelers planning trips. My experiments explore everything from practical work tasks to personal projects, documenting both the successes and failures.
            </p>

            <p>
              My approach is simple: test everything, document honestly, correct mistakes immediately. When something works, I show you how. When it doesn't, I explain why. The goal isn't to promote or dismiss AI, but to help people understand what these tools can actually do.
            </p>

            <p>
              Through Daily(ish) GenAI Experiments, I'm building a resource for anyone who wants to understand AI's real capabilities and limitations through hands-on testing and authentic documentation.
            </p>
          </div>

          <div className="mt-16 pt-16 border-t border-dark/10">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-8">
              Why Experimentation Matters
            </h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                There's a huge gap between AI marketing promises and everyday reality. Experimentation helps bridge that gap by showing you exactly what happens when someone tries to use AI for normal tasks like editing photos, analyzing documents, planning trips, helping with homework.
              </p>
              <p>
                No technical expertise required. No judgment if you've never tried AI before. Just clear documentation of what works, what doesn't, and most importantly, what you need to know before trusting these tools with your own work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
