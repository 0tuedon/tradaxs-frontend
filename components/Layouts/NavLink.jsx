import { useRouter } from "next/router";
import Link from "next/link";

const NavLink = ({ children, href, ...props }) => {
  // using useRouter
  const { pathname } = useRouter();

  const isActive = pathname === href || pathname.includes(href);
  if (isActive) {
    props.className += " text-dashboardLink";
  }

  return (
    <Link href={href} passHref>
      <a {...props}>
        <span
          className={`absolute top-0 -left-3 h-6 w-6 rounded-full bg-dashboardLink/50 grid place-items-center ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="w-3 h-3 bg-dashboardLink rounded-full"></span>
        </span>
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
