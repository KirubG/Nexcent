import React from "react";
import { Rafiki } from "../assets";

function Result() {
  return (
    <div className="w-full h-400px flex">
      <div className="ill w-[30%] h-full">
        <img src={Rafiki} alt="rafiki" className="w-[294px] h-[218px]" />
      </div>

      <div className="w-[70%] h-full">
        <h1>The unseen of spending three years at pixelgrade</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est iure eos
          explicabo animi hic magnam ad nemo laboriosam quo facilis, cum aperiam
          excepturi! Quod iure enim quidem quasi, rem perspiciatis? Sunt
          deserunt vel neque est nisi, et quibusdam, sit voluptates omnis dicta
          accusamus illo ipsum reprehenderit enim sed ipsa tempore deleniti,
          nemo necessitatibus aperiam error fuga sapiente itaque officiis! Ab.
        </p>
        <button></button>
      </div>
    </div>
  );
}

export default Result;
