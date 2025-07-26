import { motion } from 'framer-motion';
import { RiStarFill, RiStarHalfFill, RiStarLine } from 'react-icons/ri';

const Card = ({ title, description, price, image, rating }) => {
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
        <motion.div
            className="relative group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-2 shadow-2xl overflow-hidden cursor-pointer"
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Image Container */}
            <div className="relative h-72 rounded-t-xl overflow-hidden mb-4">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
            </div>

            {/* Content */}
            <div className="space-y-3 px-5 pb-5">
                <h3 className="text-lg font-bold">{title}</h3>
                <small className="text-gray-500 line-clamp-2 font-light">{description}</small>

                <div className="flex items-center justify-between mt-2">
                    <span className="text-lg font-semibold">Ksh. {price}</span>
                    {renderStars(rating)}
                </div>
            </div>
        </motion.div>
    );
};

export default Card;