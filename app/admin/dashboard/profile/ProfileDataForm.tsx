"use client";

import { useState } from "react";
import { updateProfile } from "./actions";
import { RiLoader4Line } from "react-icons/ri";
import Swal from "sweetalert2";

export function ProfileDataForm({ initialData }: { initialData: { name: string, email: string } }) {
  const [name, setName] = useState(initialData.name);
  const [email, setEmail] = useState(initialData.email);
  const [isSaving, setIsSaving] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSaving(true);
    const result = await updateProfile({ name, email });
    if (result.success) {
      Swal.fire({
        icon: "success",
        title: "Profile Updated",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: result.error || "Failed to update profile",
        confirmButtonColor: "#1c1917",
      });
    }
    setIsSaving(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <label className="text-xs font-bold text-stone-500 uppercase tracking-wider">Full Name</label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-300"
        />
      </div>
      <div className="space-y-1">
        <label className="text-xs font-bold text-stone-500 uppercase tracking-wider">Email Address</label>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-300"
        />
      </div>
      <button
        type="submit"
        disabled={isSaving}
        className="flex items-center justify-center gap-2 rounded-lg bg-stone-900 px-4 py-2 text-sm font-semibold text-white hover:bg-stone-800 disabled:opacity-50"
      >
        {isSaving ? <RiLoader4Line className="animate-spin" /> : "Save Changes"}
      </button>
    </form>
  );
}
