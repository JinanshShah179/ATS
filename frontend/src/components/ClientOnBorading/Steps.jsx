import React from "react";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";

const Steps = ({ step, index }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: step.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex items-center w-full gap-2 p-1"
      {...attributes}
    >
      <span className="text-[14px] font-Inter font-medium text-[#475467]">
        {index + 1}.
      </span>
      <div
        className="flex w-full text-[14px] font-Inter font-medium tracking-wide text-[#101828] items-center gap-2 rounded-lg cursor-grab pt-[10px] pr-[12px] pl-[12px] pb-[10px] border border-[#EAECF0] shadow-xs"
        {...listeners}
      >
        {step.name}
      </div>
    </div>
  );
};

export default Steps;
