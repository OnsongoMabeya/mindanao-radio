import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import AudioPlayer from './components/AudioPlayer';

// Create theme instance
const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#FF6B6B',
            light: '#FF8E8E',
            dark: '#E64A4A',
        },
        secondary: {
            main: '#4ECDC4',
            light: '#7EDCD6',
            dark: '#45B7AE',
        },
        background: {
            default: '#121212',
            paper: '#1E1E1E',
        },
    },
    typography: {
        fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '3.5rem',
            fontWeight: 700,
        },
        h2: {
            fontSize: '2.5rem',
            fontWeight: 600,
        },
        h3: {
            fontSize: '2rem',
            fontWeight: 600,
        },
        h4: {
            fontSize: '1.75rem',
            fontWeight: 500,
        },
        h5: {
            fontSize: '1.5rem',
            fontWeight: 500,
        },
        h6: {
            fontSize: '1.25rem',
            fontWeight: 500,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.7,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: 8,
                    padding: '8px 24px',
                    fontWeight: 500,
                },
            },
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                    <Navbar />
                    <main style={{ flex: 1 }}>
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
        </ThemeProvider>
    );
}

export default App;
