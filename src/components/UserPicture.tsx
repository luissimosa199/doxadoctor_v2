import { noProfileImage } from "@/utils/noProfileImage";
import { CldImage } from "next-cloudinary";
import React, { useState } from "react";

const UserPicture = ({ image, name }: { image: string; name: string }) => {
  const [fullScreenPic, setFullScreenPic] = useState<boolean>(false);
  return (
    <div className="">
      <div className="pb-2 md:p-4 flex flex-col items-end bg-white md:flex-row">
        <div
          onClick={() => {
            setFullScreenPic(!fullScreenPic);
          }}
          className={`relative mx-auto md:mx-0`}
        >
          <div
            className={`w-screen md:w-96 h-[400px] md:h-96 bg-gray-300 mb-2 overflow-hidden z-0`}
          >
            <CldImage
              src={image || noProfileImage}
              fill
              alt={`${name}'s Avatar`}
              className={`object-cover object-center`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPicture;
