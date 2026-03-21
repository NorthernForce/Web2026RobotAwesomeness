import { Navigation } from './components/Navigation';
import { RobotHero } from './components/RobotHero';
import { Footer } from './components/Footer';
import { LinksSection } from './components/LinksSection';
import { ImageWithFallback } from './components/ImagewithFallback';

const robots = Array.from({ length: new Date().getFullYear() - 1995 }, (_, idx) => {
  const year = 1996 + idx;
  return {
    year,
    name: year === 2025 ? 'Valkyrie MK‑IV' : `Robot ${year}`,
    description: `Our ${year} competition robot, engineered to tackle that year's FIRST challenge.`,
    image: `/images/robots/${year}.png`,
  };
}).reverse();

function RobotCard({ year, name, description, image }: { year: number; name: string; description: string; image: string }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-sm hover:shadow-lg transition-shadow">
      <div className="relative h-56 w-full">
        <ImageWithFallback
          src={image}
          alt={`${year} robot`}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-xs uppercase tracking-wide text-zinc-400">{year}</p>
          <h3 className="text-xl font-black text-white leading-tight">{name}</h3>
        </div>
      </div>
      <div className="p-5">
        <p className="text-sm leading-relaxed text-zinc-300">{description}</p>
      </div>
    </article>
  );
}

export default function Design() {
  return (
    <>
      <head>
        <title>Team 172 | Robots</title>
      </head>
      <div className="min-h-screen bg-black text-white selection:bg-[#db3e79] selection:text-white">
        <Navigation />
        <main>
          <RobotHero />

          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="mb-12 text-center">
                <h2 className="text-4xl font-black uppercase tracking-tight">Robots Through the Years</h2>
                <p className="mt-4 max-w-2xl mx-auto text-zinc-400">
                  From today back to 1996, every robot tells a story. Read about what each year explored in design goals, lessons learned, and what made that season memorable.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {robots.map((robot) => (
                  <RobotCard key={robot.year} {...robot} />
                ))}
              </div>
            </div>
          </section>
        </main>

        <LinksSection />
        <Footer />
      </div>
    </>
  );
}
