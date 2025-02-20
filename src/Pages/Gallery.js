import React from 'react';
import { motion } from 'framer-motion';
import Card from '../Assets/Card';
import { RiTruckLine, RiSecurePaymentLine, RiCustomerService2Line } from 'react-icons/ri';
import Tab from '../Assets/TabContent';

const Gallery = ({ bestSellers }) => {
    const features = [
        {
            icon: <RiTruckLine className='w-8 h-8 lg:w-12 lg:h-12' />,
            title: "Global Delivery",
            text: "Worldwide shipping with real-time tracking"
        },
        {
            icon: <RiSecurePaymentLine className='w-8 h-8 lg:w-12 lg:h-12' />,
            title: "Secure Payment",
            text: "256-bit SSL encrypted transactions"
        },
        {
            icon: <RiCustomerService2Line className='w-8 h-8 lg:w-12 lg:h-12' />,
            title: "24/7 Support",
            text: "Dedicated customer care team"
        }
    ];

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
            <motion.h1
                className='text-2xl lg:text-3xl font-bold text-gray-800 uppercase mb-8'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                Best Sellers
            </motion.h1>

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
                        />
                    </motion.div>
                ))}
            </motion.div>

            <div className='mx-auto max-w-3xl px-4 lg:px-8 py-8 lg:py-16'>
                <motion.h1
                    className='text-2xl lg:text-3xl font-bold text-gray-800 uppercase mb-8 text-center underline underline-offset-4'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    our values
                </motion.h1>

                <motion.div
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6'
                    variants={containerVariants}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className='flex flex-col items-center text-center bg-white shadow-lg hover:shadow-xl p-6 rounded-2xl transition-all cursor-pointer'
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                        >
                            <motion.div
                                className='text-gray-600 mb-4 hover:text-blue-600'
                                whileHover={{ scale: 1.1 }}
                            >
                                {feature.icon}
                            </motion.div>
                            <h2 className='font-bold text-lg lg:text-xl mb-2 hover:text-blue-600'>{feature.title}</h2>
                            <p className='text-gray-600 text-sm lg:text-md max-w-xs'>{feature.text}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <motion.div>
                <Tab />
            </motion.div>
        </motion.div>
    );
};

export default Gallery;