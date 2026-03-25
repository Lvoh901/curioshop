"use client";

import { useState } from "react";
import { UploadButton } from "@/lib/uploadthing";
import { updateProfileImage } from "./actions";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { RiUserLine, RiLoader4Line } from "react-icons/ri";

interface ProfilePhotoUploaderProps {
  initialImage?: string | null;
  name: string;
}

export function ProfilePhotoUploader({ initialImage, name }: ProfilePhotoUploaderProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(initialImage || null);
  const [isUpdating, setIsUpdating] = useState(false);
  const router = useRouter();

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end">
      <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-stone-200 bg-stone-100 flex items-center justify-center">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover"
          />
        ) : (
          <RiUserLine className="text-4xl text-stone-400" />
        )}
        {isUpdating && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <RiLoader4Line className="text-white text-2xl animate-spin" />
          </div>
        )}
      </div>

      <div className="space-y-2">
        <UploadButton
          endpoint="profileImage"
          onUploadBegin={() => setIsUpdating(true)}
          onClientUploadComplete={async (res) => {
            const url = res[0].ufsUrl;
            setImageUrl(url);
            const result = await updateProfileImage(url);
            if (result.success) {
              router.refresh();
            } else {
              alert("Failed to update profile image in database");
            }
            setIsUpdating(false);
          }}
          onUploadError={(error: Error) => {
            setIsUpdating(false);
            alert(`ERROR! ${error.message}`);
          }}
          appearance={{
            button: "bg-stone-900 text-white hover:bg-stone-800 text-sm h-10 px-4",
            allowedContent: "text-stone-500 text-xs mt-1",
          }}
        />
        <p className="text-xs text-stone-500">
          Recommended: Square image, max 2MB.
        </p>
      </div>
    </div>
  );
}
