import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, delay } from "framer-motion";
import Hamburger from "hamburger-react";
import { HiChevronLeft } from "react-icons/hi";
import { NavLink } from "react-router-dom";
const DropDownMenu = () => {
  const [dropDown, setDropDown] = useState(false);
  const [secondaryDropDown, setSecondaryDropDown] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropDown(false);
        setSecondaryDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      className="w-[90%] justify-center items-between sm:hidden flex flex-col gap-1"
      ref={dropdownRef}
    >
      {/* Dropdown Menu for short Screens */}

      <motion.div
        initial={{ scale: 2 }}
        animate={{ scale: 1 }}
        transition={{duration:1,bounce:0.5,type:"spring"}}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setDropDown(!dropDown);
          setSecondaryDropDown(false);
        }}
        className="flex justify-between items-center bg-[rgba(30,30,30)] p-2 rounded-lg shadow-sm shadow-yellow-600 "
      >
        <div className="pl-4 font-semibold text-lg">तूर्यनाद समिति</div>
        <Hamburger
          direction="right"
          toggled={dropDown}
          toggle={setDropDown}
          size={25}
          className=" items-center justify-center flex"
        ></Hamburger>
      </motion.div>

      {/* Primary DropDownMenu */}

      <div className="flex flex-col items-center min-[480px]:w-1/2 min-[480px]:ml-auto">
        <AnimatePresence>
          {dropDown === true && secondaryDropDown === false && (
            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{
                duration: "0.44",
              }}
            >
              <NavLink
                to="/"
                onClick={() => {
                  setDropDown(!dropDown);
                  setSecondaryDropDown(false);
                }}
                className="bg-[rgba(30,30,30)] w-full flex justify-center items-center text-center py-2 rounded-t-lg"
              >
                मुख्य पृष्ठ
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {dropDown === true && secondaryDropDown === false && (
            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{
                duration: "0.39",
              }}
            >
              <NavLink
                to="/guests"
                onClick={() => {
                  setDropDown(!dropDown);
                  setSecondaryDropDown(false);
                }}
                className="bg-[rgba(30,30,30)] w-full flex justify-center items-center text-center py-2"
              >
                अतिथि
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {dropDown === true && secondaryDropDown === false && (
            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{
                duration: "0.34",
              }}
            >
              <NavLink
                to="/events"
                onClick={() => {
                  setDropDown(!dropDown);
                  setSecondaryDropDown(false);
                }}
                className="bg-[rgba(30,30,30)] w-full flex justify-center items-center text-center py-2"
              >
                प्रतियोगिताएँ
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {dropDown === true && secondaryDropDown === false && (
            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{
                duration: "0.29",
              }}
            >
              <NavLink
                onClick={() => setSecondaryDropDown(true)}
                className="bg-[rgba(30,30,30)] w-full flex justify-center items-center text-center py-2"
              >
                समिति सदस्य
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {dropDown === true && secondaryDropDown === false && (
            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{
                duration: "0.24",
              }}
            >
              <NavLink
                to="/gallery"
                onClick={() => {
                  setDropDown(!dropDown);
                  setSecondaryDropDown(false);
                }}
                className="bg-[rgba(30,30,30)] w-full flex justify-center items-center text-center py-2 rounded-b-lg "
              >
                वीथिका
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Secondary DropDownMenu */}
        <AnimatePresence>
          {dropDown === true && secondaryDropDown === true && (
            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50, transition: { duration: "0" } }}
              transition={{
                duration: "0.25",
                delay: "0.45",
              }}
            >
              <NavLink
                onClick={() => setSecondaryDropDown(!secondaryDropDown)}
                className="bg-[rgba(30,30,30)] w-full flex justify-center items-center text-center py-2 rounded-t-lg "
              >
                <HiChevronLeft className="relative left-[-20%] font-bold text-2xl" />
                समिति सदस्य
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {dropDown === true && secondaryDropDown === true && (
            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50, transition: { duration: "0" } }}
              transition={{
                duration: "0.2",
                delay: "0.45",
              }}
            >
              <NavLink
                to="/founders"
                onClick={() => {
                  setDropDown(!dropDown);
                  setSecondaryDropDown(false);
                }}
                className="bg-[rgba(30,30,30)] w-full flex justify-center items-center text-center py-2 "
              >
                संस्थापक सदस्य
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {dropDown === true && secondaryDropDown === true && (
            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50, transition: { duration: "0" } }}
              transition={{
                duration: "0.15",
                delay: "0.45",
              }}
            >
              <NavLink
                to="/executives"
                onClick={() => {
                  setDropDown(!dropDown);
                  setSecondaryDropDown(false);
                }}
                className="bg-[rgba(30,30,30)] w-full flex justify-center items-center text-center py-2 "
              >
                कार्यकारिणी समिति
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {dropDown === true && secondaryDropDown === true && (
            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50, transition: { duration: "0" } }}
              transition={{
                duration: "0.10",
                delay: "0.45",
              }}
            >
              <NavLink
                to="/regulars"
                onClick={() => {
                  setDropDown(!dropDown);
                  setSecondaryDropDown(false);
                }}
                className="bg-[rgba(30,30,30)] w-full flex justify-center items-center text-center py-2 "
              >
                सदस्य
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {dropDown === true && secondaryDropDown === true && (
            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50, transition: { duration: "0" } }}
              transition={{
                duration: "0.10",
                delay: "0.45",
              }}
            >
              <NavLink
                to="/PastMembers"
                onClick={() => {
                  setDropDown(!dropDown);
                  setSecondaryDropDown(false);
                }}
                className="bg-[rgba(30,30,30)] w-full flex justify-center items-center text-center py-2 rounded-b-lg "
              >
                पूर्व सदस्य
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DropDownMenu;
