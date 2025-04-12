import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const SecondLayer = ({ handleSaveasDraft }) => {
  return (
    <div className="flex flex-row justify-between items-center border-b border-[1px] border-[#EAECF0] bg-white pb-4">
      <div className="flex items-center justify-center gap-3 pl-6 pt-3">
        <IoArrowBack className="text-[#475467] text-[24px] cursor-pointer" />
        <h1 className="font-Inter text-[18px] font-semibold">
          Client On-Boarding
        </h1>
      </div>

      <div className="flex items-center gap-3 pt-[15px]">
        <div className="flex items-center gap-2 cursor-pointer">
          <img src="/public/_Step base.svg" alt="" />
          Create
          <FaAngleRight className="text-[#667085]" size={24} />
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <img src="/public/_Step base_2.svg" alt="" />
          View
        </div>
      </div>

      <div className="flex items-center gap-3 pr-6 pt-[9px]">
        <button className="border-2 border-[#D0D5DD] rounded-lg p-[10px] cursor-pointer gap-3 shadow-xs">
          <img src="/public/settings-02.svg" alt="" />
        </button>
        <button
          onClick={handleSaveasDraft}
          className="font-Inter text-[14px] text-[#344054] font-semibold border-2 border-[#D0D5DD] rounded-lg pt-[8px] pl-[12px] pr-[12px] pb-[8px] cursor-pointer shadow-xs"
        >
          Save as Draft
        </button>
        <button className="font-Inter text-[14px] border border-[#7F56D9] bg-[#7F56D9] text-white rounded-lg pt-[8px] pl-[12px] pr-[12px] pb-[8px] cursor-pointer shadow-xs">
          Save & Next
        </button>
      </div>
    </div>
  );
};

export default SecondLayer;
