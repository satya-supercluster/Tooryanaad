import React, { useState } from 'react'
import { motion,AnimatePresence } from "framer-motion"
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
              <div className='pl-4 font-semibold text-lg'>तूर्यनाद समिति</div>
              <Hamburger direction='right' toggled={dropDown} toggle={setDropDown} size={25} className=' items-center justify-center flex'></Hamburger>
        </motion.div>


        {/* Primary DropDownMenu */}

        {
        (dropDown===true)&&
        <div 
        className='flex flex-col items-center min-[480px]:w-1/2 min-[480px]:ml-auto'
        >
            <AnimatePresence>
            <motion.div
              className='w-full'
              initial={{opacity:0,x:-150}}
              animate={{opacity:1,x:0}}
              exit={{opacity:0,x:150}}
            >
             <a href="" className='bg-black w-full flex justify-center items-center text-center py-2 rounded-t-lg hover:scale-110'>मुख्य पृष्ठ</a>
            </motion.div>
            </AnimatePresence>

            <AnimatePresence>
            <motion.div
              className='w-full'
              initial={{opacity:0,x:150}}
              animate={{opacity:1,x:0}}
              exit={{opacity:0,x:-150}}
            >
            <a href="" className='bg-black w-full flex justify-center items-center text-center py-2 hover:scale-110'>अतिथि</a>
            </motion.div>
            </AnimatePresence>

            <AnimatePresence>
            <motion.div
              className='w-full'
              initial={{opacity:0,x:-150}}
              animate={{opacity:1,x:0}}
              exit={{opacity:0,x:150}}
            >
            <a href="" className='bg-black w-full flex justify-center items-center text-center py-2 hover:scale-110'>सदस्य</a>
            </motion.div>
            </AnimatePresence>

            <AnimatePresence>
            <motion.div
              className='w-full'
              initial={{opacity:0,x:150}}
              animate={{opacity:1,x:0}}
              exit={{opacity:0,x:-150}}
            >
            <a href="" className='bg-black w-full flex justify-center items-center text-center py-2 rounded-b-lg hover:scale-110'>वीथिका</a>
            </motion.div>
            </AnimatePresence>
        </div>
        }  


    </div>
  )
}

export default DropDownMenu