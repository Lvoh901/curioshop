"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="absolute -inset-4 bg-amber-500/10 rounded-3xl blur-2xl z-0" />
                    <Image
                        src="/images/product6.webp"
                        width={600}
                        height={600}
                        className="rounded-3xl shadow-2xl relative z-10 object-cover w-full h-auto aspect-square lg:aspect-auto lg:h-[600px]"
                        alt="About JAKEM"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs">Since 1995</span>
                    <h2 className="mt-4 text-4xl lg:text-5xl font-serif font-bold text-stone-900 leading-tight">JAKEM Business Solutions</h2>
                    <div className="h-1.5 w-24 bg-amber-500 my-8 rounded-full" />
                    <p className="text-xl text-stone-600 leading-relaxed font-medium italic">
                        &quot;At JAKEM Business Solutions, we believe that every space deserves a touch of beauty and wonder. Our curated collection of curios blends timeless elegance with modern artistry.&quot;
                    </p>
                    <p className="mt-6 text-stone-500 leading-relaxed font-medium">
                        Whether you&apos;re searching for the perfect gift or a statement piece for your home, JAKEM Business Solutions is your destination for quality, creativity, and exceptional value. Discover the art of refined living—discover JAKEM Business Solutions.
                    </p>
                    <div className="mt-10">
                        <Link href="/contact" className="inline-flex items-center text-amber-600 font-bold uppercase tracking-widest text-sm hover:translate-x-2 transition-transform">
                            Read our full story <span className="ml-2">&rarr;</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
