import React, { useState } from "react";
import BarsSvg from "./icons/BarsSvg";
import Link from "next/link";
import { useSession } from "next-auth/react";

const MobileNav = () => {
  const [menuIsOpen, toggleMenu] = useState<boolean>(false);
  const { data: session, status } = useSession();

  return (
    <div className="md:hidden">
      <button
        onClick={() => {
          toggleMenu(!menuIsOpen);
        }}
      >
        <BarsSvg />
      </button>
      {menuIsOpen && (
        <div className="absolute w-full left-0 top-16 bg-white shadow-md z-50">
          <ul className="flex flex-col items-center">
            <li className="border-b w-1/2 text-center py-2">
              <Link href="/medicos">Profesionales</Link>
            </li>
            <li className="border-b w-1/2 text-center py-2">
              <Link href="https://notas.doxadoctor.com/">Notas</Link>
            </li>
            <li className="border-b w-1/2 text-center py-2">
              <Link href="/login">Agregar Profesional</Link>
            </li>
            <li className="border-b w-1/2 text-center py-2">
              <Link href={status === "authenticated" ? "/perfil" : "/login"}>
                {status === "authenticated" ? "Perfil" : "Ingresar"}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
