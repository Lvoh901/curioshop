import { prisma } from "@/lib/prisma";

export async function getDashboardStats() {
  const [curations, curationItems, messages] = await Promise.all([
    prisma.curation.count(),
    prisma.curationItem.count(),
    prisma.message.count(),
  ]);

  const [newMessages, publishedCurations] = await Promise.all([
    prisma.message.count({ where: { status: "new" } }),
    prisma.curation.count({ where: { status: "published" } }),
  ]);

  return {
    curations,
    curationItems,
    messages,
    newMessages,
    publishedCurations,
  };
}

export async function getLatestCurations(limit = 12) {
  return prisma.curation.findMany({
    orderBy: { createdAt: "desc" },
    take: limit,
    select: {
      id: true,
      title: true,
      status: true,
      createdAt: true,
      creator: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });
}

export async function getCurationsForTable(limit = 50) {
  return prisma.curation.findMany({
    orderBy: { createdAt: "desc" },
    take: limit,
    select: {
      id: true,
      title: true,
      slug: true,
      coverImageUrl: true,
      description: true,
      status: true,
      publishedAt: true,
      createdAt: true,
      creator: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });
}

export async function getLatestMessages(limit = 12) {
  return prisma.message.findMany({
    orderBy: { createdAt: "desc" },
    take: limit,
    select: {
      id: true,
      name: true,
      email: true,
      subject: true,
      status: true,
      createdAt: true,
    },
  });
}
