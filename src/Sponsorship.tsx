import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Award, Zap, Users } from 'lucide-react';

export function Sponsorship() {
  const sponsorshipTiers = [
    {
      name: 'Platinum',
      color: 'text-gray-300',
      benefits: [
        'Logo on all team materials',
        'Recognition at competitions',
        'Team merchandise',
        'Event invitations',
      ],
    },
    {
      name: 'Gold',
      color: 'text-yellow-500',
      benefits: [
        'Logo on website',
        'Recognition at events',
        'Team updates',
      ],
    },
    {
      name: 'Silver',
      color: 'text-blue-300',
      benefits: [
        'Logo recognition',
        'Team appreciation',
      ],
    },
  ];

  return (
    <div className="bg-black">
      <div className="min-h-screen">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-16 text-white">
          <div className="mb-12">
            <h1 className="text-5xl font-black mb-4 text-white tracking-tighter uppercase">
              Sponsorship <span className="text-[#db3e79]">Opportunities</span>
            </h1>
            <div className="w-24 h-1 bg-[#db3e79] mb-8"></div>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Why Sponsor Northern Force?</h2>
              <p className="text-gray-300 mb-6">
                Northern Force Team 172 is dedicated to inspiring the next generation of engineers and innovators. By sponsoring our team, you're investing in education, innovation, and community impact.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg">
                  <Award className="w-12 h-12 text-[#db3e79] mb-4" />
                  <h3 className="text-xl font-bold mb-2">Excellence</h3>
                  <p className="text-gray-400 text-sm">Supporting a competitive team dedicated to innovation.</p>
                </div>
                <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg">
                  <Zap className="w-12 h-12 text-[#db3e79] mb-4" />
                  <h3 className="text-xl font-bold mb-2">Impact</h3>
                  <p className="text-gray-400 text-sm">Directly supporting STEM education in our community.</p>
                </div>
                <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg">
                  <Users className="w-12 h-12 text-[#db3e79] mb-4" />
                  <h3 className="text-xl font-bold mb-2">Community</h3>
                  <p className="text-gray-400 text-sm">Join a network of supporters building the future.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Sponsorship Tiers</h2>
              <div className="space-y-4">
                {sponsorshipTiers.map((tier) => (
                  <div key={tier.name} className="bg-gray-900 border border-gray-800 p-6 rounded-lg hover:border-[#db3e79] transition-colors">
                    <h3 className={`text-xl font-bold mb-3 ${tier.color}`}>{tier.name}</h3>
                    <ul className="space-y-2 text-gray-300">
                      {tier.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="text-[#db3e79] mr-3">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gray-900 border-2 border-[#db3e79] p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-white mb-3">Interested in Sponsoring?</h2>
              <p className="text-gray-300 mb-6">
                Contact us to discuss sponsorship opportunities that align with your organization's values.
              </p>
              <a
                href="/contact"
                className="inline-block bg-[#db3e79] text-white px-8 py-3 rounded font-bold hover:bg-opacity-80 transition-all"
              >
                Get in Touch
              </a>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
