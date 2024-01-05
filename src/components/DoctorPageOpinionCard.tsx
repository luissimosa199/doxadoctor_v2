import React from "react";
import ThumbsDownSvg from "./icons/ThumbsDownSvg";
import ThumbsUpSvg from "./icons/ThumbsUpSvg";
import OpinionCardRank from "./OpinionCardRank";
import { formatOpinionDate } from "@/utils/formatOpinionDate";

const DoctorPageOpinionCard = ({
  name,
  createdAt,
  rank,
  comment,
}: {
  name: string;
  createdAt: string;
  rank: number;
  comment: string;
}) => {
  return (
    <div className="shadow-md w-full flex gap-2 p-4 mb-8 max-w-3xl mx-auto">
      <div className="w-24 h-24 rounded-full bg-gray-200 shrink-0"></div>
      <div className="w-full">
        <div className="flex justify-between mb-4">
          <div>
            <p className="font-semibold">{name || "Anónimo"}</p>
            <p className="text-sm">{formatOpinionDate(createdAt)}</p>
          </div>
          <OpinionCardRank rank={rank} />
        </div>

        <p>{comment}</p>
        <div className="flex gap-1 justify-end items-center">
          <span className="font-semibold">¿Te resultó útil?</span>
          <button className="border rounded-md px-2 py-1 flex gap-1 items-center">
            <ThumbsUpSvg />
            <span>Si</span>
          </button>
          <button className="border rounded-md px-2 py-1 flex gap-1 items-center">
            <ThumbsDownSvg />
            <span>No</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorPageOpinionCard;
