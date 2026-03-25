"use client";

import { useState } from "react";
import { deleteCurationItem } from "./actions";
import { RiDeleteBinLine, RiLoader4Line } from "react-icons/ri";
import Swal from "sweetalert2";

export function DeleteItemButton({ id, curationId }: { id: string; curationId: string }) {
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDelete() {
    const result = await Swal.fire({
      title: "Remove item?",
      text: "This item will be removed from the gallery.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#1c1917",
      confirmButtonText: "Remove",
    });

    if (result.isConfirmed) {
      setIsDeleting(true);
      const res = await deleteCurationItem(id, curationId);
      if (!res.success) {
        Swal.fire("Error", "Could not remove item", "error");
      }
      setIsDeleting(false);
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="p-1.5 text-stone-400 hover:text-red-600 transition-colors disabled:opacity-50"
    >
      {isDeleting ? (
        <RiLoader4Line className="animate-spin" />
      ) : (
        <RiDeleteBinLine className="text-lg" />
      )}
    </button>
  );
}
