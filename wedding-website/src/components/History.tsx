import React from "react";
import bilde4 from "../../public/4.jpeg";
import bilde3 from "../../public/3.jpeg";
import bilde5 from "../../public/5.jpeg";
import Image from "next/image";

function History() {
  return (
    <div
      id="history"
      className="flex items-center justify-center h-full bg-[#EDEDE9]"
    >
      <div className="p-5 text-gray-600 z-[2] pt-20 pb-20">
        <h2 className=" text-7xl font-bold font-mark">Litt historie</h2>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              February 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Første møte
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Blablablabla
            </p>
            <Image
              className="object-scale-down md:h-auto md:max-w-lg"
              src={bilde3}
              alt=""
              layout=""
              objectFit=""
            />
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              March 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Frieri
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400 mb-4">
              Blablablabla
            </p>
            <Image
              className="object-scale-down md:h-auto md:max-w-lg"
              src={bilde4}
              alt=""
              layout=""
              objectFit=""
            />
          </li>
          <li className="ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              April 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Bebis
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400 mb-4">
              Blablablabla
            </p>
            <Image
              className="object-scale-down md:h-auto md:max-w-lg"
              src={bilde5}
              alt=""
              layout=""
              objectFit=""
            />
          </li>
        </ol>
      </div>
    </div>
  );
}

export default History;
