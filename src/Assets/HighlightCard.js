import React from "react";

const HighlightCard = ({ image, title }) => {
    return (
        <div className="relative w-full bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Background Image */}
            <img src={`/images/${image}`} alt={title} className="w-full h-full object-cover" />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Centered Content */}
            <div className="absolute inset-0 flex justify-center items-center text-center">
                <h1 className="font-bold uppercase text-3xl lg:text-4xl text-white">
                    {title}
                </h1>
            </div>
        </div>
    );
};

export default HighlightCard;