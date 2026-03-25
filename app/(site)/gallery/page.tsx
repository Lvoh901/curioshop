"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '../Data/Products';

export default function GalleryPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mt-8 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-serif font-bold text-stone-900 mb-4"
        >
          The Gallery
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-stone-600 max-w-2xl mx-auto font-medium"
        >
          Browse our curated selection of rare artifacts and unique curiosities.
          Each piece tells a story of its own.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Link
              href={`/gallery/${product.id}`}
              className="group block"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 rounded-2xl mb-4 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <Image
                  width={400}
                  height={500}
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={i < 4}
                />

                {/* Overlay on hover */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <span className="text-white font-bold text-sm tracking-widest uppercase">View Details &rarr;</span>
                </div>

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 text-sm font-bold text-stone-900 rounded-full shadow-sm">
                  Ksh.{product.price.toLocaleString()}
                </div>
              </div>

              <div className="px-1">
                <h3 className="text-lg font-serif font-bold text-stone-900 group-hover:text-amber-600 transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-[10px] text-stone-500 uppercase tracking-[0.2em] font-bold mt-1">
                  {product.category}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
