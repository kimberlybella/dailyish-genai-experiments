export default function WhatYoullFind() {
  return (
    <section className="py-24 px-6 bg-dark text-light">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
          What You'll Find Here
        </h2>
        <p className="text-xl leading-relaxed mb-8">
          Practical experiments that attempt to answer many of the questions you're probably asking:
        </p>

        <ul className="space-y-4 text-lg mb-8">
          <li className="flex items-start">
            <span className="mr-3 text-2xl">•</span>
            <span>Will this actually save me time?</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-2xl">•</span>
            <span>Can I trust the output?</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-2xl">•</span>
            <span>Is it worth learning a new tool for this?</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-2xl">•</span>
            <span>What happens when things go wrong?</span>
          </li>
        </ul>

        <p className="text-lg leading-relaxed text-light/80">
          Each experiment documents the complete journey, from the initial setup (which is often half the battle) to the final results. You'll see both the wins and the failures, because understanding limitations is just as important as discovering capabilities.
        </p>
      </div>
    </section>
  );
}
