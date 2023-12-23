import { Tabs } from "@/types";
import React from "react";
import VideoCamSvg from "./icons/VideoCamSvg";
import EnvelopeSvg from "./icons/EnvelopeSvg";
import ClockSvg from "./icons/ClockSvg";
import Link from "next/link";
import { useSession } from "next-auth/react";

const DoctorPageButtons = ({
  setCurrentTab,
  currentTab,
  username,
}: {
  setCurrentTab: React.Dispatch<React.SetStateAction<Tabs>>;
  currentTab: Tabs;
  username: string;
}) => {
  const { data: session } = useSession();

  return (
    <div className="mx-4 flex flex-col-reverse justify-center md:justify-between md:flex-row">
      <ul className="flex text-lg justify-around md:justify-left">
        <li>
          <button
            onClick={() => {
              setCurrentTab("informacion");
            }}
            className={`${
              currentTab !== "informacion" ? "" : "border-b-2 border-blue-600"
            } px-4 py-2 text-blue-600 font-semibold`}
          >
            Información
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setCurrentTab("opiniones");
            }}
            className={`${
              currentTab !== "opiniones" ? "" : "border-b-2 border-blue-600"
            } px-4 py-2 text-blue-600 font-semibold`}
          >
            Opiniones
          </button>
        </li>
      </ul>
      <ul className="flex gap-4 justify-center md:justify-end items-center">
        <li>
          <Link
            href={`${
              session?.user
                ? `/chat/${
                    (session?.user?.email as string).split("@")[0]
                  }y${username}`
                : "/login"
            }`}
            className="bg-blue-300 shadow-sm px-2 py-1 rounded-md flex items-center gap-1"
          >
            <EnvelopeSvg fill="black" />
            <span>Mensaje</span>
          </Link>
        </li>
        <li>
          <Link
            href={`${session?.user ? `/videocall?name=${username}` : "/login"}`}
            className="bg-blue-300 shadow-sm px-2 py-1 rounded-md flex items-center gap-1"
          >
            <VideoCamSvg />
            <span>Videollamada</span>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="bg-blue-300 shadow-sm px-2 py-1 rounded-md flex items-center gap-1"
          >
            <ClockSvg />
            <span>Solicitar turno</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DoctorPageButtons;
