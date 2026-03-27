"use client";

import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa6';
import { GiShakingHands } from 'react-icons/gi';
import { TiThumbsUp } from 'react-icons/ti';
import { AiOutlineFileProtect } from 'react-icons/ai';
import { RiUserCommunityFill } from 'react-icons/ri';

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

export default function CoreValues() {
    return (
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
                >
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="text-center p-10 rounded-3xl bg-stone-50 border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer group"
                    >
                        <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4 group-hover:text-amber-600 transition-colors underline underline-offset-8 decoration-amber-500/30">Our Mission</h2>
                        <p className="text-stone-600 leading-relaxed font-medium">To provide high-quality, beautifully crafted soapstone products that preserve cultural heritage, empower local artisans, and satisfy customer needs through creativity, reliability, and excellent service.</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="text-center p-10 rounded-3xl bg-stone-50 border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer group"
                    >
                        <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4 group-hover:text-amber-600 transition-colors underline underline-offset-8 decoration-amber-500/30">Our Vision</h2>
                        <p className="text-stone-600 leading-relaxed font-medium">To become a leading supplier of authentic Kenyan soapstone products locally and internationally, while promoting African art, culture, and sustainable craftsmanship.</p>
                    </motion.div>
                </motion.div>

                <div className="bg-stone-50/50 rounded-[3rem] p-8 sm:p-12 lg:p-16 border border-stone-100">
                    <motion.h2
                        className="text-3xl lg:text-4xl font-serif font-bold text-stone-900 mb-12 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Our Core Values
                    </motion.h2>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-white shadow-sm hover:shadow-2xl hover:shadow-amber-500/10 p-8 rounded-3xl border border-stone-100 transition-all cursor-pointer group"
                                whileHover={{ y: -10 }}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                            >
                                <motion.div
                                    className="mb-6 text-amber-500 bg-amber-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all duration-500"
                                    whileHover={{ rotate: 5 }}
                                >
                                    {feature.icon}
                                </motion.div>
                                <h3 className="font-bold text-xl text-stone-900 mb-3 group-hover:text-amber-600 transition-colors">{feature.title}</h3>
                                <p className="text-stone-500 leading-relaxed font-medium">{feature.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
