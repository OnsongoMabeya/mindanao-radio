import { Link } from 'react-router-dom';
import Section from '../components/Section';

export default function Home() {
    return (
        <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-center px-4">
            <div className="absolute inset-0 bg-dark-bg/90 z-0"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-dark-text mb-6">
                Welcome to Mindanao Radio
            </h1>
            <p className="text-xl md:text-2xl text-dark-text-secondary mb-8">
                Your Voice in Mindanao - Connecting Communities Through Radio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                to="/about"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                Learn More
                </Link>
                <Link
                to="/contact"
                className="bg-transparent border-2 border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-medium transition-colors"
                >
                Contact Us
                </Link>
            </div>
            </div>
        </section>

        {/* Features Section */}
        <Section title="Why Choose Us">
            <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-dark-bg/50 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold text-dark-text mb-4">Local Focus</h3>
                <p className="text-dark-text-secondary">
                Dedicated to serving the Mindanao community with relevant local content and news.
                </p>
            </div>
            <div className="bg-dark-bg/50 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold text-dark-text mb-4">24/7 Streaming</h3>
                <p className="text-dark-text-secondary">
                Listen to our live stream anytime, anywhere with our digital platform.
                </p>
            </div>
            <div className="bg-dark-bg/50 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold text-dark-text mb-4">Community Impact</h3>
                <p className="text-dark-text-secondary">
                Making a difference in Mindanao through community engagement and support.
                </p>
            </div>
            </div>
        </Section>
        </div>
    );
} 