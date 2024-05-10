import React from 'react'
const Navbar = () => {
  return (
    <div className="innerWidth flex justify-between items-center p-4 rounded-full bg-black max-sm:hidden shadow-[0_0px_7px_0px_rgba(255,255,255,0.5)]">
      {/* Navbar for large screens */}
      <a className="px-4">तूर्यनाद समिति</a>
      <div className="flex gap-4">
        <a href="" className=" hover:scale-110">
          मुख्य पृष्ठ
        </a>
        <a href="" className=" hover:scale-110">
          अतिथि
        </a>
        <a href="" className=" hover:scale-110">
          सदस्य
        </a>
        <a href="" className=" hover:scale-110">
          वीथिका
        </a>
      </div>
    </div>
  );
}

export default Navbar