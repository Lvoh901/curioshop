"use server";

import { revalidatePath } from "next/cache";
import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function addCurationItem(formData: {
  curationId: string;
  title: string;
  description?: string;
  price?: number;
  category?: string;
  shopLocation?: string;
  imageUrl?: string;
}) {
  const session = await getAdminSession();
  if (!session || session.role !== "admin") {
    throw new Error("Unauthorized");
  }

  try {
    const item = await prisma.curationItem.create({
      data: {
        curationId: formData.curationId,
        title: formData.title,
        description: formData.description,
        price: formData.price,
        category: formData.category,
        shopLocation: formData.shopLocation,
        imageUrl: formData.imageUrl,
        isVisible: true,
      },
    });

    revalidatePath(`/admin/dashboard/curations/${formData.curationId}`);
    return { success: true, item };
  } catch (error) {
    console.error("Failed to add curation item:", error);
    return { success: false, error: "Failed to add curation item" };
  }
}

export async function deleteCurationItem(id: string, curationId: string) {
  const session = await getAdminSession();
  if (!session || session.role !== "admin") {
    throw new Error("Unauthorized");
  }

  try {
    await prisma.curationItem.delete({
      where: { id },
    });

    revalidatePath(`/admin/dashboard/curations/${curationId}`);
    return { success: true };
  } catch (error) {
    console.error("Failed to delete curation item:", error);
    return { success: false, error: "Failed to delete curation item" };
  }
}
