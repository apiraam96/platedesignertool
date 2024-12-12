import React from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const SideBar = () => {
  return (
    <aside className="left-0 z-10 h-screen w-full bg-slate-100 border-r-4 shadow-sm">
      <div className="grid grid-rows-[1fr_1fr_1fr_1fr_1fr_1fr_2fr]">
        <div className="p-4 pb-2">
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" placeholder="AS123" />
        </div>
      </div>
      <ul className="flex-1 px-3">
        <label>Cell type</label>
        <input type="text" name="cell type" />
      </ul>
      <div className="border-t flex p-3">
        <Button>Export to CSV</Button>
      </div>
    </aside>
  );
};

export default SideBar;
