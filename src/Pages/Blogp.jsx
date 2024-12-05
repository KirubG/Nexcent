import React from 'react'
import Blog from '../Components/Blog'
import { Sectionwrapper } from '../hoc'
import Product from '../Components/Product'

const Blogp = () => {
  return (
    <div>
        <Blog />
        <Product />
    </div>
  )
}

export default Sectionwrapper(Blogp, "blog")