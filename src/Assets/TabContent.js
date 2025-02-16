import React, { useState } from 'react';
import { motion } from 'framer-motion';

// product images
import Prod1 from '../images/product1.jpg';
import Prod2 from '../images/product2.jpg';
import Prod3 from '../images/product3.webp';
import Prod4 from '../images/product4.webp';
import Prod5 from '../images/product5.webp';
import Prod6 from '../images/product6.webp';
import Prod7 from '../images/product7.jpg';
import Prod8 from '../images/product8.jpg';
import Prod9 from '../images/product9.jpeg';


const Tab = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            label: "All",
            content: [
                {
                    title: "Vintage Wall Clock",
                    description: "A classic antique clock with intricate designs.",
                    price: "120",
                    image: Prod1
                },
                {
                    title: "Silk Fabric Art",
                    description: "Handwoven silk fabric with traditional patterns.",
                    price: "85",
                    image: Prod2
                },
                {
                    title: "Persian Rug",
                    description: "A luxurious hand-knotted rug for your floor.",
                    price: "450",
                    image: Prod3
                }
            ]
        },
        {
            label: "Wall Hangings",
            content: [
                {
                    title: "Vintage Wall Clock",
                    description: "A classic antique clock with intricate designs.",
                    price: "120",
                    image: Prod4
                },
                {
                    title: "Macrame Wall Art",
                    description: "Handcrafted macrame wall hanging.",
                    price: "75",
                    image: Prod5
                }
            ]
        },
        {
            label: "Fabric",
            content: [
                {
                    title: "Silk Fabric Art",
                    description: "Handwoven silk fabric with traditional patterns.",
                    price: "85",
                    image: Prod6
                },
                {
                    title: "Linen Table Runner",
                    description: "Elegant linen fabric for your dining table.",
                    price: "45",
                    image: Prod7
                }
            ]
        },
        {
            label: "Floor",
            content: [
                {
                    title: "Persian Rug",
                    description: "A luxurious hand-knotted rug for your floor.",
                    price: "450",
                    image: Prod8
                },
                {
                    title: "Jute Doormat",
                    description: "Eco-friendly jute doormat for your entrance.",
                    price: "30",
                    image: Prod9
                }
            ]
        }
    ];

    const tabVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
    };

    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`relative px-4 py-2 sm:px-6 sm:py-3 text-sm font-medium transition-colors uppercase
                            ${activeTab === index
                                ? "text-black cursor-pointer"
                                : "text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 cursor-pointer"
                            }`}
                    >
                        {tab.label}
                        {activeTab === index && (
                            <motion.div
                                className="absolute -bottom-1 left-0 right-0 h-1 bg-blue-500"
                                layoutId="underline"
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <motion.div
                key={activeTab}
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {tabs[activeTab].content.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-80 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                            <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                            <p className="text-lg font-bold text-blue-600 mt-3">Ksh. {item.price}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Tab;