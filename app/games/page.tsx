import Link from "next/link";

// Add your games here
const games = [
  {
    title: "Game 1",
    description: "Description of your first game",
    slug: "game-1",
    image: "/images/games/game-1.png", // Optional: add a screenshot
  },
  {
    title: "Game 2",
    description: "Description of your second game",
    slug: "game-2",
    image: "/images/games/game-2.png",
  },
  {
    title: "Game 3",
    description: "Description of your third game",
    slug: "game-3",
    image: "/images/games/game-3.png",
  },
];

export default function GamesPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 px-6 bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <img src="/images/Robot-Logo-WHT.png" alt="" className="w-12 h-auto" />
            <h1 className="text-5xl md:text-6xl font-serif font-bold">
              AI-Generated Games
            </h1>
          </div>
          <p className="text-xl text-light/80 max-w-3xl">
            Games created with Claude to explore AI's creative capabilities and limitations.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-light text-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game) => (
              <Link
                key={game.slug}
                href={`/games/${game.slug}`}
                className="border-2 border-dark rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white"
              >
                {game.image && (
                  <div className="aspect-video bg-dark/5 flex items-center justify-center">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-semibold mb-2">
                    {game.title}
                  </h3>
                  <p className="text-dark/70">{game.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
