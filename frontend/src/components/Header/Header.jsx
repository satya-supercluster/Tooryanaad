import React, { useState } from 'react'
import Navbar from './Navbar'
import DropDownMenu from './DropDownMenu'
const Header = () => {
  return (
    <>
      <section className="fixed left-0 right-0 top-0 z-50 w-full flex justify-center items-center text-yellow-500 py-2 sm:py-0 sm:bg-[rgba(30,30,30)] sm:shadow-[0_1px_5px_3px_rgba(0,0,0,0.6)]">
        <Navbar></Navbar>
        <DropDownMenu></DropDownMenu>
      </section>
    </>
  );
}

export default Header