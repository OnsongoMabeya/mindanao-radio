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
            }}
        >
            <Box
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'url("/media/about-hero.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.5)',
            }}
            />
            <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <GradientText variant="h1" gutterBottom>
                About Us
                </GradientText>
                <Typography variant="h5" color="text.secondary">
                Your Voice in Mindanao Since 1995
                </Typography>
            </Box>
            </Container>
        </Box>

        {/* Story Section */}
        <Container maxWidth="lg" sx={{ mb: 8 }}>
            <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
                <Typography variant="h3" gutterBottom>
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
                src="/media/about-story.jpg"
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

        {/* Values Section */}
        <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
            <Container maxWidth="lg">
            <Typography variant="h3" align="center" gutterBottom>
                Our Values
            </Typography>
            <Grid container spacing={4} sx={{ mt: 4 }}>
                {values.map((value, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                    <GlassCard>
                    <CardContent sx={{ textAlign: 'center' }}>
                        <IconWrapper>
                        {value.icon}
                        </IconWrapper>
                        <Typography variant="h6" gutterBottom>
                        {value.title}
                        </Typography>
                        <Typography color="text.secondary">
                        {value.description}
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
            <Typography variant="h3" align="center" gutterBottom>
            Our Team
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
            Meet the dedicated professionals behind Mindanao Radio
            </Typography>
            <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
                <GlassCard>
                <CardMedia
                    component="img"
                    height="300"
                    image="/media/team-1.jpg"
                    alt="Team Member 1"
                />
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                    John Doe
                    </Typography>
                    <Typography color="text.secondary">
                    Station Manager
                    </Typography>
                </CardContent>
                </GlassCard>
            </Grid>
            <Grid item xs={12} md={4}>
                <GlassCard>
                <CardMedia
                    component="img"
                    height="300"
                    image="/media/team-2.jpg"
                    alt="Team Member 2"
                />
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                    Jane Smith
                    </Typography>
                    <Typography color="text.secondary">
                    News Director
                    </Typography>
                </CardContent>
                </GlassCard>
            </Grid>
            <Grid item xs={12} md={4}>
                <GlassCard>
                <CardMedia
                    component="img"
                    height="300"
                    image="/media/team-3.jpg"
                    alt="Team Member 3"
                />
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                    Mike Johnson
                    </Typography>
                    <Typography color="text.secondary">
                    Program Director
                    </Typography>
                </CardContent>
                </GlassCard>
            </Grid>
            </Grid>
        </Container>
        </Box>
    );
}

export default About; 