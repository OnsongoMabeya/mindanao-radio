import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Section from '../components/Section';
import SocialIcons from '../components/SocialIcons';

export default function Contact() {
    const [state, handleSubmit] = useForm('YOUR_FORMSPREE_FORM_ID'); // Replace with your Formspree form ID

    return (
        <div className="min-h-screen pt-16">
        <Section title="Contact Us">
            <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div>
                <h3 className="text-2xl font-semibold text-dark-text mb-6">Get in Touch</h3>
                <div className="space-y-6">
                    <div>
                    <h4 className="text-lg font-medium text-dark-text mb-2">Address</h4>
                    <p className="text-dark-text-secondary">
                        123 Radio Street<br />
                        Davao City, Mindanao<br />
                        Philippines
                    </p>
                    </div>
                    <div>
                    <h4 className="text-lg font-medium text-dark-text mb-2">Contact</h4>
                    <p className="text-dark-text-secondary">
                        Phone: (123) 456-7890<br />
                        Email: info@mindanaoradio.com
                    </p>
                    </div>
                    <div>
                    <h4 className="text-lg font-medium text-dark-text mb-2">Follow Us</h4>
                    <SocialIcons />
                    </div>
                </div>
                </div>

                {/* Contact Form */}
                <div>
                <h3 className="text-2xl font-semibold text-dark-text mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-text mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 bg-dark-bg/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-dark-text"
                    />
                    </div>
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-text mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 bg-dark-bg/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-dark-text"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                    <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-dark-text mb-2">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-2 bg-dark-bg/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-dark-text"
                    />
                    </div>
                    <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark-text mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows="4"
                        className="w-full px-4 py-2 bg-dark-bg/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-dark-text"
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>
                    <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
                    >
                    {state.submitting ? 'Sending...' : 'Send Message'}
                    </button>
                    {state.succeeded && (
                    <p className="text-green-500 text-center">Thank you for your message!</p>
                    )}
                </form>
                </div>
            </div>
            </div>
        </Section>
        </div>
    );
} 