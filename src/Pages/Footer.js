import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
            >
                {/* Flower Shop Info */}
                <div>
                    <h3 className="font-bold mb-4">CurioShop</h3>
                    <p className="text-white text-sm leading-relaxed">
                        Welcome to the world of Curios, where unique finds come to life with love and creativity. Discover our story, our passion for rare items, and our commitment to making every moment memorable.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Links</h3>

                    <ul className="space-y-2">
                        <li><Link to="/" className="text-gray-400 hover:text-white transition-colors content">Home</Link></li>
                        <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors content">Gallery</Link></li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div>
                    <h3 className="font-bold mb-4 underline underline-offset-4">Contact Us</h3>
                    <p className="text-white text-sm">
                        Address: 123 Curio Lane, <br />
                        Antique City, AC 12345
                    </p>
                    <p className="text-white text-sm mt-2">
                        Email: contact@curioshop.com
                    </p>
                    <p className="text-white text-sm mt-2">
                        Phone: +1 (555) 987-6543
                    </p>
                </div>
            </motion.div>

            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-white text-sm">
                Copyright © {currentYear} CurioShop. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;