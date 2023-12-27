import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import UserFavButton from "./UserFavButton";
import { useFavorite } from "@/hooks/useFavorite";
import ChatBoxSvg from "./icons/ChatBoxSvg";
import VideoCamSvg from "./icons/VideoCamSvg";

const UserCardButtons = ({
  username,
  favoritesLoading,
  isFavorite,
}: {
  username: string;
  favoritesLoading: boolean;
  isFavorite: boolean;
}) => {
  const router = useRouter();
  const { data: session } = useSession();

  const { mutation } = useFavorite(username);

  return (
    <div className="flex gap-2 w-full justify-around p-2">
      <UserFavButton
        key="2"
        username={username}
        isFavorite={isFavorite}
        mutation={mutation}
        isLoading={favoritesLoading}
      />
      <button
        className="hover:text-green-500 transition w-6"
        onClick={(e) => {
          e.preventDefault();
          router.push(
            `${
              session?.user
                ? `/chat/${(session?.user?.email as string).split("@")[0]}y${
                    username.split("@")[0]
                  }`
                : "/login"
            }`
          );
        }}
      >
        <div className="w-6 l h-6 flex justify-center items-center">
          <ChatBoxSvg />
        </div>
      </button>

      <button
        className="hover:text-blue-500 transition"
        onClick={(e) => {
          e.preventDefault();
          router.push(
            `${
              session?.user
                ? `/videocall?name=${username.split("@")[0]}`
                : "/login"
            }`
          );
        }}
      >
        <div className="w-6 l h-6 flex justify-center items-center">
          <VideoCamSvg />
        </div>
      </button>
    </div>
  );
};

export default UserCardButtons;
