import { createUploadthing, type FileRouter } from "uploadthing/next";
import { getAdminSession } from "@/lib/auth";

const f = createUploadthing();

export const uploadRouter = {
  curationImage: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(async () => {
      const session = await getAdminSession();
      if (!session || session.role !== "admin") {
        throw new Error("Unauthorized");
      }

      return { userId: session.sub };
    })
    .onUploadComplete(async ({ file }) => {
      return {
        uploadedBy: "admin",
        url: file.ufsUrl,
      };
    }),
  profileImage: f({
    image: {
      maxFileSize: "2MB",
      maxFileCount: 1,
    },
  })
    .middleware(async () => {
      const session = await getAdminSession();
      if (!session) {
        throw new Error("Unauthorized");
      }

      return { userId: session.sub };
    })
    .onUploadComplete(async ({ file }) => {
      return {
        url: file.ufsUrl,
      };
    }),
} satisfies FileRouter;

export type UploadRouter = typeof uploadRouter;
