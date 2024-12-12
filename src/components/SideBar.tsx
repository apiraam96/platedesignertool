import React from "react";
import { Button } from "./ui/button";

const SideBar = () => {
  return (
    <aside className="left-0 z-10 h-lvh w-full bg-slate-100 border-black border-r-4 shadow-sm">
      <div className="flex flex-col">
        <div className="p-4 pb-2 flex justify-between items-center">
          <label id="name">Name</label>
          <input type="text" name="name" />
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
