import React from "react";
import { NavbarLinks } from "../constants";
import { NavLink } from "react-router-dom";
import { Icon } from "../assets";

function Navbar() {
  return (
    <div className="w-full h-20 flex justify-between items-center bg-white ">
      <div className="logo flex ml-11">
        <img src={Icon} alt="Nexcent" />
        <h1 className="text-4xl text-[#263238] font-bold">Nexcent</h1>
      </div>
      <div className="flex">
        <div className="flex gap-4 items-center ml-11 text-[#4d4d4d]">
          {NavbarLinks.map((link, index) => {
            return (
              <NavLink className="text-2xl" to={link.route}>
                {link.linkName}
              </NavLink>
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
