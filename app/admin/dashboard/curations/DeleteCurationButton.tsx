"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { RiDeleteBinLine, RiLoader4Line } from "react-icons/ri";
import Swal from "sweetalert2";

export function DeleteCurationButton({ id, title }: { id: string; title: string }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  async function handleDelete() {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `You are about to delete "${title}". This action cannot be undone.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#1c1917",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      setIsDeleting(true);
      try {
        const response = await fetch(`/api/admin/curations?id=${id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || "Failed to delete curation");
        }

        Swal.fire({
          title: "Deleted!",
          text: "The curation has been deleted.",
          icon: "success",
          confirmButtonColor: "#1c1917",
        });
        router.refresh();
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Failed to delete curation.";
        Swal.fire({
          title: "Error!",
          text: errorMessage,
          icon: "error",
          confirmButtonColor: "#1c1917",
        });
      } finally {
        setIsDeleting(false);
      }
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="p-2 text-stone-400 hover:text-red-600 transition-colors disabled:opacity-50"
      title="Delete Curation"
    >
      {isDeleting ? (
        <RiLoader4Line className="text-lg animate-spin" />
      ) : (
        <RiDeleteBinLine className="text-lg" />
      )}
    </button>
  );
}
