import {
  RiBookletLine,
  RiCheckboxCircleLine,
  RiGalleryLine,
  RiMailLine,
  RiMailUnreadLine,
} from "react-icons/ri";

type Stats = {
  curations: number;
  publishedCurations: number;
  curationItems: number;
  messages: number;
  newMessages: number;
};

export default function StatsCards({ stats }: { stats: Stats }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 mb-8">
      <div className="bg-white rounded-2xl p-5 border border-stone-200">
        <RiBookletLine className="text-xl text-stone-500" />
        <p className="text-sm uppercase tracking-wider text-grey-500 font-bold">Curations</p>
        <p className="text-3xl font-semibold text-stone-900 mt-2">{stats.curations}</p>
      </div>
      <div className="bg-white rounded-2xl p-5 border border-stone-200">
        <RiCheckboxCircleLine className="text-xl text-emerald-600" />
        <p className="text-sm uppercase tracking-wider text-grey-500 font-bold">Published</p>
        <p className="text-3xl font-semibold text-stone-900 mt-2">{stats.publishedCurations}</p>
      </div>
      <div className="bg-white rounded-2xl p-5 border border-stone-200">
        <RiGalleryLine className="text-xl text-stone-500" />
        <p className="text-sm uppercase tracking-wider text-grey-500 font-bold">Items</p>
        <p className="text-3xl font-semibold text-stone-900 mt-2">{stats.curationItems}</p>
      </div>
      <div className="bg-white rounded-2xl p-5 border border-stone-200">
        <RiMailLine className="text-xl text-stone-500" />
        <p className="text-sm uppercase tracking-wider text-grey-500 font-bold">Messages</p>
        <p className="text-3xl font-semibold text-stone-900 mt-2">{stats.messages}</p>
      </div>
      <div className="bg-white rounded-2xl p-5 border border-stone-200">
        <RiMailUnreadLine className="text-xl text-amber-600" />
        <p className="text-sm uppercase tracking-wider text-grey-500 font-bold">New Messages</p>
        <p className="text-3xl font-semibold text-amber-600 mt-2">{stats.newMessages}</p>
      </div>
    </div>
  );
}
