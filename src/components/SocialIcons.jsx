import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const socialLinks = [
    {
        name: 'Facebook',
        url: 'https://facebook.com/mindanaoradio',
        icon: <FacebookIcon />,
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/mindanaoradio',
        icon: <TwitterIcon />,
    },
    {
        name: 'YouTube',
        url: 'https://youtube.com/mindanaoradio',
        icon: <YouTubeIcon />,
    },
];

function SocialIcons() {
    return (
        <div style={{ display: 'flex', gap: '1rem' }}>
            {socialLinks.map((link) => (
                <IconButton
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                    aria-label={link.name}
                >
                    {link.icon}
                </IconButton>
            ))}
        </div>
    );
}

export default SocialIcons; 