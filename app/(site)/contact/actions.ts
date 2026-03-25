"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function submitContactForm(formData: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}) {
  try {
    if (!formData.name || !formData.email || !formData.message) {
      return { success: false, error: "All fields are required." };
    }

    const newMessage = await prisma.message.create({
      data: {
        name: formData.name,
        email: formData.email,
        subject: formData.subject || null,
        message: formData.message,
        status: "new",
      },
    });

    revalidatePath("/admin/dashboard/messages");
    return { success: true, messageId: newMessage.id };
  } catch (error) {
    console.error("Failed to submit contact form:", error);
    return { success: false, error: "Something went wrong. Please try again later." };
  }
}
