import React, { useState, useEffect } from 'react';
import { RiSearch2Line, RiShoppingCart2Line, RiMenu3Line, RiCloseLine, RiPhoneLine } from 'react-icons/ri';

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
        { name: 'Contact', path: '/' },
    ];

    return (
        <div className={`sticky top-0 z-50 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
            {/* Top Announcement Bar */}
            <div className="bg-gradient-to-r from-gray-700 to-gray-600 text-white text-sm py-3">
                <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
                    <span>🎉 New Arrivals - Limited Time Offers!</span>
                    <div className="flex items-center space-x-4">
                        <button className="hover:text-gray-200 transition-colors">
                            <RiSearch2Line className="w-5 h-5" />
                        </button>
                        <button className="hover:text-gray-200 transition-colors relative">
                            <RiShoppingCart2Line className="w-5 h-5" />
                            <span className="absolute -top-2 -right-2 bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                3
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="relative bg-white shadow-xl">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-2">
                        {/* Logo */}
                        <a href="/" className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
                            LeGance
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors uppercase flex gap-2"
                                >
                                   <RiPhoneLine className='w-5 h-5'/> {link.name}
                                </a>
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
                            <a
                                key={link.name}
                                href={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;