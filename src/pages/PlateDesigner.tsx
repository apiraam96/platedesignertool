import React from "react";
import NavBar from "../components/NavBar";
import Plate from "../components/Plate";

const PlateDesigner = () => {
  return (
    <>
      <NavBar />
      <p className="text-9xl">PlateDesigner</p>
      <Plate />
    </>
  );
};

export default PlateDesigner;
