"use client";

import { useState } from "react";
import { createUser, deleteUser } from "./actions";
import { RiUserAddLine, RiDeleteBinLine, RiLoader4Line } from "react-icons/ri";
import Swal from "sweetalert2";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export function UserManagement({ users, currentUserId }: { users: User[], currentUserId: string }) {
  const [isAdding, setIsAdding] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"admin" | "editor" | "viewer">("viewer");
  const [password, setPassword] = useState("");
  const [loadingId, setLoadingId] = useState<string | null>(null);

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    if (!password) return Swal.fire("Error", "Password is required for new users", "error");

    setLoadingId("new");
    const res = await createUser({ name, email, role, password });
    if (res.success) {
      setName("");
      setEmail("");
      setRole("viewer");
      setPassword("");
      setIsAdding(false);
      Swal.fire({ icon: "success", title: "User Created", toast: true, position: "top-end", showConfirmButton: false, timer: 3000 });
    } else {
      Swal.fire("Error", res.error || "Failed to create user", "error");
    }
    setLoadingId(null);
  }

  async function handleDelete(id: string) {
    const result = await Swal.fire({
      title: "Delete user?",
      text: "This user will lose access to the dashboard.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      confirmButtonText: "Delete",
    });

    if (result.isConfirmed) {
      setLoadingId(id);
      const res = await deleteUser(id);
      if (!res.success) Swal.fire("Error", res.error || "Failed to delete", "error");
      setLoadingId(null);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-stone-100 pb-2">
        <h2 className="text-xl font-semibold text-stone-900">User Management</h2>
        <button
          onClick={() => setIsAdding(!isAdding)}
          className="flex items-center gap-2 text-sm font-bold text-amber-600 hover:text-amber-700 transition-colors"
        >
          <RiUserAddLine className="text-lg" />
          {isAdding ? "Cancel" : "Add User"}
        </button>
      </div>

      {isAdding && (
        <form onSubmit={handleAdd} className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-stone-500 uppercase">Name</label>
              <input required value={name} onChange={e => setName(e.target.value)} className="w-full rounded-lg border border-stone-200 px-3 py-1.5 text-sm" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-stone-500 uppercase">Email</label>
              <input required type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full rounded-lg border border-stone-200 px-3 py-1.5 text-sm" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-stone-500 uppercase">Role</label>
              <select
                value={role}
                onChange={e => setRole(e.target.value as "admin" | "editor" | "viewer")}
                className="w-full rounded-lg border border-stone-200 px-3 py-1.5 text-sm"
              >
                <option value="viewer">Viewer</option>
                <option value="editor">Editor</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-stone-500 uppercase">Temporary Password</label>
              <input required type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full rounded-lg border border-stone-200 px-3 py-1.5 text-sm" />
            </div>
          </div>
          <button disabled={loadingId === "new"} className="w-full py-2 bg-stone-900 text-white rounded-lg text-sm font-bold hover:bg-stone-800 disabled:opacity-50">
            {loadingId === "new" ? <RiLoader4Line className="animate-spin mx-auto" /> : "Create User Account"}
          </button>
        </form>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-stone-400 border-b border-stone-100 uppercase text-[10px] font-bold">
              <th className="pb-2">User</th>
              <th className="pb-2">Role</th>
              <th className="pb-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-50">
            {users.map(user => (
              <tr key={user.id} className="group">
                <td className="py-3">
                  <p className="font-bold text-stone-900">{user.name}</p>
                  <p className="text-xs text-stone-500">{user.email}</p>
                </td>
                <td className="py-3">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${user.role === 'admin' ? 'bg-amber-100 text-amber-700' :
                      user.role === 'editor' ? 'bg-blue-100 text-blue-700' :
                        'bg-stone-100 text-stone-700'
                    }`}>
                    {user.role}
                  </span>
                </td>
                <td className="py-3 text-right">
                  {user.id !== currentUserId && (
                    <button
                      onClick={() => handleDelete(user.id)}
                      disabled={loadingId === user.id}
                      className="p-2 text-stone-300 hover:text-red-600 transition-colors"
                    >
                      {loadingId === user.id ? <RiLoader4Line className="animate-spin" /> : <RiDeleteBinLine className="text-lg" />}
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
