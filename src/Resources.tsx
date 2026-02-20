import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { BookOpen, FileText, Link as LinkIcon, Download } from 'lucide-react';

export function Resources() {
  const resources = [
    {
      category: 'Learning Materials',
      icon: BookOpen,
      items: [
        { title: 'Robot Design Principles', description: 'Introduction to mechanical and electrical design' },
        { title: 'Programming Guide', description: 'Software development resources for FRC' },
        { title: 'Pneumatics Reference', description: 'Air system design and implementation' },
      ],
    },
    {
      category: 'Documentation',
      icon: FileText,
      items: [
        { title: 'Design Specifications', description: 'Technical documentation for current season' },
        { title: 'Meeting Notes', description: 'Strategic planning and progress updates' },
        { title: 'Safety Procedures', description: 'Detailed safety guidelines and protocols' },
      ],
    },
    {
      category: 'External Links',
      icon: LinkIcon,
      items: [
        { title: 'FIRST Robotics Official', description: 'Official FIRST Robotics Competition site' },
        { title: 'The Blue Alliance', description: 'Event results and team data' },
        { title: 'Chief Delphi Forums', description: 'Community discussion and collaboration' },
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
              Resources & <span className="text-[#db3e79]">Documentation</span>
            </h1>
            <div className="w-24 h-1 bg-[#db3e79] mb-8"></div>
          </div>

          <div className="space-y-12">
            <section>
              <p className="text-gray-300 mb-8">
                Access team documents, learning materials, and helpful resources for members and interested students. Everything you need to learn about robotics and our team's work.
              </p>
            </section>

            {resources.map((section, idx) => {
              const IconComponent = section.icon;
              return (
                <section key={idx}>
                  <div className="flex items-center gap-3 mb-6">
                    <IconComponent className="w-8 h-8 text-[#db3e79]" />
                    <h2 className="text-2xl font-bold text-white">{section.category}</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-11">
                    {section.items.map((item, itemIdx) => (
                      <a
                        key={itemIdx}
                        href="#"
                        className="bg-gray-900 border border-gray-800 p-4 rounded-lg hover:border-[#db3e79] transition-colors group"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="font-semibold text-white group-hover:text-[#db3e79] transition-colors mb-1">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-400">{item.description}</p>
                          </div>
                          {section.category === 'Documentation' && (
                            <Download className="w-5 h-5 text-gray-500 group-hover:text-[#db3e79] flex-shrink-0 mt-1 transition-colors" />
                          )}
                        </div>
                      </a>
                    ))}
                  </div>
                </section>
              );
            })}

            <section className="bg-gray-900 border-2 border-[#db3e79] p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-3">Need Something Specific?</h2>
              <p className="text-gray-300 mb-6">
                Can't find what you're looking for? Contact us and we'll help you find the resources you need.
              </p>
              <a
                href="/contact"
                className="inline-block bg-[#db3e79] text-white px-6 py-2 rounded font-semibold hover:bg-opacity-80 transition-all"
              >
                Contact Us
              </a>
            </section>

            <section className="pt-8 border-t border-gray-700">
              <p className="text-sm text-gray-500">Last updated: February 2026</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
