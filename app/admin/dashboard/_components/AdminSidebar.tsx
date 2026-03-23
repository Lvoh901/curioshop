"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  RiBookletLine,
  RiDashboardLine,
  RiLogoutBoxRLine,
  RiMailLine,
  RiSettings3Line,
  RiUser3Line,
} from "react-icons/ri";

type SidebarProps = {
  displayName: string;
  email: string;
};

const navItems = [
  { href: "/admin/dashboard", label: "Dashboard", icon: RiDashboardLine },
  { href: "/admin/dashboard/curations", label: "Curations", icon: RiBookletLine },
  { href: "/admin/dashboard/messages", label: "Messages", icon: RiMailLine },
  { href: "/admin/dashboard/profile", label: "Profile Settings", icon: RiSettings3Line },
];

export default function AdminSidebar({ displayName, email }: SidebarProps) {
  const pathname = usePathname();
  const initials = displayName
    .split(" ")
    .map((part) => part[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <aside className="w-full lg:w-52 bg-stone-900 text-stone-100 border-b lg:border-b-0 lg:border-r border-stone-800 lg:fixed lg:left-0 lg:top-0 lg:h-screen z-40">
      <div className="h-full p-5 flex flex-col">
        <div className="flex flex-col gap-3 pb-5 border-b border-stone-700">
          <div className="w-12 h-12 rounded-full bg-stone-700 flex items-center justify-center font-bold">
            {initials || <RiUser3Line className="text-xl" />}
          </div>
          <div className="min-w-0">
            <p className="font-semibold truncate">{displayName}</p>
            <p className="text-[10px] text-stone-300 truncate">{email}</p>
          </div>
        </div>

        <nav className="mt-5 space-y-1">
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
                className={`flex items-center gap-3 rounded-lg p-2.5 text-xs font-medium transition-colors ${isActive ? "bg-white text-stone-900" : "text-stone-200 hover:bg-stone-800"
                  }`}
              >
                <Icon className="text-lg" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <form action="/api/admin/logout" method="post" className="mt-auto pt-5 border-t border-stone-700">
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-red-600 hover:bg-red-700 px-3 py-2.5 text-sm font-semibold transition-colors"
          >
            <RiLogoutBoxRLine className="text-lg" />
            Logout
          </button>
        </form>
      </div>
    </aside>
  );
}
