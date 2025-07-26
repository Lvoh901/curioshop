import React from 'react';
import { motion } from 'framer-motion';
import { RiStarFill, RiStarHalfFill, RiStarLine, RiTruckLine, RiSecurePaymentLine, RiCustomerService2Line } from 'react-icons/ri';
import Button from '../Assets/Button';
import Card from '../Assets/Card';

// images
import HeroImage from '../images/back01.jpg';
import CallToActionImage from '../images/back02.jpg';
import About1 from '../images/product6.webp';

const Hero = ({ bestSellers }) => {
    const features = [
        {
            icon: <RiTruckLine className='w-8 h-8 lg:w-12 lg:h-12' />,
            title: "Order Online",
            text: "Shop from the comfort of your home with our seamless online ordering system. Browse, select, and purchase your favorite curios in just a few clicks."
        },
        {
            icon: <RiSecurePaymentLine className='w-8 h-8 lg:w-12 lg:h-12' />,
            title: "24/7 Support",
            text: "Our dedicated support team is available around the clock to assist you with any questions or concerns, ensuring a smooth and satisfying shopping experience."
        },
        {
            icon: <RiCustomerService2Line className='w-8 h-8 lg:w-12 lg:h-12' />,
            title: "Safe Delivery",
            text: "Enjoy peace of mind with our reliable and secure delivery service. Your unique finds are carefully packaged and shipped safely to your doorstep."
        }
    ];

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
                    <RiStarFill key={`full-${i}`} className="w-4 h-4 text-yellow-500" />
                ))}
                {hasHalfStar && <RiStarHalfFill key="half" className="w-4 h-4 text-yellow-500" />}
                {[...Array(emptyStars)].map((_, i) => (
                    <RiStarLine key={`empty-${i}`} className="w-4 h-4 text-yellow-500" />
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
        <div>
            {/* Main Hero Section */}
            <section className="relative h-[70vh] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: `url(${HeroImage})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="relative z-10 text-center px-4">
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-[#ffb400] uppercase font-semibold mb-2"
                    >
                        Special Offer
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
                    >
                        Your Curio Journey <br /> Begins Here: Get 20% Off <br /> Your First Order!
                    </motion.h1>
                    <Button linkRef='/gallery' Text='Shop Now' />
                </div>
            </section>

            {/* Core Values Section */}
            <section className='bg-gray-200'>
                <div className='mx-auto container p-12'>
                    <motion.h1
                        className='text-2xl lg:text-3xl font-bold text-gray-800 uppercase mb-8 text-center underline underline-offset-4'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        Our Values
                    </motion.h1>

                    <motion.div
                        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6'
                        variants={containerVariants}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className='bg-white shadow-lg hover:shadow-xl p-8 rounded-2xl transition-all cursor-pointer'
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                <motion.div
                                    className='text-gray-600 mb-4 hover:text-blue-600'
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {feature.icon}
                                </motion.div>
                                <h2 className='font-bold mb-2 hover:text-blue-600'>{feature.title}</h2>
                                <p className='text-gray-600'>{feature.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section className="mx-auto max-w-5xl p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                <img src={About1} className="rounded-md" alt="About" />
                <div>
                    <span className="underline underline-offset-4 font-bold decoration-4 decoration-[#ffb400] uppercase">About</span>

                    <h1 className='py-2'>Welcome to Legance</h1>

                    <p className="font-light mb-4">
                        At Legance, we believe that every space deserves a touch of beauty and wonder. Our curated collection of curios blends timeless elegance with modern artistry, offering you unique pieces that inspire and delight. Whether you're searching for the perfect gift or a statement piece for your home, Legance is your destination for quality, creativity, and exceptional value. Discover the art of refined living—discover Legance.
                    </p>

                    <button className="py-2 px-4 bg-[#ffb400] text-black rounded-md hover:text-white">Learn More</button>
                </div>
            </section>

            {/* Best Sellers Section */}
            <section className="bg-gray-100">
                <div className="container mx-auto p-8 lg:p-12">
                    <span className="underline underline-offset-4 font-bold decoration-4 decoration-[#ffb400] uppercase">best sellers</span>

                    <h2 className='pb-4'>Curated Selection</h2>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 lg:px-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {bestSellers && bestSellers.length > 0 ? (
                            bestSellers.slice(0, 4).map((product, index) => (
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
                            ))
                        ) : (
                            <div className="col-span-full text-center text-gray-500 py-8">
                                No best sellers available.
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Section */}
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
                                className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 cursor-pointer"
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

            {/* Call to Action Section */}
            <section className="relative h-[50vh] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: `url(${CallToActionImage})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="relative z-10 text-center px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
                    >
                        Explore Our Exquisite <br /> Curio Collections & Shop <br /> Now for the Perfect Finds
                    </motion.h2>
                    <Button linkRef='/gallery' Text='Shop Now' />
                </div>
            </section>
        </div>
    );
};

export default Hero;
