"use client";
import React, { useState } from "react";
import ClockSvg from "./icons/ClockSvg";
import PhoneSvg from "./icons/PhoneSvg";
import LocationSvg from "./icons/LocationSvg";
import { useRouter } from "next/navigation";

const DoctorPageInfoTab = ({
  visiblePhone,
  phone,
  hours,
  address,
  slug,
}: {
  visiblePhone?: boolean;
  phone: string;
  hours: string;
  address: string;
  slug: string;
}) => {
  const [showNumber, setShowNumber] = useState<boolean>(!!visiblePhone);
  const router = useRouter();

  const handleShowPhone = () => {
    router.replace(`/telefono/medicos/${slug}#phone`);
    setShowNumber(true);
  };

  return (
    <section className="p-4">
      <div className="shadow-md w-full p-4 mb-8">
        <h3 className="text-xl font-semibold mb-2">Información</h3>
        <div className="flex gap-2">
          <LocationSvg />
          <p>{address}</p>
        </div>
        <div className="flex gap-2">
          <ClockSvg />
          <p>{hours}</p>
        </div>
        <div className="flex gap-2">
          <PhoneSvg />
          {showNumber && <p>{phone}</p>}
          {!showNumber && (
            <button
              className="text-blue-500 font-semibold"
              onClick={handleShowPhone}
            >
              Mostrar número
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default DoctorPageInfoTab;
