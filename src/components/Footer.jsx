import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-red-900 pt-24 pb-10">
      <div className="container">
        <div className="flex w-full flex-col flex-wrap justify-center px-4 font-medium ">
          <h2 className="mb-8 self-center text-4xl font-bold text-white">
            Las Vegas
          </h2>

          <ul className="my-8 flex justify-center gap-8 text-white">
            <li className="text-4xl">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </li>
            <li className="text-4xl">
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
            </li>
            <li className="text-4xl">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </li>
          </ul>
          <p className="mb-5 self-center text-sm font-bold text-white">
            © Copyright 2022, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
