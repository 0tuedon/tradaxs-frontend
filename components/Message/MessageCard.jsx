import Link from "next/link";
import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

const MessageCard = () => {
  return (
    <Link href="/messages/reply/1" passHref>
      <a className="block transition-transform hover:scale-105 duration-200">
        <div className="flex items-center justify-between bg-landingBlue rounded-[0.625rem] py-3 px-3">
          <div className="flex justify-start items-center gap-2">
            <span className="relative h-10 w-10 rounded-full grid place-items-center bg-white text-accent font-medium">
              <span>R</span>
              <BsPatchCheckFill className="w-4 h-4 text-green-700 absolute bottom-0 right-0" />
            </span>
            <span>
              <h2 className="text-sm font-semibold">maxMoney</h2>
              <p className="text-xs">Verifired User</p>
              <p className="text-xs">2022-07-05 20:04</p>
              {/* <p className="text-xs">{new Date().toLocaleDateString()}</p> */}
            </span>
          </div>
          <button className="flex justify-start items-center gap-2">
            <span className="text-xs">Sent my payment</span>
            <span className="w-6 h-6 text-xs rounded-full bg-white text-accent grid place-items-center font-medium">
              1
            </span>
          </button>
        </div>
      </a>
    </Link>
  );
};

export default MessageCard;
