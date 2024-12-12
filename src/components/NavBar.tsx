import React from "react";
import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <div className="flex justify-between w-full top-0 block p-6 px-8 bg-[#ABD6FF]">
      <div>Plate Designer</div>
      <Button>Sign in</Button>
    </div>
  );
};

export default NavBar;
