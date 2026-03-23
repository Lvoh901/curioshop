'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
    { name: 'Admin', href: '/admin/login' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                width={40}
                height={40}
                src="/jakem_logo.png"
                alt="Navbar Logo"
                className="h-8 w-8 sm:h-10 sm:w-10 md:h-14 md:w-14 object-contain"
                priority
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-8 flex items-baseline space-x-2">
              {navLinks.map((link) => {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-black hover:text-[#ff6a00] px-2 md:px-3 py-2 rounded-md text-xs sm:text-sm font-bold transition-colors uppercase"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button could go here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
