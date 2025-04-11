import React from "react";
import Header from "./Header";
import SecondLayer from "./SecondLayer";
import SideBar from "./SideBar";
import RightSideBar from "./RightSideBar";
import CenterForm from "./CenterForm";
import { useState } from "react";

const Home = () => {
  const [fields, setFields] = useState([
    {
      id: 1,
      type: "text",
      label: "Company Name",
      placeholder: "Enter company name",
    },
    {
      id: 2,
      type: "multi-select",
      label: "Industry",
      options: ["Technology", "Finance", "Healthcare", "Retail"],
    },
    {
      id: 3,
      type: "textarea",
      label: "Business Goals & Objectives",
      placeholder: "Business Goals & Objectives",
    },
    {
      id: 4,
      type: "multi-select",
      label: "Project Scope",
      options: ["Recruitment", "Compliance", "Payroll", "Benefits"],
    },
  ]);

  const Map = {
    Name: {
      type: "text",
      label: "Company Name",
      placeholder: "Enter company name",
    },
    Email: {
      type: "email",
      label: "Email Address",
      placeholder: "Enter your email",
    },
    Date: {
      type: "date",
      label: "Date",
      placeholder: "Select a date",
    },
    Phone: {
      type: "phone",
      label: "Phone Number",
      placeholder: "Enter your phone number",
    },
    Textarea: {
      type: "textarea",
      label: "Textarea",
      placeholder: "Enter your message",
    },
    "Single Select": {
      type: "single-select",
      label: "Single Select",
      placeholder: "Select an option",
      options: ["Option 1", "Option 2", "Option 3"],
    },
    "Multi Select": {
      type: "multi-select",
      label: "Multi Select",
      placeholder: "Select options",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    },
    Radio: {
      type: "radio",
      label: "Radio Options",
      options: ["Option 1", "Option 2"],
    },
    Checkbox: {
      type: "checkbox",
      label: "Checkbox Options",
      options: ["Option 1", "Option 2", "Option 3"],
    },
    Address: {
      type: "address",
      label: "Address",
      placeholder: "Enter your address",
    },
    Divider: {
      type: "divider",
      label: "Section Divider",
    },
    "File Upload": {
      type: "file",
      label: "File Upload",
      placeholder: "Upload files",
    },
    Signature: {
      type: "signature",
      label: "Signature",
    },
    Initials: {
      type: "initials",
      label: "Initials",
    },
    "Long Text": {
      type: "textarea",
      label: "Long Text",
      placeholder: "Enter your message",
    },
    "Short Text": {
      type: "text",
      label: "Short text",
      placeholder: "Enter your message",
    },
    List: {
      type: "list",
      label: "List Items",
      items: ["First item", "Second item", "Third item"],
    },
    Image: {
      type: "file",
      label: "Image",
      placeholder: "Upload an image",
    },
  };

  const handleAddElement = (elementName) => {
    const newElement = Map[elementName];
    const newField = {
      id: Date.now(),
      ...newElement,
    };
    setFields([...fields, newField]);
  };

  return (
    <div>
      <Header />
      <SecondLayer />
      <div className="flex flex-row justify-between">
        <SideBar />
        <CenterForm fields={fields} setFields={setFields} />
        <RightSideBar onAddElement={handleAddElement} />
      </div>
    </div>
  );
};

export default Home;
