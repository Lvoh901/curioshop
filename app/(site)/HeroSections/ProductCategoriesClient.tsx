
"use client";

import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

// Import images as StaticImageData for type safety with next/image
import animalFigurinesImg from '@/public/images/animal_figurines.jpg';
import decorativeBowlsImg from '@/public/images/decorative_bowls.jpg';
import candleHoldersImg from '@/public/images/candle_holders.jpg';
import sculpturesImg from '@/public/images/sculptures.jpg';
import abstractArtPieceImg from '@/public/images/abstract_art_piece.jpg';
import soapstoneJewelleryImg from '@/public/images/soapstone_jewellery.jpg';
import customizedCarvingsImg from '@/public/images/customized_carvings.jpg';
import keyholdersImg from '@/public/images/keyholders.png';
import householdDecorImg from '@/public/images/household_decor.png';

interface Category {
    id: number | string;
    name: string;
    image: string | StaticImageData;
    slug?: string;
    description?: string | null;
}

interface ProductCategoriesClientProps {
    initialCategories: Category[];
}

export default function ProductCategoriesClient({ initialCategories }: ProductCategoriesClientProps) {
    const fallbackCategories: Category[] = [
        { id: 1, name: "Animal Figurines", image: animalFigurinesImg },
        { id: 2, name: "Decorative Bowls / Plates", image: decorativeBowlsImg },
        { id: 3, name: "Candle Holders", image: candleHoldersImg },
        { id: 4, name: "Sculptures", image: sculpturesImg },
        { id: 5, name: "Abstract Art Pieces", image: abstractArtPieceImg },
        { id: 6, name: "Soapstone Jewelry", image: soapstoneJewelleryImg },
        { id: 7, name: "Customized Carvings", image: customizedCarvingsImg },
        { id: 8, name: "Key Holders", image: keyholdersImg },
        { id: 9, name: "Household Décor", image: householdDecorImg }
    ];

    const categories = initialCategories.length > 0 ? initialCategories : fallbackCategories;

    return (
        <section className="bg-gray-200 py-16">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-12">
                    <span className="underline underline-offset-4 font-bold decoration-4 decoration-[#ff6a00] uppercase text-sm tracking-wider">Our Collections</span>
                    <h2 className='text-3xl font-bold text-gray-800 mt-2'>Shop by Category</h2>
                </div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {categories.map((category, index) => (
                        <Link key={category.id} href={`/gallery?curationId=${category.id}`}>
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                className="group relative h-72 overflow-hidden rounded-2xl shadow-md cursor-pointer"
                            >
                                {/* Background Image */}
                                <Image
                                    src={category.image}
                                    alt={category.name}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    priority={index <= 2}
                                />

                                {/* Stronger lower overlay for better content visibility */}
                                <div className="pointer-events-none absolute inset-0 z-10">
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0) 100%)"
                                        }}
                                    />
                                </div>

                                <div className="absolute inset-0 z-20 flex items-end p-6">
                                    <div>
                                        <h3 className="text-white font-bold text-xl group-hover:text-[#ffb400] transition-colors">
                                            {category.name}
                                        </h3>
                                        <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">
                                            Explore Collection &rarr;
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

