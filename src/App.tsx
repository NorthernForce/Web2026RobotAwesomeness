import { Navigation } from './components/Navigation';
import HeroBanner from './components/HeroBanner';
import { VideoPlayer } from './components/VideoPlayer';
import { LinksSection } from './components/LinksSection';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
       <HeroBanner /> 
      <VideoPlayer />
      <LinksSection />
      
      {/* Footer */}
      <footer className="bg-black text-white py-8 border-t-2 border-pink-500">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg mb-2">
            Northern Force - Team 172
          </p>
          <p className="text-gray-400 text-sm">
            © 2026 Northern Force Robotics. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
