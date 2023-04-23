import React from "react";

function Attendance() {

  return (
    <div
      id="attendance"
      className="bg-cover bg-center bg-bg-mobile-attendance sm:bg-bg-bigscreen py-28"
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 flex items-center justify-center">
      
      <div className="text-gray-600 z-[2] pb-20 m-3.5 bg-[#efe8db]/80 p-5">
        <h2 className=" text-6xl sm:text-7xl font-light font-display ">
          Klikk her for å melde fra om du kommer:
        </h2>
        <div className=" text-gray-600 pt-10 text-4xl font-display flex justify-center">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdI7zbi3GJYuAG84zO77Yej60C7zuZFl_U3HcRpQohr6r0g6Q/viewform?usp=sf_link"
            className="px-8 py-3  back hover:bg-gray-300 sm:w-full shadow bg-white sm:text-center"
          >
            Påmelding
          </a>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Attendance;

