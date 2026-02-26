import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { LinksSection } from './components/LinksSection';
import { Users, Target, Heart } from 'lucide-react';

export function OurTeam() {
  const teamHighlights = [
    {
      icon: Users,
      title: 'Our Membership',
      description: [
        'Students from Falmouth High School and Gorham High School',
        'Founded in 1996 with 28 students and 15 mentors',
        'Dedicated to teaching STEM and problem-solving skills',
        'Values gracious professionalism and STEM education',
      ],
    },
    {
      icon: Target,
      title: 'Our Mission',
      description: [
        'Inspire young people to be innovators, creators, entrepreneurs, and leaders',
        'Provide cost-effective, mentor-led experiential programs and competitions',
        'Cultivate workforce readiness for the benefit of Maine\'s future',
      ],
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: [
        'Create STEM Career Awareness and Readiness In Maine',
        'Empower Students To Customize Their STEM Experiential Learning',
        'Mimic Industry in Organization, Management, And Mentoring Focus',
        'Exemplify STEM\'s Ability to Help Our Community',
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
              Our <span className="text-[#db3e79]">Team</span>
            </h1>
            <div className="w-24 h-1 bg-[#db3e79] mb-8"></div>
          </div>

          <div className="space-y-12">
            <section>
              <p className="text-gray-300 mb-8">
                Northern Force Team 172 is a vibrant community of students dedicated to advancing science, technology, engineering, and mathematics through competitive robotics. Since our founding, we've grown into one of the most innovative teams in our region.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamHighlights.map((highlight, idx) => {
                const IconComponent = highlight.icon;
                return (
                  <div key={idx} className="bg-gray-900 border border-gray-800 p-6 rounded-lg hover:border-[#db3e79] transition-colors">
                    <IconComponent className="w-12 h-12 text-[#db3e79] mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3">{highlight.title}</h3>
                    {Array.isArray(highlight.description) ? (
                      <ul className="text-gray-400 space-y-2">
                        {highlight.description.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start">
                            <span className="text-[#db3e79] mr-3">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-400">{highlight.description}</p>
                    )}
                  </div>
                );
              })}
            </div>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white">What We Do</h2>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Design & Build</h3>
                  <p>Our engineering subteams work collaboratively to design and build competitive robots that perform at the highest level during competitions.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Programming & Controls</h3>
                  <p>Our software team develops the code that brings our robots to life, implementing complex autonomous routines and reliable operator controls.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Business & Operations</h3>
                  <p>We manage sponsorships, budgets, logistics, and community outreach to ensure our team runs smoothly and makes a positive impact.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Outreach & Community</h3>
                  <p>We're passionate about inspiring the next generation of engineers through demonstrations, mentoring, and community engagement.</p>
                </div>
              </div>
            </section>

            <section className="bg-gray-900 border-2 border-[#db3e79] p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-3">Interested in Joining?</h2>
              <p className="text-gray-300 mb-6">
                We're always looking for passionate students who want to be part of something special. No prior robotics experience required—just bring your enthusiasm and willingness to learn!
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
      <LinksSection />
      <Footer />
    </div>
  );
}
