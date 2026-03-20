import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { User } from 'lucide-react';

interface MentorProfile {
  name: string;
  role?: string;
}

export function Mentors() {
  const mentors: MentorProfile[] = [
    { name: 'Luke Hankins' },
    { name: 'John Crosby' },
    { name: 'John Kraljic' },
    { name: 'Peter Merrrow' },
    { name: 'Justin Whitney' },
    { name: 'Elizabeth Richards' },
    { name: 'Angela Ostlund' },
    { name: 'Andy Dixon' },
    { name: 'Vimal Prabakar' },
    { name: 'Steve Nutt' },
    { name: 'Sarah Greenlaw' },
    { name: 'Richard Burt' },
    { name: 'Jimmy Arcaro' },
    { name: 'Jason Hurder' },
    { name: 'James Lockman' },
    { name: 'Grant Richards' },
    { name: 'Brandon Richards' },
    { name: 'Amelia Ring' },
    { name: 'Alden Herodes' },
    { name: 'Craig Richards' },
  ];

  const leaders: MentorProfile[] = [
    { name: 'Meredith Greenlaw', role: 'Team Lead' },
  ];

  const peopleToNote: MentorProfile[] = [
    { name: 'Timothy Hodgdon (hes awesome)' },
  ];

  const MentorCard = ({ person }: { person: MentorProfile }) => (
    <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-[#db3e79] transition-colors">
      {/* Image Placeholder */}
      <div className="w-full aspect-square bg-gray-800 flex items-center justify-center">
        <User className="w-16 h-16 text-gray-700" />
      </div>
      
      {/* Name and Role */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-white">{person.name}</h3>
        {person.role && <p className="text-sm text-[#db3e79] mt-1">{person.role}</p>}
      </div>
    </div>
  );

  return (
    <>
      <head>
        <title>Team 172 | Mentors</title>
      </head>
      <div className="bg-black">
        <div className="min-h-screen">
          <Navigation />
          <div className="max-w-6xl mx-auto px-4 py-16 text-white">
            {/* Page Header */}
            <div className="mb-16">
              <h1 className="text-5xl font-black mb-4 text-white tracking-tighter uppercase">
                Our <span className="text-[#db3e79]">Mentors</span>
              </h1>
              <div className="w-24 h-1 bg-[#db3e79] mb-8"></div>
              <p className="text-gray-300 text-lg max-w-3xl">
                Northern Force Team 172 is guided by dedicated mentors who share their expertise and passion for STEM education. Our mentors come from diverse backgrounds and bring invaluable knowledge and experience to our team.
              </p>
            </div>

            {/* Team Leaders Section */}
            {leaders.length > 0 && (
              <section className="mb-20">
                <h2 className="text-3xl font-bold text-white mb-2 uppercase">
                  <span className="text-[#db3e79]">Leadership</span>
                </h2>
                <div className="w-16 h-1 bg-[#db3e79] mb-8"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {leaders.map((person, idx) => (
                    <MentorCard key={idx} person={person} />
                  ))}
                </div>
              </section>
            )}

            {/* Mentors Section */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-white mb-2 uppercase">
                <span className="text-[#db3e79]">Mentors</span>
              </h2>
              <div className="w-16 h-1 bg-[#db3e79] mb-8"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {mentors.map((person, idx) => (
                  <MentorCard key={idx} person={person} />
                ))}
              </div>
            </section>

            {/* Notable People Section */}
            {peopleToNote.length > 0 && (
              <section className="mb-20">
                <h2 className="text-3xl font-bold text-white mb-2 uppercase">
                  <span className="text-[#db3e79]">Notable People</span>
                </h2>
                <div className="w-16 h-1 bg-[#db3e79] mb-8"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {peopleToNote.map((person, idx) => (
                    <MentorCard key={idx} person={person} />
                  ))}
                </div>
              </section>
            )}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
