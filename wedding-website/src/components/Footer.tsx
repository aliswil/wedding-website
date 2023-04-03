import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className=" shadow bg-[#a5a5a5]">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <span className="self-center text-2xl font-mark whitespace-nowrap dark:text-white">
              Vi gleder oss!
            </span>
          </div>
          <ul className="hidden sm:flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-white">
            <li className="p-4">
              <Link href="/#history">Historie</Link>
            </li>
            <li className="p-4">
              <Link href="/#program">Program</Link>
            </li>
            <li className="p-4">
              <Link href="/#info">Praktisk info</Link>
            </li>
            <li className="p-4">
              <Link href="/#gifts">Gaver</Link>
            </li>
            <li className="p-4">
              <Link href="/#contact">Kontakt</Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-white sm:text-center dark:text-white">
          © 2023{" "}
          <a
            href="https://www.linkedin.com/in/alis-wiken-wilson-890912159/"
            className="hover:underline"
          >
            utviklet av Alis Wiken Wilson
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
