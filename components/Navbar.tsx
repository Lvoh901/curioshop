'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);

    const checkScreenSize = () => {
      const isLarge = window.innerWidth >= 768;
      setIsLargeScreen(isLarge);
      if (isLarge) {
        setIsOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
    { name: 'Admin', href: '/admin/login' },
  ];

  if (!isMounted) return null;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center group">
              <Image
                width={56}
                height={56}
                src="/jakem_logo.png"
                alt="Navbar Logo"
                className="h-12 w-12 sm:h-16 sm:w-16 object-contain transition-transform group-hover:scale-110"
                priority
              />
              <span className="ml-2 text-stone-900 font-bold text-xs sm:text-sm tracking-tight hidden xs:block">
                JAKEM Curio
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          {isLargeScreen && (
            <div className="flex items-center">
              <div className="ml-4 md:ml-8 flex items-center space-x-1 md:space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative px-3 py-2 text-stone-700 hover:text-amber-600 text-[10px] md:text-xs lg:text-sm font-bold transition-all uppercase tracking-wider group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Mobile Menu Button */}
          {!isLargeScreen && (
            <div className="flex items-center">
              <button
                onClick={() => setIsOpen((prev) => !prev)}
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

      {/* Mobile Navigation Dropdown */}
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