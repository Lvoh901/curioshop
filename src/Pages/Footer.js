import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineEditLocation, MdOutlineMarkEmailUnread } from 'react-icons/md';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white pt-12 pb-4 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
            >
                {/* Flower Shop Info */}
                <div>
                    <h3 className="font-bold mb-4">JAKEM Business Solutions</h3>
                    <p className="text-white text-lg leading-relaxed">
                        Welcome to the world of Curios, where unique finds come to life with love and creativity. Discover our story, our passion for rare items, and our commitment to making every moment memorable.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Links</h3>

                    <ul className="space-y-2">
                        <li><Link to="/" className="text-gray-200 font-medium text-lg hover:text-[#ff6a00] duration-500 transition">Home</Link></li>
                        <li><Link to="/gallery" className="text-gray-200 font-medium text-lg hover:text-[#ff6a00] duration-500 transition">Gallery</Link></li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div>
                    <h3 className="font-bold mb-4 underline underline-offset-4">Contact Us</h3>
                    <p className="text-white text-lg flex gap-3 items-center cursor-pointer  hover:text-[#ff6a00] duration-500 transition">
                        <MdOutlineEditLocation className="w-7 h-7" />
                        Tabaka, Kisii County, <br />
                        Ngong Town, Nairobi County
                    </p>
                    <p className="text-white text-lg mt-2 flex gap-3 items-center cursor-pointer  hover:text-[#ff6a00] duration-500 transition">
                        <MdOutlineMarkEmailUnread className='w-7 h-7' /> contact@curioshop.com
                    </p>
                    <p className="text-white text-lg mt-2 flex gap-3 items-center cursor-pointer  hover:text-[#ff6a00] duration-500 transition">
                        <FaPhoneAlt className='w-7 h-7' /> 0705634476 / 0705091175
                    </p>
                </div>
            </motion.div>

            <div className="mt-8 pt-2 border-t-2 border-[#ff6a00] border-dashed text-center text-white text-sm mx-auto max-w-6xl">
                <span className='font-medium'>Copyright © {currentYear}</span>
                <h3 className='font-bold'>JAKEM Business Solutions.</h3>
                <span className='font-medium'>All rights reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;