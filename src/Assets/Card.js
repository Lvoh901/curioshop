import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const Card = ({ title, description, price, image }) => {
    return (
        <motion.div
            className="relative group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-2xl overflow-hidden cursor-pointer"
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Image Container */}
            <div className="relative h-72 rounded-xl overflow-hidden mb-6">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
            </div>

            {/* Content */}
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-100">{title}</h3>
                <p className="text-gray-400 line-clamp-2">{description}</p>

                <div className="flex justify-between items-center pt-4">
                    <span className="text-2xl font-semibold text-blue-400">Ksh. {price}</span>
                    <motion.button
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
                        whileHover={{ x: 5 }}
                    >
                        Details
                        <FiArrowUpRight className="w-4 h-4" />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default Card;