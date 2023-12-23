import React from "react";
import DoctorPageOpinionsTab from "./DoctorPageOpinionsTab";
import DoctorPageInfoTab from "./DoctorPageInfoTab";

const CurrentTabContent = ({
  currentTab,
  visiblePhone,
  phone,
  hours,
  address,
  slug
}: {
  currentTab: string;
  visiblePhone?: boolean;
  phone: string;
  hours: string;
  address: string;
  slug: string;
}) => {
  return (
    <div>
      <div className={`${currentTab !== "informacion" ? "hidden" : "block"}`}>
        <DoctorPageInfoTab
          visiblePhone={visiblePhone}
          phone={phone}
          hours={hours}
          address={address}
          slug={slug}
        />
        <div className="w-ful h-32 bg-gray-200 mx-4 mb-4"></div>
      </div>
      <div className={`${currentTab !== "opiniones" ? "hidden" : "block"}`}>
        <DoctorPageOpinionsTab />
      </div>
    </div>
  );
};

export default CurrentTabContent;
