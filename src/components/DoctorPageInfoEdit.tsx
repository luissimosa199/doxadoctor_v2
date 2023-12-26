import React from "react";
import LocationSvg from "./icons/LocationSvg";
import ClockSvg from "./icons/ClockSvg";
import PhoneSvg from "./icons/PhoneSvg";
import { DoctorInfo } from "@/types";

const DoctorPageInfoEdit = ({
  setNewInfo,
  address,
  hours,
  phone,
}: {
  setNewInfo: React.Dispatch<React.SetStateAction<DoctorInfo | null>>;
  address: string;
  hours: string;
  phone: string;
}) => {
  return (
    <div>
      <form>
        <div className="flex items-center gap-1 mb-2">
          <label htmlFor="address">
            <LocationSvg />
          </label>
          <input
            className="border rounded-md p-1"
            id="address"
            name="address"
            type="text"
            defaultValue={address}
            onChange={(e) => {
              setNewInfo((prev) => ({ ...prev, address: e.target.value }));
            }}
          />
        </div>
        <div className="flex items-center gap-1 mb-2">
          <label htmlFor="hours">
            <ClockSvg />
          </label>
          <input
            className="border rounded-md p-1"
            id="hours"
            name="hours"
            type="text"
            defaultValue={hours}
            onChange={(e) => {
              setNewInfo((prev) => ({ ...prev, hours: e.target.value }));
            }}
          />
        </div>
        <div className="flex items-center gap-1 mb-2">
          <label htmlFor="phone">
            <PhoneSvg />
          </label>
          <input
            className="border rounded-md p-1"
            id="phone"
            name="phone"
            type="text"
            defaultValue={phone}
            onChange={(e) => {
              setNewInfo((prev) => ({ ...prev, phone: e.target.value }));
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default DoctorPageInfoEdit;
