import { Box, Container, Typography, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import Section from '../components/Section';
import About from './About';
import Services from './Services';
import Contact from './Contact';

const GradientText = styled(Typography)(({ theme }) => ({
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
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

const features = [
    {
        title: 'Live Streaming',
        description: 'Listen to our live radio broadcasts from across Mindanao.',
        image: '/media/streaming.jpg',
    },
    {
        title: 'Local News',
        description: 'Stay updated with the latest news and events from Mindanao.',
        image: '/media/news.jpg',
    },
    {
        title: 'Community Voices',
        description: 'Hear stories and perspectives from the Mindanao community.',
        image: '/media/community.jpg',
    },
];

function Home() {
    return (
        <Box sx={{ pt: 8 }}>
        {/* Hero Section */}
        <Box
            id="home"
            sx={{
            position: 'relative',
            height: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            mb: 8,
            }}
        >
            <Box
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'url("/media/hero-bg.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.5)',
            }}
            />
            <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <GradientText variant="h1" gutterBottom>
                Mindanao Radio
                </GradientText>
                <Typography variant="h5" color="text.secondary" paragraph>
                Your Voice in Mindanao
                </Typography>
                <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                sx={{ mr: 2 }}
                >
                Listen Now
                </Button>
                <Button
                variant="outlined"
                color="primary"
                size="large"
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                >
                Learn More
                </Button>
            </Box>
            </Container>
        </Box>

        {/* Features Section */}
        <Container maxWidth="lg" sx={{ mb: 8 }}>
            <Typography variant="h3" align="center" gutterBottom>
            Our Features
            </Typography>
            <Grid container spacing={4} sx={{ mt: 4 }}>
            {features.map((feature, index) => (
                <Grid item xs={12} md={4} key={index}>
                <GlassCard>
                    <CardMedia
                    component="img"
                    height="200"
                    image={feature.image}
                    alt={feature.title}
                    />
                    <CardContent>
                    <Typography variant="h5" gutterBottom>
                        {feature.title}
                    </Typography>
                    <Typography color="text.secondary">
                        {feature.description}
                    </Typography>
                    </CardContent>
                </GlassCard>
                </Grid>
            ))}
            </Grid>
        </Container>

        {/* About Section */}
        <Box id="about" sx={{ bgcolor: 'background.paper', py: 8 }}>
            <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                <Typography variant="h3" gutterBottom>
                    About Mindanao Radio
                </Typography>
                <Typography variant="body1" paragraph>
                    Mindanao Radio is your premier source for news, music, and community voices from across Mindanao. We bring you the latest updates, cultural programs, and engaging content that matters to our community.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                    Contact Us
                </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                <Box
                    component="img"
                    src="/media/about.jpg"
                    alt="About Mindanao Radio"
                    sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 2,
                    boxShadow: 3,
                    }}
                />
                </Grid>
            </Grid>
            </Container>
        </Box>

        {/* Features Section */}
        <Section title="Why Choose Us">
            <div className="grid md:grid-cols-3 gap-8">
            <div className="card group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎯</div>
                <h3 className="text-xl font-semibold text-dark-text mb-4">Local Focus</h3>
                <p className="text-dark-text-secondary">
                Dedicated to serving the Mindanao community with relevant local content and news.
                </p>
            </div>
            <div className="card group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📻</div>
                <h3 className="text-xl font-semibold text-dark-text mb-4">24/7 Streaming</h3>
                <p className="text-dark-text-secondary">
                Listen to our live stream anytime, anywhere with our digital platform.
                </p>
            </div>
            <div className="card group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🤝</div>
                <h3 className="text-xl font-semibold text-dark-text mb-4">Community Impact</h3>
                <p className="text-dark-text-secondary">
                Making a difference in Mindanao through community engagement and support.
                </p>
            </div>
            </div>
        </Section>

        {/* About Section */}
        <div id="about" className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
            <About />
        </div>

        {/* Services Section */}
        <div id="services" className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent"></div>
            <Services />
        </div>

        {/* Contact Section */}
        <div id="contact" className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
            <Contact />
        </div>
        </Box>
    );
}

export default Home; 