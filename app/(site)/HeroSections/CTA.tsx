
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTA() {
    return (
        <section className="relative h-[65vh] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url(/images/back02.jpg)", minHeight: "100%" }}>
            {/* Proper black overlay for 40% opacity */}
            <div className="absolute inset-0 z-0" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}></div>
            <div className="relative z-10 text-center px-4">
                <motion.h1
                    className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-2"
                >
                    Explore our exquisite curio collections & <br /> shop for amazing unique finds.
                </motion.h1>

                <button className='bg-[#ffb400] px-4 py-2 rounded-2xl hover:rounded-3xl'>
                    <Link href="/gallery" className='font-medium hover:font-black'>Shop Now</Link>
                </button>
            </div>
        </section>
    );
};
