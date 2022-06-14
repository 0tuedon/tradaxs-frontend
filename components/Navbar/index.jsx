import Logo from "../../assets/svg/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import NavLinksCover from "./NavLinksCover";

const Navbar = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const handleToggle = () => {
    setMenuActive(!isMenuActive);
  };

  return (
    <>
      {isMenuActive && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-white/70"></div>
      )}
      <nav className="relative z-10 flex items-center justify-between w-screen px-5 py-3 md:py-4 md:px-10 bg-accent md:space-x-16">
        <Link href="/" passHref>
          <a>
            <Image src={Logo} alt="Tradaxs" priority />
          </a>
        </Link>
        <NavLinksCover isMenuActive={isMenuActive} handle={handleToggle} />
        <button className="md:hidden" onClick={handleToggle}>
          <AiOutlineMenu className="text-white w-7 h-7" />
        </button>
      </nav>
    </>
  );
};

export default Navbar;
