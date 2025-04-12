import React from "react";
import Header from "./Header";
import SecondLayer from "./SecondLayer";
import SideBar from "./SideBar";
import RightSideBar from "./RightSideBar";
import CenterForm from "./CenterForm";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [fields, setFields] = useState([
    {
      id: 1,
      type: "text",
      label: "Company Name",
      placeholder: "Enter company name",
      value: "",
    },
    {
      id: 2,
      type: "multi-select",
      label: "Industry",
      options: ["Technology", "Finance", "Healthcare", "Retail"],
      value: "",
    },
    {
      id: 3,
      type: "textarea",
      label: "Business Goals & Objectives",
      placeholder: "Business Goals & Objectives",
      value: "",
    },
    {
      id: 4,
      type: "multi-select",
      label: "Project Scope",
      options: ["Recruitment", "Compliance", "Payroll", "Benefits"],
      value: "",
    },
  ]);

  const Map = {
    Name: {
      type: "text",
      label: "Company Name",
      placeholder: "Enter company name",
      value: "",
    },
    Email: {
      type: "email",
      label: "Email Address",
      placeholder: "Enter your email",
      value: "",
    },
    Date: {
      type: "date",
      label: "Date",
      placeholder: "Select a date",
      value: "",
    },
    Phone: {
      type: "phone",
      label: "Phone Number",
      placeholder: "Enter your phone number",
      value: "",
    },
    Textarea: {
      type: "textarea",
      label: "Textarea",
      placeholder: "Enter your message",
      value: "",
    },
    "Single Select": {
      type: "single-select",
      label: "Single Select",
      placeholder: "Select an option",
      options: ["Option 1", "Option 2", "Option 3"],
      value: "",
    },
    "Multi Select": {
      type: "multi-select",
      label: "Multi Select",
      placeholder: "Select options",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      value: "",
    },
    Radio: {
      type: "radio",
      label: "Radio Options",
      options: ["Option 1", "Option 2"],
      value: "",
    },
    Checkbox: {
      type: "checkbox",
      label: "Checkbox Options",
      options: ["Option 1", "Option 2", "Option 3"],
      value: "",
    },
    Address: {
      type: "address",
      label: "Address",
      placeholder: "Enter your address",
      value: "",
    },
    Divider: {
      type: "divider",
      label: "Section Divider",
      value: "",
    },
    "File Upload": {
      type: "file",
      label: "File Upload",
      placeholder: "Upload files",
      value: "",
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
      value: "",
    },
    "Short Text": {
      type: "text",
      label: "Short text",
      placeholder: "Enter your message",
      value: "",
    },
    List: {
      type: "list",
      label: "List Items",
      items: ["First item", "Second item", "Third item"],
      value: "",
    },
    Image: {
      type: "file",
      label: "Image",
      placeholder: "Upload an image",
      value: "",
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

  const handleSaveasDraft = async () => {
    try {
      const formData = {
        client_id: 1,
        step_id: 1,
        fields: fields,
      };

      const response = await axios.post(
        "http://localhost:3000/form-fields",
        formData
      );
      console.log("Form saved successfully:", response.data);
    } catch (error) {
      console.error("Error saving form:", error);
    }
  };

  const loadData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/form-fields?client_id=1"
      );
      if (response.data && response.data.length > 0) {
        const step1Fields = response.data.find((data) => data.step_id === 1);
        if (step1Fields) {
          setFields(step1Fields.fields);
        }
      }
    } catch (error) {
      console.error("Error loading saved form:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Header />
      <SecondLayer handleSaveasDraft={handleSaveasDraft} />
      <div className="flex flex-row justify-between">
        <SideBar />
        <CenterForm fields={fields} setFields={setFields} />
        <RightSideBar onAddElement={handleAddElement} />
      </div>
    </div>
  );
};

export default Home;
