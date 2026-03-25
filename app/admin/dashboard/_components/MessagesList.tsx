"use client";

import { RiMailLine, RiCheckLine, RiArchiveLine, RiReplyLine, RiDeleteBinLine } from "react-icons/ri";
import { updateMessageStatus, deleteMessage } from "../messages/actions";
import { useState } from "react";
import Swal from "sweetalert2";

type MessageItem = {
  id: string;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  status: "new" | "read" | "replied" | "archived";
  createdAt: Date;
};

function statusBadge(status: MessageItem["status"]) {
  const base = "text-[11px] px-2 py-0.5 rounded font-bold uppercase";
  switch (status) {
    case "new":
      return <span className={`${base} bg-amber-500 text-white`}>NEW</span>;
    case "read":
      return <span className={`${base} bg-stone-500 text-white`}>READ</span>;
    case "replied":
      return <span className={`${base} bg-emerald-500 text-white`}>REPLIED</span>;
    case "archived":
      return <span className={`${base} bg-stone-300 text-stone-600`}>ARCHIVED</span>;
    default:
      return null;
  }
}

export default function MessagesList({
  title = "Latest Messages",
  messages,
}: {
  title?: string;
  messages: MessageItem[];
}) {
  const [loadingId, setLoadingId] = useState<string | null>(null);

  async function handleStatusUpdate(id: string, status: "new" | "read" | "replied" | "archived") {
    setLoadingId(id);
    await updateMessageStatus(id, status);
    setLoadingId(null);
  }

  async function handleDelete(id: string) {
    const result = await Swal.fire({
      title: "Delete message?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#1c1917",
      confirmButtonText: "Delete",
    });

    if (result.isConfirmed) {
      setLoadingId(id);
      await deleteMessage(id);
      setLoadingId(null);
    }
  }

  return (
    <section className="bg-white rounded-2xl p-6 border border-stone-200 overflow-x-auto">
      <h2 className="text-xl font-semibold text-stone-900 mb-6 underline underline-offset-4">
        <span className="inline-flex items-center gap-2">
          <RiMailLine className="text-lg" />
          {title}
        </span>
      </h2>
      {messages.length === 0 ? (
        <p className="text-sm text-stone-500">No messages received yet.</p>
      ) : (
        <div className="w-full">
          <table className="min-w-full border border-stone-200 rounded-xl overflow-hidden divide-y divide-stone-100 text-[15px]">
            <thead className="bg-stone-500 select-none">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider rounded-tl-2xl">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider">From</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider">Subject</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider">Message</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider">Received At</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider rounded-tr-2xl">Actions</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((message) => (
                <tr
                  key={message.id}
                  className={
                    message.status === "new"
                      ? "bg-amber-50/70"
                      : "group border-b border-stone-100 bg-white cursor-pointer even:bg-stone-50/60"
                  }
                >
                  <td className="align-top px-3 py-3 whitespace-nowrap">
                    {statusBadge(message.status)}
                  </td>
                  <td className="align-top px-3 py-3 min-w-[140px]">
                    <span className="font-bold text-stone-900">{message.name}</span>
                    <div className="text-xs text-stone-500 break-all">&lt;{message.email}&gt;</div>
                  </td>
                  <td className="align-top px-3 py-3 min-w-[110px]">
                    <span className="font-semibold text-stone-700">
                      {message.subject?.trim() || "No subject"}
                    </span>
                  </td>
                  <td className="align-top px-3 py-3 max-w-[300px]">
                    <span className="italic text-stone-700 text-sm whitespace-pre-line block">{message.message.length > 240
                      ? (
                        <>
                          &quot;{message.message.slice(0, 240)}…&quot;
                          <span className="font-normal text-stone-400">(truncated)</span>
                        </>
                      )
                      : `"${message.message}"`}
                    </span>
                  </td>
                  <td className="align-top px-3 py-3 whitespace-nowrap min-w-[110px]">
                    <span className="text-sm text-stone-500 font-mono">
                      {new Intl.DateTimeFormat("en-KE", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      }).format(message.createdAt)}
                    </span>
                  </td>
                  <td className="align-top px-3 py-3 min-w-[130px]">
                    <div className="flex flex-wrap md:flex-col gap-2">
                      {message.status === "new" && (
                        <button
                          onClick={() => handleStatusUpdate(message.id, "read")}
                          disabled={loadingId === message.id}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-900 text-white text-xs font-bold rounded-lg hover:bg-stone-800 disabled:opacity-50"
                        >
                          <RiCheckLine />Mark Read
                        </button>
                      )}
                      {message.status !== "replied" && (
                        <button
                          onClick={() => handleStatusUpdate(message.id, "replied")}
                          disabled={loadingId === message.id}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 text-white text-xs font-bold rounded-lg hover:bg-emerald-700 disabled:opacity-50"
                        >
                          <RiReplyLine />Replied
                        </button>
                      )}
                      {message.status !== "archived" && (
                        <button
                          onClick={() => handleStatusUpdate(message.id, "archived")}
                          disabled={loadingId === message.id}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-200 text-stone-700 text-xs font-bold rounded-lg hover:bg-stone-300 disabled:opacity-50"
                        >
                          <RiArchiveLine />Archive
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(message.id)}
                        disabled={loadingId === message.id}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-red-600 text-xs font-bold hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                      >
                        <RiDeleteBinLine />Delete
                      </button>
                    </div>
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
