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
      type: "textarea",
      label: "Business Goals & Objectives",
      placeholder: "Business Goals & Objectives",
    },
    // {
    //   id: 3,
    //   type: "multi-select",
    //   label: "Industry",
    //   options: ["Technology", "Finance", "Healthcare", "Retail"],
    // },
  ]);

  const Map = {
    Name: {
      type: "text",
      label: "Name",
      placeholder: "Enter your name",
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
    File: {
      type: "file",
      label: "File",
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
