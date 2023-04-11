import React from "react";

function Info() {
  return (
    <div
      id="info"
      className="flex items-center justify-center h-full bg-[#e2ddd6] pt-28"
    >
      <div className="text-gray-600 z-[2] pt-20 pb-20 m-3.5">
        <h2 className=" text-7xl font-light font-display">Overnatting</h2>
        <p className="py-5 text-xl font-display">Info</p>
        <p className="py-5 text-xl font-display">Link</p>
        <h2 className=" text-7xl font-light font-display">Parkering</h2>
        <p className="py-5 text-xl font-display">Info</p>
        <p className="py-5 text-xl font-display">Link</p>
        <h2 className=" text-7xl font-light font-display">Transport</h2>
        <p className="py-5 text-xl font-display">Info</p>
        <p className="py-5 text-xl font-display">Link</p>
        <h2 className=" text-7xl font-light font-display">Dresscode</h2>
        <p className="py-5 text-xl font-display">Info</p>
        <p className="py-5 text-xl font-display">Link</p>
      </div>
    </div>
  );
}

export default Info;
