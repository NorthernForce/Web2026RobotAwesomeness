import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="inline-block px-8 py-4 border-2 border-[#db3e79] mb-8">
          <h2 className="text-2xl font-black text-white tracking-tighter uppercase">Northern Force <span className="text-[#db3e79]">Team 172</span></h2>
        </div>
        <p className="text-zinc-500 text-sm max-w-xl mx-auto mb-8">
          Dedicated to inspiring students in the fields of engineering and technology through the FIRST Robotics Competition.
        </p>
        <div className="flex justify-center gap-8 text-zinc-400 text-xs uppercase font-bold tracking-widest">
          <Link to="/sponsorship" className="hover:text-white transition-colors">Sponsorship</Link>
          <Link to="/safety" className="hover:text-white transition-colors">Safety</Link>
          <Link to="/resources" className="hover:text-white transition-colors">Resources</Link>
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-900 text-zinc-600 text-[10px] uppercase tracking-widest">
          © 2026 Northern Force Team 172. All systems operational.
        </div>
      </div>
    </footer>
  );
}
