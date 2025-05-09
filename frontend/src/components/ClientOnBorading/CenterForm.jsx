import React from "react";
import FormHeader from "./FormHeader";
import { closestCorners, DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import FormField from "./FormField";

const CenterForm = ({ fields, setFields }) => {
  const getPostion = (id) => {
    return fields.findIndex((field) => field.id === id);
  };

  const handleDragEnd = (e) => {
    const { active, over } = e;

    if (active.id === over.id) return;

    setFields((prevFields) => {
      const originalPos = getPostion(active.id);
      const latestPos = getPostion(over.id);
      return arrayMove(prevFields, originalPos, latestPos);
    });
  };

  const handleFieldChange = (fieldId, value) => {
    setFields((prevFields) =>
      prevFields.map((field) => {
        if (field.id === fieldId) {
          if (field.type === "multi-select") {
            const currentValues = field.value || [];
            const newValue = currentValues.includes(value)
              ? currentValues.filter((v) => v !== value)
              : [...currentValues, value];
            return { ...field, value: newValue };
          }
          return { ...field, value };
        }
        return field;
      })
    );
  };

  return (
    <div className="w-[60%] ml-[36px] mr-[36px] mt-[14px]">
      <FormHeader />

      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <SortableContext
          items={fields.map((field) => field.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="border-b border-l border-r border-t h-full border-[#D0D5DD] rounded-b-md shadow-xs p-[24px]">
            {fields.map((field) => (
              <FormField
                key={field.id}
                field={field}
                onFieldChange={handleFieldChange}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default CenterForm;
