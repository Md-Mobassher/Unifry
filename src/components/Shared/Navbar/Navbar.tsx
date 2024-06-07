import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { navItemsData } from "./navItems";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <div className="flex  justify-between items-center py-6">
      <div className="flex gap-3 items-center">
        <div>
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <nav className="lg:flex md:flex hidden flex-wrap">
          {navItemsData.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className=" text-md font-semibold  py-2 px-4 hover:text-[#FF5555] active:text-[#FF5555] rounded-md"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>

      <div>
        <div className="lg:flex md:flex hidden ">
          <Link
            href="/"
            className=" text-md font-semibold  py-4 px-10 text-white bg-black  rounded-md"
          >
            Download
          </Link>
        </div>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;