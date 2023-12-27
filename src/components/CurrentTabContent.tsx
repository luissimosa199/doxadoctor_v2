import React from "react";
import DoctorPageOpinionsTab from "./DoctorPageOpinionsTab";
import DoctorPageInfoTab from "./DoctorPageInfoTab";
import Ad from "./Ad";

const CurrentTabContent = ({
  currentTab,
  visiblePhone,
  phone,
  hours,
  address,
  slug,
  username,
}: {
  currentTab: string;
  visiblePhone?: boolean;
  phone: string;
  hours: string;
  address: string;
  slug: string;
  username: string;
}) => {
  return (
    <div>
      <div className={`${currentTab !== "informacion" ? "hidden" : "block"}`}>
        <DoctorPageInfoTab
          username={username}
          visiblePhone={visiblePhone}
          phone={phone}
          hours={hours}
          address={address}
          slug={slug}
        />
        <div className="h-32 bg-gray-200 mx-4 mb-4">
          <Ad />
        </div>
      </div>
      <div className={`${currentTab !== "opiniones" ? "hidden" : "block"}`}>
        <DoctorPageOpinionsTab />
      </div>
    </div>
  );
};

export default CurrentTabContent;
