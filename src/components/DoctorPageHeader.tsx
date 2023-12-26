import { noProfileImage } from "@/utils/noProfileImage";
import React, { FunctionComponent, useEffect, useState } from "react";
import UploadCloudSvg from "./icons/UploadCloudSvg";
import { useUpdateAvatar } from "@/hooks/useUpdateAvatar";
import { CldImage } from "next-cloudinary";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";

interface DoctorPageHeaderProps {
  photo: string;
  name: string;
  type: string;
}

const DoctorPageHeader: FunctionComponent<DoctorPageHeaderProps> = ({
  name,
  type,
  photo,
}) => {
  const [currentPhoto, setCurrentPhoto] = useState<string | null>(null);
  const { data: session } = useSession();
  const { updateAvatar, isUpdating } = useUpdateAvatar();

  const fetchProfilePicture = async () => {
    const response = await fetch(
      `/api/user/avatar/?username=${encodeURIComponent(
        session?.user?.email as string
      )}`
    );
    const data = await response.json();
    return data;
  };

  const ownUser = session?.user?.name === name;

  const { data } = useQuery(
    [session?.user?.email, "profilePicture"],
    fetchProfilePicture
  );

  useEffect(() => {
    if (data && data.image) {
      setCurrentPhoto(ownUser ? data.image : photo);
    }
  }, [session, data, ownUser, photo]);

  return (
    <div className="pb-2 md:p-4 flex flex-col items-end bg-white md:flex-row">
      <div className="relative mx-auto md:mx-0">
        <div className="w-full md:w-96 h-[400px] md:h-96 bg-gray-300 mb-2 overflow-hidden z-0 relative">
          <CldImage
            src={currentPhoto || noProfileImage}
            alt="profile picture"
            className="object-cover object-center "
            fill
          />
        </div>
        <div
          className={`absolute top-0 w-full h-full bg-gradient-to-t from-black via-transparent z-10 ${
            isUpdating ? "animate-pulse" : ""
          }`}
        ></div>
        {ownUser && (
          <div className="absolute bottom-0 right-0 z-20 w-12 h-12 bg-white rounded-full">
            <button className="flex items-center justify-center w-full h-full">
              <label
                htmlFor="profilephoto"
                className="cursor-pointer"
              >
                <UploadCloudSvg />
              </label>
            </button>
            <input
              accept="image/png, image/jpeg, video/mp4"
              className="absolute opacity-0 w-0 h-0"
              type="file"
              id="profilephoto"
              onChange={updateAvatar}
            />
          </div>
        )}
        <div className="absolute bottom-4 left-4 z-20">
          <h1 className="text-5xl font-semibold text-white mb-2">{name}</h1>
          <ul className="flex gap-2 text-sm justify-center md:justify-start ">
            <li
              key={`tag_${type}`}
              className=" px-2 py-1 font-semibold bg-blue-200 rounded-md"
            >
              {type}
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto md:ml-12"></div>
    </div>
  );
};

export default DoctorPageHeader;
