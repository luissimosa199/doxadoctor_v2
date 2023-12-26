"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import PenToSquareSvg from "./icons/PenToSquareSvg";
import DoctorPageInfoBody from "./DoctorPageInfoBody";
import DoctorPageInfoEdit from "./DoctorPageInfoEdit";
import { DoctorInfo } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const DoctorPageInfoTab = ({
  visiblePhone,
  phone,
  hours,
  address,
  slug,
  username,
}: {
  visiblePhone?: boolean;
  phone: string;
  hours: string;
  address: string;
  slug: string;
  username: string;
}) => {
  const [showNumber, setShowNumber] = useState<boolean>(!!visiblePhone);
  const [editInfo, toggleEditInfo] = useState<boolean>(false);
  const [newInfo, setNewInfo] = useState<DoctorInfo | null>(null);
  const router = useRouter();
  const { data: session } = useSession();
  const isOwnUser = session?.user?.email === username;

  const handleShowPhone = () => {
    router.replace(`/telefono/medicos/${slug}#phone`);
    setShowNumber(true);
  };

  const queryClient = useQueryClient();

  const infoMutation = useMutation({
    mutationFn: async (newInfo: DoctorInfo) => {
      const response = await fetch(
        `api/user/info?username=${session?.user?.email}`,
        {
          method: "POST",
          body: JSON.stringify(newInfo),
        }
      );
      return response.json();
    },
    onMutate(data) {
      queryClient.setQueryData(["userInfo", session?.user?.email], data);
    },
  });

  return (
    <section className="p-4">
      <div className="shadow-md w-full p-4 mb-8">
        <div className="flex gap-2 items-center">
          <h3 className="text-xl font-semibold mb-2">Información</h3>
          {isOwnUser && (
            <button
              onClick={() => {
                if (editInfo && newInfo) {
                  infoMutation.mutate(newInfo);
                }
                toggleEditInfo(!editInfo);
              }}
              className="px-2 py-1 rounded-md bg-gray-300 font-semibold text-sm mb-1 flex gap-1"
            >
              {editInfo ? "Guardar" : "Editar"}
              <PenToSquareSvg />
            </button>
          )}
        </div>

        {editInfo ? (
          <DoctorPageInfoEdit
            address={address}
            hours={hours}
            phone={phone}
            setNewInfo={setNewInfo}
          />
        ) : (
          <DoctorPageInfoBody
            address={address}
            hours={hours}
            showNumber={showNumber}
            handleShowPhone={handleShowPhone}
            phone={phone}
          />
        )}
      </div>
    </section>
  );
};

export default DoctorPageInfoTab;
