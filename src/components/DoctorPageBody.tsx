import React, { useState } from "react";
import DoctorPageButtons from "./DoctorPageButtons";
import CurrentTabContent from "./CurrentTabContent";
import { Tabs } from "@/types";

const DoctorPageBody = ({
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
  const [currentTab, setCurrentTab] = useState<Tabs>("informacion");

  return (
    <div className="bg-white">
      <div className="shadow-md">
        <DoctorPageButtons
          username={username}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      </div>

      <CurrentTabContent
        username={username}
        slug={slug}
        visiblePhone={visiblePhone}
        currentTab={currentTab}
        phone={phone}
        hours={hours}
        address={address}
      />
    </div>
  );
};

export default DoctorPageBody;
