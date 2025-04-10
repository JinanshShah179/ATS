import React from "react";

const IconCard = ({ name, icon, addElement }) => {
  return (
    <div
      className="bg-white flex flex-col items-center justify-center w-[100px] h-[100px] border-2 border-[#EAECF0] rounded-lg cursor-pointer"
      onClick={() => addElement(name)}
    >
      <div className="flex bg-[#F2F4F7] w-full items-center border-[#EAECF0] justify-center p-5 h-[80px]">
        <div className="flex items-center text-[#667085] bg-[#F9AFB]">
          <img src={icon} alt={name} />
        </div>
      </div>
      <div className="w-full border border-b border-[#EAECF0]"></div>
      <div className="font-Inter text-[#475467] font-medium text-[14px] pt-1 pb-1 pl-[10px] pr-[10px] text-nowrap">
        {name}
      </div>
    </div>
  );
};
export default IconCard;
