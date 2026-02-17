import { Navigation } from './components/Navigation';
import HeroBanner from './components/HeroBanner';
import { VideoPlayer } from './components/VideoPlayer';
import { LinksSection } from './components/LinksSection';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <div className="bg-black">
      <div className="min-h-screen">
        <Navigation />
        <HeroBanner /> 
        <VideoPlayer />
        <LinksSection />
      </div>
      <Footer />
    </div>
  );
}
