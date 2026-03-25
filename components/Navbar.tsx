'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Close mobile menu when screen size changes to large
  useEffect(() => {
    if (isLargeScreen) {
      setIsOpen(false);
    }
  }, [isLargeScreen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
    { name: 'Admin', href: '/admin/login' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center group">
              <Image
                width={40}
                height={40}
                src="/jakem_logo.png"
                alt="Navbar Logo"
                className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain transition-transform group-hover:scale-110"
                priority
              />
              <span className="ml-2 text-stone-900 font-bold text-xs sm:text-sm tracking-tight hidden xs:block">
                JAKEM Curio
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - only visible on large screens */}
          {isLargeScreen && (
            <div className="flex items-center">
              <div className="ml-8 flex items-center space-x-1 lg:space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative px-3 py-2 text-stone-700 hover:text-amber-600 text-xs lg:text-sm font-bold transition-all uppercase tracking-wider group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Mobile Menu Button - only visible on small screens */}
          {!isLargeScreen && (
            <div className="flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-stone-600 hover:bg-stone-100 transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <RiCloseLine className="w-6 h-6" />
                ) : (
                  <RiMenuLine className="w-6 h-6" />
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation Dropdown - only visible on small screens */}
      {!isLargeScreen && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="bg-white border-b border-stone-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-4 text-base font-bold text-stone-800 hover:bg-amber-50 hover:text-amber-600 rounded-xl transition-all uppercase tracking-widest"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </nav>
  );
};

export default Navbar;