import { ImageWithFallback } from './components/ImagewithFallback';
import { Heart } from 'lucide-react';
import clareGreenlaw from "/images/533321greenlaw.webp";

export function MemorialPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">In Loving Memory</h1>
          <div className="w-32 h-1 bg-pink-500 mx-auto mb-8"></div>
        </div>

        {/* Memorial Card */}
        <div className="bg-gray-900 border-4 border-pink-500 rounded-2xl overflow-hidden shadow-2xl shadow-pink-500/30 mb-12">
          {/* Image Section */}
          <div className="relative h-96 overflow-hidden">
            <ImageWithFallback
              src= {clareGreenlaw}
              alt="Memorial"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
          </div>

          {/* Content Section */}
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Clare Greenlaw
              </h2>
              <div className="flex items-center justify-center gap-2 text-pink-500 text-xl">
                <Heart className="w-6 h-6 fill-current" />
                <span>Forever in Our Hearts</span>
                <Heart className="w-6 h-6 fill-current" />
              </div>
            </div>

            {/* Tribute Text */}
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Clare Greenlaw was an extraordinary member of Northern Force - Team 172, 
                whose passion for robotics, dedication to the team, and kind spirit left 
                an indelible mark on everyone who had the privilege of knowing her.
              </p>
              
              <p>
                Her enthusiasm was contagious, her work ethic was unmatched, and her 
                ability to bring the team together made her an irreplaceable part of our 
                robotics family. Whether she was problem-solving a complex mechanism, 
                mentoring new members, or simply bringing a smile to everyone's face, 
                Clare embodied the true spirit of FIRST Robotics.
              </p>

              <p>
                Beyond her technical skills and achievements, Clare's legacy lives on 
                in the values she championed: collaboration, perseverance, innovation, 
                and above all, kindness. She taught us that robotics is not just about 
                building machines—it's about building community, friendships, and memories 
                that last a lifetime.
              </p>

              <p className="text-pink-400 font-bold text-xl text-center italic mt-8">
                "Clare's light continues to guide us forward. We build, we innovate, 
                and we compete in her honor."
              </p>
            </div>

            {/* Impact Section */}
            <div className="mt-12 pt-8 border-t-2 border-pink-500">
              <h3 className="text-3xl font-bold text-center mb-6 text-white">
                Her Impact on Team 172
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/50 p-6 rounded-lg border-2 border-pink-500/30">
                  <h4 className="text-xl font-bold text-pink-500 mb-3">Mentorship</h4>
                  <p className="text-gray-300">
                    Clare dedicated countless hours mentoring new team members, 
                    ensuring everyone felt welcome and valued.
                  </p>
                </div>
                <div className="bg-black/50 p-6 rounded-lg border-2 border-pink-500/30">
                  <h4 className="text-xl font-bold text-pink-500 mb-3">Innovation</h4>
                  <p className="text-gray-300">
                    Her creative problem-solving and technical expertise helped 
                    drive many of our most successful robot designs.
                  </p>
                </div>
                <div className="bg-black/50 p-6 rounded-lg border-2 border-pink-500/30">
                  <h4 className="text-xl font-bold text-pink-500 mb-3">Team Spirit</h4>
                  <p className="text-gray-300">
                    Clare's positive energy and dedication brought our team closer 
                    together, creating lasting bonds.
                  </p>
                </div>
                <div className="bg-black/50 p-6 rounded-lg border-2 border-pink-500/30">
                  <h4 className="text-xl font-bold text-pink-500 mb-3">Legacy</h4>
                  <p className="text-gray-300">
                    Every competition, every build session, every achievement—we 
                    carry Clare's memory and values forward.
                  </p>
                </div>
              </div>
            </div>

            {/* Closing Message */}
            <div className="mt-12 text-center">
              <div className="inline-block bg-pink-500/20 border-2 border-pink-500 rounded-lg px-8 py-6">
                <p className="text-2xl text-white font-bold mb-2">
                  In memory of Clare Greenlaw
                </p>
                <p className="text-pink-400 text-lg">
                  A cherished friend, teammate, and inspiration
                </p>
                <div className="flex items-center justify-center gap-2 mt-4 text-pink-500">
                  <Heart className="w-8 h-8 fill-current" />
                  <Heart className="w-8 h-8 fill-current" />
                  <Heart className="w-8 h-8 fill-current" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
