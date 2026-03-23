import Link from 'next/link';
import Image from 'next/image';
import { products } from '../../Data/Products';
import { notFound } from 'next/navigation';
import { MdNotListedLocation } from 'react-icons/md';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

function StarRating({ rating }: { rating: number }) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<FaStar key={i} className="text-[#ffb400]" />);
    } else if (i === fullStars + 1 && hasHalfStar) {
      stars.push(<FaStarHalfAlt key={i} className="text-[#ffb400]" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-stone-300" />);
    }
  }

  return (
    <div className="flex items-center gap-1">
      {stars}
      <span className="ml-2 text-stone-400 text-sm font-medium">({rating})</span>
    </div>
  );
}

export default async function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Find product by matching string ID from URL with numeric ID in Data
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="pt-4 mb-4">
        <Link href="/gallery" className="text-stone-500 hover:text-stone-900 transition-colors flex items-center gap-2 font-medium">
          <span className="text-xl">←</span> Back to The Gallery
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Product Image Section */}
        <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 rounded-lg shadow-xl border border-stone-200">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
            unoptimized
            priority
          />
          <div className="absolute top-6 right-6 bg-black/90 backdrop-blur-md px-6 py-2 text-xl font-bold italic text-[#ffb400] shadow-lg">
            Ksh. {product.price.toLocaleString()}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="space-y-10">
          <header>
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-stone-100 text-stone-600 text-xs uppercase tracking-[0.2em] font-bold rounded-full border border-stone-200">
                {product.category}
              </span>
              <span className="text-[#ffb400] text-lg tracking-wider font-serif">
                <StarRating rating={product.rating} />
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-900 leading-tight">
              {product.title}
            </h1>
          </header>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 text-stone-400">
                <MdNotListedLocation />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900 uppercase tracking-widest mb-1">Available At</h4>
                <p className="text-stone-600 font-light">{product.shop}</p>
              </div>
            </div>

            <div className="border-t border-stone-200 pt-4">
              <p className="text-md text-stone-600 leading-relaxed font-light italic">
                &quot;{product.description}&quot;
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <button className="flex-1 py-5 text-white text-xl bg-stone-900 hover:bg-stone-800 shadow-lg transition-all active:scale-95 cursor-pointer">
              Acquire this Piece
            </button>
            <button className="flex-1 py-5 text-gray-500 text-xl border border-gray-500 hover:text-white hover:bg-stone-500 transition-all active:scale-95 cursor-pointer">
              Enquire Details
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
