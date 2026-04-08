import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { LinksSection } from './components/LinksSection';

export default function ThankYou() {
  return (
    <>
      <head>
        <title>Team 172 | Thank You</title>
      </head>

      <div className="min-h-screen bg-black text-white selection:bg-[#db3e79] selection:text-white">
        <Navigation />

        <main className="max-w-3xl mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-black mb-4 uppercase tracking-tighter">Thank you!</h1>
            <p className="text-xl text-zinc-300 mb-6">We appreciate your support of Team 172 and the STEM Coliseum.</p>

            <div className="mx-auto max-w-xl bg-[#0f0f0f] border border-zinc-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-[#db3e79] mb-3">Your donation makes a difference</h2>
              <p className="text-zinc-300 mb-4">
                Your contribution helps us provide equipment, mentorship, and programming that empowers the next
                generation of makers, engineers, and leaders. Thank you for being part of our mission.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => (window.location.href = '/')}
                  className="px-6 py-3 bg-[#db3e79] hover:bg-[#b82e65] text-black font-black rounded-lg"
                >
                  Return Home
                </button>

                <button
                  onClick={() => window.location.href = '/donate'}
                  className="px-6 py-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg"
                >
                  Donate Again
                </button>
              </div>
            </div>
          </div>
        </main>

        <LinksSection />
        <Footer />
      </div>
    </>
  );
}
