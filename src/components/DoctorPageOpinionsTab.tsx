import React from "react";
import DoctorPageOpinionCard from "./DoctorPageOpinionCard";

const DoctorPageOpinionsTab = () => {
  return (
    <div className="p-4">
      {[...Array(10)].map((_, idx) => {
        if ((idx + 1) % 3 === 0 && idx !== 0) {
          return (
            <div
              key={`comment_${idx}`}
              className="h-48 w-full bg-gray-300 mb-8"
            ></div>
          );
        }

        return <DoctorPageOpinionCard key={`comment_${idx}`} />;
      })}
    </div>
  );
};

export default DoctorPageOpinionsTab;
