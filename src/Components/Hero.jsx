import React from 'react'
import {Illustration} from '../assets'

function Hero() {
  return (
    <div className='container w-full h-[400px] flex'>
       <div className="header w-[75%] h-full">

       </div>


       <div className="illustration w-[25%] h-full">
        <img src={Illustration} alt="illustartion" className='w-full h-full' />
       </div>
    </div>
  )
}

export default Hero