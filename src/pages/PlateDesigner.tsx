import React from "react";
import NavBar from "../components/NavBar";
import Plate from "../components/Plate";
import SideBar from "@/components/SideBar";

const PlateDesigner = () => {
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-4">
        <SideBar />
        <Plate />
      </div>
    </>
  );
};

export default PlateDesigner;
