import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { LinksSection } from './components/LinksSection';
import { Heart, Zap, Users, Trophy } from 'lucide-react';

export function Donate() {
  const donationImpacts = [
    {
      icon: Zap,
      amount: '$50',
      impact: 'Supplies materials for one robot subsystem',
    },
    {
      icon: Users,
      amount: '$100',
      impact: 'Supports team training and skill development',
    },
    {
      icon: Trophy,
      amount: '$500',
      impact: 'Covers competition registration and travel',
    },
    {
      icon: Heart,
      amount: '$1,000+',
      impact: 'Becomes a platinum sponsor with recognition',
    },
  ];

  return (
    <div className="bg-black">
      <div className="min-h-screen">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-16 text-white">
          <div className="mb-12">
            <h1 className="text-5xl font-black mb-4 text-white tracking-tighter uppercase">
              Support Our <span className="text-[#db3e79]">Mission</span>
            </h1>
            <div className="w-24 h-1 bg-[#db3e79] mb-8"></div>
          </div>

          <div className="space-y-12">
            <section>
              <p className="text-gray-300 mb-8">
                Your donation directly impacts the future of STEM education and empowers our students to innovate, compete, and inspire others. Every contribution helps us build incredible robots and change lives.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6">How Your Donation Makes an Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {donationImpacts.map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={idx} className="bg-gray-900 border border-gray-800 p-6 rounded-lg hover:border-[#db3e79] transition-colors">
                      <div className="flex items-start gap-4">
                        <IconComponent className="w-8 h-8 text-[#db3e79] flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-lg font-bold text-white mb-1">{item.amount}</h3>
                          <p className="text-gray-400">{item.impact}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Where Your Money Goes</h2>
              <div className="space-y-4">
                <div className="bg-gray-900 border border-gray-800 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">Robot Development & Materials</span>
                    <span className="text-[#db3e79] font-bold">40%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-[#db3e79] h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div className="bg-gray-900 border border-gray-800 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">Competition & Travel</span>
                    <span className="text-[#db3e79] font-bold">35%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-[#db3e79] h-2 rounded-full" style={{ width: '35%' }}></div>
                  </div>
                </div>
                <div className="bg-gray-900 border border-gray-800 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">Student Training & Development</span>
                    <span className="text-[#db3e79] font-bold">15%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-[#db3e79] h-2 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
                <div className="bg-gray-900 border border-gray-800 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">Community Outreach</span>
                    <span className="text-[#db3e79] font-bold">10%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-[#db3e79] h-2 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-blue-900 border-2 border-blue-700 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-white mb-3">Tax-Deductible Status</h2>
              <p className="text-gray-300 mb-3">
                Northern Force Team 172 is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the fullest extent allowed by law.
              </p>
              <p className="text-gray-400 text-sm">
                Tax ID: XX-XXXXXXX (This is a placeholder - replace with actual tax ID)
              </p>
            </section>

            <section className="bg-gray-900 border-2 border-[#db3e79] p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Make an Impact?</h2>
              <p className="text-gray-300 mb-8">
                Choose your donation method below or contact us for other giving opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="inline-block bg-[#db3e79] text-white px-8 py-3 rounded font-bold hover:bg-opacity-80 transition-all"
                >
                  Donate Now
                </a>
                <a
                  href="/sponsorship"
                  className="inline-block border-2 border-[#db3e79] text-white px-8 py-3 rounded font-bold hover:bg-[#db3e79] hover:bg-opacity-10 transition-all"
                >
                  Explore Sponsorship
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
      <LinksSection />
      <Footer />
    </div>
  );
}
