import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RiStarFill, RiStarHalfFill, RiStarLine, RiArrowLeftLine } from 'react-icons/ri';
import products from '../Assets/products';
import { FaRegCheckCircle } from 'react-icons/fa';

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!product) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
                <Link to="/gallery" className="text-[#ff6a00] hover:underline flex items-center gap-2">
                    <RiArrowLeftLine /> Back to Gallery
                </Link>
            </div>
        );
    }

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        return (
            <div className="flex space-x-1">
                {[...Array(fullStars)].map((_, i) => (
                    <RiStarFill key={`full-${i}`} className="w-5 h-5 text-yellow-500" />
                ))}
                {hasHalfStar && <RiStarHalfFill className="w-5 h-5 text-yellow-500" />}
                {[...Array(emptyStars)].map((_, i) => (
                    <RiStarLine key={`empty-${i}`} className="w-5 h-5 text-yellow-500" />
                ))}
            </div>
        );
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <Link to="/gallery" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#ff6a00] transition-colors mb-8 font-medium">
                    <RiArrowLeftLine /> Back to Gallery
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Image Section */}
                    <img
                        src={product.image}
                        alt={product.title}
                        className="rounded-2xl w-full"
                    />

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="px-8 lg:px-12 flex flex-col justify-center"
                    >
                        <span className="text-sm text-[#ff6a00] font-bold uppercase tracking-widest">
                            {product.category}
                        </span>
                        <h1 className="text-2xl font-bold text-gray-900">{product.title}</h1>

                        <div className="flex flex-col py-2">
                            {renderStars(product.rating)}
                            <span className="text-sm">({product.rating} / 5 Rating)</span>
                        </div>

                        <p className="text-md leading-relaxed mb-4">
                            {product.description}
                        </p>

                        <div className="text-2xl font-bold text-[#ff6a00] mb-6">
                            Ksh. <b className='italic underline underline-offset-2'>{product.price}</b>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <button className="flex-1 bg-[#ff6a00] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#e65a00] transition-colors shadow-lg hover:shadow-xl hover:font-bold">
                                Buy Online
                            </button>

                            <button className="flex-1 bg-white border border-[#ff6a00] text-[#ff6a00] px-8 py-4 rounded-xl font-bold hover:bg-[#e65a00] hover:text-white transition-colors shadow-lg hover:shadow-xl">
                                Visit Shop
                            </button>
                        </div>

                        <div className="pt-8">
                            <p className="font-medium text-gray-800 pb-3">Purchase Option:</p>

                            <ul className="space-y-3">
                                <li className="flex items-center bg-orange-50 border border-orange-300 rounded-lg p-2 hover:bg-orange-100 transition cursor-pointer">
                                    <span className="inline-flex items-center justify-center mr-3 h-7 w-7 rounded-full bg-[#ff6a00] text-white">
                                        <FaRegCheckCircle className='w-5 h-5' />
                                    </span>
                                    <small className="font-bold text-gray-900">{product.shop}</small>
                                </li>
                                {product.shop !== "Custom-made Orders" && (
                                    <li className="flex items-center bg-gray-100 border border-gray-400 rounded-lg p-2 hover:bg-gray-200 transition cursor-pointer text-sm">
                                        <span className="inline-flex items-center justify-center mr-3 h-7 w-7 rounded border border-[#ff6a00] bg-opacity-30 text-[#ff6a00]">
                                            <FaRegCheckCircle className='w-5 h-5' />
                                        </span>
                                        Custom-made Orders (Available for all items)
                                    </li>
                                )}
                                <li className="flex items-center bg-gray-100 border border-gray-400 rounded-lg p-2 hover:bg-gray-200 transition cursor-pointer text-sm">
                                    <span className="inline-flex items-center justify-center mr-3 h-7 w-7 rounded border border-[#ff6a00] bg-opacity-30 text-[#ff6a00]">
                                        <FaRegCheckCircle className='w-5 h-5' />
                                    </span>
                                    Deliveries - Local / International
                                </li>
                            </ul>
                        </div>

                        <div className="mt-6 pt-6 border-t-2 border-dashed border-[#ff6a00] grid grid-cols-2 gap-4">
                            <div className='bg-gray-200 p-6 rounded-xl shadow-md hover:shadow-xl cursor-pointer'>
                                <h4 className="font-bold text-gray-900 mb-2">Craftsmanship</h4>
                                <p className="text-sm">Hand-carved in Tabaka, Kenya by local artisans.</p>
                            </div>
                            <div className='bg-gray-200 p-6 rounded-xl shadow-md hover:shadow-xl cursor-pointer'>
                                <h4 className="font-bold text-gray-900 mb-2">Material</h4>
                                <p className="text-sm">100% Natural Soapstone with traditional finish.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;