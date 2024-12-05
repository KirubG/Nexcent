import React from 'react'
import Hero from '../Components/Hero'
import Sponsors from '../Components/Sponsors'
import { Sectionwrapper } from '../hoc'

function Home() {
  return (
    <div className='w-full h-full'>
      <Hero/>
      <Sponsors />
    </div>
  )
}

export default Sectionwrapper(Home, "home")