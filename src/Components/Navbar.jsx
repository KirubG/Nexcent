import React from "react";
import { NavbarLinks } from "../constants";
import { Icon } from "../assets";

function Navbar() {
  return (
    <div className="w-full h-20 flex justify-between items-center bg-white opacity-100  shadow-lg fixed top-0 left-0 z-50">
      <div className="logo flex ml-11">
        <img src={Icon}  alt="Nexcent" className="w-[107] h-[16]" />
      </div>
      <div className="flex">
        <div className="flex gap-4 items-center ml-11 text-[#4d4d4d]">
          {NavbarLinks.map((link, index) => {
            return (
              <a className="text-xl hover:text-[#4caf90]" href={link.route}>
                {link.linkName}
              </a>
            );
          })}
        </div>
        <div className="mr-11 ml-8 ">
          <button className="bg-[#4caf90] px-7 py-4 text-white rounded-lg">
            Register Now →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
