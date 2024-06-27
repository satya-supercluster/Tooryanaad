import React from 'react'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="innerWidth max-w-[1200px] flex justify-between items-center p-4 bg-[rgba(20,20,20)] max-sm:hidden">
      {/* Navbar for large screens */}
      {/* <a className="px-4 font-bold text-2xl">तूर्यनाद समिति</a> */}
      <NavLink className="px-4 font-bold text-2xl" to="/">
        तूर्यनाद समिति
      </NavLink>
      <div className="flex gap-5 lg:gap-10 text-xl">
        <NavLink className="hover:scale-110" to="/">
          मुख्य पृष्ठ
        </NavLink>
        <NavLink className="hover:scale-110" to="/">
          अतिथि
        </NavLink>
        <NavLink className="hover:scale-110" to="/">
          सदस्य
        </NavLink>
        <NavLink className="hover:scale-110" to="/">
          वीथिका
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar