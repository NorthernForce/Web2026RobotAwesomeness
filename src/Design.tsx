import { Navigation } from './components/Navigation';
import { RobotHero } from './components/RobotHero';
import { RobotFeatures } from './components/RobotFeatures';
import { Footer } from './components/Footer';

export default function Design() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#db3e79] selection:text-white">
      <Navigation />
       <main>
          <RobotHero />
          <RobotFeatures />
<section className="py-24 bg-[#db3e79]">
          <div className="max-w-7xl mx-auto px-4 text-black">
            <div className="grid md:grid-cols-4 gap-12">
              <div className="text-center">
                <p className="text-5xl font-black mb-2">24/7</p>
                <p className="text-xs uppercase font-bold tracking-[0.2em] opacity-80">Fabrication Support</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-black mb-2">12</p>
                <p className="text-xs uppercase font-bold tracking-[0.2em] opacity-80">Custom Motors</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-black mb-2">168</p>
                <p className="text-xs uppercase font-bold tracking-[0.2em] opacity-80">Sensors Polled</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-black mb-2">100%</p>
                <p className="text-xs uppercase font-bold tracking-[0.2em] opacity-80">Team Collaboration</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="py-24 bg-black border-y border-zinc-900">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-8">Want to see the Valkyrie in action?</h2>
            <button className="px-10 py-4 bg-[#db3e79] text-black font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(219,62,121,0.3)]">
              Watch Competition Stream
            </button>
          </div>
        </section>
      </main>

      <Footer />   
      
      
    </div>
  );
}
