import { useRouter } from "next/router";
import React from "react";

const Hero = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/#attendance");
  };

  return (
    <div className="flex items-center sm:justify-start justify-center sm:pl-32 h-screen bg-cover bg-center bg-bg-mobile sm:bg-bg-bigscreen ">
      <div className="absolute top-0 left-0 right-0 h-screen bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-10rem]">
        <h2 className="text-7xl sm:text-8xl font-display">
          Henriette og Sivert
        </h2>
        <p className="py-3 text-4xl font-display pt-8">17. juni 2023</p>
        <div className="pt-52 text-4xl font-display flex justify-center sm:justify-start">
          <button className="px-8 py-3 border sm:w-full" onClick={handleClick}>
            Påmelding
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

//<div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover bg-bg-mobile sm:bg-bg-bigscreen">
