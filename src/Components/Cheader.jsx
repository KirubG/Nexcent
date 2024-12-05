import React from "react";
import { Sectionwrapper } from "../hoc";

function Cheader() {
  return (
    <div className="w-full h-fit flex flex-col mt-8">
        <h1 className="text-center text-[50px] font-bold text-[#4d4d4d]">
          Manage your entire community <br /> in a single system
        </h1>
        <p className="text-[#4d4d4d] text-center">
          Who is Nexcent suitable for?
        </p>
        
    </div>
  );
}

export default Sectionwrapper(Cheader, "")
