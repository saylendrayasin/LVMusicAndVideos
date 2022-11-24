import React, { useState } from "react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white lg:bg-transparent shadow-lg lg:shadow-none border-b-2 lg:border-none mb-3 ">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row justify-between items-start">
        <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
          <a className="flex font-bold font-logo text-[20px] " href="/">
            <img src="https://placehold.it/100x100" alt="LV" />
          </a>
          <button
            className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className="fas fa-bars" />
          </button>
        </div>
        <div
          className={
            // eslint-disable-next-line prefer-template, operator-linebreak
            "md:flex flex-grow items-start" + (isOpen ? "flex" : " hidden")
          }
        >
          <ul className="flex flex-col md:flex-row justify-center list-none mt-2 md:ml-auto">
            <li>
              <a
                className="px-3 py-2 text-md font-medium leading-snug text-primary-3 md:text-blue-400 hover:opacity-75x"
                href="/home"
              >
                Music
              </a>
            </li>
            <li>
              <a
                className="px-3 py-2 text-md font-medium leading-snug text-primary-3 md:text-blue-400 hover:opacity-75x"
                href="/home"
              >
                Video
              </a>
            </li>
            <li>
              <a
                className="px-3 py-2 text-md font-medium leading-snug text-primary-3 md:text-blue-400 hover:opacity-75x"
                href="/home"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
