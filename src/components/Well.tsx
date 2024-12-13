import React from "react";

const Well = ({ key, id }: { key: string; id: string }) => {
  return (
    <div
      id={id}
      key={key}
      className="border-slate-800 border p-8 hover:bg-sky-100 hover:cursor-pointer"
    ></div>
  );
};

export default Well;
