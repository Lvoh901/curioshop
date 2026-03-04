import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import Logo1 from "../images/logo.png";

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <div className={`sticky top-0 z-50 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
            {/* Main Navigation */}
            <nav className="relative bg-white shadow-xl">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-2">
                        {/* Logo */}
                        <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-gray-600 transition-colors">
                            <img src={Logo1} alt="Navbar Logo" style={{ width: "7vw", height: "auto" }} />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="text-black hover:text-[#ff6a00] px-3 py-2 rounded-md text-sm font-medium transition-colors suppercase flex gap-2 content uppercase"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
                        >
                            {isMobileMenuOpen ? (
                                <RiCloseLine className="h-6 w-6" />
                            ) : (
                                <RiMenu3Line className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden absolute w-full bg-white shadow-lg ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;