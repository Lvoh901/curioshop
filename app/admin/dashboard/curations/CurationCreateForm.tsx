"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { RiAddLine, RiCloseLine } from "react-icons/ri";
import { UploadButton } from "@/lib/uploadthing";
import Swal from "sweetalert2";

// Utility to generate slugs
function toSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function CurationCreateForm() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [status, setStatus] = useState<"draft" | "published" | "archived">("draft");
  const [publishedAt, setPublishedAt] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const effectiveSlug = useMemo(() => toSlug(slug || title), [slug, title]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);

    try {
      if (!coverImageUrl) {
        Swal.fire({
          icon: "warning",
          title: "Missing Information",
          text: "Cover image is required.",
          confirmButtonColor: "#1c1917",
        });
        setIsSaving(false);
        return;
      }
      const response = await fetch("/api/admin/curations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          slug: effectiveSlug,
          coverImageUrl,
          description,
          status,
          publishedAt,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        Swal.fire({
          icon: "error",
          title: "Error Creating Curation",
          text: data?.error ?? "Could not create curation.",
          confirmButtonColor: "#1c1917",
        });
        return;
      }
      Swal.fire({
        icon: "success",
        title: "Curation Created",
        text: "Your curation has been successfully created.",
        confirmButtonColor: "#059669",
      });

      setTitle("");
      setSlug("");
      setDescription("");
      setCoverImageUrl("");
      setStatus("draft");
      setPublishedAt("");
      setOpen(false);
      router.refresh();
    } catch {
      Swal.fire({
        icon: "error",
        title: "Unexpected Error",
        text: "Failed to create curation. Try again.",
        confirmButtonColor: "#1c1917",
      });
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <div className="mb-6">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors cursor-pointer shadow
          ${open
            ? "bg-red-600 hover:bg-red-700 text-white"
            : "bg-white text-stone-900 border border-stone-200 hover:bg-stone-100"
          }`}
        style={{ boxShadow: open ? "0 2px 8px 0 #cbd5e1" : "0 2px 8px 0 #e5e7eb" }}
      >
        {open ? (
          <RiCloseLine className="text-lg font-black transition-all duration-200" />
        ) : (
          <RiAddLine className="text-lg" />
        )}
        {open ? "Close Form" : "Add New Curation"}
      </button>

      {open ? (
        <form
          onSubmit={handleSubmit}
          className="mt-5 rounded-xl border border-stone-200 bg-stone-50 p-6 max-w-2xl shadow-lg mx-auto animate-fadein space-y-6"
        >
          <h2 className="text-xl font-serif font-bold text-stone-900 mb-4 border-b pb-2 border-stone-200 flex items-center gap-2">
            <RiAddLine className="inline-block text-emerald-600" />
            New Curation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="flex flex-col gap-1 mb-0">
              <span className="uppercase font-semibold text-[13px] tracking-wide text-stone-700">Title <span className="text-rose-600">*</span></span>
              <input
                required
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="w-full rounded-md border border-stone-400 px-3 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-200 bg-white text-stone-900 shadow-sm transition"
                placeholder="Spring Collection"
                autoFocus
              />
            </label>

            <label className="flex flex-col gap-1 text-stone-800">
              <span className="uppercase font-semibold text-[13px] tracking-wide">Slug</span>
              <input
                value={slug}
                onChange={(event) => setSlug(event.target.value)}
                className="w-full rounded-md border border-stone-400 px-3 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-200 bg-white text-stone-900 shadow-sm transition"
                placeholder="spring-collection"
              />
              <span className="mt-1 block text-xs text-stone-500 pt-0.5 pl-1">Will save as: <span className="font-mono text-stone-900">{effectiveSlug || "-"}</span></span>
            </label>

            <label className="flex flex-col gap-1 text-stone-800">
              <span className="uppercase font-semibold text-[13px] tracking-wide">Status</span>
              <select
                value={status}
                onChange={(event) =>
                  setStatus(event.target.value as "draft" | "published" | "archived")
                }
                className="mt-0 w-full rounded-md border border-stone-400 px-3 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-200 bg-white text-stone-900 shadow-sm"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </label>

            <label className="flex flex-col gap-1 text-stone-800">
              <span className="uppercase font-semibold text-[13px] tracking-wide">Published At</span>
              <input
                type="datetime-local"
                value={publishedAt}
                onChange={(event) => setPublishedAt(event.target.value)}
                className="mt-0 w-full rounded-md border border-stone-400 px-3 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-200 bg-white text-stone-900 shadow-sm"
              />
              <span className="text-[11px] text-stone-500 pt-0.5 pl-1">Optional</span>
            </label>
          </div>

          <div>
            <span className="uppercase font-semibold text-[13px] tracking-wide text-stone-700">Cover Image <span className="text-rose-600">*</span></span>
            <div className="mt-2 flex flex-col gap-4 items-start">
              <UploadButton
                endpoint="curationImage"
                onClientUploadComplete={(res) => {
                  const first = res?.[0];
                  if (first?.ufsUrl) {
                    setCoverImageUrl(first.ufsUrl);
                  }
                }}
                onUploadError={(uploadError) => {
                  Swal.fire({
                    icon: "error",
                    title: "Upload Failed",
                    text: uploadError.message || "Image upload failed.",
                    confirmButtonColor: "#1c1917",
                  });
                }}
                appearance={{
                  button:
                    "ut-ready:bg-stone-900 ut-uploading:cursor-not-allowed rounded-lg bg-stone-900 px-4 py-2 text-sm font-semibold text-white hover:bg-stone-800 border-none shadow-sm",
                  container: "w-fit",
                }}
              />
              {coverImageUrl ? (
                <div className="flex flex-col items-center gap-2 rounded-lg border border-stone-200 p-2 bg-white shadow-sm">
                  <Image
                    src={coverImageUrl}
                    alt="Cover preview"
                    width={72}
                    height={72}
                    className="h-28 w-28 object-cover rounded-t-md"
                  />
                  <span className="text-xs text-emerald-700 font-medium">Uploaded Image</span>
                </div>
              ) : (
                <p className="text-xs text-stone-500 mt-2">Upload one cover image to represent your curation.</p>
              )}
            </div>
          </div>

          <label className="flex flex-col gap-1 text-stone-800">
            <span className="uppercase font-semibold text-[13px] tracking-wide">Description</span>
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              rows={3}
              className="w-full rounded-md border border-stone-400 px-3 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-200 bg-white text-stone-900 shadow-sm resize-none"
              placeholder="Short note about this curation (optional)"
            />
          </label>
          <div className="flex justify-end gap-2 mt-6">
            <button
              type="button"
              disabled={isSaving}
              onClick={() => setOpen(false)}
              className="rounded-md border border-stone-400 px-4 py-2 text-sm font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200 transition disabled:opacity-70"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSaving}
              className="rounded-md bg-emerald-600 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-700 focus:bg-emerald-700 transition disabled:opacity-60 shadow"
            >
              {isSaving ? "Adding..." : "Add Curation"}
            </button>
          </div>
        </form>
      ) : null}
      <style jsx>{`
        @keyframes fadein {
          0%   { opacity: 0; transform: translateY(24px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .animate-fadein {
          animation: fadein 0.4s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </div>
  );
}
