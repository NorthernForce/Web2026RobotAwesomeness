import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ExternalLink, Shield } from 'lucide-react';
import { useEffect } from 'react';

export function Safety() {
  useEffect(() => {
    // Redirect to STEM Coliseum safety reporting page
    window.open("https://stem-coliseum.odoo.com/safety-reporting", "_blank");
  }, []);

  return (
    <div className="bg-black">
      <div className="min-h-screen">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-16 text-white">
          <div className="mb-12">
            <h1 className="text-5xl font-black mb-4 text-white tracking-tighter uppercase">
              Safety <span className="text-[#db3e79]">Reporting</span>
            </h1>
            <div className="w-24 h-1 bg-[#db3e79] mb-8"></div>
          </div>

          <div className="space-y-12 text-gray-300">
            <section className="bg-blue-900 border-2 border-blue-700 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-blue-300 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">STEM Coliseum Safety Portal</h2>
                  <p className="mb-4">
                    You are being redirected to the STEM Coliseum safety reporting system. This is the official platform for reporting and managing safety information.
                  </p>
                  <a 
                    href="https://stem-coliseum.odoo.com/safety-reporting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#db3e79] hover:bg-[#c92f6a] text-white px-6 py-2 rounded font-bold transition-colors"
                  >
                    Go to Safety Portal
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </section>

            <p className="text-center text-gray-400">
              If you are not redirected automatically, please click the button above.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
