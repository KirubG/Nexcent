import React from 'react'
import Cheader from '../Components/Cheader'
import Ccard from '../Components/Ccard'
import Result from '../Components/Result'

function Community() {
  return (
    <div className='w-full h-full flex flex-col gap-8'>
      <Cheader />
      <Ccard />
      <Result />
    </div>
  )
}

export default Community