import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const socialLinks = [
    {
        name: 'Facebook',
        icon: FaFacebook,
        url: 'https://facebook.com/mindanaoradio',
        color: 'hover:text-blue-500',
    },
    {
        name: 'Twitter',
        icon: FaTwitter,
        url: 'https://twitter.com/mindanaoradio',
        color: 'hover:text-blue-400',
    },
    {
        name: 'YouTube',
        icon: FaYoutube,
        url: 'https://youtube.com/mindanaoradio',
        color: 'hover:text-red-500',
    },
];

export default function SocialIcons({ className = '' }) {
    return (
        <div className={`flex space-x-6 ${className}`}>
        {socialLinks.map((social) => (
            <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-dark-text-secondary ${social.color} transition-colors`}
            aria-label={social.name}
            >
            <social.icon className="h-6 w-6" />
            </a>
        ))}
        </div>
    );
} 