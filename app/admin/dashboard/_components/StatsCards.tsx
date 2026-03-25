"use client";

import { motion } from "framer-motion";
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
  const cardData = [
    { label: "Curations", value: stats.curations, icon: RiBookletLine, color: "text-stone-500" },
    { label: "Published", value: stats.publishedCurations, icon: RiCheckboxCircleLine, color: "text-emerald-600" },
    { label: "Items", value: stats.curationItems, icon: RiGalleryLine, color: "text-stone-500" },
    { label: "Messages", value: stats.messages, icon: RiMailLine, color: "text-stone-500" },
    { label: "New Messages", value: stats.newMessages, icon: RiMailUnreadLine, color: "text-amber-600" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
      {cardData.map((card, i) => (
        <motion.div
          key={card.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm hover:shadow-md transition-all cursor-default group"
        >
          <card.icon className={`text-xl ${card.color} transition-transform group-hover:scale-110`} />
          <p className="text-[10px] uppercase tracking-wider text-stone-500 font-bold mt-1">{card.label}</p>
          <p className="text-3xl font-bold text-stone-900 mt-2">{card.value}</p>
        </motion.div>
      ))}
    </div>
  );
}
