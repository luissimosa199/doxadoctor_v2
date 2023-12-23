import useOnlineLogger from "@/hooks/useOnlineLogger";
import Image from "next/image";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  useOnlineLogger();

  return (
    <header className="bg-blue-500 py-4 flex justify-between items-center px-2 md:px-32">
      <div className="flex gap-2">
        <Image
          src="/logo.png"
          alt="logo"
          width={160}
          height={30}
        />
      </div>

      <DesktopNav />

      <MobileNav />
    </header>
  );
};

export default Navbar;
