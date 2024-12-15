import React from "react";

const Well = ({ key, id }: { key: string; id: string }) => {
  return (
    <div
      onClick={() => console.log("well:", id)}
      id={id}
      key={key}
      className="border-slate-800 border p-7 hover:bg-sky-100 hover:cursor-pointer"
    ></div>
  );
};

export default Well;
