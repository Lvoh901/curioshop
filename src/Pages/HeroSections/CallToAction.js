import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../Assets/Button';
import CallToActionImage from '../../images/back02.jpg';

const CallToAction = () => {
    return (
        <section className="relative h-[65vh] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: `url(${CallToActionImage})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="relative z-10 text-center px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
                >
                    Explore Our Exquisite <br /> Curio Collections & Shop <br /> Now for the Perfect Finds
                </motion.h2>
                <Button linkRef='/gallery' Text='Shop Now' />
            </div>
        </section>
    );
};

export default CallToAction;