import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { RiArrowLeftLine, RiPencilLine } from "react-icons/ri";
import { CurationItemForm } from "./CurationItemForm";
import { DeleteItemButton } from "./DeleteItemButton";

export default async function CurationEditPage({ params }: { params: { id: string } }) {
  const session = await getAdminSession();
  if (!session || session.role !== "admin") {
    redirect("/admin/login");
  }

  const { id } = await params;

  const curation = await prisma.curation.findUnique({
    where: { id },
    include: {
      items: {
        orderBy: { sortOrder: "asc" },
      },
    },
  });

  if (!curation) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 lg:px-8">
      <div className="mb-8 flex items-center gap-4">
        <Link
          href="/admin/dashboard/curations"
          className="p-2 rounded-full hover:bg-stone-100 transition-colors"
        >
          <RiArrowLeftLine className="text-xl" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-stone-900">{curation.title}</h1>
          <p className="text-stone-600 font-medium">Manage items for this curation.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <section className="bg-white rounded-2xl p-6 border border-stone-200">
            <h2 className="text-lg font-semibold text-stone-900 mb-4 border-b border-stone-100 pb-2">
              Add New Item
            </h2>
            <CurationItemForm curationId={curation.id} />
          </section>
        </div>

        <div className="lg:col-span-2">
          <section className="bg-white rounded-2xl p-6 border border-stone-200">
            <h2 className="text-lg font-semibold text-stone-900 mb-4 border-b border-stone-100 pb-2">
              Current Items
            </h2>
            <div className="space-y-4">
              {curation.items.length === 0 ? (
                <div className="text-center py-12 text-stone-500 bg-stone-50 rounded-xl border border-dashed border-stone-200">
                  No items added yet. Add your first item to the left.
                </div>
              ) : (
                curation.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 rounded-xl border border-stone-100 bg-stone-50/50 group hover:bg-white hover:border-stone-200 transition-all"
                  >
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-stone-200 flex-shrink-0">
                      {item.imageUrl ? (
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      ) : (
                        <div className="w-full h-full bg-stone-200" />
                      )}
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-stone-900 truncate">{item.title}</h3>
                        <div className="flex items-center gap-1">
                          <DeleteItemButton id={item.id} curationId={curation.id} />
                        </div>
                      </div>
                      <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-stone-500">
                        {item.price && (
                          <span className="font-bold text-amber-700">Ksh.{item.price.toLocaleString()}</span>
                        )}
                        {item.category && (
                          <span className="uppercase tracking-wider">{item.category}</span>
                        )}
                        {item.shopLocation && (
                          <span>{item.shopLocation}</span>
                        )}
                      </div>
                      {item.description && (
                        <p className="mt-2 text-xs text-stone-600 line-clamp-2 italic">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
