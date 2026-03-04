import React from 'react';
import { motion } from 'framer-motion';
import { RiStarFill, RiStarHalfFill, RiStarLine } from 'react-icons/ri';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'Interior Designer',
            text: "The unique pieces from Curioshop transformed my client's living space into a conversation starter. Quality and craftsmanship beyond expectations!",
            avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
            rating: 4.5
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'Collector',
            text: "I've found truly one-of-a-kind items here that perfectly complement my vintage collection. Exceptional customer service too!",
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
            rating: 5
        },
        {
            id: 3,
            name: 'Emma Wilson',
            role: 'Home Owner',
            text: 'Every piece tells a story. The curation is impeccable and delivery was seamless. My home has never looked better!',
            avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
            rating: 4
        }
    ];

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        return (
            <div className="flex space-x-1">
                {[...Array(fullStars)].map((_, i) => (
                    <RiStarFill key={`full-${i}`} className="w-4 h-4 text-[#ffb400]" />
                ))}
                {hasHalfStar && <RiStarHalfFill key="half" className="w-4 h-4 text-[#ffb400]" />}
                {[...Array(emptyStars)].map((_, i) => (
                    <RiStarLine key={`empty-${i}`} className="w-4 h-4 text-[#ffb400]" />
                ))}
            </div>
        );
    };

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
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'easeOut'
            }
        }
    };

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-800"
                >
                    Hear From Our Happy Customers
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-gray-600 mb-12"
                >
                    Share some details here. This is flexible section where you can share anything you want.
                </motion.p>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 px-4 lg:px-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {testimonials.map((testimonial) => (
                        <motion.article
                            key={testimonial.id}
                            variants={itemVariants}
                            className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 cursor-pointer border hover:border-[#ff6a00]"
                            whileHover={{ y: -10 }}
                        >
                            <div className="flex flex-col items-center mb-6">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                                />

                                <div className="py-2">
                                    {renderStars(testimonial.rating)}
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                                    <small className="text-gray-500">{testimonial.role}</small>
                                </div>
                            </div>

                            <p className="text-gray-600 leading-relaxed">
                                {testimonial.text}
                            </p>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;