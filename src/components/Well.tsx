import React from "react";

const Well = ({ id }: { id: string }) => {
  return (
    <div
      id={id}
      className="border-slate-800 border p-5 hover:bg-sky-100 hover:cursor-pointer"
    ></div>
  );
};

export default Well;
