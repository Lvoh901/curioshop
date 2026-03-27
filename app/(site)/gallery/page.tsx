import Link from 'next/link';
import Image from 'next/image';
import { prisma } from '@/lib/prisma';

import { Prisma } from '@/generated/prisma';

export default async function GalleryPage({
  searchParams,
}: {
  searchParams: Promise<{ curationId?: string }>;
}) {
  const { curationId } = await searchParams;

  const where: Prisma.CurationItemWhereInput = {
    isVisible: true,
    curation: {
      status: 'published'
    }
  };

  if (curationId) {
    where.curationId = curationId;
  }

  const items = await prisma.curationItem.findMany({
    where,
    orderBy: { createdAt: 'desc' },
  });

  const curation = curationId ? await prisma.curation.findUnique({
    where: { id: curationId },
    select: { title: true }
  }) : null;

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mt-8 mb-16">
        <h2 className="text-4xl sm:text-5xl font-serif font-bold text-stone-900 mb-4">
          {curation ? curation.title : 'The Gallery'}
        </h2>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto font-medium">
          {curation 
            ? `Explore our handpicked selection of items from the ${curation.title} collection.`
            : 'Browse our curated selection of rare artifacts and unique curiosities. Each piece tells a story of its own.'
          }
        </p>
        {curationId && (
          <div className="mt-4">
            <Link href="/gallery" className="text-amber-600 hover:text-amber-700 font-bold uppercase tracking-widest text-xs">
              &larr; View All Collections
            </Link>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
        {items.length === 0 ? (
          <div className="col-span-full text-center py-20 text-stone-500 italic">
            No items currently available in the gallery.
          </div>
        ) : (
          items.map((item, i) => (
            <div key={item.id}>
              <Link
                href={`/gallery/${item.id}`}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 rounded-2xl mb-4 shadow-sm group-hover:shadow-xl transition-all duration-500">
                  {item.imageUrl ? (
                    <Image
                      width={400}
                      height={500}
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      priority={i < 4}
                    />
                  ) : (
                    <div className="w-full h-full bg-stone-200 flex items-center justify-center text-stone-400">No Image</div>
                  )}

                  {/* Overlay on hover */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <span className="text-white font-bold text-sm tracking-widest uppercase">View Details &rarr;</span>
                  </div>

                  {item.price && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 text-sm font-bold text-stone-900 rounded-full shadow-sm">
                      Ksh.{item.price.toLocaleString()}
                    </div>
                  )}
                </div>

                <div className="px-1">
                  <h3 className="text-lg font-serif font-bold text-stone-900 group-hover:text-amber-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[10px] text-stone-500 uppercase tracking-[0.2em] font-bold mt-1">
                    {item.category || 'Curiosity'}
                  </p>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
