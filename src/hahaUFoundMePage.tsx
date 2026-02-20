import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { LinksSection } from './components/LinksSection';

export function HahaUFoundMePage() {
  return (
    <>
      <Navigation />
      <div className="flex items-center justify-center bg-black px-4 py-16">
        <div className="max-w-2xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Haha, you found me!
          </h1>
          <p className="text-gray-400 text-xl">
            Congratulations! You've found the hidden page.
          </p>
        </div>
      </div>
      <LinksSection />
      <Footer />
    </>
  );
}