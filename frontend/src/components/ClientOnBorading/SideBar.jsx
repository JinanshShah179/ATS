import React, { use } from "react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { closestCorners, DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableItem = ({ step, index }) => {
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

const SideBar = () => {
  const [steps, setSteps] = useState([
    { id: 1, name: "Client Requirements" },
    { id: 2, name: "Setup Client Account" },
    { id: 3, name: "Configure Email for Client" },
    { id: 4, name: "Setup Client Portal Access" },
    { id: 5, name: "Document Collection" },
    { id: 6, name: "Performing Security Audit" },
    { id: 7, name: "Welcoming Call" },
    { id: 8, name: "Hiring" },
  ]);

  const getPostion = (id) => {
    return steps.findIndex((step) => step.id === id);
  };

  const handleDragEnd = (e) => {
    const { active, over } = e;
    console.log(active, over);
    console.log("Active", active.id);
    console.log("Over", over.id);
    if (active.id === over.id) return;

    setSteps(() => {
      const originalPos = getPostion(active.id);
      const latestPos = getPostion(over.id);
      console.log("originalPos", originalPos);
      console.log("lastesPos", latestPos);

      return arrayMove(steps, originalPos, latestPos);
    });
  };

  return (
    <div>
      <div className="pl-6 pt-6 border-r border-[#EAECF0] w-[320px] h-full">
        <h1 className="text-[14px] text-[#475467] font-Inter font-semibold tracking-[1.12px] mb-6">
          ONBOARDING STEPS
        </h1>
        <DndContext
          onDragEnd={handleDragEnd}
          collisionDetectionStrategy={closestCorners}
        >
          <SortableContext items={steps} strategy={verticalListSortingStrategy}>
            <div className="flex flex-col items-center gap-2 mt-[10px] mr-[12px] ml-[12px] mb-[12px] pr-[12px]">
              {steps.map((step, index) => (
                <SortableItem key={step.id} step={step} index={index} />
              ))}
            </div>
          </SortableContext>
        </DndContext>

        <div className="flex items-center justify-center gap-2">
          <button className="flex items-center border-[1px] border-[#D0D5DD] rounded-lg p-[10px] cursor-pointer gap-3 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
