"use server";

import { revalidatePath } from "next/cache";
import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function updateProfileImage(imageUrl: string) {
  const session = await getAdminSession();

  if (!session) {
    throw new Error("Unauthorized");
  }

  try {
    const updatedUser = await prisma.user.update({
      where: { id: session.sub },
      data: { image: imageUrl },
    });

    revalidatePath("/admin/dashboard/profile");
    return { success: true, user: updatedUser };
  } catch (error) {
    console.error("Failed to update profile image:", error);
    return { success: false, error: "Failed to update profile image" };
  }
}

export async function updateProfile(data: { name: string; email: string }) {
  const session = await getAdminSession();
  if (!session) throw new Error("Unauthorized");

  try {
    const updatedUser = await prisma.user.update({
      where: { id: session.sub },
      data: {
        name: data.name,
        email: data.email,
      },
    });

    revalidatePath("/admin/dashboard/profile");
    return { success: true, user: updatedUser };
  } catch (error: any) {
    if (error.code === "P2002") {
      return { success: false, error: "Email already in use." };
    }
    return { success: false, error: "Failed to update profile." };
  }
}

import bcrypt from "bcryptjs";

export async function createUser(data: { name: string; email: string; role: "admin" | "editor" | "viewer"; password?: string }) {
  const session = await getAdminSession();
  if (!session || session.role !== "admin") throw new Error("Unauthorized");

  try {
    const passwordHash = data.password ? await bcrypt.hash(data.password, 10) : null;
    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        role: data.role,
        passwordHash,
      },
    });

    revalidatePath("/admin/dashboard/profile");
    return { success: true, user };
  } catch (error: any) {
    if (error.code === "P2002") return { success: false, error: "Email already in use." };
    return { success: false, error: "Failed to create user." };
  }
}

export async function updateUser(id: string, data: { name: string; email: string; role: "admin" | "editor" | "viewer" }) {
  const session = await getAdminSession();
  if (!session || session.role !== "admin") throw new Error("Unauthorized");

  try {
    const user = await prisma.user.update({
      where: { id },
      data: {
        name: data.name,
        email: data.email,
        role: data.role,
      },
    });

    revalidatePath("/admin/dashboard/profile");
    return { success: true, user };
  } catch (error: any) {
    if (error.code === "P2002") return { success: false, error: "Email already in use." };
    return { success: false, error: "Failed to update user." };
  }
}

export async function deleteUser(id: string) {
  const session = await getAdminSession();
  if (!session || session.role !== "admin") throw new Error("Unauthorized");
  if (session.sub === id) return { success: false, error: "Cannot delete yourself." };

  try {
    await prisma.user.delete({ where: { id } });
    revalidatePath("/admin/dashboard/profile");
    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to delete user." };
  }
}
