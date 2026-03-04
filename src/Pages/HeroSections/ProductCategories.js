import React from 'react';
import { motion } from 'framer-motion';

// Using existing images as placeholders for category visuals
import CategoryImg1 from '../../images/animal_figurines.webp';
import CategoryImg2 from '../../images/decorative_bowls.jpg';
import CategoryImg3 from '../../images/candle_holders.webp';
import CategoryImg4 from '../../images/sculptures.png';
import CategoryImg5 from '../../images/abstract_art_piece.jpg';
import CategoryImg6 from '../../images/soapstone_jewellery.jpg';
import CategoryImg7 from '../../images/customized_carvings.jpg';
import CategoryImg8 from '../../images/keyholders.png';
import CategoryImg9 from '../../images/household_decor.png';

const ProductCategories = () => {
    const categories = [
        { id: 1, name: "Animal Figurines", image: CategoryImg1 },
        { id: 2, name: "Decorative Bowls / Plates", image: CategoryImg2 },
        { id: 3, name: "Candle Holders", image: CategoryImg3 },
        { id: 4, name: "Sculptures", image: CategoryImg4 },
        { id: 5, name: "Abstract Art Pieces", image: CategoryImg5 },
        { id: 6, name: "Soapstone Jewelry", image: CategoryImg6 },
        { id: 7, name: "Customized Carvings", image: CategoryImg7 },
        { id: 8, name: "Key Holders", image: CategoryImg8 },
        { id: 9, name: "Household Décor", image: CategoryImg9 }
    ];

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
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: 'easeOut'
            }
        }
    };

    return (
        <section className="bg-gray-100 py-16">
            <div className="max-w-5xl mx-auto px-4 lg:px-8">
                <div className="text-center mb-12">
                    <span className="underline underline-offset-4 font-bold decoration-4 decoration-[#ff6a00] uppercase text-sm tracking-wider">Our Collections</span>
                    <h2 className='text-3xl font-bold text-gray-800 mt-2'>Shop by Category</h2>
                </div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {categories.map((category) => (
                        <motion.div
                            key={category.id}
                            variants={itemVariants}
                            whileHover={{ scale: 1.03 }}
                            className="group relative h-72 overflow-hidden rounded-2xl shadow-md cursor-pointer"
                        >
                            {/* Background Image */}
                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Stronger lower overlay for better content visibility */}
                            <div className="pointer-events-none absolute inset-0 z-10">
                                {/* This overlay is a transparent to black (with more definition at bottom) */}
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0) 100%)"
                                    }}
                                />
                            </div>

                            <div className="absolute inset-0 z-20 flex items-end p-6">
                                <div>
                                    <h3 className="text-white font-bold text-xl group-hover:text-[#ffb400] transition-colors">
                                        {category.name}
                                    </h3>
                                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Explore Collection &rarr;
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProductCategories;