import Link from "next/link";
import React, { FunctionComponent } from "react";
import { CldImage } from "next-cloudinary";
import { noProfileImage } from "@/utils/noProfileImage";
import UserCardButtons from "./UserCardButtons";
import UsersOnlineIndicator from "./UsersOnlineIndicator";
import FilledStarSvg from "./icons/FilledStarSvg";
import StarSvg from "./icons/StarSvg";
import LocationSvg from "./icons/LocationSvg";

interface UserInterface {
  user: {
    name: string;
    email: string;
    image: string;
    _id: string;
    slug: string;
    type: string;
  };
  favoritesLoading: boolean;
  isFavorites: boolean;
}

const UsersCard: FunctionComponent<UserInterface> = ({
  user,
  favoritesLoading,
  isFavorites,
}) => {
  return (
    <li
      key={user._id}
      className="shadow-md bg-white"
    >
      <div className="flex flex-col items-center gap-y-2 w-full">
        <Link
          href={`/medicos/${user.slug}`}
          className=""
        >
          <div className="h-96 md:h-[280px] w-screen sm:max-w-sm md:w-[280px] overflow-hidden relative">
            <CldImage
              alt={`foto de ${user.name}`}
              src={user.image || noProfileImage}
              fill
              className="absolute object-cover"
            />
            <div className="w-full h-full bg-gray-200"></div>
            <div className="flex items-center gap-2 absolute bottom-2 right-2">
              <p className="text-xs text-center leading-none bg-blue-300 px-2 py-1 rounded-md font-semibold">
                {user.type}
              </p>
            </div>
          </div>
        </Link>
        <Link href={`/medicos/${user.slug}`}>
          <div className="flex flex-col items-center">
            <p className="text-lg font-medium">{user.name}</p>
            <UsersOnlineIndicator user={user.email} />
            <div className="flex mb-2 gap-1 justify-center">
              {[...Array(4)].map((_, idx) => {
                return <FilledStarSvg key={`star_${idx}`} />;
              })}
              <StarSvg />
              <span className="text-xs">(10)</span>
            </div>
            <div className="flex items-center gap-1">
              <LocationSvg />
              <span className="text-sm text-gray-600">direccion</span>
            </div>
          </div>
        </Link>

        <UserCardButtons
          username={user.email}
          favoritesLoading={favoritesLoading}
          isFavorite={isFavorites}
        />
      </div>
    </li>
  );
};

export default UsersCard;
