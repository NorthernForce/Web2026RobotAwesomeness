import React from 'react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="inline-block px-8 py-4 border-2 border-[#FF007F] mb-8">
          <h2 className="text-2xl font-black text-white tracking-tighter uppercase">Northern Force <span className="text-[#FF007F]">Team 172</span></h2>
        </div>
        <p className="text-zinc-500 text-sm max-w-xl mx-auto mb-8">
          Dedicated to inspiring students in the fields of engineering and technology through the FIRST Robotics Competition.
        </p>
        <div className="flex justify-center gap-8 text-zinc-400 text-xs uppercase font-bold tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Sponsorship</a>
          <a href="#" className="hover:text-white transition-colors">Safety</a>
          <a href="#" className="hover:text-white transition-colors">Resources</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-900 text-zinc-600 text-[10px] uppercase tracking-widest">
          © 2026 Northern Force Team 172. All systems operational.
        </div>
      </div>
    </footer>
  );
}
