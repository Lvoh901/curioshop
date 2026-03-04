import { motion } from 'framer-motion';
import { RiStarFill, RiStarHalfFill, RiStarLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Card = ({ id, title, description, price, image, rating }) => {
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
        <Link to={`/product/${id}`} className="block w-full">
            <motion.div
                className="relative group bg-white border border-gray-200 rounded-2xl p-2 shadow-sm hover:shadow-xl transition-all overflow-hidden cursor-pointer"
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                {/* Image Container */}
                <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-white text-black px-4 py-2 rounded-full font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                            View Details
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-2 px-4 pb-4">
                    <div className="flex justify-between items-start">
                        <h3 className="text-lg font-bold text-gray-800 line-clamp-1">{title}</h3>
                    </div>
                    <div className="flex items-center space-x-2">
                        {renderStars(rating)}
                        <span className="text-sm text-gray-500">({rating})</span>
                    </div>
                    <p className="text-gray-500 text-sm line-clamp-2 h-10">{description}</p>
                    <div className="flex items-center justify-between pt-2">
                        <span className="text-[#ff6a00] font-bold text-xl">Ksh. {price}</span>
                        <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Tabaka Soapstone</span>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

export default Card;