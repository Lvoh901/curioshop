import Link from 'next/link';
import Image from 'next/image';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

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
      <p className="ml-2 text-stone-400 text-sm">({rating})</p>
    </div>
  );
}

export default async function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const item = await prisma.curationItem.findUnique({
    where: { id },
  });

  if (!item) {
    notFound();
  }

  // Use default rating of 5 since it's not in DB yet
  const rating = 5;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="pt-4 mb-4">
        <Link href="/gallery" className="text-stone-500 hover:text-stone-900 transition-colors flex items-center gap-2 font-bold">
          <span className="text-xl">←</span> Gallery
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Product Image Section */}
        <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 rounded-lg shadow-xl border border-stone-200">
          {item.imageUrl ? (
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full bg-stone-200 flex items-center justify-center text-stone-400 text-xl font-bold">No Image</div>
          )}
          {item.price && (
            <div className="absolute top-6 right-6 bg-black/90 backdrop-blur-md px-6 py-2 text-xl font-bold italic text-[#ffb400] shadow-lg">
              Ksh. {item.price.toLocaleString()}
            </div>
          )}
        </div>

        {/* Product Info Section */}
        <div className="space-y-4">
          <header>
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-stone-100 text-stone-600 text-xs uppercase tracking-[0.2em] font-bold rounded-full border border-stone-200">
                {item.category || 'Curiosity'}
              </span>
              <span className="text-[#ffb400] text-lg tracking-wider font-serif">
                <StarRating rating={rating} />
              </span>
            </div>
            <h2 className="font-serif font-black text-stone-900 leading-tight">
              {item.title}
            </h2>
          </header>

          <div className="space-y-6">
            <div className="flex items-start gap-2 pt-3">
              <FaLocationDot className='text-[#ffb400]' />
              <p className="text-sm font-bold text-stone-900 uppercase mb-1">Available At : <b className="text-stone-600 font-light">{item.shopLocation || 'Custom-made Orders'}</b></p>
            </div>

            <div className="border-b border-stone-200 pb-2">
              <p className="text-md leading-relaxed">
                &quot;{item.description || 'No description available.'}&quot;
              </p>
            </div>
          </div>

          <div className="pt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <button className="flex-1 py-3 text-white hover:text-[#ffb400] text-md bg-stone-900 hover:bg-stone-800 font-bold shadow-lg transition-all active:scale-95 cursor-pointer">
              Acquire this Piece
            </button>

            <button className="flex-1 py-3 text-gray-800 hover:text-[#ffb400] text-md border border-gray-500 hover:bg-stone-500 font-bold transition-all active:scale-95 cursor-pointer">
              Enquire Details
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
