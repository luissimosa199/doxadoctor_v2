import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import React, { ChangeEvent, useCallback, useState } from "react";
import ToggleButon from "./ToggleButton";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { debounce } from "lodash";
import ProfileCategories from "./ProfileCategories";

const ProfileBio = () => {
  const [showBioInput, toggleBioInput] = useState<boolean>(false);
  const [profileTags, setProfileTags] = useState<string[]>([]);
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  const updateBio = async (bio: string) => {
    const response = await fetch(
      `/api/user/bio?username=${encodeURIComponent(
        session!.user!.email as string
      )}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bio }),
      }
    );

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.error || `Server responded with ${response.status}`);
    }
    return response.json();
  };

  const getBio = async () => {
    const response = await fetch(
      `/api/user/bio?username=${encodeURIComponent(
        session!.user!.email as string
      )}`
    );

    return response.json();
  };

  const mutation = useMutation(updateBio, {
    onMutate: (value) => {
      queryClient.setQueryData(["userBio"], { bio: value });
    },
  });

  const handleMutation = (value: string) => {
    mutation.mutate(value);
  };

  const debouncedMutation = debounce(handleMutation, 300);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      debouncedMutation(e.target.value);
    },
    [debouncedMutation]
  );

  const { data, isLoading } = useQuery(["userBio"], getBio);

  return (
    <div className="flex flex-col gap-2 items-start mb-6 p-2">
      <h2 className="text-2xl font-semibold text-white">
        Sobre {session?.user?.name}
      </h2>
      <div className="flex gap-2 w-full">
        <h3 className="text-white mt-2">Categorías: </h3>
        <ProfileCategories
          username={session?.user?.email as string}
          setProfileTags={setProfileTags}
          profileTags={profileTags}
        />
      </div>

      {isLoading ? (
        <p className="text-lg">Cargando...</p>
      ) : showBioInput ? (
        <textarea
          defaultValue={data.bio}
          onChange={handleChange}
          className="w-full shadow-md rounded p-2"
        />
      ) : (
        <p className="text-lg text-gray-300">{data.bio}</p>
      )}

      <div className="flex items-center">
        <ToggleButon
          state={showBioInput}
          setState={toggleBioInput}
          icon={faPlus}
        />
        <span
          className="text-[#f90] cursor-pointer"
          onClick={() => {
            toggleBioInput((prev) => !prev);
          }}
        >
          Háblanos de ti
        </span>
      </div>
    </div>
  );
};

export default ProfileBio;
