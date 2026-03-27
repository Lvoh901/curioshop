"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { RiLockPasswordLine, RiUserLine, RiArrowRightLine, RiHome9Line } from 'react-icons/ri';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Swal from 'sweetalert2';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: data?.error ?? 'Invalid credentials. Access restricted to authorized curators.',
          confirmButtonColor: '#1c1917',
        });
        return;
      }

      Swal.fire({
        icon: 'success',
        title: 'Welcome Back',
        text: 'Access granted. Redirecting to vault...',
        timer: 1500,
        showConfirmButton: false,
        timerProgressBar: true,
      });

      setTimeout(() => {
        router.push('/admin/dashboard');
      }, 1500);
    } catch {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Login failed. Please try again.',
        confirmButtonColor: '#1c1917',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-12 px-4 overflow-hidden">
      {/* Proper image background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/back03.jpg')" }}
        aria-hidden="true"
      />
      {/* dark overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        aria-hidden="true"
      />
      <motion.div
        className="relative z-20 max-w-md w-full"
      >
        <div className="bg-white bg-opacity-95 p-10 rounded-3xl shadow-xl shadow-stone-900/10 border border-stone-100">
          <Link href="/" className="block mb-5 rounded-md group focus:outline-none focus:ring-2 focus:ring-[#ffb400]">
            <button
              className="flex gap-2 items-center bg-black p-2 rounded-md text-white transition-colors duration-200 group-hover:text-[#ffb400] group-hover:bg-stone-900 group-active:scale-[0.98] cursor-pointer"
              type="button"
            >
              <RiHome9Line className="w-5 h-5 transition-colors duration-200 group-hover:text-[#ffb400]" />
              <span className="transition-colors duration-200 group-hover:text-[#ffb400] hover:font-bold">Home</span>
            </button>
          </Link>


          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-3">
              <label className="text-xs font-bold text-stone-900 uppercase tracking-widest ml-1">
                Curator Identity
              </label>
              <div className="relative group">
                <RiUserLine className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-amber-500 transition-colors" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@curio.com"
                  className="w-full pl-12 pr-5 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-amber-50 focus:border-amber-200 transition-all font-light"
                />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-bold text-stone-900 uppercase tracking-widest">
                  Access Key
                </label>
                <a href="#" className="text-[10px] font-bold text-amber-600 uppercase tracking-tighter hover:text-amber-700">
                  Forgot?
                </a>
              </div>
              <div className="relative group">
                <RiLockPasswordLine className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-amber-500 transition-colors" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-5 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-amber-50 focus:border-amber-200 transition-all font-light"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-5 bg-stone-900 text-white rounded-md font-bold text-sm uppercase tracking-widest shadow-lg shadow-stone-200 hover:bg-stone-800 active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Unlock Vault
                  <RiArrowRightLine className="text-lg" />
                </>
              )}
            </button>
          </form>
        </div>

        <p className="text-center mt-4 text-stone-200 text-xs font-light drop-shadow">
          Authorized Curators Only. All access attempts are logged.
        </p>
        <p className="text-center mt-2 text-stone-300 text-xs font-light drop-shadow">
          First-time setup?{" "}
          <Link className="underline underline-offset-2 hover:text-white" href="/admin/register">
            Register admin
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
