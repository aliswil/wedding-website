import React from "react";

function Attendance() {

  return (
    <div
      id="attendance"
      className="flex items-center justify-center h-full bg-[#f5ebe0] pt-20"
    >
      <div className="text-gray-600 z-[2] pb-20 m-3.5">
        <h2 className=" text-6xl sm:text-7xl font-light font-display">
          Klikk her for å melde fra om du kommer
        </h2>
        <div className="pt-10 text-4xl font-display flex justify-center">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdI7zbi3GJYuAG84zO77Yej60C7zuZFl_U3HcRpQohr6r0g6Q/viewform?usp=sf_link"
            className="px-8 py-3 border back hover:bg-gray-100 sm:w-full shadow bg-white"
          >
            Påmelding
          </a>
        </div>
      </div>
    </div>
  );
}

export default Attendance;
