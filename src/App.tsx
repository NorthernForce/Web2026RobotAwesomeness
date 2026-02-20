import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './Home';
import Design from './Design';
import Contact from './Contact';
import Coliseum from './Coliseum';
import { ComingSoonPage } from './ComingSoonPage';
import { NewsPage } from './NewsPage';
import { MemorialPage } from './MemorialPage';
import { HahaUFoundMePage } from './hahaUFoundMePage';
import { Privacy } from './Privacy';
import { Sponsorship } from './Sponsorship';
import { Safety } from './Safety';
import { Resources } from './Resources';
import { OurTeam } from './OurTeam';
import { Donate } from './Donate';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<Design />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/coliseum" element={<Coliseum />} />
        <Route path="/comingsoonpage" element={<ComingSoonPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/memorial" element={<MemorialPage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/sponsorship" element={<Sponsorship />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/easterEgg" element={<HahaUFoundMePage />} />
      </Routes>
    </Router>
  );
}
