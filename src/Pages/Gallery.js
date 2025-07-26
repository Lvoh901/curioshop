import React from 'react';
import { motion } from 'framer-motion';
import Card from '../Assets/Card';

const Gallery = ({ bestSellers }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <motion.div
            className='mx-auto max-w-7xl py-5 px-4 sm:px-6 lg:px-8'
            initial="hidden"
            animate="visible"
        >
            <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-[#ffb400] uppercase font-semibold mb-2 text-center"
            >
                Best Selling
            </motion.p>
            <motion.h1
                className='text-2xl lg:text-3xl font-bold text-gray-800 uppercase mb-2 text-center'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                Blossom with the Best Our <br /> Top-Selling Curios
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center text-gray-600 mb-12"
            >
                Share some details here. This is flexible section where you can share anything you want.
            </motion.p>

            <motion.div
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-8'
                variants={containerVariants}
            >
                {bestSellers.map((product, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                    >
                        <Card
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            image={product.image}
                            rating={product.rating}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Gallery;