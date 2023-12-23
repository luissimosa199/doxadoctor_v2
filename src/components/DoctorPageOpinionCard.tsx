import React from "react";
import ThumbsDownSvg from "./icons/ThumbsDownSvg";
import ThumbsUpSvg from "./icons/ThumbsUpSvg";

const DoctorPageOpinionCard = () => {
  return (
    <div className="shadow-md w-full flex gap-2 p-4 mb-8">
      <div className="w-24 h-24 rounded-full bg-gray-200 shrink-0"></div>
      <div>
        <div className="flex justify-between mb-4">
          <div>
            <p className="font-semibold">Nombre</p>
            <p className="text-sm">19 de diciembre 2023</p>
          </div>
          <div>xxxxx</div>
        </div>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Reprehenderit modi debitis ut ab, at cupiditate aperiam quae dolores?
          Soluta magnam non quisquam temporibus qui officia distinctio quasi!
          Dolorem, sit cumque quibusdam consequatur magnam rerum distinctio
          facilis dolore eaque pariatur sed omnis deserunt quo rem? Quas placeat
          fugiat ipsam minima veritatis?
        </p>
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
