import Logo from "../../assets/icons/Logo";
import Link from "next/link";
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
      <nav className="relative z-10 flex items-center justify-between w-full px-5 py-3 md:py-4 md:px-10 bg-accent md:space-x-16">
        <Link href="/" passHref>
          <a>
            <Logo className="w-10 h-10" />
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
