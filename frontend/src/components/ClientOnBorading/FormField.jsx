import React from "react";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import { MdOutlineDragIndicator } from "react-icons/md";
import { Divider } from "antd";
import MultiSelect from "./MultiSelect";

const FormField = ({ field, onFieldChange }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: field.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleChange = (e) => {
    onFieldChange(field.id, e.target.value);
  };

  const handleMultiSelectChange = (selectedOptions) => {
    onFieldChange(field.id, selectedOptions);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex flex-col mb-6 relative p-3`}
    >
      <div className="flex justify-between items-center mb-1">
        <div
          {...attributes}
          {...listeners}
          className="absolute left-[-24px]  top-[10px] cursor-grab active:cursor-grabbing p-2"
        >
          {field.type !== "divider" && (
            <MdOutlineDragIndicator className="border border-transparent w-[20px] h-[66px] rounded-sm text-[#D0D5DD] bg-[#F2F4F7] hover:text-[#344054] cursor-pointer" />
          )}
        </div>
        <label className="text-[14px] font-Inter font-medium text-[#344054] tracking-wide">
          {field.type !== "divider" && field.label}
        </label>
      </div>
      {(field.type === "text" ||
        field.type === "email" ||
        field.type === "phone" ||
        field.type === "date" ||
        field.type === "file" ||
        field.type === "image") && (
        <input
          type={field.type}
          placeholder={field.placeholder}
          value={field.value || ""}
          onChange={handleChange}
          className="w-[35%] border border-[#D0D5DD] rounded-md shadow-xs p-[6px] focus:border-[#D6BBFB] focus:ring-[#D6BBFB] focus:outline-none"
          onMouseDown={(e) => e.stopPropagation()}
        />
      )}
      {(field.type === "textarea" || field.type === "address") && (
        <textarea
          placeholder={field.placeholder}
          value={field.value || ""}
          onChange={handleChange}
          rows={5}
          className="w-full border border-[#D0D5DD] rounded-md shadow-xs p-[6px] focus:border-[#D6BBFB] focus:ring-[#D6BBFB] focus:outline-none"
          onMouseDown={(e) => e.stopPropagation()}
        />
      )}

      {(field.type === "multi-select" || field.type === "single-select") && (
        <div className="w-full border border-[#D0D5DD] rounded-md mb-4">
          <h3 className=" w-full text-[#667085] font-semibold p-2 mb-2 border-b border-[#D0D5DD] tracking-wide">
            {field.type === "multi-select" ? "MULTI SELECT" : "SINGLE SELECT"}
          </h3>
          {field.options?.map((option, index) => (
            <MultiSelect
              key={index}
              id={index}
              name={option}
              selected={field.value?.includes(option)}
              onChange={() => handleMultiSelectChange(option)}
            />
          ))}
          <button className="h-[35px] ml-3 mb-2 w-[45px] border border-[#D0D5DD] rounded-md">
            Add
          </button>
        </div>
      )}

      {(field.type === "radio" || field.type === "checkbox") && (
        <div className="w-full border border-[#D0D5DD] rounded-md mb-4">
          <div className="flex flex-row m-2 p-2">
            {field.options?.map((option, index) => (
              <label key={index} className="flex items-center mb-2">
                <input
                  type={field.type}
                  name={field.label}
                  value={option}
                  checked={field.value === option}
                  onChange={handleChange}
                  className="ml-2"
                  onMouseDown={(e) => e.stopPropagation()}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      )}
      {field.type === "divider" && <Divider />}
    </div>
  );
};

export default FormField;
