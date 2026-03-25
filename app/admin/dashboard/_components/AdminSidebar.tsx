"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiBookletLine,
  RiDashboardLine,
  RiMailLine,
  RiSettings3Line,
  RiUser3Line,
  RiMenuLine,
  RiCloseLine,
} from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";

import Image from "next/image";

type SidebarProps = {
  displayName: string;
  email: string;
  image?: string | null;
};

const navItems = [
  { href: "/admin/dashboard", label: "Dashboard", icon: RiDashboardLine },
  { href: "/admin/dashboard/curations", label: "Curations", icon: RiBookletLine },
  { href: "/admin/dashboard/messages", label: "Messages", icon: RiMailLine },
  { href: "/admin/dashboard/profile", label: "Profile Settings", icon: RiSettings3Line },
];

// --------------- FIXED ERRORS ---------------

// Move this OUTSIDE of AdminSidebar to fix "Components created during render" lint issue
function SidebarContent({
  displayName,
  email,
  image,
  initials,
  pathname,
  setIsOpen,
}: {
  displayName: string;
  email: string;
  image?: string | null;
  initials: string;
  pathname: string;
  setIsOpen: (open: boolean) => void;
}) {
  return (
    <div className="h-full p-6 flex flex-col bg-stone-900 text-stone-100 overflow-y-auto">
      <div className="flex flex-col gap-4 pb-3 border-b border-grey-600 border-dashed items-center text-center">
        <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-stone-700 to-stone-800 flex items-center justify-center font-bold text-xl shadow-inner shadow-white/5 border border-dashed overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={displayName}
              fill
              className="object-cover"
            />
          ) : (
            initials || <RiUser3Line />
          )}
        </div>
        <div className="min-w-0">
          <p className="font-bold text-sm truncate tracking-tight">{displayName}</p>
          <p className="text-[10px] text-gray-200 truncate tracking-wide">{email}</p>
        </div>
      </div>

      <nav className="mt-4 space-y-2 flex-grow">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/admin/dashboard"
              ? pathname === item.href
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-4 rounded-xl px-4 py-3 text-xs font-bold transition-all ${isActive
                ? "bg-amber-500 text-white shadow-lg shadow-amber-500/20"
                : "text-stone-300 hover:bg-stone-500 hover:text-stone-100"
                }`}
            >
              <Icon className="text-xl shrink-0" />
              <span className="truncate">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <form action="/api/admin/logout" method="post" className="mt-auto pt-4 border-t border-grey-600 border-dashed flex justify-center">
        <button
          className="group flex items-center justify-start gap-3 bg-red-600 rounded-md cursor-pointer px-3 py-2"
        >
          <IoLogOut className="w-5 h-5 font-bold" />
          <div
            className="text-white text-sm font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
          >
            Logout
          </div>
        </button>
      </form>
    </div>
  );
}

export default function AdminSidebar({ displayName, email, image }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const initials = displayName
    .split(" ")
    .map((part) => part[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();

  useEffect(() => {
    // Lock scroll when sidebar is open on mobile
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Fix for "Avoid calling setState() directly within an effect"
  // Only auto-close sidebar on mobile when route changes
  useEffect(() => {
    // Only close if not on large screen
    setIsOpen((prev) => {
      // don't cause extra render if already false
      if (prev === false) return prev;
      return false;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Check if we're on a large screen using JavaScript
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // To avoid re-creating callback every render, not strictly needed but clean
  const handleSetIsOpen = useCallback((open: boolean) => setIsOpen(open), []);

  return (
    <>
      {/* Mobile Header - only visible on small screens */}
      {!isLargeScreen && (
        <div className="fixed top-0 left-0 right-0 h-16 bg-stone-900 border-b border-stone-800 flex items-center justify-between px-4 z-50">
          <Link href="/admin/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center font-bold text-white text-xs">
              {initials || "A"}
            </div>
            <span className="text-white font-bold text-sm tracking-tight uppercase">Dashboard</span>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="p-2 text-stone-400 hover:text-white transition-colors"
          >
            {isOpen ? <RiCloseLine size={28} /> : <RiMenuLine size={28} />}
          </button>
        </div>
      )}

      {/* Desktop Sidebar - only visible on large screens */}
      {isLargeScreen && (
        <aside className="fixed left-0 top-0 w-64 h-screen z-40 border-r border-stone-800 bg-stone-900">
          <SidebarContent
            displayName={displayName}
            email={email}
            image={image}
            initials={initials}
            pathname={pathname}
            setIsOpen={handleSetIsOpen}
          />
        </aside>
      )}

      {/* Mobile Drawer - only appears on small screens when hamburger is clicked */}
      {!isLargeScreen && (
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
              />
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 left-0 bottom-0 w-[280px] z-[70] shadow-2xl"
              >
                <SidebarContent
                  displayName={displayName}
                  email={email}
                  image={image}
                  initials={initials}
                  pathname={pathname}
                  setIsOpen={handleSetIsOpen}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      )}
    </>
  );
}