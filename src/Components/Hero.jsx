import React from "react";
import { Illustration } from "../assets";

function Hero() {
  return (
    <div className="w-[100%] h-[90vh] flex bg-[#f5f7fa] justify-center items-center">
      <div className=" w-[70%] h-[83] ml-32 flex flex-col gap-3">
        <h1 className="text-[70px] font-semibold">
          Lessons and insights
          <br />
          <span className="text-[#4caf90]">from 8 years</span>
        </h1>

        <p className="text-[#4d4d4d]">
          Where to grow your business as a photographer: site or social media?
        </p>

        <button className="bg-[#4caf90] text-white p-4 w-fit rounded-xl">
          Register
        </button>
      </div>

      <div className="illustration w-[30%] h-[83vh] mr-32 ">
        <img
          src={Illustration}
          alt="illustartion"
          width={546}
          height={566}
          className="mt-28"
        />
      </div>
    </div>
  );
}

export default Hero;
