import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../Assets/Card';
import productsData from '../Assets/products';

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredProducts, setFilteredProducts] = useState(productsData);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (selectedCategory === 'All') {
            setFilteredProducts(productsData);
        } else {
            setFilteredProducts(productsData.filter(product => product.category === selectedCategory));
        }
    }, [selectedCategory]);

    const categories = ['All', ...new Set(productsData.map(product => product.category))];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
        exit: { opacity: 0, scale: 0.95 }
    };

    return (
        <motion.div
            className='mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8'
            initial="hidden"
            animate="visible"
        >
            <div className="text-center mb-12">
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg text-[#ff6a00] uppercase font-semibold mb-2"
                >
                    Our Collection
                </motion.p>
                <motion.h1
                    className='text-3xl lg:text-5xl font-bold text-gray-800 uppercase mb-4'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Exquisite Soapstone Art
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="max-w-2xl mx-auto text-gray-600"
                >
                    Discover the finest hand-carved soapstone pieces from Tabaka, Kenya. Each item tells a unique story of culture and craftsmanship.
                </motion.p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-6 py-2 rounded-full border transition-all duration-300 ${selectedCategory === category
                            ? 'bg-[#ff6a00] text-white border-[#ff6a00] shadow-md font-bold'
                            : 'bg-white text-gray-600 border-gray-200 hover:border-[#ff6a00] hover:text-[#ff6a00] font-medium'
                            }`}
                    >
                        <p>{category}</p>
                    </button>
                ))}
            </div>

            {/* Products Grid */}
            <motion.div
                layout
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-4'
                variants={containerVariants}
            >
                <AnimatePresence mode='popLayout'>
                    {filteredProducts.map((product) => (
                        <motion.div
                            key={product.id}
                            layout
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            whileHover={{ y: -5 }}
                            className="flex"
                        >
                            <Card
                                id={product.id}
                                title={product.title}
                                description={product.description}
                                price={product.price}
                                image={product.image}
                                rating={product.rating}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-gray-500 text-xl">No products found in this category.</p>
                </div>
            )}
        </motion.div>
    );
};

export default Gallery;