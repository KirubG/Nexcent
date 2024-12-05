import React from "react";
import { Sectionwrapper } from "../hoc";
import { T } from "../assets";

const Product = () => {
  return (
    <div className="w-full h-500px flex mt-8">
      <div className=" w-[30%] h-full flex self-center ml-32">
        <img src={T} alt="T" className="w-[400px] h-[400px] mx-auto" />
      </div>

      <div className="w-[70%] h-full flex flex-col gap-8 mr-32">
        <p className="text-[#4d4d4d]">
          Try the AI text generator, a tool for content creation. It leverages a
          transformer-based Large Language Model (LLM) to produce text that
          follows the users instructions. As an AI generator, it offers a range
          of functions, from text generation, to completing sentences, and
          predicting contextually relevant content. It can serve as a sentence
          generator, word generator, and message generator, transforming input
          into coherent text. It is an enhanced version of AI Text Generator
          that provides more knowledge, fewer errors, improved reasoning skills,
          better verbal fluidity, and an overall superior performance. Due to
          the larger AI model, Genius Mode is only available via subscription to
          DeepAI Pro. However, the added benefits often make it a worthwhile
          investment. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Deleniti impedit iure necessitatibus suscipit sapiente architecto,
          doloribus eaque laborum delectus ipsa eum iusto maiores possimus
          quaerat dolore aliquam enim, rerum sint. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Vitae reiciendis iusto nesciunt
          consectetur saepe inventore atque harum nam magnam natus. Facilis qui
          nulla nisi quos natus veritatis dicta iste eaque!
        </p>
        <h1>
          <span className="text-[#4caf90] font-bold text-[20px]">Tim Smith</span> <br />
          British Dragon Boat Racing Association
        </h1>
      </div>
    </div>
  );
};

export default Sectionwrapper(Product, "");
