import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { RiContactsBookFill } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";

const HeaderNav = () => {
  const [isOpened, setOpened] = useState(false);
  const handleToggle = () => {
    setOpened(!isOpened);
  };
  return (
    <span className="relative inline-block w-fit">
      <button
        className="flex items-center justify-between gap-2 text-xs md:text-sm transition-transform duration-200 hover:scale-110"
        onClick={handleToggle}
      >
        <span>More</span>
        <span>
          <BsFillArrowDownCircleFill className="w-4 h-4" />
        </span>
      </button>
      <ul
        className={`absolute right-0 w-40 md:w-48 p-3 z-10 space-y-3 text-xs md:text-sm font-medium transition-transform duration-200 ${
          isOpened ? "scale-100" : "scale-0"
        } bg-white rounded-md top-8 text-accent`}
      >
        <li>
          <Link href="/" passHref>
            <a className="flex items-center justify-start gap-2">
              <span>
                <MdOutlineAttachMoney className="w-4 h-4" />
              </span>
              <span>Payment method</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/p2p/post_new_ads" passHref>
            <a className="flex items-center justify-start gap-2">
              <span>
                <AiOutlinePlus className="w-4 h-4" />
              </span>
              <span>Post new Ads</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/p2p/ads" passHref>
            <a className="flex items-center justify-start gap-2">
              <span>
                <RiContactsBookFill className="w-4 h-4" />
              </span>
              <span>My Ads</span>
            </a>
          </Link>
        </li>
      </ul>
    </span>
  );
};

export default HeaderNav;
