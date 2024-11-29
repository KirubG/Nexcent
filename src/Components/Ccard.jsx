import React from 'react'
import { cCard } from '../constants';

function Ccard() {
  return (
      <div className="w-full h-32 flex mb-40 justify-evenly">
       {cCard.map((card, index)=>{
        return (
            <div className="w-[320px] h-[290px] text-center shadow-lg mb-8">
              <img
                src={card.icon}
                alt={card.title}
                className="mx-auto w-[63px] h-[54px]"
              />
              <h1 className="text-[31.5px] font-bold text-[#4d4d4d]">
                {card.title}
              </h1>
              <p className="text-[#4d4d4d] mt-4">
               {card.content}
              </p>
            </div>
        );
    })}
    </div>


  );
}

export default Ccard