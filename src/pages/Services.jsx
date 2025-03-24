import Section from '../components/Section';

const services = [
    {
        title: 'News Broadcasting',
        description: '24/7 local and national news coverage, keeping you informed about the latest developments in Mindanao and beyond.',
        icon: '📰',
    },
    {
        title: 'Community Programs',
        description: 'Dedicated shows highlighting local culture, traditions, and community events to preserve and promote Mindanao heritage.',
        icon: '🏘️',
    },
    {
        title: 'Public Service Announcements',
        description: 'Important community updates, emergency alerts, and public service messages to keep our community safe and informed.',
        icon: '📢',
    },
    {
        title: 'Entertainment',
        description: 'A mix of music, talk shows, and entertainment programs to keep you engaged and entertained throughout the day.',
        icon: '🎵',
    },
    {
        title: 'Educational Content',
        description: 'Programs focused on education, skill development, and knowledge sharing to empower our community.',
        icon: '📚',
    },
    {
        title: 'Digital Streaming',
        description: 'Access our content anytime, anywhere through our digital platform and mobile app.',
        icon: '🌐',
    },
];

export default function Services() {
    return (
        <div className="min-h-screen pt-16">
        <Section title="Our Services">
            <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-dark-text-secondary">
                We offer a comprehensive range of services to serve the Mindanao community through radio broadcasting and digital platforms.
            </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
                <div
                key={service.title}
                className="bg-dark-bg/50 p-6 rounded-lg border border-gray-800 hover:border-primary transition-colors"
                >
                <div className="flex items-start space-x-4">
                    <span className="text-4xl">{service.icon}</span>
                    <div>
                    <h3 className="text-xl font-semibold text-dark-text mb-2">{service.title}</h3>
                    <p className="text-dark-text-secondary">{service.description}</p>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </Section>
        </div>
    );
} 