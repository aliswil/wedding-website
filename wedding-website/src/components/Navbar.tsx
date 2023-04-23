import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#EDEDE9");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1
            style={{ color: `${textColor}` }}
            className="text-4xl font-display"
          >
            H&S
          </h1>
        </Link>

        <ul
          style={{ color: `${textColor}` }}
          className="hidden sm:flex font-display "
        >
          <li className="p-4">
            <Link href="/#history">Historie</Link>
          </li>
          <li className="p-4">
            <Link href="/#info">Praktisk info</Link>
          </li>
          <li className="p-4">
            <Link href="/#giftlist">Gaveønske</Link>
          </li>
          <li className="p-4">
            <Link href="/#attendance">Påmelding</Link>
          </li>
          <li className="p-4">
            <Link href="/#contact">Kontakt</Link>
          </li>
        </ul>

        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile view */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black opacity-80 text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li className="p-4 text-4xl hover:text-gray-500 font-display">
              <Link href="/#history">Historie</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500 font-display">
              <Link href="/#info">Praktisk info</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500 font-display">
              <Link href="/#giftlist">Gaveønske</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500 font-display">
              <Link href="/#attendance">Påmelding</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500 font-display">
              <Link href="/#contact">Kontakt</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
