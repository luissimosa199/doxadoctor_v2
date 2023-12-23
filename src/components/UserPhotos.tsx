import { useSession } from "next-auth/react";
import { CldImage } from "next-cloudinary";
import React, { FunctionComponent } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

interface UserPhotosProps {
  username: string;
  direction?: "flex-col" | "flex-row";
}

const UserPhotos: FunctionComponent<UserPhotosProps> = ({
  username,
  direction = "flex-row",
}) => {
  const { data: session } = useSession();

  const fetchUserPhotos = async () => {
    const response = await fetch(
      `/api/user/photos/?username=${encodeURIComponent(username)}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    return data;
  };

  const deleteUserPhoto = async (photoUrl: string) => {
    const response = await fetch(
      `/api/user/photos/?username=${encodeURIComponent(username)}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ photo: photoUrl }),
      }
    );
    const data = await response.json();
    return data;
  };

  const handleDelete = (e: string): void => {
    queryClient.cancelQueries([username, "userPhotos"]);
    mutation.mutate(e);
  };

  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery(
    [username, "userPhotos"],
    fetchUserPhotos
  );

  const mutation = useMutation(
    async (photoUrl: string) => {
      return deleteUserPhoto(photoUrl);
    },
    {
      onMutate: (photoUrl: string) => {
        const previousData = queryClient.getQueryData<string[]>([
          username,
          "userPhotos",
        ]);
        if (previousData) {
          queryClient.setQueryData([username, "userPhotos"], (oldData = []) => {
            return (oldData as string[]).filter(
              (photo: string) => photo !== photoUrl
            );
          });
        }
        return { previousData };
      },
      onError: (err, photoUrl, context: any) => {
        queryClient.setQueryData(
          [username, "userPhotos"],
          context.previousData
        );
      },
    }
  );

  if (isLoading) {
    return (
      <div className="flex flex-col lg:flex-row lg:max-w-5xl gap-2 mx-auto flex-wrap justify-center items-center">
        <div className="w-screen lg:w-[300px] h-[520px] lg:h-[350px] bg-gray-300 animate-pulse"></div>
        <div className="w-screen lg:w-[300px] h-[520px] lg:h-[350px] bg-gray-300 animate-pulse"></div>
        <div className="w-screen lg:w-[300px] h-[520px] lg:h-[350px] bg-gray-300 animate-pulse"></div>
        <div className="w-screen lg:w-[300px] h-[520px] lg:h-[350px] bg-gray-300 animate-pulse"></div>
        <div className="w-screen lg:w-[300px] h-[520px] lg:h-[350px] bg-gray-300 animate-pulse"></div>
      </div>
    );
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <style>{`
                .scrollbarstyle::-webkit-scrollbar {
                    width: 6px; 
                    height: 6px; 
                }

                .scrollbarstyle::-webkit-scrollbar-thumb {
                    background-color: rgba(155, 155, 155, 0.7);
                    border-radius: 4px;
                }
            `}</style>
      <div
        className={`w-full flex flex-col mx-auto lg:flex-row items-center lg:justify-center flex-wrap gap-2 scrollbarstyle whitespace-nowrap mb-4`}
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(155, 155, 155, 0.7) transparent",
        }}
      >
        {data && data.length > 0 ? (
          data.map((e: string) => {
            const isVideo =
              e.includes("/dahu3rii0/video/upload/") && e.endsWith(".mp4");

            return (
              <div
                key={e}
                className="relative w-fit lg:w-1/4 flex-shrink-0"
              >
                {session?.user?.email === username && (
                  <button
                    onClick={() => {
                      handleDelete(e);
                    }}
                    className="w-6 h-6 flex justify-center items-center md:h-8 md:w-8 absolute top-0 right-0 bg-gray-300 text-gray-700 p-1 rounded-full hover:bg-gray-400 transition duration-300 z-10"
                  >
                    X
                  </button>
                )}

                {isVideo ? (
                  <video
                    controls
                    width="500"
                    height="500"
                    className="mx-auto"
                  >
                    <source
                      src={e}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <CldImage
                    alt=""
                    src={e}
                    width={850}
                    height={850}
                    className="object-cover"
                  />
                )}
              </div>
            );
          })
        ) : (
          <p className="text-gray-200 italic">No hay fotos para mostrar</p>
        )}
      </div>
    </>
  );
};

export default UserPhotos;
