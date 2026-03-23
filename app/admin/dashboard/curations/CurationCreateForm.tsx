"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { RiAddLine, RiCloseLine } from "react-icons/ri";
import { UploadButton } from "@/lib/uploadthing";

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
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const effectiveSlug = useMemo(() => toSlug(slug || title), [slug, title]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");
    setIsSaving(true);

    try {
      if (!coverImageUrl) {
        setError("Cover image is required.");
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
        setError(data?.error ?? "Could not create curation.");
        return;
      }

      setSuccess("Curation created successfully.");
      setTitle("");
      setSlug("");
      setDescription("");
      setCoverImageUrl("");
      setStatus("draft");
      setPublishedAt("");
      router.refresh();
    } catch {
      setError("Failed to create curation. Try again.");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <div className="mb-6">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-2 rounded-lg bg-stone-900 px-4 py-2 text-sm font-semibold text-white hover:bg-stone-800 transition-colors"
      >
        {open ? <RiCloseLine className="text-lg" /> : <RiAddLine className="text-lg" />}
        {open ? "Close Form" : "Add New Curation"}
      </button>

      {open ? (
        <form onSubmit={handleSubmit} className="mt-4 rounded-2xl border border-stone-200 bg-white p-5 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="text-sm text-stone-700">
              Title
              <input
                required
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-300"
                placeholder="Spring Collection"
              />
            </label>

            <label className="text-sm text-stone-700">
              Slug
              <input
                value={slug}
                onChange={(event) => setSlug(event.target.value)}
                className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-300"
                placeholder="spring-collection"
              />
              <span className="mt-1 block text-xs text-stone-500">Will save as: {effectiveSlug || "-"}</span>
            </label>

            <label className="text-sm text-stone-700">
              Status
              <select
                value={status}
                onChange={(event) =>
                  setStatus(event.target.value as "draft" | "published" | "archived")
                }
                className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-300"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </label>

            <label className="text-sm text-stone-700">
              Published At (optional)
              <input
                type="datetime-local"
                value={publishedAt}
                onChange={(event) => setPublishedAt(event.target.value)}
                className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-300"
              />
            </label>
          </div>

          <label className="text-sm text-stone-700 block">
            Cover Image
            <div className="mt-2 flex flex-col gap-3">
              <UploadButton
                endpoint="curationImage"
                onClientUploadComplete={(res) => {
                  const first = res?.[0];
                  if (first?.ufsUrl) {
                    setCoverImageUrl(first.ufsUrl);
                    setError("");
                  }
                }}
                onUploadError={(uploadError) => {
                  setError(uploadError.message || "Image upload failed.");
                }}
                appearance={{
                  button:
                    "ut-ready:bg-stone-900 ut-uploading:cursor-not-allowed rounded-lg bg-stone-900 px-4 py-2 text-sm font-semibold text-white hover:bg-stone-800",
                  container: "w-fit",
                }}
              />
              {coverImageUrl ? (
                <div className="rounded-lg border border-stone-200 p-2 w-fit">
                  <img
                    src={coverImageUrl}
                    alt="Cover preview"
                    className="h-24 w-24 object-cover rounded"
                  />
                  <p className="mt-2 text-xs text-emerald-600">Image uploaded successfully.</p>
                </div>
              ) : (
                <p className="text-xs text-stone-500">Upload one cover image (required).</p>
              )}
            </div>
          </label>

          <label className="text-sm text-stone-700 block">
            Description (optional)
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              rows={4}
              className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-300"
              placeholder="Short note about this curation."
            />
          </label>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          {success ? <p className="text-sm text-emerald-600">{success}</p> : null}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSaving}
              className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 disabled:opacity-70"
            >
              {isSaving ? "Saving..." : "Save Curation"}
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
}
