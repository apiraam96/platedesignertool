import React from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "./ui/select";

import { wellType, cellLine } from "@/lib/data";

const SideBar = () => {
  return (
    <aside className="left-0 h-screen w-full bg-slate-100 border-r-4 shadow-sm">
      <div className="grid grid-rows-[1fr_1fr_1fr_1fr_1fr_1fr_2fr]">
        <div className="p-4 pb-2">
          <Label htmlFor="drugname">Name</Label>
          <Input type="text" id="drugname" placeholder="AS123" />
        </div>
        <div className="p-4">
          <Label>Well Type</Label>
          <Select>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Choose condition type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {wellType.map((type) => (
                  <SelectItem value={type}>{type}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="p-4">
          <Label>Cell Line</Label>
          <Select>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Choose cell line" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {cellLine.map((line) => (
                  <SelectItem value={line}>{line}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="border-t flex p-3">
        <Button>Export to CSV</Button>
      </div>
    </aside>
  );
};

export default SideBar;
