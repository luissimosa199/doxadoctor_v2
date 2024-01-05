import React from "react";
import DoctorPageOpinionCard from "./DoctorPageOpinionCard";
import Ad from "./Ad";
import { useQuery } from "@tanstack/react-query";
import { Opinion } from "@/types";

const DoctorPageOpinionsTab = ({ doctorId }: { doctorId: string }) => {
  const fetchOpinions = async () => {
    const response = await fetch(`/api/medicos/opinions?doctorId=${doctorId}`);
    return response.json();
  };

  const { data, isLoading } = useQuery(["opinions", doctorId], {
    queryFn: fetchOpinions,
  });

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="p-4">
      {data.length > 0 ? (
        data.map((e: Opinion) => {
          // if ((idx + 1) % 3 === 0 && idx !== 0) {
          //   return (
          //     <div
          //       key={`comment_${idx}`}
          //       className="w-full mb-8 overflow-hidden hidden"
          //     >
          //       <Ad />
          //     </div>
          //   );
          // }

          return (
            <DoctorPageOpinionCard
              key={`comment_${e._id}`}
              _id={e._id}
              name={e.name}
              createdAt={e.createdAt}
              rank={e.rank}
              comment={e.comment}
              files={e.files}
            />
          );
        })
      ) : (
        <div className="shadow-md w-full flex gap-2 p-4 mb-8 max-w-3xl mx-auto ">
          <p className="text-center w-full">
            Este doctor aún no tiene comentarios
          </p>
        </div>
      )}
    </div>
  );
};

export default DoctorPageOpinionsTab;
