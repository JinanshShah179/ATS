import React from "react";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import { MdOutlineDragIndicator } from "react-icons/md";

const FormField = ({ field }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: field.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex flex-col mb-6 relative border border-transparent p-3 ${
        isDragging ? "bg-gray-50" : ""
      }`}
    >
      <div className="flex justify-between items-center mb-1">
        <div
          {...attributes}
          {...listeners}
          className="absolute left-[-24px] top-1 cursor-grab active:cursor-grabbing p-1"
        >
          <MdOutlineDragIndicator className="text-[#D0D5DD] hover:text-[#A5A8B1] cursor-pointer" />
        </div>
        <label className="text-[14px] font-Inter font-medium text-[#344054] tracking-wide">
          {field.label}
        </label>
      </div>

      {(field.type === "text" ||
        field.type === "email" ||
        field.type === "phone" ||
        field.type === "date" ||
        field.type === "file") && (
        <input
          type={field.type}
          placeholder={field.placeholder}
          className="w-[35%] border border-[#D0D5DD] rounded-md shadow-xs p-[6px] focus:border-[#D6BBFB] focus:ring-[#D6BBFB] focus:outline-none"
          onMouseDown={(e) => e.stopPropagation()}
        />
      )}

      {field.type === "textarea" && (
        <textarea
          placeholder={field.placeholder}
          rows={5}
          className="w-full border border-[#D0D5DD] rounded-md shadow-xs p-[6px] focus:border-[#D6BBFB] focus:ring-[#D6BBFB] focus:outline-none"
          onMouseDown={(e) => e.stopPropagation()}
        />
      )}
    </div>
  );
};

export default FormField;
