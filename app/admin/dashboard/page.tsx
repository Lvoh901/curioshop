import CurationsList from "./_components/CurationsList";
import StatsCards from "./_components/StatsCards";
import { getDashboardStats, getLatestCurations } from "./_lib/data";

export default async function AdminDashboardPage() {
  const [stats, latestCurations] = await Promise.all([
    getDashboardStats(),
    getLatestCurations(8),
  ]);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-stone-900 underline underline-offset-4">
          Admin Dashboard
        </h1>
        <p className="text-stone-600 mt-1 font-medium">Overview of your platform activity.</p>
      </div>

      <StatsCards stats={stats} />
      <CurationsList curations={latestCurations} />
    </div>
  );
}
