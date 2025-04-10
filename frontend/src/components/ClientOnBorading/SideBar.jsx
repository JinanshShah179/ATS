import React, { use } from "react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { closestCorners, DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  arraySwap,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Steps from "./Steps";
import ReusableH1 from "./ReusableH1";

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
    // console.log(active, over);
    // console.log("Active", active.id);
    // console.log("Over", over.id);
    if (active.id === over.id) return;

    setSteps(() => {
      const originalPos = getPostion(active.id);
      const latestPos = getPostion(over.id);
      // console.log("originalPos", originalPos);
      // console.log("lastesPos", latestPos);
      // return arraySwap(steps, originalPos, latestPos);
      return arrayMove(steps, originalPos, latestPos);
    });
  };

  return (
    <div>
      <div className="pl-6 pt-6 border-r border-[#EAECF0] w-[320px] h-full">
        <ReusableH1 heading="ONBOARDING STEPS" />
        <DndContext
          onDragEnd={handleDragEnd}
          collisionDetectionStrategy={closestCorners}
        >
          <SortableContext items={steps} strategy={verticalListSortingStrategy}>
            <div className="flex flex-col items-center gap-2 mt-[10px] mr-[12px] ml-[12px] mb-[12px] pr-[12px]">
              {steps.map((step, index) => (
                <Steps key={step.id} step={step} index={index} />
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
