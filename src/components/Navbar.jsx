import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="bg-dark-bg text-dark-text fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
                <Link to="/" className="flex items-center">
                <img
                    className="h-12 w-auto"
                    src="/media/logo.png"
                    alt="Mindanao Radio"
                />
                </Link>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                    <Link
                    key={link.name}
                    to={link.path}
                    className="text-dark-text-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                    {link.name}
                    </Link>
                ))}
                </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
                <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-dark-text-secondary hover:text-white focus:outline-none"
                >
                {isMenuOpen ? (
                    <FaTimes className="h-6 w-6" />
                ) : (
                    <FaBars className="h-6 w-6" />
                )}
                </button>
            </div>
            </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
                <Link
                key={link.name}
                to={link.path}
                className="text-dark-text-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
                >
                {link.name}
                </Link>
            ))}
            </div>
        </div>
        </nav>
    );
} 