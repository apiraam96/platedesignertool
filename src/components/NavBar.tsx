import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between w-full top-0 z-20 p-6 px-8 bg-[#ABD6FF]">
      <Link to="/" className="text-lg font-bold">
        Plate Designer
      </Link>
      <Button>
        <Link to="/platedesigner">Sign in</Link>
      </Button>
    </div>
  );
};

export default NavBar;
