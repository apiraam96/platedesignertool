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

import { wellType, cellLine, doseConcUnit } from "@/lib/data";

const SideBar = () => {
  return (
    <aside className="left-0 h-screen w-full bg-white border-r-2 shadow-sm">
      <div className="grid grid-rows-[1fr_1fr_1fr_1fr_1fr_10fr] h-full">
        <div className="grid gap-2 p-4 pb-2">
          <Label htmlFor="drugname">Name</Label>
          <Input type="text" id="drugname" placeholder="AS123" />
        </div>
        <div className="grid gap-2 p-4">
          <Label>Well Type</Label>
          <Select>
            <SelectTrigger className="">
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
        <div className="grid gap-2 p-4">
          <Label>Cell Line</Label>
          <Select>
            <SelectTrigger className="">
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
        <div className="grid gap-2 p-4">
          <Label htmlFor="numberOfCells">Number of Cells</Label>
          <Input type="number" id="numberOfCells" />
        </div>
        <div className="grid grid-cols-2 p-4 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="doseConc">Concentration of Dose</Label>
            <Input type="number" id="doseConc" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="doseConcUnit">Unit</Label>
            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="Choose unit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {doseConcUnit.map((unit) => (
                    <SelectItem value={unit}>{unit}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="m-auto border-t pt-5 flex gap-2">
          <Button>Save</Button>
          <Button>Export to CSV</Button>
          <Button>Export Metadata</Button>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
