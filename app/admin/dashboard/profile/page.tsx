import { RiSettings3Line } from "react-icons/ri";
import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function AdminProfilePage() {
  const session = await getAdminSession();
  const profile = session
    ? await prisma.user.findUnique({
      where: { id: session.sub },
      select: { name: true, email: true, role: true, createdAt: true },
    })
    : null;

  const displayName = profile?.name || session?.email.split("@")[0] || "Admin User";
  const email = profile?.email || session?.email || "-";
  const role = profile?.role || session?.role || "admin";

  return (
    <div className="container mx-auto px-4 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-stone-900 underline underline-offset-4">
          Profile Settings
        </h1>
        <p className="text-stone-600 mt-1 font-medium">Manage admin account details.</p>
      </div>

      <section className="bg-white rounded-2xl p-6 border border-stone-200">
        <h2 className="text-xl font-semibold text-stone-900 mb-3 underline underline-offset-4">
          <span className="inline-flex items-center gap-2">
            <RiSettings3Line className="text-lg" />
            Account Information
          </span>
        </h2>
        <div className="rounded-xl border border-stone-200 p-4 space-y-3">
          <p className="text-sm text-stone-600">
            Name: <span className="font-semibold text-stone-900">{displayName}</span>
          </p>
          <p className="text-sm text-stone-600">
            Email: <span className="font-semibold text-stone-900">{email}</span>
          </p>
          <p className="text-sm text-stone-600">
            Role: <span className="font-semibold text-stone-900 uppercase">{role}</span>
          </p>
          {profile?.createdAt ? (
            <p className="text-sm text-stone-600">
              Created:{" "}
              <span className="font-semibold text-stone-900">
                {new Intl.DateTimeFormat("en-KE", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }).format(profile.createdAt)}
              </span>
            </p>
          ) : null}
        </div>
      </section>
    </div>
  );
}
