import React from "react";
import { Pana } from "../assets";
import Sectionwrapper from "../hoc/Sectionwrapper";

function Blog() {
  return (
    <div className="w-full h-500px flex my-8 ">
      <div className=" w-[30%] h-full flex self-center ml-32">
        <img src={Pana} alt="pana" className="w-[442px] h-[448px] mx-auto" />
      </div>

      <div className="w-[70%] h-full flex flex-col gap-8 mr-32">
        <h1 className="text-[50px] font-bold">
          How to design your site footer like <br /> we did
        </h1>
        <p className="text-[#4d4d4d]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est iure eos
          explicabo animi hic magnam ad nemo laboriosam quo facilis, cum aperiam
          excepturi! Quod iure enim quidem quasi, rem perspiciatis? Sunt
          deserunt vel neque est nisi, et quibusdam, sit voluptates omnis dicta
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
          laboriosam, recusandae veniam earum libero laborum dolores
          reprehenderit inventore quaerat fugiat? Voluptatum doloremque in
          numquam atque, sint necessitatibus quasi laborum ducimus. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Iusto amet molestias eius
          sit ex exercitationem provident reprehenderit magnam neque recusandae
          veritatis non porro placeat, repudiandae error dignissimos aut soluta
          facilis!
        </p>
        <button className="bg-[#4caf90] text-white p-4 w-fit">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Sectionwrapper(Blog, "");
