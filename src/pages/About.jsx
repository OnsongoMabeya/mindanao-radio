import Section from '../components/Section';

const values = [
    {
        title: 'Integrity',
        description: 'We maintain the highest standards of journalistic integrity and ethical broadcasting.',
    },
    {
        title: 'Community',
        description: 'We are committed to serving and empowering the Mindanao community.',
    },
    {
        title: 'Innovation',
        description: 'We embrace new technologies to better serve our audience.',
    },
    {
        title: 'Excellence',
        description: 'We strive for excellence in everything we do, from content to technical quality.',
    },
];

export default function About() {
    return (
        <div className="min-h-screen pt-16">
        <Section title="About Us">
            <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-dark-text-secondary">
                Mindanao Radio has been serving the community since 1995, providing news, entertainment, and a platform for local voices to be heard.
            </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-dark-bg/50 p-6 rounded-lg border border-gray-800">
                <h3 className="text-2xl font-semibold text-dark-text mb-4">Our Mission</h3>
                <p className="text-dark-text-secondary">
                To be the leading voice of Mindanao, providing accurate information, promoting cultural diversity, and fostering community development through responsible broadcasting.
                </p>
            </div>
            <div className="bg-dark-bg/50 p-6 rounded-lg border border-gray-800">
                <h3 className="text-2xl font-semibold text-dark-text mb-4">Our Vision</h3>
                <p className="text-dark-text-secondary">
                To be the most trusted and influential media platform in Mindanao, connecting communities and shaping a better future for all.
                </p>
            </div>
            </div>

            <div>
            <h3 className="text-2xl font-semibold text-dark-text text-center mb-8">Our Values</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value) => (
                <div
                    key={value.title}
                    className="bg-dark-bg/50 p-6 rounded-lg border border-gray-800 hover:border-primary transition-colors"
                >
                    <h4 className="text-xl font-semibold text-dark-text mb-3">{value.title}</h4>
                    <p className="text-dark-text-secondary">{value.description}</p>
                </div>
                ))}
            </div>
            </div>
        </Section>
        </div>
    );
} 