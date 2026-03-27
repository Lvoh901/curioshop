import { prisma } from "@/lib/prisma";

export async function getPublishedCurations() {
  return prisma.curation.findMany({
    where: {
      status: "published",
    },
    orderBy: {
      publishedAt: "desc",
    },
    select: {
      id: true,
      title: true,
      slug: true,
      coverImageUrl: true,
      description: true,
    },
  });
}
