import { Clock } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { LinksSection } from './components/LinksSection';
import { Footer } from './components/Footer';

export function ComingSoonPage() {
  return (
    <>
      <Navigation />
      <div className="flex items-center justify-center bg-black px-4 py-16">
        <div className="max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="bg-pink-500/20 p-6 rounded-full">
              <Clock className="w-20 h-20 text-pink-500" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Coming Soon
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            We're working hard to bring you something amazing. Stay tuned!
          </p>
          
          <div className="border-t-2 border-pink-500 pt-8">
            <p className="text-pink-500 text-lg font-semibold">
              Northern Force - Team 172
            </p>
          </div>
        </div>
      </div>
      
      <LinksSection />
      <Footer />
    </>
  );
}