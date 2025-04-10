import React from "react";
import { Divider } from "antd";
import IconCard from "./IconCard";
import {
  formElments,
  signatureElements,
  textElements,
  visualElements,
} from "./constants/Icons";
import ReusableH1 from "./ReusableH1";

const RightSideBar = ({ onAddElement }) => {
  return (
    <div className="pl-6 pt-[19px] border-l border-[#EAECF0] w-[280px] h-full">
      <div>
        <ReusableH1 heading="FORM ELEMENTS" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mr-[23px] mb-6">
          {formElments.map((item, index) => (
            <IconCard
              key={index}
              name={item.name}
              icon={item.icon}
              addElement={onAddElement}
            />
          ))}
        </div>
        <Divider />

        <ReusableH1 heading="SIGNATURE ELEMENTS" />
        <div className="grid grid-cols-2 gap-3 mr-[23px] mb-6">
          {signatureElements.map((item, index) => (
            <IconCard key={index} name={item.name} icon={item.icon} />
          ))}
        </div>
        <Divider />

        <ReusableH1 heading="TEXT ELEMENTS" />
        <div className="grid grid-cols-2 gap-3 mr-[23px] mb-6">
          {textElements.map((item, index) => (
            <IconCard key={index} name={item.name} icon={item.icon} />
          ))}
        </div>
        <Divider />

        <ReusableH1 heading="VISUAL ELEMENTS" />
        <div className="grid grid-cols-2 gap-3 mr-[23px] mb-6">
          {visualElements.map((item, index) => (
            <IconCard key={index} name={item.name} icon={item.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
