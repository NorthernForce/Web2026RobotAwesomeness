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
        <section className="py-24 px-4 border-b border-zinc-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-8">Home of Northern Force</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                  The Coliseum serves as the headquarters for Northern Force Robotics Team 172. Our state-of-the-art facility provides everything we need to design, build, and test cutting-edge FIRST robots.
                </p>
                <p className="text-lg text-zinc-300 leading-relaxed">
                  From our machining workshop to our electronics lab, every corner of the Coliseum is dedicated to innovation and excellence in robotics engineering.
                </p>
              </div>
              <div className="bg-[#1a1a1a] border border-zinc-800 p-8 rounded-lg">
                <h3 className="text-2xl font-black uppercase mb-6 text-[#db3e79]">Key Features</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#db3e79] font-black text-lg mt-1">✦</span>
                    <span>Advanced machining and fabrication equipment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#db3e79] font-black text-lg mt-1">✦</span>
                    <span>Dedicated electronics and programming lab</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#db3e79] font-black text-lg mt-1">✦</span>
                    <span>Testing arena for prototype validation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#db3e79] font-black text-lg mt-1">✦</span>
                    <span>Collaborative workspace for team members</span>
                  </li>
                </ul>
              </div>
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
