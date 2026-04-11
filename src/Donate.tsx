import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { LinksSection } from './components/LinksSection';
import { useState } from 'react';
import { FadeIn } from "./components/FadeIn";
import "./Animation.css";
import './Donate.css';

export function Donate() {

  // Minimal, focused donate page: preserve title and the core paragraph.
  // Provide an optional redirect to an external Squarespace donation page.
  // Redirect is disabled by default. Set to true in code when you want automatic redirect.
  const [redirectEnabled] = useState(false);
  const [redirectUrl] = useState('https://example.com');
  const [openNewTab, setOpenNewTab] = useState(false);
  const [popup, setPopup] = useState({ show: false, title: '', message: '' });

  function isValidUrl(u: string) {
    try {
      // Basic validation
      const parsed = new URL(u);
      return parsed.protocol === 'http:' || parsed.protocol === 'https:';
    } catch {
      return false;
    }
  }

  const handleDonate = () => {
    if (redirectEnabled && isValidUrl(redirectUrl)) {
      if (openNewTab) window.open(redirectUrl, '_blank');
      else window.location.href = redirectUrl;
      return;
    }

    // Fallback: show a short popup telling user to enable/enter a redirect URL
    setPopup({
      show: true,
      title: 'External Donations',
      message:
        'We redirect donations to an external page. Enable the redirect and provide a valid Squarespace URL to send donors there.'
    });
  };

  const Popup = () =>
    popup.show ? (
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="relative bg-black border border-[#db3e79] rounded-xl p-6 max-w-sm w-full shadow-[0_0_20px_#db3e79] animate-fadeIn">
          {/* Close (X) button in top-right */}
          <button
            aria-label="Close"
            onClick={() => setPopup({ show: false, title: '', message: '' })}
            className="absolute top-3 right-3 text-zinc-400 hover:text-white bg-transparent p-1 rounded"
          >
            <span className="text-2xl leading-none">&times;</span>
          </button>

          <h2 className="text-2xl font-bold text-[#db3e79] mb-3">{popup.title}</h2>
          <p className="text-gray-200 mb-6">{popup.message}</p>
          <div className="flex gap-2">
            <button
              onClick={() => {
                if (!isValidUrl(redirectUrl)) {
                  setPopup({ show: true, title: 'Invalid URL', message: 'Please set a valid Squarespace URL in the code.' });
                  return;
                }
                window.open(redirectUrl, openNewTab ? '_blank' : '_self');
              }}
              className="flex-1 bg-[#db3e79] hover:bg-[#b82e65] text-white font-bold py-2 rounded-lg transition"
            >
              Redirect
            </button>
          </div>
        </div>
      </div>
    ) : null;

  return (
    <>
      <head>
        <title>Team 172 | Donate</title>
      </head>

      <div className="bg-black text-white min-h-screen">
        <Navigation />
        <Popup />
        <FadeIn>

        <main className="max-w-3xl mx-auto px-4 py-20">
          <div className="mb-8">
            <h1 className="text-5xl font-black mb-2 tracking-tighter uppercase fade-in" data-fade>
              Support Our <span className="text-[#db3e79]">Mission</span>
            </h1>
            <div className="w-24 h-1 bg-[#db3e79] mb-6 fade-in" data-fade></div>
          </div>

          <section>
            <p className="text-gray-300 mb-8 fade-in" data-fade>
              Your donation directly impacts the future of STEM education and empowers our students to innovate, compete,
              and inspire others. Every contribution helps us build incredible robots and change lives.
            </p>
          </section>

          <section className="bg-[#0f0f0f] border border-zinc-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 fade-in" data-fade>Optional: Redirect donors to Squarespace</h3>

            <div className="flex items-center gap-4 mb-4">
              <label className="inline-flex items-center gap-2 fade-in" data-fade>
                <input
                  type="checkbox"
                  checked={openNewTab}
                  onChange={(e) => setOpenNewTab(e.target.checked)}
                />
                <span className="text-sm">Open manual link in new tab</span>
              </label>
            </div>

            <div className="mb-4">
              <div className="flex gap-2 items-center">
                <input
                  type="text"
                  value={redirectUrl}
                  readOnly
                  onClick={(e) => (e.currentTarget as HTMLInputElement).select()}
                  className="flex-1 bg-black border border-zinc-700 px-3 py-2 rounded-md text-white read-only:cursor-text fade-in" data-fade
                />

                <button
                  onClick={async () => {
                    if (!isValidUrl(redirectUrl)) {
                      setPopup({ show: true, title: 'Invalid URL', message: 'Please set a valid Squarespace URL in the code.' });
                      return;
                    }
                    try {
                      await navigator.clipboard.writeText(redirectUrl);
                      setPopup({ show: true, title: 'Copied', message: 'URL copied to clipboard.' });
                    } catch {
                      setPopup({ show: true, title: 'Copy failed', message: 'Could not copy to clipboard.' });
                    }
                  }}
                  className="px-3 py-2 bg-[#db3e79] hover:bg-[#b82e65] text-black rounded-md fade-in" data-fade
                >
                  Copy
                </button>

                <button
                  onClick={() => {
                    if (!isValidUrl(redirectUrl)) {
                      setPopup({ show: true, title: 'Invalid URL', message: 'Please set a valid Squarespace URL in the code.' });
                      return;
                    }
                    window.open(redirectUrl, openNewTab ? '_blank' : '_self');
                  }}
                  className="px-3 py-2 bg-zinc-800 border border-zinc-700 text-white rounded-md fade-in" data-fade
                >
                  Open
                </button>
              </div>

              <p className="text-xs text-zinc-500 mt-2 fade-in" data-fade>Click Copy to copy the donation URL. Use Open to manually visit the donation page.</p>
            </div>

            <div className="mt-2">
              <button
                onClick={handleDonate}
                className="px-6 py-3 bg-[#db3e79] hover:bg-[#b82e65] text-black font-black rounded-lg fade-in" data-fade
              >
                Donate
              </button>
            </div>
          </section>
        </main>

        <LinksSection />
        <Footer />
        </FadeIn>
      </div>
    </>
  );
}
