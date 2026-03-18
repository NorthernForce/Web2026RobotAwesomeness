import { ImageWithFallback } from './ImagewithFallback';
import { motion } from 'motion/react';

const HERO_STATS = [
  { label: 'Robots Built', value: '25+' },
  { label: 'Year Established', value: '1996' },
  { label: 'Students Trained', value: '100+' },
  { label: 'Competitions Attended', value: '50+' },
];

export function RobotHero() {
  return (
    <div className="relative overflow-hidden bg-black pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="z-10"
          >
            <div className="inline-block px-3 py-1 bg-[#db3e79] text-black font-black text-xs uppercase tracking-[0.2em] mb-4">
              Robotics Through the Years
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              Our Robot Legacy
            </h1>
            <p className="text-zinc-400 text-lg max-w-lg mb-10 leading-relaxed">
              Explore every robot Team 172 has built since 1996. Each year brings a new challenge, a new design, and a new set of lessons learned.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {HERO_STATS.map((stat, i) => (
                <div key={i} className="border-l border-zinc-800 pl-4 py-2">
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">{stat.label}</p>
                  <p className="text-white font-bold text-sm uppercase">{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 border-2 border-[#db3e79] opacity-20 -rotate-2"></div>
            <div className="relative aspect-[4/5] bg-zinc-900 overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1615230596515-9431f8369dde?auto=format&fit=crop&q=80&w=800"
                alt="Robotics team" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
                <p className="text-[#db3e79] font-black text-4xl italic">172</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
