import React from "react";
import Header from "./Header";
import SecondLayer from "./SecondLayer";
import SideBar from "./SideBar";
import RightSideBar from "./RightSideBar";
import CenterForm from "./CenterForm";

const Home = () => {
  return (
    <div>
      <Header />
      <SecondLayer />
      <div className="flex flex-row justify-between">
        <SideBar />
        <CenterForm />
        <RightSideBar />
      </div>
    </div>
  );
};

export default Home;
