import React from 'react';
import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa6';
import { GiShakingHands } from 'react-icons/gi';
import { TiThumbsUp } from 'react-icons/ti';
import { AiOutlineFileProtect } from 'react-icons/ai';
import { RiUserCommunityFill } from 'react-icons/ri';

const CoreValues = () => {
    const features = [
        {
            icon: <FaAward className='w-8 h-8 lg:w-12 lg:h-12' />,
            title: "Quality Craftsmanship",
            text: "We are committed to producing durable, finely finished, and artistic soapstone products."
        },
        {
            icon: <GiShakingHands className='w-8 h-8 lg:w-12 lg:h-12' />,
            title: "Integrity",
            text: "We conduct our business with honesty, transparency, and professionalism."
        },
        {
            icon: <TiThumbsUp className='w-8 h-8 lg:w-12 lg:h-12' />,
            title: "Customer Satisfaction",
            text: "We prioritize customer needs by offering personalized service and timely delivery."
        },
        {
            icon: <AiOutlineFileProtect className='w-8 h-8 lg:w-12 lg:h-12' />,
            title: "Cultural Preservation",
            text: "We promote and protect the traditional soapstone carving heritage of Tabaka."
        },
        {
            icon: <RiUserCommunityFill className='w-8 h-8 lg:w-12 lg:h-12' />,
            title: "Community Empowerment",
            text: "We support local artisans and create employment opportunities within the community."
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
        <section className=''>
            <section className='mx-auto max-w-5xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-2 text-gray-800 py-16 bg-white'>
                <div className='text-center border border-gray-300 p-5 rounded-xl shadow-md hover:shadow-xl cursor-pointer'>
                    <h2 className='underline underline-offset-4 decoration-wavy decoration-[#ff6a00]'>Mission:</h2>
                    <p className='py-2'>To provide high-quality, beautifully crafted soapstone products that preserve cultural heritage, empower local artisans, and satisfy customer needs through creativity, reliability, and excellent service.</p>
                </div>

                <div className='text-center border border-gray-300 p-5 rounded-xl shadow-md hover:shadow-xl cursor-pointer'>
                    <h2 className='underline underline-offset-4 decoration-wavy decoration-[#ff6a00]'>Vision:</h2>
                    <p className='py-2'>To become a leading supplier of authentic Kenyan soapstone products locally and internationally, while promoting African art, culture, and sustainable craftsmanship.</p>
                </div>
            </section>

            <div className='bg-gray-200'>
                <div className='mx-auto max-w-5xl p-12'>
                    <motion.h1
                        className='text-2xl lg:text-3xl font-bold text-gray-800 uppercase mb-8 text-center underline underline-offset-4'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        Our Values
                    </motion.h1>

                    <motion.div
                        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 justify-center'
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className='bg-white shadow-lg hover:shadow-xl p-8 rounded-2xl transition-all cursor-pointer'
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                <motion.div
                                    className='mb-4 text-[#ff6a00]'
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {feature.icon}
                                </motion.div>
                                <h3 className='font-bold mb-2 hover:text-[#ff6a00]'>{feature.title}</h3>
                                <p className='text-gray-600'>{feature.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CoreValues;