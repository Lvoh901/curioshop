import { RiBookletLine } from "react-icons/ri";

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

export default function CurationsList({
  title = "Latest Curations",
  curations,
}: {
  title?: string;
  curations: CurationItem[];
}) {
  return (
    <section className="bg-white rounded-2xl p-6 border border-stone-200">
      <h2 className="text-xl font-semibold text-stone-900 mb-3 underline underline-offset-4">
        <span className="inline-flex items-center gap-2">
          <RiBookletLine className="text-lg" />
          {title}
        </span>
      </h2>

      {curations.length === 0 ? (
        <p className="text-sm text-stone-500">No curations added yet.</p>
      ) : (
        <div className="space-y-3">
          {curations.map((curation) => (
            <div
              key={curation.id}
              className="rounded-xl border border-stone-200 p-4 flex items-start justify-between gap-4"
            >
              <div>
                <p className="font-semibold text-stone-900">{curation.title}</p>
                <p className="text-xs text-stone-500 mt-1">
                  <span className="break-all">
                    Added by {curation.creator?.name ?? curation.creator?.email ?? "Unknown"}
                  </span>{" "}
                  on{" "}
                  {new Intl.DateTimeFormat("en-KE", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  }).format(curation.createdAt)}
                </p>
              </div>
              <span
                className={`text-xs px-2 py-1 rounded-full border font-medium capitalize ${
                  curation.status === "published"
                    ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                    : curation.status === "draft"
                      ? "bg-amber-50 text-amber-700 border-amber-200"
                      : "bg-stone-100 text-stone-700 border-stone-200"
                }`}
              >
                {curation.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
