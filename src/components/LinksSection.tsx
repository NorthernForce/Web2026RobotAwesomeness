import { ExternalLink, Users, Calendar, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import firstLogo from '/images/first-logo-frc-4.png';

export function LinksSection() {
  const links = [
    {
      title: 'FIRST Robotics',
      description: 'Learn more about FIRST Robotics Competition',
      url: 'https://firstfrc.blob.core.windows.net/frc2026/Manual/2026GameManual.pdf',
      icon: firstLogo,
      isImage: true,
      isExternal: true,
    },
    {
      title: 'Team Calendar',
      description: 'View our upcoming events and competitions',
      url: '/news',
      icon: Calendar,
      isExternal: false,
    },
    {
      title: 'Join Our Team',
      description: 'Interested in joining Northern Force?',
      url: '/contact',
      icon: Users,
      isExternal: false,
    },
    {
      title: 'Resources',
      description: 'Access team documents and learning materials',
      url: '/resources',
      icon: BookOpen,
      isExternal: false,
    },
  ];

  return (
    <section className="bg-gray-800 py-16 border-t-4 border-b-4 border-[#db3e79]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Quick Links
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link, index) => 
            link.isExternal ? (
              <a
                key={index}
                href={link.url}
                className="bg-gray-900 border-2 border-gray-800 hover:border-[#db3e79] rounded-lg p-6 transition-all hover:scale-105 group"
              >
                <div className="flex items-center justify-between mb-3">
                  {link.isImage ? (
                    <img src={link.icon as string} alt={link.title} className="w-8 h-8 object-contain" />
                  ) : (
                    <link.icon className="w-8 h-8 text-[#db3e79]" />
                  )}
                  <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-[#db3e79] transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {link.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {link.description}
                </p>
              </a>
            ) : (
              <Link
                key={index}
                to={link.url}
                className="bg-gray-900 border-2 border-gray-800 hover:border-[#db3e79] rounded-lg p-6 transition-all hover:scale-105 group"
              >
                <div className="flex items-center justify-between mb-3">
                  {link.isImage ? (
                    <img src={link.icon as string} alt={link.title} className="w-8 h-8 object-contain" />
                  ) : (
                    <link.icon className="w-8 h-8 text-[#db3e79]" />
                  )}
                  <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-[#db3e79] transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {link.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {link.description}
                </p>
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}