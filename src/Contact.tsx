import { Navigation } from './components/Navigation';
import { LinksSection } from './components/LinksSection';
import { Footer } from './components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#db3e79] selection:text-white">
      <Navigation />
      <main>
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-black uppercase tracking-tighter mb-8">Contact Us</h1>
            <p className="text-xl text-gray-400 mb-12">Get in touch with Northern Force Robotics. We'd bee boop to hear from you!</p>
            <p className="text-xl text-gray-400 mb-12"><a href="tel:2076327108">(207) 632-7108</a></p>
          </div>
        </section>

        {/* Contact form section */}
        <section className="py-24 bg-zinc-950 border-y border-zinc-900">
          <div className="max-w-2xl mx-auto px-4">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold uppercase mb-2">Name</label>
                <input type="text" className="w-full bg-black border border-zinc-700 px-4 py-3 text-white focus:border-[#db3e79] focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase mb-2">Email</label>
                <input type="email" className="w-full bg-black border border-zinc-700 px-4 py-3 text-white focus:border-[#db3e79] focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase mb-2">Message</label>
                <textarea rows={6} className="w-full bg-black border border-zinc-700 px-4 py-3 text-white focus:border-[#db3e79] focus:outline-none"></textarea>
              </div>
              <button type="submit" className="w-full px-10 py-4 bg-[#db3e79] text-black font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(219,62,121,0.3)]">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <LinksSection />
      <Footer />
    </div>
  );
}
