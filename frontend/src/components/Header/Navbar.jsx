import React from 'react'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="innerWidth max-w-[1200px] flex justify-between items-center p-4 bg-[rgba(30,30,30)] max-sm:hidden">
      {/* Navbar for large screens */}
      {/* <a className="px-4 font-bold text-2xl">तूर्यनाद समिति</a> */}
      <NavLink onClick={handleClick} className="px-4 font-bold text-2xl" to="/">
        तूर्यनाद समिति
      </NavLink>
      <div className="flex gap-5 lg:gap-10 text-xl max-md:text-lg">
        <NavLink onClick={handleClick} className="hover:scale-110" to="/">
          मुख्य पृष्ठ
        </NavLink>
        <NavLink onClick={handleClick} className="hover:scale-110" to="/guests">
          अतिथि
        </NavLink>
        <NavLink onClick={handleClick} className="hover:scale-110" to="/team">
          सदस्य
        </NavLink>
        <NavLink onClick={handleClick} className="hover:scale-110" to="/events">
          प्रतियोगिताएँ
        </NavLink>
        <NavLink onClick={handleClick} className="hover:scale-110" to="/">
          वीथिका
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar