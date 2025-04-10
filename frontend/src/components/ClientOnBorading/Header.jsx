import React from "react";
import { FaRegBell } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-white border-b border-[1px] border-[#EAECF0]">
      <div className="flex items-center pl-[25px] pt-4 pb-4 gap-2">
        <img
          src="/public/Logomark.svg"
          alt="Header logo"
          className="cursor-pointer"
        />
        <h1 className="font-semibold">Untitled UI</h1>
      </div>
      <div className="flex items-center pr-[23px] pt-3 pb-4">
        <div className="p-[10px] border-1 border-[#D0D5DD]  rounded-lg shadow-xs cursor-pointer">
          <FaRegBell className="text-[#344054]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
