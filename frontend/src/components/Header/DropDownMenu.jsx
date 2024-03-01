import React, { useState } from 'react'
import { motion } from "framer-motion"
import Hamburger from 'hamburger-react'
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}
const DropDownMenu = () => {
  const [dropDown,setDropDown]=useState(false);
  
  return (
    <div 
    className='w-[90%] justify-center items-between sm:hidden flex flex-col gap-0.5'
    >
        {/* Dropdown Menu for short Screens */}

        <motion.div 
          whileTap={{ scale: 0.97 }}
          onClick={() => setDropDown(!dropDown)}
          className='flex justify-between items-center bg-black p-3 rounded-lg'
          >
              <a className='px-4 font-semibold text-lg'>तूर्यनाद समिति</a>
              <Hamburger direction='right' toggled={dropDown} toggle={setDropDown} className=' items-center justify-center flex'></Hamburger>
        </motion.div>


        {/* Primary DropDownMenu */}

        {
        (dropDown===true)&&
        <div 
        className='flex flex-col gap-1 items-center bg-black p-4 rounded-lg min-[480px]:w-1/2 min-[480px]:ml-auto'
        >
            <a href="" className=' hover:scale-110'>मुख्य पृष्ठ</a>
            <a href="" className=' hover:scale-110'>अतिथि</a>
            <a href="" className=' hover:scale-110'>सदस्य</a>
            <a href="" className=' hover:scale-110'>वीथिका</a>
        </div>
        }  


    </div>
  )
}

export default DropDownMenu