import { useRouter } from "next/router";
import Link from "next/link";

const NavLink = ({ children, href, ...props }) => {
  // using useRouter
  const { pathname } = useRouter();

  const isActive = pathname === href;
  if (isActive) {
    props.className += " text-dashboardLink";
  }

  return (
    <Link href={href} passHref>
      <a {...props}>{children}</a>
    </Link>
  );
};

export default NavLink;
