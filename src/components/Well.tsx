import React from "react";

const Well = ({ key, id }: { key: string; id: string }) => {
  //if there are no values, then p-9
  return (
    <button
      onClick={() => console.log("well:", id)}
      id={id}
      key={key}
      className="border-slate-800 border p-12 hover:bg-sky-50 hover:cursor-pointer focus:bg-sky-200"
    >
      <p id="name" className="text-sm">
        {""}
      </p>
      <p id="wellType" className="text-xs">
        {""}
      </p>
      <p id="cellLine">{""}</p>
    </button>
  );
};

export default Well;
