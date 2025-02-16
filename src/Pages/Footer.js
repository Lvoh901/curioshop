import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const businessName = "Curio Collective";

    return (
        <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4"
            >
                {/* Business Info */}
                <div className="text-center md:text-left">
                    <a
                        href="/"
                        className="text-2xl font-bold hover:text-gray-300 transition-colors"
                    >
                        {businessName}
                    </a>
                    <p className="mt-2 text-gray-400">
                        © {currentYear} All rights reserved
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex gap-6">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors"
                    >
                        <FaFacebook className="w-6 h-6" />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-500 transition-colors"
                    >
                        <FaInstagram className="w-6 h-6" />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors"
                    >
                        <FaTwitter className="w-6 h-6" />
                    </a>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;