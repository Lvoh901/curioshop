import { RiSettings3Line, RiShieldUserLine } from "react-icons/ri";
import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { ProfilePhotoUploader } from "./ProfilePhotoUploader";
import { ProfileDataForm } from "./ProfileDataForm";
import { UserManagement } from "./UserManagement";

export default async function AdminProfilePage() {
  const session = await getAdminSession();
  if (!session) return null;

  const profile = await prisma.user.findUnique({
    where: { id: session.sub },
    select: { id: true, name: true, email: true, role: true, createdAt: true, image: true },
  });

  const HIDDEN_USERS = ["ochiengelvis90@gmail.com"]; // Add any emails you want to hide here

  const allUsers = session.role === 'admin'
    ? await prisma.user.findMany({
      where: {
        email: {
          notIn: HIDDEN_USERS
        }
      },
      select: { id: true, name: true, email: true, role: true },
      orderBy: { name: 'asc' }
    })
    : [];

  const displayName = profile?.name || session.email.split("@")[0] || "Admin User";
  const email = profile?.email || session.email || "-";
  const role = profile?.role || session.role || "admin";

  return (
    <div className="container mx-auto px-4 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-stone-900 underline underline-offset-4">
          Profile Settings
        </h1>
        <p className="text-stone-600 mt-1 font-medium">Manage your account and team members.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* My Profile Section */}
          <section className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
            <h2 className="text-xl font-semibold text-stone-900 mb-6 underline underline-offset-4">
              <span className="inline-flex items-center gap-2">
                <RiSettings3Line className="text-lg" />
                My Profile
              </span>
            </h2>

            <div className="space-y-8">
              <div className="pb-6 border-b border-stone-100">
                <p className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-4">Profile Photo</p>
                <ProfilePhotoUploader initialImage={profile?.image} name={displayName} />
              </div>

              <ProfileDataForm initialData={{ name: displayName, email }} />
            </div>
          </section>

          {/* User Management Section (Admins Only) */}
          {session.role === 'admin' && (
            <section className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
              <UserManagement users={allUsers} currentUserId={session.sub} />
            </section>
          )}
        </div>

        {/* Info Sidebar */}
        <div className="lg:col-span-1">
          <section className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm sticky top-8">
            <h3 className="text-sm font-bold text-stone-900 uppercase tracking-widest mb-4 flex items-center gap-2">
              <RiShieldUserLine className="text-amber-600" />
              Account Info
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] font-bold text-stone-400 uppercase">Current Role</p>
                <p className="text-sm font-bold text-stone-900 uppercase">{role}</p>
              </div>
              {profile?.createdAt && (
                <div>
                  <p className="text-[10px] font-bold text-stone-400 uppercase">Member Since</p>
                  <p className="text-sm font-bold text-stone-900">
                    {new Intl.DateTimeFormat("en-KE", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }).format(profile.createdAt)}
                  </p>
                </div>
              )}
              <div className="pt-4 border-t border-stone-100">
                <p className="text-xs text-stone-500 leading-relaxed italic">
                  Roles define what you can access. Admins can manage users and site settings, while editors can manage curations.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
