import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const DesktopNav = () => {
  const { status } = useSession();
  return (
    <>
      <nav className="ml-4 w-full hidden md:block">
        <ul className="flex gap-4 items-start w-full font-semibold text-white">
          <li>
            <Link href="#">Profesionales</Link>
          </li>
          <li>
            <Link href="#">Notas</Link>
          </li>
          <li>
            <Link href="#">Agregar Profesional</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Link
          href={status === "authenticated" ? "/perfil" : "/login"}
          className="hidden md:block px-4 py-2 border-2 border-white rounded-md text-white uppercase font-semibold"
        >
          {status === "authenticated" ? "Perfil" : "Ingresar"}
        </Link>
      </div>
    </>
  );
};

export default DesktopNav;
