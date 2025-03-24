import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Box,
    useTheme,
    useMediaQuery,
    Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    background: 'rgba(26, 26, 26, 0.8)',
    backdropFilter: 'blur(8px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: 'none',
}));

const StyledButton = styled(Button)(({ theme }) => ({
    color: theme.palette.text.primary,
    margin: theme.spacing(0, 1),
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
}));

const NavLink = styled('a')(({ theme }) => ({
    color: theme.palette.text.primary,
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
        color: theme.palette.primary.main,
    },
}));

const navItems = [
    { text: 'Home', sectionId: 'home' },
    { text: 'About', sectionId: 'about' },
    { text: 'Services', sectionId: 'services' },
    { text: 'Contact', sectionId: 'contact' },
];

function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileOpen(false);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', pt: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
            Mindanao Radio
        </Typography>
        <List>
            {navItems.map((item) => (
            <ListItem key={item.text} disablePadding>
                <ListItemText
                primary={
                    <NavLink
                    onClick={() => scrollToSection(item.sectionId)}
                    sx={{
                        color: location.hash === `#${item.sectionId}` ? theme.palette.primary.main : 'inherit',
                        display: 'block',
                        width: '100%',
                        padding: theme.spacing(1, 2),
                        '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        },
                    }}
                    >
                    {item.text}
                    </NavLink>
                }
                />
            </ListItem>
            ))}
        </List>
        </Box>
    );

    return (
        <>
        <StyledAppBar position="fixed">
            <Container maxWidth="lg">
            <Toolbar disableGutters>
                <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
                >
                <MenuIcon />
                </IconButton>
                <Typography
                variant="h6"
                component={RouterLink}
                to="/"
                onClick={() => scrollToSection('home')}
                sx={{
                    flexGrow: 1,
                    display: { xs: 'none', sm: 'block' },
                    textDecoration: 'none',
                    color: 'inherit',
                    fontWeight: 700,
                    cursor: 'pointer',
                }}
                >
                Mindanao Radio
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                    <StyledButton
                    key={item.text}
                    onClick={() => scrollToSection(item.sectionId)}
                    sx={{
                        color: location.hash === `#${item.sectionId}` ? theme.palette.primary.main : 'inherit',
                    }}
                    >
                    {item.text}
                    </StyledButton>
                ))}
                </Box>
            </Toolbar>
            </Container>
        </StyledAppBar>
        <Box component="nav">
            <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true,
            }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: 240,
                backgroundColor: theme.palette.background.default,
                },
            }}
            >
            {drawer}
            </Drawer>
        </Box>
        </>
    );
}

export default Navbar; 