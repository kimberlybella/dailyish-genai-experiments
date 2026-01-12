import Image from "next/image";

export default function About() {
  return (
    <section className="py-24 px-6 bg-light text-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <img src="/images/logo.png" alt="" className="w-12 h-12" />
          <h2 className="text-4xl md:text-5xl font-serif font-semibold">
            About the Experimenter
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0">
            <img
              src="/images/Headshot.png"
              alt="Kimberly Bella"
              className="w-64 h-auto rounded-lg"
            />
          </div>

          <div className="flex-1 space-y-6">
            <p className="text-lg leading-relaxed">
              My name is Kimberly Bella. I run Daily(ish) GenAI Experiments, where I test AI tools on real tasks and share what actually happens.
            </p>
            <p className="text-lg leading-relaxed">
              I'm genuinely fascinated by how regular people use AI in their daily lives. Not tech workers or startup founders, but parents helping kids with homework, professionals dealing with PDFs, travelers planning trips. My experiments explore everything from practical work tasks to personal projects, documenting both the successes and failures.
            </p>
            <p className="text-lg leading-relaxed">
              My approach is simple: test everything, document honestly, correct mistakes immediately. When something works, I show you how. When it doesn't, I explain why. The goal isn't to promote or dismiss AI, but to help people understand what these tools can actually do.
            </p>
            <p className="text-lg leading-relaxed">
              Through Daily(ish) GenAI Experiments, I'm building a resource for anyone who wants to understand AI's real capabilities and limitations through hands-on testing and authentic documentation.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-16 border-t border-dark/10">
          <h3 className="text-3xl md:text-4xl font-serif font-semibold mb-8">
            Why Experimentation Matters
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            There's a huge gap between AI marketing promises and everyday reality. Experimentation helps bridge that gap by showing you exactly what happens when someone tries to use AI for normal tasks like editing photos, analyzing documents, planning trips, helping with homework.
          </p>
          <p className="text-lg leading-relaxed">
            No technical expertise required. No judgment if you've never tried AI before. Just clear documentation of what works, what doesn't, and most importantly, what you need to know before trusting these tools with your own work.
          </p>
        </div>
      </div>
    </section>
  );
}
