import React, { useState } from "react";
import { BsFillFileEarmarkArrowUpFill, BsPatchCheckFill } from "react-icons/bs";
import { IoSend } from "react-icons/io5";
import { MdReportGmailerrorred } from "react-icons/md";

const ReplyCard = ({ background = "" }) => {
  const [messages, setMessages] = useState([
    "Good Evening please I have transfered the funds",
  ]);
  const [msg, setMsg] = useState("");
  const handle = (e) => {
    let value = e.target.value;
    setMsg(value);
  };

  const sendMsg = () => {
    setMessages([...messages, msg]);
    setMsg("");
    let box = document.getElementById("msgBox");
    box.scrollTo(0, box.scrollHeight);
  };
  return (
    <div className="bg-landingBlue rounded-lg max-w-sm pb-2 mb-[6rem] w-full">
      <div
        className={`flex justify-between items-center rounded-t-lg gap-2 px-[1.25rem] pt-[1.875rem] pb-[2.5rem] ${background}`}
      >
        <div className="flex justify-start items-center gap-2">
          <span className="relative h-10 w-10 rounded-full grid place-items-center bg-white text-accent font-medium">
            <span>R</span>
            <BsPatchCheckFill className="w-4 h-4 text-green-700 absolute bottom-0 right-0" />
          </span>
          <span>
            <h2 className="text-sm font-semibold">maxMoney</h2>
            <p className="text-xs">Verifired User</p>
          </span>
        </div>
        <MdReportGmailerrorred
          className="h-6 w-6 cursor cursor-pointer"
          title="Report"
        />
      </div>
      <div className="bg-white h-96 mx-2 relative">
        <p className="text-xs text-center text-accent absolute top-0 py-2 left-1/2 -translate-x-1/2 z-40 bg-white w-full">
          2022-07-05 20:04
        </p>
        {/* <p className="text-xs">{new Date().toLocaleDateString()}</p> */}
        <div
          className="absolute bottom-0 h-auto overflow-y-auto max-h-full w-full z-10 px-2 pt-10 pb-20 space-y-2"
          id="msgBox"
        >
          {messages.map((msg, i) => {
            return (
              <p
                key={i}
                className="w-fit rounded-md first-letter:capitalize text-accent text-xs mr-0 ml-auto block max-w-[11rem] bg-[#D9D9D9] p-2"
              >
                {msg}
              </p>
            );
          })}
        </div>
        <div className="absolute bottom-0 px-4 py-2 w-full z-20 bg-white">
          <form
            className="flex justify-between items-center gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              sendMsg();
            }}
          >
            <input
              type="text"
              name="message"
              className="flex-auto w-full p-2 drop-shadow-lg first-letter:capitalize shadow-black bg-white rounded-md text-black text-sm"
              value={msg}
              onChange={handle}
            />
            <button>
              <BsFillFileEarmarkArrowUpFill className="text-gray-500 w-6 h-6" />
            </button>
            <button type="submit">
              <IoSend className="text-gray-500 w-6 h-6" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReplyCard;
