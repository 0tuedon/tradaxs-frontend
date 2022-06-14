import Link from "next/link";

const FooterLink = ({ href = "/" }) => {
  return (
    <li>
      <Link href={`/${href.split(" ").join("-")}`} passHref>
        <a className="capitalize text-xs md:text-sm hover:underline transition-all duration-200">
          {href}
        </a>
      </Link>
    </li>
  );
};

export default FooterLink;
