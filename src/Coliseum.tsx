import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { LinksSection } from './components/LinksSection';

export default function Coliseum() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#db3e79] selection:text-white">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 px-4 bg-gradient-to-b from-[#1a1a1a] to-black border-b border-zinc-900">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase font-bold tracking-[0.2em] text-[#db3e79] mb-4">Our Facility</p>
            <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter mb-6">The Coliseum</h1>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto">Where Team 172 builds, tests, and perfects our robots year-round</p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-24 px-4 border-b border-zinc-600">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-8">Home of Northern Force</h2>
            <div>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                The Coliseum serves as the headquarters for Northern Force Robotics Team 172.
                The STEM Coliseum and Robotics Learning Center, with its mechatronics-related programs and resources, robotics competition arena, FAB and additive manufacturing labs, precision machine shop, CAD and AI computer labs, and team manufacturing spaces, has evolved into Maine's largest non-profit provider of STEM robotics-related experiences, and build and learning resources. 
                Our vision is to inspire Maine young people to be Maine's future innovators, creators, entrepreneurs, and leaders, through cost-effective, mentor-led, experiential programs, workshops, and competitions, while cultivating workforce readiness demonstrable to schools and employers through a standardized digital learning transcript of the student's concept and skill mastery built over their time spent with us. 
                By giving students access to industrial quality resources, presenting them with challenging STEM problems, and allowing them to work with experienced STEM industry mentors, educators, and businesspeople, the STEM Coliseum and its partners give students early exposure to the professional world of STEM and enterprise. 
                As a student-driven learning center, we offer a unique perspective to exposing students to engaging STEM and robotics activities that provide academic enrichment, fun, and 21st century skills for workforce readiness not found in the public-school setting. 
                We provide cost-effective access to competitive practice space, classrooms, precision machinery, and specialized resources and after school programs for Maine youth while attracting STEM practitioners, teachers, and industry mentors from diverse communities to create innovative STEM & Robotics programs sharable throughout Maine. 
                Our 24,000 Sq. Ft. facility offers FIRST and VEX Robotics competition fields, as well as Drone flight decks, LEGO Robotics playing fields, and BattleBot arenas. We offer labs dedicated to CAD design, AI, coding, and electronics, as well as a makerspace, FAB lab, machine shop, and conference and classrooms.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-[#db3e79]">
          <div className="max-w-5xl mx-auto px-4 text-black">
            <div className="grid md:grid-cols-4 gap-12">
              <div className="text-center">
                <p className="text-5xl font-black mb-2">365</p>
                <p className="text-xs uppercase font-bold tracking-[0.2em] opacity-80">Days Open</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-black mb-2">15+</p>
                <p className="text-xs uppercase font-bold tracking-[0.2em] opacity-80">Workstations</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-black mb-2">50+</p>
                <p className="text-xs uppercase font-bold tracking-[0.2em] opacity-80">Team Members</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-black mb-2">100+</p>
                <p className="text-xs uppercase font-bold tracking-[0.2em] opacity-80">Tools & Equipment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="py-24 px-4 border-b border-zinc-900">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 text-center">Our Facilities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#1a1a1a] border border-zinc-800 p-8 rounded-lg hover:border-[#db3e79] transition-colors">
                <h3 className="text-2xl font-black uppercase mb-4 text-[#db3e79]">Manufacturing</h3>
                <p className="text-zinc-300 leading-relaxed">
                  CNC machines, lathes, welding equipment, and hand tools for precision fabrication and part creation.
                </p>
              </div>
              <div className="bg-[#1a1a1a] border border-zinc-800 p-8 rounded-lg hover:border-[#db3e79] transition-colors">
                <h3 className="text-2xl font-black uppercase mb-4 text-[#db3e79]">Electronics Lab</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Soldering stations, oscilloscopes, power supplies, and component testing equipment for circuit development.
                </p>
              </div>
              <div className="bg-[#1a1a1a] border border-zinc-800 p-8 rounded-lg hover:border-[#db3e79] transition-colors">
                <h3 className="text-2xl font-black uppercase mb-4 text-[#db3e79]">Testing Arena</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Full-sized arena replica for testing robot performance and validating design concepts before competition.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visit Section */}
        <section className="py-24 px-4 bg-[#1a1a1a] border-b border-zinc-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-8">Visit Us</h2>
            <p className="text-lg text-zinc-300 mb-8 max-w-2xl mx-auto">
              Interested in seeing our facility or learning more about Team 172? We'd love to meet you!
            </p>
            <button className="px-10 py-4 bg-[#db3e79] text-black font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(219,62,121,0.3)]">
              Get in Touch
            </button>
          </div>
        </section>
      </main>

      <LinksSection />
      <Footer />
    </div>
  );
}
