import React from 'react'
const Navbar = () => {
  return (
    <div className="innerWidth flex justify-between items-center p-4 rounded-full bg-[rgba(20,20,20)] max-sm:hidden">
      {/* Navbar for large screens */}
      <a className="px-4 font-bold text-2xl">तूर्यनाद समिति</a>
      <div className="flex gap-5 lg:gap-10 text-xl">
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