"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { RiArrowRightLine, RiErrorWarningLine, RiUserLine, RiLockPasswordLine } from "react-icons/ri";

export default function AdminRegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/admin/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        setError(data?.error ?? "Could not register admin.");
        return;
      }

      setSuccess("Admin account created. Redirecting to dashboard...");
      setTimeout(() => {
        router.push("/admin/dashboard");
        router.refresh();
      }, 800);
    } catch {
      setError("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/back03.jpg')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-20 max-w-md w-full"
      >
        <div className="text-center mb-5">
          <h2 className="font-serif font-bold text-white tracking-tight">Create Admin Account</h2>
          <p className="text-xs uppercase tracking-[0.2em] text-stone-100 mt-1">First-Time Setup</p>
        </div>

        <div className="bg-white bg-opacity-95 p-8 rounded-3xl shadow-xl shadow-stone-900/10 border border-stone-100">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-900 uppercase tracking-widest ml-1">
                Full Name
              </label>
              <div className="relative group">
                <RiUserLine className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-amber-500 transition-colors" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Admin Name"
                  className="w-full pl-12 pr-5 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-amber-50 focus:border-amber-200 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-900 uppercase tracking-widest ml-1">
                Email
              </label>
              <div className="relative group">
                <RiUserLine className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-amber-500 transition-colors" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="admin@curio.com"
                  className="w-full pl-12 pr-5 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-amber-50 focus:border-amber-200 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-900 uppercase tracking-widest ml-1">
                Password
              </label>
              <div className="relative group">
                <RiLockPasswordLine className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-amber-500 transition-colors" />
                <input
                  type="password"
                  required
                  minLength={8}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="At least 8 characters"
                  className="w-full pl-12 pr-5 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-amber-50 focus:border-amber-200 transition-all"
                />
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-50 text-red-700 rounded-xl text-xs flex items-center gap-2 border border-red-100">
                <RiErrorWarningLine className="text-lg shrink-0" />
                {error}
              </div>
            )}

            {success && <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl text-xs border border-emerald-100">{success}</div>}

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-4 bg-stone-900 text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-stone-800 transition-all flex items-center justify-center gap-3 ${isLoading ? "opacity-70 cursor-not-allowed" : "cursor-pointer"}`}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Create Admin
                  <RiArrowRightLine className="text-lg" />
                </>
              )}
            </button>
          </form>
        </div>

        <p className="text-center mt-4 text-stone-200 text-xs">
          Already have an admin account?{" "}
          <Link href="/admin/login" className="underline underline-offset-2 hover:text-white">
            Go to login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
