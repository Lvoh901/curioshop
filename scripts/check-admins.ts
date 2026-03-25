import { prisma } from "../lib/prisma";

async function checkAdmins() {
  try {
    const count = await prisma.user.count({
      where: { role: "admin" },
    });
    console.log(`Current admin count: ${count}`);
    const admins = await prisma.user.findMany({
      where: { role: "admin" },
      select: { email: true, name: true }
    });
    console.log("Admins:", admins);
  } catch (error) {
    console.error("Error checking admins:", error);
  } finally {
    process.exit(0);
  }
}

checkAdmins();
