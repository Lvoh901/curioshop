import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import AdminSidebar from "./_components/AdminSidebar";
import SessionTimeout from "@/components/SessionTimeout";

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAdminSession();
  if (!session || session.role !== "admin") {
    redirect("/admin/login");
  }

  const profile = await prisma.user.findUnique({
    where: { id: session.sub },
    select: { name: true, email: true, image: true },
  });

  const displayName = profile?.name || session.email.split("@")[0] || "Admin User";
  const email = profile?.email || session.email;
  const image = profile?.image;

  return (
    <div className="min-h-screen bg-stone-50">
      <SessionTimeout />
      <AdminSidebar displayName={displayName} email={email} image={image} />
      <main className="lg:pl-64 pt-16 lg:pt-0">
        <div className="p-4 sm:p-6 lg:p-8">{children}</div>
      </main>
    </div>
  );
}
