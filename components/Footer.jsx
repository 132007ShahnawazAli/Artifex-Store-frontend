import Link from "next/link";
import React from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoMdMail,
} from "react-icons/io";
// import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <>
      <footer className="bg-white-900">
        <div className="container px-6 py-8 mx-auto">
          <div className="flex flex-col items-center text-center">
            <a href="#">
              <img className="w-auto h-7" src="/logo.svg" alt="" />
            </a>
            <div className="flex flex-wrap justify-center mt-6 -mx-4">
              <a
                href="#"
                className="mx-4 text-sm text-black transition-colors duration-300 hover:text-blue-500 text-blackdark:hover:text-blue-400"
                aria-label="Reddit"
              >
                {" "}
                Home{" "}
              </a>
              <a
                href="#"
                className="mx-4 text-sm text-black transition-colors duration-300 hover:text-blue-500 text-blackdark:hover:text-blue-400"
                aria-label="Reddit"
              >
                {" "}
                About{" "}
              </a>
              <a
                href="#"
                className="mx-4 text-sm text-black transition-colors duration-300 hover:text-blue-500 text-blackdark:hover:text-blue-400"
                aria-label="Reddit"
              >
                {" "}
                Contact{" "}
              </a>
              <a
                href="#"
                className="mx-4 text-sm text-black transition-colors duration-300 hover:text-blue-500 text-blackdark:hover:text-blue-400"
                aria-label="Reddit"
              >
                {" "}
                Terms and Policy{" "}
              </a>
            </div>
          </div>
          <hr className="my-6 border-neutral-400" />
          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm text-zinc-950">
              © Copyright 2021. All Rights Reserved.
            </p>
            <div className="flex -mx-2">
              <a
                href="#"
                className="mx-2 text-black transition-colors duration-300 text-blackhover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Mail"
              >
                <IoMdMail />
              </a>
              <a
                href="#"
                className="mx-2 text-black transition-colors duration-300 text-blackhover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Facebook"
              >
                <IoLogoFacebook />
              </a>
              <a
                href="#"
                className="mx-2 text-black transition-colors duration-300 text-blackhover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Instagram"
              >
                <IoLogoInstagram />
              </a>
              <a
                href="#"
                className="mx-2 text-black transition-colors duration-300 text-blackhover:text-blue-500 dark:hover:text-blue-400"
                aria-label="twitter"
              >
                <IoLogoTwitter />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
