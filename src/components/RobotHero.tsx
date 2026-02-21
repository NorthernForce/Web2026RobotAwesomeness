import { ImageWithFallback } from './ImagewithFallback';
import { motion } from 'motion/react';

const SPEC_DATA = [
  { label: 'Weight', value: '118.5 lbs' },
  { label: 'Drive Base', value: 'Swerve Drive MK4i' },
  { label: 'Programming', value: 'Java / WPILib' },
  { label: 'Arm Reach', value: '48 inches' },
  { label: 'Vision', value: 'Limelight 3' },
  { label: 'Max Speed', value: '16 ft/s' },
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
              2025 Competition Build
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              Valkyrie <br />
              <span className="text-[#db3e79]">MK-IV</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-lg mb-10 leading-relaxed">
              Engineered for high-velocity precision. The Valkyrie MK-IV features our most advanced intake system yet, designed to handle game pieces with clinical accuracy in the heat of competition.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {SPEC_DATA.map((spec, i) => (
                <div key={i} className="border-l border-zinc-800 pl-4 py-2">
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">{spec.label}</p>
                  <p className="text-white font-bold text-sm uppercase">{spec.value}</p>
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
                src="https://images.unsplash.com/photo-1742767069929-0c663150b164?auto=format&fit=crop&q=80&w=800"
                alt="Robot hero"
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
