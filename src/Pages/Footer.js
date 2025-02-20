import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const businessName = "LeGance";

    return (
        <footer className="bg-gray-900 text-white py-4 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4"
            >
                {/* Business Info */}
                <div className="text-center md:text-left leading-2">
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
            </motion.div>
        </footer>
    );
};

export default Footer;