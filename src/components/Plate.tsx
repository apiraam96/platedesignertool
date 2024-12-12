import React from "react";
import Well from "./Well";

const Plate = () => {
  const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];

  const wellIds = [];
  for (let i = 0; i < rows.length; i++) {
    for (let k = 0; k < cols.length; k++) {
      wellIds.push(rows[i] + cols[k]);
    }
  }

  console.log(wellIds.length);

  return (
    <div className="m-auto col-span-3 p-5">
      <div className="grid grid-cols-12 border-black border p-16">
        {wellIds.map((id) => (
          <Well id={id} />
        ))}
      </div>
    </div>
  );
};

export default Plate;
