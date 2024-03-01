import React, { useState } from 'react'
import Navbar from './Navbar'
import DropDownMenu from './DropDownMenu'
const Header = () => {
  return (
    <>
        <section className='fixed w-full flex justify-center items-center text-yellow-300 p-4'>
            <Navbar></Navbar>
            <DropDownMenu></DropDownMenu>
        </section>
    </>
  )
}

export default Header