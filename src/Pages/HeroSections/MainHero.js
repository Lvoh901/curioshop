import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../Assets/Button';
import HeroImage from '../../images/back01.jpg';

const MainHero = () => {
    return (
        <section className="relative h-[70vh] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: `url(${HeroImage})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="relative z-10 text-center px-4">
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg text-[#ffb400] uppercase font-light mb-2"
                >
                    Special Offer
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
                >
                    Your Curio Journey <br /> Begins Here: Get 10% Off <br /> Your First Order!
                </motion.h1>
                <Button linkRef='/gallery' Text='Shop Now' />
            </div>
        </section>
    );
};

export default MainHero;