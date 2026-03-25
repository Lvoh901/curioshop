"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { getAdminSession } from "@/lib/auth";

export async function updateMessageStatus(id: string, status: "new" | "read" | "replied" | "archived") {
  const session = await getAdminSession();
  if (!session || session.role !== "admin") {
    throw new Error("Unauthorized");
  }

  try {
    await prisma.message.update({
      where: { id },
      data: { status },
    });
    revalidatePath("/admin/dashboard/messages");
    return { success: true };
  } catch (error) {
    console.error("Failed to update message status:", error);
    return { success: false, error: "Failed to update status." };
  }
}

export async function deleteMessage(id: string) {
  const session = await getAdminSession();
  if (!session || session.role !== "admin") {
    throw new Error("Unauthorized");
  }

  try {
    await prisma.message.delete({
      where: { id },
    });
    revalidatePath("/admin/dashboard/messages");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete message:", error);
    return { success: false, error: "Failed to delete message." };
  }
}
