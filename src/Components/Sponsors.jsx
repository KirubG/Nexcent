import React from 'react'
import { Logo, Logo1, Logo2, Logo3 } from "../assets";
import "../index.css"
import { Sectionwrapper } from '../hoc';

const Sponsors = () => {
  return (
    <>
    <div className='mb-8'>
      <h1 className='text-[40px] font-medium text-center'>Our Clients</h1>
      <p className='text-center '>We have been working with some fortune +500 clients</p>
    </div>
    <div class="sponsor-slider">
      <div class="logos flex justify-evenly">
        <img src={Logo} alt="Logo 1" class="logo" />
        <img src={Logo1} alt="Logo 2" class="logo" />
        <img src={Logo2} alt="Logo 3" class="logo" />
        <img src={Logo3} alt="Logo 4" class="logo" />
      </div>
    </div>
    </>
  );
}

export default Sectionwrapper(Sponsors, "")