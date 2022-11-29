import { useState } from "react";
import React from "react";

function Navigation() {
  const [isActivated, setIsActivated] = useState(false);

  return (
    <header className="sticky bg-black opacity-95 top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a
              href="#home"
              className="font-bold text-4xl text-red-600 block py-6 "
            >
              𝓛𝓪𝓼 𝓥𝓮𝓰𝓪𝓼
            </a>
          </div>
          <div className="flex items-center px-4 ">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              onClick={() => setIsActivated(!isActivated)}
              className={
                isActivated
                  ? "block absolute right-4 hamburger-active lg:hidden"
                  : "block absolute right-4 lg:hidden"
              }
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left "></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>
            <nav
              id="nav-menu"
              className={`lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full 
              ${isActivated ? "block" : "hidden"}`}
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="/"
                    className="text-xl font-bold text-black lg:text-white py-2 mx-8 flex group-hover:text-primary"
                  >
                    Movies
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#home"
                    className="text-xl font-bold text-black lg:text-white py-2 mx-8 flex group-hover:text-primary"
                  >
                    Music
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#home"
                    className="text-xl font-bold text-black lg:text-white py-2 mx-8 flex group-hover:text-primary"
                  >
                    About
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Navigation;
