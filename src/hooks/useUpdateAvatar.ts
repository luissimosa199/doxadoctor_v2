import { uploadImages } from "@/utils/formHelpers";
import { useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useState, ChangeEvent } from "react";

interface UseUpdateAvatarReturn {
  updateAvatar: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
  isUpdating: boolean;
  error: any | null;
}

export const useUpdateAvatar = (): UseUpdateAvatarReturn => {
  const { data: session } = useSession();
  const queryClient = useQueryClient();
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState<any | null>(null);

  const updateAvatar = async (event: ChangeEvent<HTMLInputElement>) => {
    setIsUpdating(true);
    setError(null);

    try {
      const file = event.target.files?.[0];
      if (!file) return;

      const dataUrl = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = () => reject(new Error("Failed to read the file"));
        reader.readAsDataURL(file);
      });

      queryClient.cancelQueries([session?.user?.email, "profilePicture"]);

      queryClient.setQueryData([session?.user?.email, "profilePicture"], {
        image: dataUrl,
      });

      const avatarArr = await uploadImages(event);
      const avatarUrl = avatarArr?.[0];

      await updateAvatarOnServer(avatarUrl);
    } catch (error) {
      setError(error);
    } finally {
      setIsUpdating(false);
    }
  };

  const updateAvatarOnServer = async (avatarUrl: string) => {
    const response = await fetch(
      `/api/user/avatar/?username=${encodeURIComponent(
        session!.user!.email as string
      )}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: avatarUrl }),
      }
    );

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.error || `Server responded with ${response.status}`);
    }

    return response.json();
  };

  return { updateAvatar, isUpdating, error };
};
