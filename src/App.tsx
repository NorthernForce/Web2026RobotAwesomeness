import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Design from './Design';
import { ComingSoonPage } from './ComingSoonPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<Design />} />
        <Route path="/comingsoonpage" element={<ComingSoonPage />} />
      </Routes>
    </Router>
  );
}
