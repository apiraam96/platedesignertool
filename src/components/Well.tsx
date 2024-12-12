import React from "react";

const Well = ({ id }: { id: string }) => {
  return (
    <div
      id={id}
      className="border-black border p-5 hover:bg-sky-200 hover:cursor-pointer"
    ></div>
  );
};

export default Well;
