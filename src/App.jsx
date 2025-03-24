import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box, Container, Typography, Button, Card, CardContent, Grid, AppBar, Toolbar, IconButton, useScrollTrigger } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Navbar from './components/Navbar';
import AudioPlayer from './components/AudioPlayer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(26, 26, 26, 0.8)',
  backdropFilter: 'blur(8px)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
}));

const GlassCard = styled(Card)(({ theme }) => ({
  background: 'rgba(26, 26, 26, 0.5)',
  backdropFilter: 'blur(8px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    borderColor: theme.palette.primary.main,
    boxShadow: `0 4px 12px ${theme.palette.primary.main}20`,
  },
}));

const GradientText = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <ScrollToTop />
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1, pt: 8 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
        <AudioPlayer />
      </Box>
    </Router>
  );
}

export default App;
