import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteRight } from 'react-icons/fa';
import { RiStarFill, RiStarHalfFill, RiStarLine } from 'react-icons/ri';

const testimonials = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'Interior Designer',
        text: 'The unique pieces from Curio transformed my client\'s living space into a conversation starter. Quality and craftsmanship beyond expectations!',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        rating: 4.5
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'Collector',
        text: 'I\'ve found truly one-of-a-kind items here that perfectly complement my vintage collection. Exceptional customer service too!',
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

const Testimonials = () => {
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

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        return (
            <div className="flex space-x-1">
                {[...Array(fullStars)].map((_, i) => (
                    <RiStarFill key={`full-${i}`} className="w-4 h-4 text-yellow-500" />
                ))}
                {hasHalfStar && <RiStarHalfFill className="w-4 h-4 text-yellow-500" />}
                {[...Array(emptyStars)].map((_, i) => (
                    <RiStarLine key={`empty-${i}`} className="w-4 h-4 text-yellow-500" />
                ))}
            </div>
        );
    };

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800"
                >
                    What Our Clients Say
                </motion.h2>

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
                            className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 cursor-pointer"
                            whileHover={{ y: -10 }}
                        >
                            <div className="absolute top-6 right-6 text-gray-200">
                                <FaQuoteRight className="w-8 h-8" />
                            </div>

                            <div className="flex items-center mb-6">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-14 h-14 rounded-full object-cover border-4 border-white shadow-md"
                                />
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>

                            <p className="text-gray-600 leading-relaxed">
                                {testimonial.text}
                            </p>

                            <div className="mt-6 pt-4 border-t border-gray-100">
                                {renderStars(testimonial.rating)}
                                <span className="text-sm text-gray-500 mt-1 block">
                                    {testimonial.rating}/5 Rating
                                </span>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;