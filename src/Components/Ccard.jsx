import React from "react";
import { cCard } from "../constants";
import { Sectionwrapper } from "../hoc";

function Ccard() {
  return (
    <div className="w-full h-[400px] flex bg-white mb-40 gap-32 flex-wrap ">
      {cCard.map((card, index) => {
        return (
          <div className="w-[330px] h-[300px] text-center shadow-2xl mb-8 rounded-lg ">
            <img
              src={card.icon}
              alt={card.title}
              className="mx-auto w-[63px] h-[54px]"
            />
            <h1 className="text-[31.5px] font-bold text-[#4d4d4d]">
              {card.title}
            </h1>
            <p className="text-[#4d4d4d] mt-4">{card.content}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Sectionwrapper(Ccard, "");
