"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineEditLocation, MdOutlineMarkEmailUnread } from 'react-icons/md';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white pt-12 pb-4 px-4 sm:px-6 lg:px-8">
            <motion.div
                className="flex flex-col items-center justify-center gap-4"
            >
                {/* Curio Shop Info */}
                <div className='max-w-3xl mx-auto flex flex-col items-center justify-center text-center'>
                    <Image src="/jakem_logo.png" alt='bsn_logo' width={60} height={60} />
                    <h4 className="font-bold mb-2 underline decoration-2 underline-offset-4 decoration-[#ffb400]">JAKEM Business Solutions</h4>

                    <p className="text-white leading-relaxed text-sm">
                        Welcome to the world of Curios, where unique finds come to life with love and creativity. Discover our story, our passion for rare items, and our commitment to making every moment memorable.
                    </p>
                </div>

                {/* Contact Us */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl mx-auto mt-6">
                    <div className="flex flex-col items-center bg-gray-600 rounded-lg p-4 hover:shadow-lg transition duration-300">
                        <span className="flex items-center mb-2 text-[#ffb400]">
                            <MdOutlineEditLocation className="w-6 h-6 mr-2" />
                            <span className="font-semibold text-base">Our Locations</span>
                        </span>
                        <span className="text-white text-xs text-center">Tabaka, Kisii County<br />Ngong Town, Nairobi County</span>
                    </div>
                    <div className="flex flex-col items-center bg-gray-600 rounded-lg p-4 hover:shadow-lg transition duration-300">
                        <span className="flex items-center mb-2 text-[#ffb400]">
                            <MdOutlineMarkEmailUnread className="w-6 h-6 mr-2" />
                            <span className="font-semibold text-base">Email Us</span>
                        </span>
                        <a href="mailto:contact@curioshop.com" className="text-white text-xs underline hover:text-[#ffb400] focus:outline-none focus:ring-2 focus:ring-[#ffb400]">
                            contact@curioshop.com
                        </a>
                    </div>
                    <div className="flex flex-col items-center bg-gray-600 rounded-lg p-4 hover:shadow-lg transition duration-300">
                        <span className="flex items-center mb-2 text-[#ffb400]">
                            <FaPhoneAlt className="w-5 h-5 mr-2" />
                            <span className="font-semibold text-base">Call Us</span>
                        </span>
                        <a href="tel:0705634476" className="text-white text-xs underline hover:text-[#ffb400]">0705634476</a>
                        <a href="tel:0705091175" className="text-white text-xs underline hover:text-[#ffb400]">0705091175</a>
                    </div>
                </div>
            </motion.div>

            <div className="mt-8 pt-2 border-t-2 border-[#ff6a00] border-dashed text-center text-white text-sm mx-auto max-w-6xl">
                <span className='font-medium' suppressHydrationWarning>Copyright © {currentYear}</span>
            </div>
        </footer>
    );
};
