import React from 'react'
import { Link } from 'react-router-dom';

const Button = ({linkRef, Text}) => {
    return (
        <div>
            <button className="relative group overflow-hidden border bg-white px-4 py-2 mt-5 rounded-lg transition-all duration-300 hover:shadow-lg hover:border-[#ffb400]">
                <Link to={linkRef} className="relative z-10 text-gray-800 hover:text-[#ff6a00] font-semibold text-sm sm:text-base px-4 py-2 transition-all duration-300">
                    {Text}
                </Link>
                {/* Background Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#ffb400] to-[#ff6a00] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></div>
            </button>
        </div>
    )
}

export default Button;