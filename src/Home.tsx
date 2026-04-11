import { Navigation } from './components/Navigation';
import HeroBanner from './components/HeroBanner';
import { VideoPlayer } from './components/VideoPlayer';
import { LinksSection } from './components/LinksSection';
import { Footer } from './components/Footer';
import { FadeIn } from "./components/FadeIn";
import "./Animation.css";

export default function Home() {
  return (
    <>
    <head>
      <title>Team 172 | Northern Force</title>
    </head>
    <FadeIn>
    <div className="bg-black">
        <div className="min-h-screen">
          <Navigation />
          <HeroBanner />
          <div className="fade-in" data-fade>
            <VideoPlayer />
          </div>
          <LinksSection />
        </div>
        <Footer />
      </div>
      </FadeIn>
    </>
  );
}
