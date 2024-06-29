import React from 'react'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="innerWidth max-w-[1200px] flex justify-between items-center p-4 bg-[rgba(30,30,30)] max-sm:hidden">
      {/* Navbar for large screens */}
      <NavLink className="px-4 font-bold text-2xl" to="/">
        तूर्यनाद समिति
      </NavLink>
      <div className="flex gap-5 lg:gap-10 text-xl max-md:text-lg">
        <NavLink className="hover:scale-110" to="/">
          मुख्य पृष्ठ
        </NavLink>
        <NavLink className="hover:scale-110" to="/guests">
          अतिथि
        </NavLink>
        <NavLink className="hover:scale-110" to="/team">
          सदस्य
        </NavLink>
        <NavLink className="hover:scale-110" to="/events">
          प्रतियोगिताएँ
        </NavLink>
        <NavLink className="hover:scale-110" to="/gallery">
          वीथिका
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar