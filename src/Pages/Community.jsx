import React from "react";
import Cheader from "../Components/Cheader";
import Ccard from "../Components/Ccard";
import Result from "../Components/Result";
import Achievement from "../Components/Achievement";
import { Sectionwrapper } from "../hoc";

function Community() {
  return (
    <div className="w-full h-full flex flex-col gap-8">
      <Cheader />
      <Ccard />
      <Result />
      <Achievement />
    </div>
  );
}

export default Sectionwrapper(Community, "community");
