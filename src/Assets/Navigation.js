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

    // Responsive logo sizes
    const logoStyles = {
        width: '40vw', // fallback for very small screens
        maxWidth: '80px',
        minWidth: '50px',
        height: 'auto',
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
            <nav className="relative bg-white shadow-xl">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-2">
                        {/* Logo */}
                        <Link to="/" className="flex items-center">
                            <img
                                src={Logo1}
                                alt="Navbar Logo"
                                style={logoStyles}
                                className="w-[24vw] sm:w-[12vw] md:w-[7vw] lg:w-[108px] xl:w-[132px] h-auto object-contain transition-all duration-300 border border-[#ff6a00] rounded-full"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="text-black hover:text-[#ff6a00] px-2 md:px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors uppercase"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            aria-label="Menu"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-gray-600 hover:text-gray-900 flex items-center"
                        >
                            {isMobileMenuOpen ? (
                                <RiCloseLine className="h-7 w-7 sm:h-8 sm:w-8" />
                            ) : (
                                <RiMenu3Line className="h-7 w-7 sm:h-8 sm:w-8" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`
                        md:hidden
                        absolute left-0 right-0 top-full
                        w-full
                        bg-white
                        shadow-lg
                        transform
                        transition-transform
                        duration-300
                        ease-out
                        ${isMobileMenuOpen ? 'scale-y-100 opacity-100 pointer-events-auto' : 'scale-y-0 opacity-0 pointer-events-none'}
                        origin-top
                    `}
                    style={{ zIndex: 60 }}
                >
                    <div className="px-2 pt-2 pb-4 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-4 py-3 text-gray-700 hover:text-[#ff6a00] hover:bg-gray-100 rounded-md text-base font-medium uppercase transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navigation;