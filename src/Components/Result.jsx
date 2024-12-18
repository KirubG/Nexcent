import React from "react";
import { Rafiki } from "../assets";
import {Sectionwrapper} from "../hoc"

function Result() {
  return (
    <div className="w-full h-500px flex mt-8">
      <div className="ill w-[30%] h-full flex self-center ml-32">
        <img src={Rafiki} alt="rafiki"  className="w-[442px] h-[328px] mx-auto" />
      </div>

      <div className="w-[60%] h-full flex flex-col gap-8 mr-32">
        <h1 className="text-[50px] font-bold">
          The unseen of spending three years at pixelgrade
        </h1>
        <p className="text-[#4d4d4d]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est iure eos
          explicabo animi hic magnam ad nemo laboriosam quo facilis, cum aperiam
          excepturi! Quod iure enim quidem quasi, rem perspiciatis? Sunt
          deserunt vel neque est nisi, et quibusdam, sit voluptates omnis dicta
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
          laboriosam, recusandae veniam earum libero laborum dolores
          reprehenderit inventore quaerat fugiat? Voluptatum doloremque in
          numquam atque, sint necessitatibus quasi laborum ducimus.
        </p>
        <button className="bg-[#4caf90] text-white p-4 w-fit">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Sectionwrapper(Result, "")
