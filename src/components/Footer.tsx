import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterLink from "./FooterLink";
import EnvelopeSvg from "./icons/EnvelopeSvg";
import MessengerSvg from "./icons/MessengerSvg";
import WhatsappSvg from "./icons/WhatsappSvg";
import Ad from "./Ad";
// import WhatsAppBtn from "./WhatsAppBtn";

const Footer = () => {
  return (
    <footer className="bg-blue-500 pt-8 pb-8 px-4 md:px-32 flex flex-col text-white">
      <div className="flex flex-col gap-2 md:gap-0 md:flex-row justify-between mb-4">
        {/* <div>
          <h3 className="text-2xl font-semibold mb-6">Especialidades</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <FooterLink href="#">Alergia e inmunología</FooterLink>
            </li>
            <li>
              <FooterLink href="#">Bioquímica</FooterLink>
            </li>
            <li>
              <FooterLink href="#">Cardiología</FooterLink>
            </li>
            <li>
              <FooterLink href="#">Cirugía</FooterLink>
            </li>
            <li>
              <FooterLink href="#">Clínica General</FooterLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Más especialidades</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <FooterLink href="#">Clínica médica</FooterLink>
            </li>
            <li>
              <FooterLink href="#">Ecografía</FooterLink>
            </li>
            <li>
              <FooterLink href="#">Lactancia</FooterLink>
            </li>
            <li>
              <FooterLink href="#">Pediatría</FooterLink>
            </li>
            <li>
              <FooterLink href="#">Neonatología</FooterLink>
            </li>
          </ul>
        </div> */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Nosotros</h3>
          <ul className="flex flex-col gap-2">
            {/* <li>
              <FooterLink href="#">Contacto</FooterLink>
            </li> */}
            <li>
              <FooterLink href="https://notas.doxadoctor.com/">Blog</FooterLink>
            </li>
            <li>
              <FooterLink href="login">Agregar médico</FooterLink>
            </li>
            {/* <li>
              <FooterLink href="#">Ranking</FooterLink>
            </li>
            <li>
              <FooterLink href="#">Términos y condiciones</FooterLink>
            </li> */}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contacto</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="#"
                className="flex items-center gap-1"
              >
                <EnvelopeSvg />
                <span>Contacto</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-1"
              >
                <MessengerSvg />
                <span>Chatear</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-1"
              >
                <WhatsappSvg />
                <span>Compartir en Whatsapp</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between border-t border-white pt-4">
        <div>© Doxadoctor 2013-2023 All rights reserved.</div>
        <div className="flex gap-1 items-center">
          <div className="flex gap-1 items-center">
            <div className="relative overflow-hidden w-[14px] h-[14px] rounded-full">
              <Image
                fill
                className="object-cover"
                alt="uruguay flag"
                src="/uruguay_flag.png"
              />
            </div>
            <span>Doxadoctor Uruguay</span>
          </div>
          |
          <div className="flex gap-1 items-center">
            <div className="relative overflow-hidden w-[14px] h-[14px] rounded-full">
              <Image
                fill
                className="object-cover"
                alt="mexico flag"
                src="/mexico_flag.png"
              />
            </div>
            <span>Doxadoctor México</span>
          </div>
        </div>
      </div>
      <div className="w-full h-36 mt-4 bg-gray-300">
        <Ad />
      </div>
    </footer>
  );
};

export default Footer;
