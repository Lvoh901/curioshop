"use client";

import { useState } from "react";
import { UploadButton } from "@/lib/uploadthing";
import { addCurationItem } from "./actions";
import Image from "next/image";
import { RiLoader4Line } from "react-icons/ri";
import Swal from "sweetalert2";

export function CurationItemForm({ curationId }: { curationId: string }) {
  const [isSaving, setIsSaving] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [shopLocation, setShopLocation] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title || !imageUrl) {
      Swal.fire({
        icon: "warning",
        title: "Missing Info",
        text: "Title and image are required.",
        confirmButtonColor: "#1c1917",
      });
      return;
    }

    setIsSaving(true);
    const result = await addCurationItem({
      curationId,
      title,
      price: price ? parseFloat(price) : undefined,
      category,
      shopLocation,
      description,
      imageUrl,
    });

    if (result.success) {
      setTitle("");
      setPrice("");
      setCategory("");
      setShopLocation("");
      setDescription("");
      setImageUrl("");
      Swal.fire({
        icon: "success",
        title: "Item Added",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: result.error || "Failed to add item",
        confirmButtonColor: "#1c1917",
      });
    }
    setIsSaving(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <label className="text-xs font-bold text-stone-500 uppercase tracking-wider">Item Title</label>
        <input
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-300"
          placeholder="e.g. Soapstone Elephant"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-xs font-bold text-stone-500 uppercase tracking-wider">Price (Ksh)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-300"
            placeholder="4500"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold text-stone-500 uppercase tracking-wider">Category</label>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-300"
            placeholder="Animal figurines"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-xs font-bold text-stone-500 uppercase tracking-wider">Store/Shop Location</label>
        <input
          value={shopLocation}
          onChange={(e) => setShopLocation(e.target.value)}
          className="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-300"
          placeholder="Retail Shop, Tabaka, Kisii"
        />
      </div>

      <div className="space-y-1">
        <label className="text-xs font-bold text-stone-500 uppercase tracking-wider">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-300"
          placeholder="Details about the piece..."
        />
      </div>

      <div className="space-y-1">
        <label className="text-xs font-bold text-stone-500 uppercase tracking-wider block">Item Image</label>
        <div className="mt-2 flex items-center gap-4">
          <UploadButton
            endpoint="curationImage"
            onClientUploadComplete={(res) => {
              if (res?.[0]) setImageUrl(res[0].ufsUrl);
            }}
            appearance={{
              button: "bg-stone-900 text-white text-xs px-4 py-2 h-9",
              container: "w-fit",
            }}
          />
          {imageUrl && (
            <div className="relative w-12 h-12 rounded border border-stone-200 overflow-hidden">
              <Image src={imageUrl} alt="Preview" fill className="object-cover" sizes="48px" />
            </div>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSaving}
        className="w-full mt-4 flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-emerald-700 transition-colors disabled:opacity-50"
      >
        {isSaving ? (
          <RiLoader4Line className="animate-spin" />
        ) : (
          "Save Item to Gallery"
        )}
      </button>
    </form>
  );
}
