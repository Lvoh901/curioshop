import Image from "next/image";
import CurationCreateForm from "./CurationCreateForm";
import { getCurationsForTable } from "../_lib/data";

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
              <tr className="border-b border-stone-200 text-left text-stone-600">
                <th className="py-2 pr-4 font-semibold">Cover</th>
                <th className="py-2 pr-4 font-semibold">Title</th>
                <th className="py-2 pr-4 font-semibold">Slug</th>
                <th className="py-2 pr-4 font-semibold">Status</th>
                <th className="py-2 pr-4 font-semibold">Created By</th>
                <th className="py-2 pr-4 font-semibold">Created At</th>
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
                  <tr key={curation.id} className="border-b border-stone-100 align-top">
                    <td className="py-3 pr-4">
                      <Image
                        src={curation.coverImageUrl}
                        alt={`${curation.title} cover`}
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded object-cover border border-stone-200"
                      />
                    </td>
                    <td className="py-3 pr-4">
                      <p className="font-medium text-stone-900">{curation.title}</p>
                      {curation.description ? (
                        <p className="text-xs text-stone-500 mt-1 break-words">{curation.description}</p>
                      ) : null}
                    </td>
                    <td className="py-3 pr-4 text-stone-700 break-all">{curation.slug}</td>
                    <td className="py-3 pr-4">
                      <span className="rounded-full border border-stone-200 px-2 py-1 text-xs font-medium capitalize">
                        {curation.status}
                      </span>
                    </td>
                    <td className="py-3 pr-4 text-stone-700 break-all">
                      {curation.creator?.name ?? curation.creator?.email ?? "Unknown"}
                    </td>
                    <td className="py-3 pr-4 text-stone-700 whitespace-nowrap">
                      {new Intl.DateTimeFormat("en-KE", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      }).format(curation.createdAt)}
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
