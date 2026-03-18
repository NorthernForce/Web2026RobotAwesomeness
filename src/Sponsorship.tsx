import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Award, Zap, Users } from 'lucide-react';
import { ImageWithFallback } from './components/ImagewithFallback';

// local sponsor assets (some logos live in src/assets/Sponsorships, some in public/images)
import brookfieldLogo from './assets/Sponsorships/brookfield-properties-logo-png_seeklogo-339528.png'
import adobeLogo from './assets/Sponsorships/adobe-color.svg'
import stemColiseumLogo from './assets/Sponsorships/STEM Coliseum.webp'
import falmouthSchoolLogo from './assets/Sponsorships/Logo_FalmouthSChoolDistrict_Maine_September2021.webp'
import tftLogo from './assets/Sponsorships/tftlogo.svg'
import gofarLogo from './assets/Sponsorships/11672.webp'

import aecLogo from './assets/Sponsorships/logo-aec.png'
import lancoLogo from './assets/Sponsorships/lanco-integrated-logo-white.svg'
import falmouthLionsLogo from './assets/Sponsorships/falmouth-lions-46th-annual-auction-48(1).jpeg'
// greenlaw image is in public/images
import greenlaw from '/images/533321greenlaw.webp'

export function Sponsorship() {
  // Featured (larger) sponsors — show prominent logo spaces
  const featuredSponsors = [
    { name: 'Brookfield Properties', logo: brookfieldLogo },
    { name: 'GoFAR', logo: gofarLogo },
    { name: 'Adobe', logo: adobeLogo },
    { name: 'Haller Patel Family', logo: undefined },
    { name: 'Falmouth High School', logo: falmouthSchoolLogo },
    { name: 'STEM Coliseum', logo: stemColiseumLogo },
    { name: 'Town Fair Tire', logo: tftLogo },
  ];

  // Supporting (smaller) sponsors — compact logos or name-only boxes
  const supportingSponsors = [
    { name: 'Gorham High School', logo: undefined },
    { name: 'AEC Engineering', logo: aecLogo },
    { name: 'Falmouth Lions Club', logo: falmouthLionsLogo },
    { name: 'Lockman Family', logo: undefined },
    { name: 'Boudreau Family', logo: undefined },
    { name: 'Bourgoin Family', logo: undefined },
    { name: 'Lanco Integrated', logo: lancoLogo },
    { name: 'Linda Dennig', logo: undefined },
    { name: 'Hankins Family', logo: undefined },
    { name: 'Greenlaw Family', logo: greenlaw },
  ];

  return (
    <><head>
      <title>Team 172 | Sponsorship</title>
    </head><div className="bg-black">
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
              <h2 className="text-2xl font-bold text-white mb-6">Featured Sponsors</h2>
              <p className="text-gray-300 mb-6">Our primary sponsors who make a big impact — their logos are featured prominently below.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {featuredSponsors.map((s) => (
                  <div key={s.name} className="bg-gray-900 border border-gray-800 p-6 rounded-lg flex flex-col items-center justify-center hover:border-[#db3e79] transition-colors">
                    <div className="w-full h-28 sm:h-32 md:h-36 mb-4 flex items-center justify-center px-6">
                      {/* make logos fill height while preserving aspect ratio */}
                      <ImageWithFallback src={s.logo} alt={`${s.name} logo`} className="h-full w-auto object-contain" />
                    </div>
                    <h3 className="text-lg font-bold text-white text-center">{s.name}</h3>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Supporting Sponsors</h2>
              <p className="text-gray-300 mb-6">We thank these organizations and families for their generous support.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {supportingSponsors.map((s) => (
                  <div key={s.name} className="bg-gray-900 border border-gray-800 p-3 rounded flex flex-col items-center justify-center text-center hover:border-[#db3e79] transition-colors">
                    <div className="w-full h-24 sm:h-28 md:h-28 flex items-center justify-center px-3">
                      <ImageWithFallback src={s.logo} alt={`${s.name} logo`} className="h-full w-auto object-contain" />
                    </div>
                    {/* show name for clarity and accessibility */}
                    <div className="mt-2">
                      <span className="text-xs text-gray-300">{s.name}</span>
                    </div>
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
      </div></>
  );
}
