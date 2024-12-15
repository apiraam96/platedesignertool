import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="grid grid-cols-4 mx-auto gap-4 p-10">
      <div className="col-span-2 my-auto">
        <h1 className="text-6xl font-bold pb-5">
          Design visually informative plates
        </h1>
        <h3 className="pb-5">
          96 well plate designer tool for wet lab scientists, experimentalists,
          and lab automation experts - use this tool to experimentally design
          qPCRs, ELISAs, dose response curves, transfections and more!
        </h3>
        <Button>Start Designing!</Button>
      </div>
      <div className="col-span-2 ml-auto">
        <img
          className="h-auto w-full"
          src="../../../public/HeroPagePlate.png"
        />
      </div>
      <div>
        <h2>No more excel sheets</h2>
        <h3>Keep track of all of your relevent metadata</h3>
        <h3>Visualize your experimental plan to reduce cognative load</h3>
        <h3>Export your data to a CSV or JSON to share with others</h3>
      </div>
      <h2>About yourself</h2>
      <h1>hello</h1>
    </div>
  );
};

export default Hero;
