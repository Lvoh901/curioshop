"use client"

import { MdLocalActivity } from "react-icons/md";

type CurationItem = {
  id: string;
  title: string;
  status: "draft" | "published" | "archived";
  createdAt: Date;
  creator: {
    name: string;
    email: string;
  };
};

function statusChip(status: CurationItem["status"]) {
  const map = {
    published: "bg-emerald-100 text-emerald-700 border-emerald-200",
    draft: "bg-amber-100 text-amber-700 border-amber-200",
    archived: "bg-stone-200 text-stone-700 border-stone-300",
  } as const;
  return map[status] ?? "bg-stone-100 text-stone-700";
}

export default function CurationsList({
  title = "Latest Activity",
  curations,
}: {
  title?: string;
  curations: CurationItem[];
}) {
  return (
    <section className="bg-gradient-to-tr from-white via-stone-50 to-stone-100 rounded-3xl p-6 border border-stone-200 shadow-lg">
      <h4 className="font-extrabold text-stone-900 mb-8 flex items-center gap-3 tracking-tight">
        <MdLocalActivity size={28} className="text-amber-500 drop-shadow" />
        <span>{title}</span>
      </h4>
      {curations.length === 0 ? (
        <div className="py-16 text-center border-2 border-dashed border-stone-200 rounded-2xl bg-gradient-to-br from-stone-50 via-white to-stone-100">
          <p className="text-base text-stone-400 font-semibold">
            <span className="text-amber-400 text-xl mr-2">✨</span>No curations added yet.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white/80 border-stone-200 rounded-md shadow-sm">
            <thead>
              <tr className="bg-stone-500">
                <th className="px-6 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider rounded-tl-2xl">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  Creator
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider rounded-tr-2xl">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {curations.map((curation) => (
                <tr
                  key={curation.id}
                  className="group border-b border-stone-100 hover:bg-gray-300/30 transition cursor-pointer"
                >
                  <td className="px-6 py-2 text-stone-800 font-bold text-sm whitespace-nowrap max-w-xs truncate">
                    {curation.title}
                  </td>
                  <td className="px-6 py-2 text-stone-800 text-sm">
                    {curation.creator?.name ??
                      curation.creator?.email ??
                      "Unknown"}
                  </td>
                  <td className="px-6 py-2 text-stone-800 text-xs">
                    {new Intl.DateTimeFormat("en-KE", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }).format(curation.createdAt)}
                  </td>
                  <td className="px-6 py-2">
                    <span
                      className={
                        "text-[11px] px-4 py-1.5 rounded-full border font-bold uppercase tracking-wider shadow transition-colors " +
                        statusChip(curation.status)
                      }
                    >
                      {curation.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
