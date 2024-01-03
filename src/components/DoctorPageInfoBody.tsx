import React from "react";
import LocationSvg from "./icons/LocationSvg";
import ClockSvg from "./icons/ClockSvg";
import PhoneSvg from "./icons/PhoneSvg";

const DoctorPageInfoBody = ({
  address,
  hours,
  showNumber,
  handleShowPhone,
  phone,
}: {
  address: string;
  hours: string;
  phone: string;
  showNumber: boolean;
  handleShowPhone: () => void;
}) => {
  return (
    <div>
      <div className="flex gap-2 mb-2">
        <LocationSvg />
        {address ? (
          <p>{address}</p>
        ) : (
          <span className="text-sm text-gray-500 italic">
            No se ha registrado dirección
          </span>
        )}
      </div>
      <div className="flex gap-2 mb-2">
        <ClockSvg />
        {hours && hours !== "string" ? (
          <p>{hours}</p>
        ) : (
          <span className="text-sm text-gray-500 italic">
            No se han registrado horarios
          </span>
        )}
      </div>
      <div className="flex gap-2 mb-2">
        <PhoneSvg />
        {showNumber ? (
          phone ? (
            <p>{phone}</p>
          ) : (
            <span className="text-sm text-gray-500 italic">
              No se han registrado teléfonos
            </span>
          )
        ) : (
          <button
            className="text-blue-500 font-semibold"
            onClick={handleShowPhone}
          >
            Mostrar número
          </button>
        )}
      </div>
    </div>
  );
};

export default DoctorPageInfoBody;
