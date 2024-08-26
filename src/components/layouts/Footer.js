import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className=" text-white-100 bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700 body-font">
        <div className=" container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-extrabold items-center uppercase text-gray-100"
          >
            <Image alt="Logo" src={"/logo.png"} width={"40"} height={"40"} />
            <p>CraveSlice🫠</p>
          </Link>
          <p className=" test-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 ">
            Copyright © 2024 Crave Slice
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
