import React from "react";
import { motion } from "framer-motion";

const NormalCard = ({ cardImg, cardTitle, Price }) => {
    return (
        <motion.div
            className="relative w-full bg-white rounded-2xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Background Image */}
            <img
                src={cardImg} // Ensure it loops correctly
                alt={cardTitle}
                className="w-full object-cover"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>

            {/* Content Section */}
            <div className="absolute bottom-0 w-full p-5 text-white text-start">
                <h2 className="text-xl font-bold">{cardTitle}</h2>

                {/* price Selection */}
                <p className="text-xs mt-1">Ksh. {Price}</p>
            </div>
        </motion.div>
    );
};

export default NormalCard;




{/* <NormalCard
cardImg={Shuka1}
cardTitle='Fleece Shuka'
Price='2000'
/>

<NormalCard
cardImg={Shuka2}
cardTitle='Plain Shuka'
Price='800'
/> */}