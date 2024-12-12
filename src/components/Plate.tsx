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
    <div className="grid grid-cols-12 border-red-500 border">
      {wellIds.map((id) => (
        <Well id={id} />
      ))}
    </div>
  );
};

export default Plate;
