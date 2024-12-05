import React from "react";
import { Abooking, Aclub, Amember, Apayment } from "../assets";

function Achievement() {
  return (
    <div className="w-full h-[500px] bg-[#f5f7fa] flex">
      <div className="w-[50%] h-full ml-32 flex flex-col mt-20">
        <h1 className="text-[40px] font-bold text-start">
          Helping a local <br />{" "}
          <span className="text-[#4caf90]">business reinvestment itself</span>
        </h1>
        <p className="text-start">
          We reached here with our hard work and dedication
        </p>
      </div>

      <div className="w-[50%] h-full flex">
        <div className="w-[25vw] h-full">
          <div className=" w-full h-[50%] flex">
            <div className="ic mt-6">
              <img src={Amember} alt="member" className="w-[122px] h-[122px]" />
            </div>
            <div className="self-center">
              <h1 className="text-[30px] font-bold">2,245,341</h1>
              <p className="text-[#717171]">Members</p>
            </div>
          </div>
          <div className="flex">
            <div className="ic mt-6">
              <img
                src={Abooking}
                alt="event booking"
                className="w-[122px] h-[122px]"
              />
            </div>
            <div className="self-center">
              <h1 className="text-[30px] font-bold">828,867</h1>
              <p className="text-[#717171]">Event Booking</p>
            </div>
          </div>
        </div>

        <div className="w-[25vw] h-full">
          <div className=" w-full h-[50%] flex">
            <div className="ic mt-6">
              <img src={Aclub} alt="club" className="w-[122px] h-[122px]" />
            </div>
            <div className="self-center">
              <h1 className="text-[30px] font-bold">46,328</h1>
              <p className="text-[#717171]">Clubs</p>
            </div>
          </div>
          <div className="flex">
            <div className="ic mt-6">
              <img
                src={Apayment}
                alt="payment"
                className="w-[122px] h-[122px]"
              />
            </div>
            <div className="self-center">
              <h1 className="text-[30px] font-bold">1,926,436</h1>
              <p className="text-[#717171]">Payments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievement;
