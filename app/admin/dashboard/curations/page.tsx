import Image from "next/image";
import CurationCreateForm from "./CurationCreateForm";
import { getCurationsForTable } from "../_lib/data";

import { DeleteCurationButton } from "./DeleteCurationButton";
import { RiEditLine } from "react-icons/ri";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminCurationsPage() {
  const curations = await getCurationsForTable(50);

  return (
    <div className="container mx-auto px-4 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-stone-900 underline underline-offset-4">Curations</h1>
        <p className="text-stone-600 mt-1 font-medium">Manage and review curation entries.</p>
      </div>

      <CurationCreateForm />

      <section className="rounded-2xl border border-stone-200 bg-white p-4 md:p-6">
        <h2 className="text-xl font-semibold text-stone-900 mb-4">Current Curations</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-stone-200 text-left text-stone-600 uppercase">
                <th className="py-2 px-4 font-semibold">Cover</th>
                <th className="py-2 font-semibold">Title</th>
                <th className="py-2 font-semibold">Slug</th>
                <th className="py-2 font-semibold">Status</th>
                <th className="py-2 font-semibold">Created By</th>
                <th className="py-2 px-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {curations.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-6 text-center text-stone-500">
                    No curations found.
                  </td>
                </tr>
              ) : (
                curations.map((curation) => (
                  <tr key={curation.id} className="border-b border-stone-100 align-middle">
                    <td className="py-3 pr-4">
                      <Image
                        src={curation.coverImageUrl}
                        alt={`${curation.title} cover`}
                        width={64}
                        height={64}
                        className="h-16 w-16 rounded object-cover border border-stone-200"
                      />
                    </td>
                    <td className="py-3 pr-4">
                      <p className="font-medium text-stone-900">{curation.title}</p>
                      {curation.description ? (
                        <p className="text-[12px] font-bold text-stone-500 mt-1 break-words max-w-[200px] line-clamp-1">{curation.description}</p>
                      ) : null}
                    </td>
                    <td className="py-3 pr-4 text-stone-700 break-all">{curation.slug}</td>
                    <td className="py-3 pr-4">
                      <span className={`rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase ${curation.status === 'published' ? 'border-emerald-200 bg-emerald-50 text-emerald-700' :
                        curation.status === 'draft' ? 'border-amber-200 bg-amber-50 text-amber-700' :
                          'border-stone-200 bg-stone-50 text-stone-700'
                        }`}>
                        {curation.status}
                      </span>
                    </td>
                    <td className="py-3 pr-4 text-stone-700">
                      <p className="font-medium">{curation.creator?.name ?? "Unknown"}</p>
                      <p className="text-[12px] text-stone-500 font-bold">
                        {new Intl.DateTimeFormat("en-KE", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        }).format(curation.createdAt)}
                      </p>
                    </td>
                    <td className="py-3 pr-4 text-right">
                      <div className="flex justify-end items-center gap-1">
                        <Link
                          href={`/admin/dashboard/curations/${curation.id}`}
                          className="p-2 text-stone-400 hover:text-stone-900 transition-colors"
                          title="Edit Curation"
                        >
                          <RiEditLine className="text-lg" />
                        </Link>
                        <DeleteCurationButton id={curation.id} title={curation.title} />
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
