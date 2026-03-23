import Link from 'next/link';
import Image from 'next/image';
import { products } from '../Data/Products';

export default function GalleryPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mt-4 mb-12">
        <h2 className="font-serif font-bold text-stone-900">
          The Gallery
        </h2>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
          Browse our curated selection of rare artifacts and unique curiosities.
          Each piece tells a story of its own.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/gallery/${product.id}`}
            className="group block"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 rounded-sm mb-2">
              <Image
                width={400}
                height={500}
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority
              />
              <div className="absolute top-4 right-4 bg-black/90 backdrop-blur-sm px-3 py-1 text-sm font-bold italic text-[#ffb400]">
                Ksh.{product.price}
              </div>
            </div>
            <div className="">
              <h3 className="text-xl font-serif font-bold text-stone-900 group-hover:text-stone-700 transition-colors">
                {product.title}
              </h3>
              <p className="text-[10px] text-stone-500 uppercase tracking-widest font-medium">
                {product.category}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
