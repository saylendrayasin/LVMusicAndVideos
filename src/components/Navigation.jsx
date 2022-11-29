import { useState } from "react";
import React from "react";

function Navigation() {
  const [isActivated, setIsActivated] = useState(false);

  return (
    <header className="sticky top-0 left-0 z-10 flex w-full items-center bg-black opacity-95">
      <div className="container">
        <div className="relative flex items-center justify-between">
          <div className="px-4">
            <a
              href="#home"
              className="block py-6 text-4xl font-bold text-red-600 "
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
                  ? "hamburger-active absolute right-4 block lg:hidden"
                  : "absolute right-4 block lg:hidden"
              }
            >
              <span className="hamburger-line origin-top-left transition duration-300 ease-in-out "></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
            </button>
            <nav
              id="nav-menu"
              className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none 
              ${isActivated ? "block" : "hidden"}`}
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="/"
                    className="mx-8 flex py-2 text-xl font-bold text-black group-hover:text-primary lg:text-white"
                  >
                    Movies
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#home"
                    className="mx-8 flex py-2 text-xl font-bold text-black group-hover:text-primary lg:text-white"
                  >
                    Music
                  </a>
                </li>
                <li className="group">
                  <a
                    href="/about"
                    className="mx-8 flex py-2 text-xl font-bold text-black group-hover:text-primary lg:text-white"
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
