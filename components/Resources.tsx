import Link from "next/link";
import RobotLogo from "./RobotLogo";

const resources = [
  {
    name: "AI with ALLIE",
    author: "Allie K. Miller",
    description: "Turning AI buzzwords into business tactics. Get hands-on insights from an industry insider.",
    url: "https://aiwithallie.beehiiv.com",
    platform: "Newsletter"
  },
  {
    name: "The Most Interesting Thing in Tech",
    author: "Nicholas Thompson",
    description: "Daily tech insights and commentary from the CEO of The Atlantic. Short, engaging videos covering AI and tech's biggest developments.",
    url: "https://www.linkedin.com/in/nicholasxthompson/",
    platform: "LinkedIn"
  },
  {
    name: "Hard Fork",
    author: "Kevin Roose & Casey Newton",
    description: "A weekly podcast about the future, hosted by two New York Times tech columnists. Covering AI, tech policy, and the internet's biggest stories.",
    url: "https://podcasts.apple.com/us/podcast/hard-fork/id1528594034",
    platform: "Podcast"
  },
  {
    name: "Glen McCracken",
    author: "Glen McCracken",
    description: "Practical AI insights and tips shared regularly on LinkedIn. Follow for real-world AI applications and automation strategies.",
    url: "https://www.linkedin.com/in/glenmccracken/recent-activity/all/",
    platform: "LinkedIn"
  }
];

export default function Resources() {
  return (
    <section className="py-24 px-6 bg-dark text-light">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <RobotLogo src="/images/Robot-Logo-WHT.png" alt="" className="w-12 h-auto" />
          <h2 className="text-3xl md:text-4xl font-serif font-semibold">
            Other Great GenAI Resources
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource) => (
            <a
              key={resource.name}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-light/5 hover:bg-light/10 rounded-lg border-2 border-light/10 hover:border-light/30 transition-all duration-300"
            >
              <h3 className="text-xl font-serif font-semibold mb-2">
                {resource.name}
              </h3>
              <p className="text-sm text-light/60 mb-3">
                by {resource.author} · {resource.platform}
              </p>
              <p className="text-light/80 leading-relaxed">
                {resource.description}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-8">
          <p className="text-lg text-light/70">
            Know a great GenAI resource I should feature?{" "}
            <a
              href="mailto:hello@dailyishgenaiexperiments.com?subject=Resource Suggestion"
              className="underline hover:text-light transition-colors font-semibold"
            >
              Let me know
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
