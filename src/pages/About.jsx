import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import RadioIcon from '@mui/icons-material/Radio';
import PeopleIcon from '@mui/icons-material/People';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HistoryIcon from '@mui/icons-material/History';

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

const IconWrapper = styled(Box)(({ theme }) => ({
    width: 60,
    height: 60,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
    background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
    color: theme.palette.primary.main,
}));

const values = [
    {
        icon: <RadioIcon sx={{ fontSize: 30 }} />,
        title: 'Quality Broadcasting',
        description: 'We deliver high-quality radio content that informs, entertains, and connects our community.',
    },
    {
        icon: <PeopleIcon sx={{ fontSize: 30 }} />,
        title: 'Community First',
        description: 'Our commitment to serving the Mindanao community drives everything we do.',
    },
    {
        icon: <EmojiEventsIcon sx={{ fontSize: 30 }} />,
        title: 'Excellence',
        description: 'We strive for excellence in every aspect of our broadcasting and community service.',
    },
    {
        icon: <HistoryIcon sx={{ fontSize: 30 }} />,
        title: 'Tradition & Innovation',
        description: 'We honor our broadcasting traditions while embracing modern technology and methods.',
    },
];

const features = [
    {
        title: 'Professional Broadcasting',
        description: 'State-of-the-art equipment and experienced broadcasters delivering quality content.',
        image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
        title: 'Community Focus',
        description: 'Deep understanding and connection with the Mindanao community.',
        image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
        title: 'Digital Innovation',
        description: 'Embracing modern technology to enhance broadcasting experience.',
        image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
];

const teamMembers = [
    {
        name: 'John Doe',
        position: 'Station Manager',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
    },
    {
        name: 'Jane Smith',
        position: 'News Director',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80'
    },
    {
        name: 'Mike Johnson',
        position: 'Program Director',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
];

function About() {
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
                backgroundImage: 'url("https://images.unsplash.com/photo-1516057747705-0609711c769b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.3)',
            }}
            />
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
            <Box sx={{ textAlign: 'center' }}>
                <GradientText variant="h1" gutterBottom>
                About Us
                </GradientText>
                <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '800px', margin: '0 auto' }}>
                Your Voice in Mindanao Since 1995
                </Typography>
            </Box>
            </Container>
        </Box>

        {/* Story Section */}
        <Container maxWidth="lg" sx={{ mb: 8 }}>
            <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
                <Typography variant="h3" gutterBottom align="center">
                Our Story
                </Typography>
                <Typography variant="body1" paragraph>
                Founded in 1995, Mindanao Radio has been at the forefront of broadcasting in the region. What started as a small community radio station has grown into a trusted voice for millions of listeners across Mindanao.
                </Typography>
                <Typography variant="body1" paragraph>
                Our journey has been marked by continuous growth and innovation, always staying true to our mission of serving the community through quality broadcasting.
                </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box
                component="img"
                src="https://images.unsplash.com/photo-1598387993441-a364f854c3e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
                alt="Our Story"
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

        {/* Why Choose Us Section */}
        <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
            <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Typography variant="h3" gutterBottom>
                Why Choose Us
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '800px', margin: '0 auto', mb: 4 }}>
                Experience the difference with Mindanao's premier broadcasting station
                </Typography>
            </Box>
            <Grid container spacing={4}>
                {features.map((feature, index) => (
                <Grid item xs={12} md={4} key={index}>
                    <GlassCard>
                    <CardMedia
                        component="img"
                        height="200"
                        image={feature.image}
                        alt={feature.title}
                        sx={{ mb: 2 }}
                    />
                    <CardContent sx={{ textAlign: 'center' }}>
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
        </Box>

        {/* Team Section */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" gutterBottom>
                Our Team
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '800px', margin: '0 auto', mb: 4 }}>
                Meet the dedicated professionals behind Mindanao Radio
            </Typography>
            </Box>
            <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
                <Grid item xs={12} md={4} key={index}>
                <GlassCard>
                    <CardMedia
                    component="img"
                    height="300"
                    image={member.image}
                    alt={member.name}
                    sx={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                    />
                    <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" gutterBottom>
                        {member.name}
                    </Typography>
                    <Typography color="text.secondary">
                        {member.position}
                    </Typography>
                    </CardContent>
                </GlassCard>
                </Grid>
            ))}
            </Grid>
        </Container>
        </Box>
    );
}

export default About; 