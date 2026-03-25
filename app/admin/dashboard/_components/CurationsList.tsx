import { motion } from "framer-motion";
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
    <section className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
      <h2 className="text-xl font-bold text-stone-900 mb-6 flex items-center gap-3">
        <RiBookletLine size={24} className="text-amber-500" />
        {title}
      </h2>

      {curations.length === 0 ? (
        <div className="py-12 text-center border-2 border-dashed border-stone-100 rounded-xl">
          <p className="text-sm text-stone-400 font-medium">No curations added yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {curations.map((curation, i) => (
            <motion.div
              key={curation.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ x: 5 }}
              className="group rounded-2xl border border-stone-100 bg-stone-50/50 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all hover:bg-white hover:shadow-md hover:border-amber-100 cursor-pointer"
            >
              <div className="min-w-0 flex-grow">
                <p className="font-bold text-stone-900 group-hover:text-amber-600 transition-colors truncate">
                  {curation.title}
                </p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                    By {curation.creator?.name ?? curation.creator?.email ?? "Unknown"}
                  </span>
                  <span className="text-[10px] font-bold text-stone-300">•</span>
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                    {new Intl.DateTimeFormat("en-KE", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }).format(curation.createdAt)}
                  </span>
                </div>
              </div>
              <span
                className={`text-[10px] px-3 py-1.5 rounded-full border font-bold uppercase tracking-widest transition-colors ${curation.status === "published"
                  ? "bg-emerald-50 text-emerald-700 border-emerald-100 group-hover:bg-emerald-500 group-hover:text-white"
                  : curation.status === "draft"
                    ? "bg-amber-50 text-amber-700 border-amber-100 group-hover:bg-amber-500 group-hover:text-white"
                    : "bg-stone-100 text-stone-700 border-stone-200 group-hover:bg-stone-500 group-hover:text-white"
                  }`}
              >
                {curation.status}
              </span>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
