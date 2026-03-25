"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { RiArrowRightLine, RiUserLine, RiLockPasswordLine } from "react-icons/ri";

import Swal from "sweetalert2";

export default function AdminRegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/admin/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      
      let data;
      try {
        data = await response.json();
      } catch {
        throw new Error("Received an invalid response from the server.");
      }

      if (!response.ok) {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: data?.error ?? "Could not register admin.",
          confirmButtonColor: "#1c1917",
        });
        return;
      }

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Admin account created. Redirecting to dashboard...",
        timer: 2000,
        showConfirmButton: false,
        timerProgressBar: true,
      });

      setTimeout(() => {
        router.push("/admin/dashboard");
      }, 2000);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Registration failed. Please try again.";
      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage,
        confirmButtonColor: "#1c1917",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-12 px-2 sm:px-4 md:px-8 overflow-hidden">
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
        className="relative z-20 w-full max-w-md md:max-w-md sm:max-w-lg"
      >
        <div className="bg-white bg-opacity-95 p-4 sm:p-6 md:p-8 rounded-3xl shadow-xl shadow-stone-900/10 border border-stone-100">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div className="space-y-1.5 sm:space-y-2">
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
                  className="w-full pl-12 pr-5 py-3 sm:py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-amber-50 focus:border-amber-200 transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
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
                  className="w-full pl-12 pr-5 py-3 sm:py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-amber-50 focus:border-amber-200 transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
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
                  className="w-full pl-12 pr-5 py-3 sm:py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-amber-50 focus:border-amber-200 transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 sm:py-4 bg-stone-900 text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-stone-800 transition-all flex items-center justify-center gap-3 ${isLoading ? "opacity-70 cursor-not-allowed" : "cursor-pointer"}`}
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

        <p className="text-center mt-3 sm:mt-4 text-stone-200 text-xs">
          Already have an admin account?{" "}
          <Link href="/admin/login" className="underline underline-offset-2 hover:text-white">
            Go to login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
