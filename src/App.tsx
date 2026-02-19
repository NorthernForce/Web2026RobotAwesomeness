import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './Home';
import Design from './Design';
import Contact from './Contact';
import { ComingSoonPage } from './ComingSoonPage';
import { NewsPage } from './NewsPage';
import { MemorialPage } from './MemorialPage';

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
        <Route path="/comingsoonpage" element={<ComingSoonPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/memorial" element={<MemorialPage />} />
      </Routes>
    </Router>
  );
}
