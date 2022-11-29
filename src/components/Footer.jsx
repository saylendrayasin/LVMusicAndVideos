import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <footer className="bg-red-900 pt-24 pb-10" >
        <div className="container">
            <div className="flex flex-col flex-wrap w-full px-4 font-medium justify-center ">
            
                <h2 className="self-center font-bold text-4xl text-white mb-8">Las Vegas</h2>
                
                
                <ul className="flex justify-center text-white my-8 gap-8">
                    <li className ="text-4xl">
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <FaInstagram/>
                        </a>
                    </li>
                    <li className ="text-4xl">
                        <a href="https://github.com" target="_blank" rel="noreferrer">
                            <FaGithub/>
                        </a>
                    </li>
                    <li className ="text-4xl">
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                            <FaLinkedin/>
                        </a>
                    </li>
                    
                </ul>
                <p className="self-center font-bold text-sm text-white mb-5">© Copyright 2022, All Rights Reserved</p>

            </div>
        </div>
    </footer>
  );
}

export default Footer;