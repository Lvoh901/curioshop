"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
    return (
        <main className="relative h-[calc(100vh-1rem)] flex items-center justify-center overflow-hidden bg-stone-50">
            {/* Ensure correct 40% black overlay over the background image */}
            <section
                className="relative w-full h-full bg-cover bg-center flex items-center justify-center text-white"
                style={{ backgroundImage: "url(/images/back01.jpg)", minHeight: "100%" }}
            >
                {/* Proper black overlay for 60% opacity */}
                <div className="absolute inset-0 z-0" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.p
                        className="text-lg text-[#ffb400] uppercase font-bold underline underline-offset-4 decoration-wavy mb-2"
                    >
                        Special Offer
                    </motion.p>

                    <motion.h1
                        className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
                    >
                        Discover Unique Curiosities at JAKEM Business Solutions!
                    </motion.h1>
                    <button className='bg-[#ffb400] px-4 py-2 rounded-2xl hover:rounded-3xl'>
                        <Link href="/gallery" className='font-medium hover:font-black'>Shop Now</Link>
                    </button>
                </div>
            </section>

            {/* Subtle bottom detail */}
            <div className="absolute bottom-10 text-white uppercase tracking-[0.4em] text-sm font-medium animate-pulse">
                Scroll to discover
            </div>
        </main>
    );
}
