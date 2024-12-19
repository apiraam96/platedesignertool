import React from "react";
import Well from "./Well";

const Plate = () => {
  const cols = ["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const rows = ["", "A", "B", "C", "D", "E", "F", "G", "H"];

  const wellIds = [];
  for (let i = 1; i < rows.length; i++) {
    for (let k = 1; k < cols.length; k++) {
      wellIds.push(rows[i] + cols[k]);
    }
  }

  console.log(wellIds.length);

  return (
    <div className="m-auto col-span-3 p-5">
      <div className="grid grid-cols-13 grid-rows-9 border-black border-4 px-10 pb-7">
        {cols.map((column, i) => (
          <p className={`mx-auto my-auto row-start-1 col-start-${i + 1}`}>
            {column}
          </p>
        ))}
        {rows.map((row, i) => (
          <p className={`my-auto pr-5 col-start-1 row-start-${i + 1}`}>{row}</p>
        ))}
        <div className="grid grid-cols-12 col-span-12 row-span-8 col-start-2 row-start-2 border border-black">
          {wellIds.map((id) => (
            <Well key={id} id={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plate;
