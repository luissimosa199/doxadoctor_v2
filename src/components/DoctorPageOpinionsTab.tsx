import React from "react";
import DoctorPageOpinionCard from "./DoctorPageOpinionCard";
import Ad from "./Ad";

const DoctorPageOpinionsTab = () => {
  return (
    <div className="p-4">
      {[...Array(10)].map((_, idx) => {
        if ((idx + 1) % 3 === 0 && idx !== 0) {
          return (
            <div
              key={`comment_${idx}`}
              className="h-48 w-full mb-8 overflow-hidden"
            >
              <Ad />
            </div>
          );
        }

        return <DoctorPageOpinionCard key={`comment_${idx}`} />;
      })}
    </div>
  );
};

export default DoctorPageOpinionsTab;
