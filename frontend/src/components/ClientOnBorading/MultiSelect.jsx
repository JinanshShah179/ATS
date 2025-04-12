import React from "react";

const MultiSelect = ({ id, name, selected, onChange }) => {
  return (
    <div className="pl-3 pr-3">
      <div
        className={`w-full my-3 gap-2 h-[40px] border-1 border-[#D0D5DD] flex flex-row items-center justify-center rounded-[4px] ${
          selected ? "bg-[#F9F5FF]" : ""
        }`}
        onClick={onChange}
      >
        <span className="w-[40px] flex items-center justify-center text-center rounded-l-[6px] h-full bg-[#F2F4F7] text-[#667085]">
          {id}
        </span>
        <h1 className="w-full flex items-center h-full text-[#667085]">
          {name}
        </h1>
      </div>
    </div>
  );
};

export default MultiSelect;
