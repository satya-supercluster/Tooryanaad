import React, { useState } from 'react'
import Navbar from './Navbar'
import DropDownMenu from './DropDownMenu'
const Header = () => {
  return (
    <>
      <section className="fixed left-0 right-0 top-0 z-50 w-full flex justify-center items-center text-yellow-300 py-2 sm:py-0 sm:bg-[rgba(20,20,20)]">
        <Navbar></Navbar>
        <DropDownMenu></DropDownMenu>
      </section>
    </>
  );
}

export default Header