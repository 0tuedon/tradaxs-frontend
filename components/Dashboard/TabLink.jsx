import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const TabLink = ({ link, className }) => {
  const { asPath } = useRouter();
  const isActive = asPath.split("#")[1] === link;
  const [color, setColor] = useState("");

  useEffect(() => {
    if (isActive) {
      setColor(" text-accent");
    } else {
      setColor(" text-gray-400");
    }
  }, [isActive]);

  return (
    <li className="inline-block">
      <Link href={`#${link}`} passHref>
        <a className={className + color}>{link}</a>
      </Link>
    </li>
  );
};

export default TabLink;
