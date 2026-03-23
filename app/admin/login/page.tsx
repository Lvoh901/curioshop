"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { RiLockPasswordLine, RiUserLine, RiArrowRightLine, RiErrorWarningLine } from 'react-icons/ri';
import Link from 'next/link';
import Image from 'next/image';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate authentication delay
    setTimeout(() => {
      if (email === 'admin@curio.com' && password === 'admin123') {
        // Successful login simulation
        window.location.href = '/admin/dashboard'; // Placeholder for dashboard
      } else {
        setError('Invalid credentials. Access restricted to authorized curators.');
        setIsLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 overflow-hidden">
      {/* Proper image background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/back03.jpg')" }}
        aria-hidden="true"
      />
      {/* dark overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: "rgba(0,0,0,0.66)" }}
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-20 max-w-md w-full"
      >
        <div className="text-center mb-5 flex flex-col justify-center items-center">
          <Image src="/jakem_logo.png" alt='login_logo' width={56} height={56} className='' />
          <Link href="/" className="inline-block">
            <h2 className="font-serif font-bold text-white drop-shadow tracking-tight">
              Jakem Business Solutions
            </h2>
          </Link>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-stone-100 drop-shadow">
            Vault Access
          </p>
        </div>

        <div className="bg-white bg-opacity-95 p-10 rounded-3xl shadow-xl shadow-stone-900/10 border border-stone-100">
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

            {error && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-4 bg-red-50 text-red-700 rounded-xl text-xs flex items-center gap-3 border border-red-100"
              >
                <RiErrorWarningLine className="text-lg shrink-0" />
                {error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-5 bg-stone-900 text-white rounded-2xl font-bold text-sm uppercase tracking-widest shadow-lg shadow-stone-200 hover:bg-stone-800 active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
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
      </motion.div>
    </div>
  );
}
