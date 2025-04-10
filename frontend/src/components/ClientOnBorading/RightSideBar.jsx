import React from "react";
import { Divider } from "antd";
import IconCard from "./IconCard";

const RightSideBar = () => {
  const formElments = [
    { name: "Name", icon: "/public/user-02.svg" },
    { name: "Email", icon: "/public/mail-01.svg" },
    { name: "Date", icon: "/public/calendar.svg" },
    { name: "Phone", icon: "/public/phone.svg" },
    { name: "Single Select", icon: "/public/cursor-click-01.svg" },
    { name: "Multi Select", icon: "/public/cursor-click-01 (1).svg" },
    { name: "Radio", icon: "/public/check-circle.svg" },
    { name: "Checkbox", icon: "/public/check-square.svg" },
    { name: "Textarea", icon: "/public/text-input.svg" },
    { name: "Address", icon: "/public/marker-pin-01.svg" },
    { name: "Divider", icon: "/public/slash-divider.svg" },
    { name: "File Upload", icon: "/public/upload-01.svg" },
  ];

  const signatureElements = [
    { name: "Signature", icon: "/public/edit-04.svg" },
    { name: "Initials", icon: "/public/mail-01.svg" },
  ];

  const textElements = [
    { name: "Short Text", icon: "/public/text-input.svg" },
    { name: "Long Text", icon: "/public/layout-alt-03.svg" },
    { name: "List", icon: "/public/list.svg" },
  ];

  const visualElements = [{ name: "Image", icon: "/public/image-01.svg" }];

  return (
    <div className="pl-6 pt-[19px] border-l border-[#EAECF0] w-[280px] h-full">
      <div>
        <h1 className="text-[14px] text-[#475467] font-Inter font-semibold tracking-[1.12px] mb-4">
          FORM ELEMENTS
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mr-[23px] mb-6">
          {formElments.map((item, index) => (
            <IconCard key={index} name={item.name} icon={item.icon} />
          ))}
        </div>
        <Divider />

        <h1 className="text-[14px] text-[#475467] font-Inter font-semibold tracking-[1.12px] mb-4">
          SIGNATURE ELEMETS
        </h1>
        <div className="grid grid-cols-2 gap-3 mr-[23px] mb-6">
          {signatureElements.map((item, index) => (
            <IconCard key={index} name={item.name} icon={item.icon} />
          ))}
        </div>
        <Divider />

        <h1 className="text-[14px] text-[#475467] font-Inter font-semibold tracking-[1.12px] mb-4">
          TEXT ELEMETS
        </h1>
        <div className="grid grid-cols-2 gap-3 mr-[23px] mb-6">
          {textElements.map((item, index) => (
            <IconCard key={index} name={item.name} icon={item.icon} />
          ))}
        </div>
        <Divider />

        <h1 className="text-[14px] text-[#475467] font-Inter font-semibold tracking-[1.12px] mb-4">
          VISUAL ELEMETS
        </h1>
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
