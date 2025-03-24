import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import AudioPlayer from './components/AudioPlayer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-bg text-dark-text">
        <ScrollToTop />
        <Navbar />
        <main className="pb-24"> {/* Add padding bottom for AudioPlayer */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <AudioPlayer />
      </div>
    </Router>
  );
}

export default App;
