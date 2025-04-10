import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { TbArrowsShuffle } from "react-icons/tb";

const FormHeader = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-[#F9FAFB] pl-[32px] pr-[32px] pt-[20px] pb-[20px] border border-[#EAECF0] rounded-xl">
      <div className="font-Inter text-[18px] font-semibold">
        Clients Requirements
      </div>
      <div className="flex flex-row justify-between gap-4">
        <button className="flex flex-row gap-2 items-center border border-[#D0D5DD] rounded-md bg-white p-2 shadow-xs cursor-pointer w-[123px] h-[36px]">
          <span className="text-[#344054]">
            <img src="/public/user-02.svg" alt="" />
          </span>
          <span className="font-Inter text-[14px] text-[#344054] font-semibold ">
            Assigns
          </span>
          <FaAngleDown size={20} className="text-[#344054]" />
        </button>
        <button className="flex flex-row gap-2 items-center border border-[#D0D5DD] rounded-md bg-white p-2 shadow-xs cursor-pointer w-[123px] h-[36px]">
          <span className="text-[#344054]">
            <img src="/public/calendar.svg" alt="" />
          </span>
          <span className="font-Inter text-[14px] text-[#344054] font-semibold ">
            Due Date
          </span>
        </button>
        <button className="flex flex-row gap-2 items-center border border-[#D0D5DD] rounded-md bg-white p-2 shadow-xs cursor-pointer w-[123px] h-[36px]">
          <span className="text-[#344054]">
            <TbArrowsShuffle size={24} />
          </span>
          <span className="font-Inter text-[14px] text-[#344054] font-semibold ">
            Conditional
          </span>
        </button>
      </div>
    </div>
  );
};

export default FormHeader;
