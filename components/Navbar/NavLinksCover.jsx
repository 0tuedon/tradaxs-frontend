import NavLink from "./NavLink";
import { AiOutlineClose } from "react-icons/ai";

const NavLinksCover = ({ isMenuActive, handle }) => {
  const paths = ["about us", "blog", "what we offer", "Create wallet"];
  const paths2 = ["login", "register"];
  return (
    <div
      className={`absolute md:relative top-0 right-0 py-10 md:p-0 items-center justify-between flex-1 w-1/2 md:w-full transition-transform duration-200 ease-in-out ${
        isMenuActive ? "translate-x-0" : "translate-x-96 md:translate-x-0"
      } space-y-4 text-white md:flex bg-accent md:bg-transparent md:space-y-0`}
    >
      <button className="absolute top-5 right-4 md:hidden" onClick={handle}>
        <AiOutlineClose className="w-6 h-6 text-white" />
      </button>
      <ul className="items-center md:space-x-5 md:flex justify-evenly">
        {paths.map((path, index) => {
          return (
            <li key={index}>
              <NavLink
                href={`/${path.split(" ").join("-")}`}
                className="text-[0.8125rem] transition-all duration-200 md:hover:underline decoration-2 capitalize hover:bg-white hover:text-accent md:hover:text-white md:hover:bg-transparent inline-block w-full p-3 md:p-0"
              >
                {path}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <ul className="items-center md:space-x-4 md:flex justify-evenly">
        {paths2.map((path, index) => {
          return (
            <li key={index}>
              <NavLink
                href={`/${path.split(" ").join("-")}`}
                className="text-[0.8125rem] md:bg-white md:text-accent md:px-5 md:py-2 md:rounded-md capitalize hover:bg-white hover:text-accent inline-block w-full p-3 md:p-0"
              >
                {path}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavLinksCover;
