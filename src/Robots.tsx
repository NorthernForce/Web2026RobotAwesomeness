import { Navigation } from './components/Navigation';
import { RobotHero } from './components/RobotHero';
import { Footer } from './components/Footer';
import { LinksSection } from './components/LinksSection';
import { ImageWithFallback } from './components/ImagewithFallback';

const robots = Array.from({ length: new Date().getFullYear() - 1995 }, (_, idx) => {
  const year = 1996 + idx;
  // Try to find the robot image, fall back to logo if not available
  const robotImages: { [key: number]: string } = {
    2003: '/images/robots/robot2003.jpg',
    2005: '/images/robots/robot2005.jpg',
    2006: '/images/robots/robot2006.jpg',
    2007: '/images/robots/robot2007.jpg',
    2008: '/images/robots/robot2008.jpg',
    2009: '/images/robots/robot2009.jpg',
    2010: '/images/robots/robot2010.jpg',
    2011: '/images/robots/robot2011.JPG',
    2012: '/images/robots/robot2012.jpg',
    2013: '/images/robots/robot2013.jpg',
    2014: '/images/robots/robot2014.JPG',
    2015: '/images/robots/robot2015.jpg',
    2016: '/images/robots/robot2016.JPG',
    2017: '/images/robots/robot2017.jpg',
    2020: '/images/robots/robot2020.jpeg',
    2022: '/images/robots/robot2022.jfif',
    2023: '/images/robots/robot2023.jpeg',
    2024: '/images/robots/robot2024.jpeg',
    2025: '/images/robots/robot2025.jpg',
    2026: '/images/robots/robot2026.jpg',
  };
  
  return {
    year,
    name: `Robot ${year}`,
    description: `See how we did in ${year} on our team's Blue Alliance page.`,
    image: robotImages[year] || `/images/172logo.svg`,
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
          <h3 className="text-xl font-black text-white leading-tight">{name}</h3>
        </div>
      </div>
      <div className="p-5">
        <a
          href={`https://www.thebluealliance.com/team/172/${year}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm leading-relaxed text-zinc-300 hover:text-[#db3e79] transition-colors cursor-pointer"
        >
          {description}
        </a>
      </div>
    </article>
  );
}

export default function Robots() {
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
