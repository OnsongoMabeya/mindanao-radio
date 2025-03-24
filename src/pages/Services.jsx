import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import RadioIcon from '@mui/icons-material/Radio';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import CampaignIcon from '@mui/icons-material/Campaign';
import EventIcon from '@mui/icons-material/Event';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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
    height: '100%',
    '&:hover': {
        borderColor: theme.palette.primary.main,
        boxShadow: `0 4px 12px ${theme.palette.primary.main}20`,
    },
}));

const services = [
    {
        title: 'Live Radio Broadcasting',
        description: '24/7 live radio broadcasting with a mix of news, music, and entertainment.',
        icon: <RadioIcon sx={{ fontSize: 40 }} />,
        features: [
        'Local news coverage',
        'Music programming',
        'Talk shows',
        'Weather updates',
        'Traffic reports'
        ]
    },
    {
        title: 'Podcast Production',
        description: 'Professional podcast production services for businesses and individuals.',
        icon: <PodcastsIcon sx={{ fontSize: 40 }} />,
        features: [
        'High-quality recording',
        'Professional editing',
        'Distribution services',
        'Custom branding',
        'Analytics tracking'
        ]
    },
    {
        title: 'Advertising Solutions',
        description: 'Effective advertising solutions to reach your target audience.',
        icon: <CampaignIcon sx={{ fontSize: 40 }} />,
        features: [
        'Radio commercials',
        'Sponsored content',
        'Digital advertising',
        'Social media integration',
        'Performance tracking'
        ]
    },
    {
        title: 'Event Coverage',
        description: 'Live coverage of local events and special broadcasts.',
        icon: <EventIcon sx={{ fontSize: 40 }} />,
        features: [
        'Live event streaming',
        'On-site broadcasting',
        'Interview services',
        'Event promotion',
        'Social media coverage'
        ]
    }
];

function Services() {
    const theme = useTheme();
    
    return (
        <Box sx={{ pt: 8 }}>
        {/* Hero Section */}
        <Box
            sx={{
            position: 'relative',
            height: '40vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            mb: 8,
            textAlign: 'center',
            }}
        >
            <Box
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'url("https://images.unsplash.com/photo-1598512199776-e0aa0f6c1e08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.3)',
            }}
            />
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
            <Box sx={{ textAlign: 'center' }}>
                <GradientText variant="h1" gutterBottom>
                Our Services
                </GradientText>
                <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '800px', margin: '0 auto' }}>
                Comprehensive Broadcasting Solutions for the Mindanao Community
                </Typography>
            </Box>
            </Container>
        </Box>

        {/* Services Grid */}
        <Container maxWidth="lg" sx={{ mb: 8 }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" gutterBottom>
                What We Offer
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '800px', margin: '0 auto' }}>
                Discover our range of professional broadcasting services designed to serve and connect the Mindanao community
            </Typography>
            </Box>
            <Grid container spacing={4}>
            {services.map((service, index) => (
                <Grid item xs={12} md={6} key={index}>
                <GlassCard>
                    <CardContent sx={{ textAlign: 'center' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                        <Box
                        sx={{
                            width: 80,
                            height: 80,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
                            color: theme.palette.primary.main,
                            mb: 2,
                        }}
                        >
                        {service.icon}
                        </Box>
                        <Typography variant="h5" gutterBottom>
                        {service.title}
                        </Typography>
                        <Typography color="text.secondary" sx={{ mb: 3 }}>
                        {service.description}
                        </Typography>
                    </Box>
                    <List>
                        {service.features.map((feature, idx) => (
                        <ListItem key={idx} sx={{ justifyContent: 'center' }}>
                            <ListItemIcon sx={{ minWidth: '40px' }}>
                            <CheckCircleIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary={feature} />
                        </ListItem>
                        ))}
                    </List>
                    <Box sx={{ mt: 3, textAlign: 'center' }}>
                        <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{
                            borderRadius: 2,
                            px: 4,
                            py: 1,
                            background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                            '&:hover': {
                            background: `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.secondary.dark} 90%)`,
                            },
                        }}
                        >
                        Learn More
                        </Button>
                    </Box>
                    </CardContent>
                </GlassCard>
                </Grid>
            ))}
            </Grid>
        </Container>

        {/* Call to Action */}
        <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
            <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" gutterBottom>
                Ready to Get Started?
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4, maxWidth: '800px', margin: '0 auto' }}>
                Contact us today to learn more about our services and how we can help you reach your audience.
                </Typography>
                <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                    borderRadius: 2,
                    px: 6,
                    py: 1.5,
                    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                    '&:hover': {
                    background: `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.secondary.dark} 90%)`,
                    },
                }}
                >
                Contact Us
                </Button>
            </Box>
            </Container>
        </Box>
        </Box>
    );
}

export default Services; 