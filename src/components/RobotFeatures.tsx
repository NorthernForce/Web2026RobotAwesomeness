import React from 'react';
import { ImageWithFallback } from './ImagewithFallback';
import { motion } from 'motion/react';
import { Cpu, Zap } from 'lucide-react';

export function RobotFeatures() {
  const features = [
    {
      title: "Advanced Perception",
      desc: "Dual-core vision processing using machine learning to identify game pieces in real-time.",
      icon: <Cpu className="text-[#af3173]" size={32} />,
      img: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Swerve Drive",
      desc: "Independent 4-wheel steering allowing for 360° translation and rotation simultaneously.",
      icon: <Zap className="text-[#af3173]" size={32} />,
      img: "https://images.unsplash.com/photo-1648765334009-75e33eed0e1d?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-24">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-zinc-900 border border-[#af3173]/30 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter">{feature.title}</h3>
                </div>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  {feature.desc}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-zinc-300">
                    <div className="w-1.5 h-1.5 bg-[#af3173]"></div>
                    Custom fabricated components
                  </li>
                  <li className="flex items-center gap-3 text-sm text-zinc-300">
                    <div className="w-1.5 h-1.5 bg-[#af3173]"></div>
                    Rigorous stress testing
                  </li>
                </ul>
              </div>
              <div className="flex-1 w-full aspect-video bg-zinc-900 border border-zinc-800 overflow-hidden group">
                <ImageWithFallback 
                  src={feature.img} 
                  alt={feature.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
