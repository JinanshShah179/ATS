import React from "react";
import FormHeader from "./FormHeader";
import MultiSelect from "./MultiSelect";

const CenterForm = () => {
  return (
    <div className="w-[60%] ml-[36px] mr-[36px] mt-[14px]">
      <FormHeader />

      <div className=" border-b border-l border-r h-full border-[#D0D5DD] rounded-md shadow-xs p-[24px] ">
        <div className="flex flex-col mb-6">
          <label
            htmlFor=""
            className="text-[14px] font-Inter font-medium text-[#344054] tracking-wide"
          >
            Company Name
          </label>
          <input
            type="text"
            placeholder="Enter company name"
            className=" w-[35%] border border-[#D0D5DD] rounded-md shadow-xs p-[6px] focus:border-[#D6BBFB] focus:ring-[#D6BBFB] focus:outline-none"
          />
        </div>

        <div className="flex flex-col mb-6">
          <label
            htmlFor=""
            className="text-[14px] font-Inter font-medium text-[#344054] tracking-wide"
          >
            Business Goals & Objectives
          </label>
          <textarea
            rows="5"
            resize="none"
            type="text"
            placeholder="Enter Business Goals & Objectives"
            className=" w-full border border-[#D0D5DD] rounded-md shadow-xs p-[6px] focus:border-[#D6BBFB] focus:ring-[#D6BBFB] focus:outline-none"
          />
        </div>

        <div className="flex flex-col cursor-pointer">
          <label
            htmlFor=""
            className="text-[14px] font-Inter font-medium text-[#344054] tracking-wide"
          >
            Industry
          </label>
          <div className="font-Inter text-[12px] font-semibold text-[#667085] border border-[#D0D5DD] rounded-md shadow-xs p-3  items-center">
            <div className="border-b border-[#D0D5DD] m-2">MULTI SELECT</div>
            <MultiSelect id={1} name={"Technology"} />
            <MultiSelect id={2} name={"Finance"} />
            <MultiSelect id={3} name={"Healthcare"} />
            <MultiSelect id={4} name={"Retail"} />
            <button className="h-[30px] w-[40px] border border-[#D0D5DD] rounded-md">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterForm;
