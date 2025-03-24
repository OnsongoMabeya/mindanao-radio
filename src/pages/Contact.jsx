import { Box, Container, Typography, Grid, TextField, Button, Paper, IconButton, Link } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useForm, ValidationError } from '@formspree/react';

const GradientText = styled(Typography)(({ theme }) => ({
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
}));

const GlassCard = styled(Paper)(({ theme }) => ({
    background: 'rgba(26, 26, 26, 0.5)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease-in-out',
    height: '100%',
    padding: theme.spacing(4),
    '&:hover': {
        borderColor: theme.palette.primary.main,
        boxShadow: `0 4px 12px ${theme.palette.primary.main}20`,
    },
}));

const contactInfo = [
    {
        icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
        title: 'Address',
        content: 'Broadcast Solutions International, Top Plaza',
        link: 'https://goo.gl/maps/4aa063e8c15b9664',
    },
    {
        icon: <PhoneIcon sx={{ fontSize: 40 }} />,
        title: 'Phone',
        content: '+254 (722) 434-342',
        link: 'tel:+254722434342',
    },
    {
        icon: <EmailIcon sx={{ fontSize: 40 }} />,
        title: 'Email',
        content: 'info@mindanaoradio.com',
        link: 'mailto:info@mindanaoradio.com',
    },
];

const socialLinks = [
    { icon: <FacebookIcon />, url: 'https://facebook.com/mindanaoradio' },
    { icon: <TwitterIcon />, url: 'https://twitter.com/mindanaoradio' },
    { icon: <InstagramIcon />, url: 'https://instagram.com/mindanaoradio' },
];

function Contact() {
    const theme = useTheme();
    const formId = 'meoaklng';
    const [state, handleSubmit] = useForm(formId);
    
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        try {
            await handleSubmit(e);
            if (state.succeeded) {
                e.target.reset();
            }
        } catch (error) {
            console.error('Form submission error:', error);
        }
    };

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
                backgroundImage: 'url("https://images.unsplash.com/photo-1621955964441-c173e01c135b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.3)',
            }}
            />
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
            <Box sx={{ textAlign: 'center' }}>
                <GradientText variant="h1" gutterBottom>
                Contact Us
                </GradientText>
                <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '800px', margin: '0 auto' }}>
                Get in Touch with Mindanao Radio - Your Voice in the Community
                </Typography>
            </Box>
            </Container>
        </Box>

        {/* Contact Information */}
        <Container maxWidth="lg" sx={{ mb: 8 }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" gutterBottom>
                How to Reach Us
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '800px', margin: '0 auto', mb: 4 }}>
                We're here to help! Choose your preferred way to connect with us
            </Typography>
            </Box>
            <Grid container spacing={4} justifyContent="center">
            {contactInfo.map((info, index) => (
                <Grid item xs={12} md={4} key={index}>
                <GlassCard>
                    <Box sx={{ textAlign: 'center' }}>
                    <Box
                        sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto',
                        mb: 2,
                        background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
                        color: theme.palette.primary.main,
                        }}
                    >
                        {info.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom>
                        {info.title}
                    </Typography>
                    <Link
                        href={info.link}
                        color="inherit"
                        underline="none"
                        sx={{
                        '&:hover': {
                            color: theme.palette.primary.main,
                        },
                        }}
                    >
                        <Typography color="text.secondary">
                        {info.content}
                        </Typography>
                    </Link>
                    </Box>
                </GlassCard>
                </Grid>
            ))}
            </Grid>
        </Container>

        {/* Contact Form */}
        <Container maxWidth="lg" sx={{ mb: 8 }}>
            <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6}>
                <GlassCard>
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Typography variant="h4" gutterBottom>
                    Send us a Message
                    </Typography>
                    <Typography color="text.secondary" paragraph>
                    Have questions or feedback? We'd love to hear from you.
                    </Typography>
                </Box>
                <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                label="First Name"
                                name="name"
                                variant="outlined"
                                disabled={state.submitting}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                label="Last Name"
                                name="lastName"
                                variant="outlined"
                                disabled={state.submitting}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Email"
                                name="email"
                                type="email"
                                variant="outlined"
                                disabled={state.submitting}
                            />
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Subject"
                                name="subject"
                                variant="outlined"
                                disabled={state.submitting}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Message"
                                name="message"
                                multiline
                                rows={4}
                                variant="outlined"
                                disabled={state.submitting}
                            />
                            <ValidationError prefix="Message" field="message" errors={state.errors} />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                        disabled={state.submitting}
                        sx={{
                            mt: 3,
                            borderRadius: 2,
                            py: 1.5,
                            background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                            '&:hover': {
                                background: `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.secondary.dark} 90%)`,
                            },
                        }}
                    >
                        {state.submitting ? 'Sending...' : 'Send Message'}
                    </Button>
                    {state.errors && state.errors.length > 0 && (
                        <Typography color="error" sx={{ mt: 2, textAlign: 'center' }}>
                            There was an error submitting the form. Please try again.
                        </Typography>
                    )}
                    {state.succeeded && (
                        <Typography color="success.main" sx={{ mt: 2, textAlign: 'center' }}>
                            Thank you for your message! We'll get back to you soon.
                        </Typography>
                    )}
                </Box>
                </GlassCard>
            </Grid>
            <Grid item xs={12} md={6}>
                <GlassCard>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" gutterBottom>
                    Follow Us
                    </Typography>
                    <Typography color="text.secondary" paragraph>
                    Stay connected with Mindanao Radio on social media.
                    </Typography>
                    <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                    {socialLinks.map((social, index) => (
                        <IconButton
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            mx: 2,
                            color: 'text.secondary',
                            '&:hover': {
                            color: theme.palette.primary.main,
                            },
                        }}
                        >
                        {social.icon}
                        </IconButton>
                    ))}
                    </Box>
                    <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        Business Hours
                    </Typography>
                    <Typography color="text.secondary">
                        Monday - Friday: 8:00 AM - 6:00 PM
                    </Typography>
                    <Typography color="text.secondary">
                        Saturday: 9:00 AM - 4:00 PM
                    </Typography>
                    <Typography color="text.secondary">
                        Sunday: Closed
                    </Typography>
                    </Box>
                </Box>
                </GlassCard>
            </Grid>
            </Grid>
        </Container>

        {/* Map Section */}
        <Box sx={{ height: 400, mb: 8 }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5832.57480804798!2d36.78965791196998!3d-1.2973285356357789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f117d96f109b3%3A0x4aa063e8c15b9664!2sBroadcast%20Solutions%20International!5e1!3m2!1sen!2ske!4v1742818203010!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </Box>
        </Box>
    );
}

export default Contact; 