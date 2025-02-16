import { motion } from 'framer-motion';
import { RiBookmark2Line } from 'react-icons/ri';

const Card = ({ title, description, price, image }) => {
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
                <h3 className="text-xl font-bold text-gray-100">{title}</h3>
                <p className="text-gray-400 line-clamp-2 text-md">{description}</p>
                <span className="text-xl font-semibold text-white flex gap-2 items-center"><RiBookmark2Line className='w-4 h-4'/> | Ksh. {price}</span>
            </div>
        </motion.div>
    );
};

export default Card;