import React from 'react'
import { useData } from "../../Data/useData";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const MessageBox = () => {
  const { showMsg, setShowMsg } = useData();
  return (
    <div>
      {showMsg ? (
        <motion.div
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed top-24 right-0 sm:right-[10px] flex justify-center gap-1 items-center"
        >
          <Link
            to="/T_Reg25"
            onClick={() => {
              setShowMsg(false);
            }}
            className="text-black text-sm lg:text-lg bg-yellow-500 p-2 rounded-2xl shadow-[0_1px_2px_1px_rgba(0,0,0,0.6)] cursor-pointer"
          >
            तूर्यनाद'25 हेतु पंजीयन करें
          </Link>
          <div
            onClick={() => {
              setShowMsg(false);
            }}
            className="text-yellow-500 text-2xl p-1 cursor-pointer"
          >
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </motion.div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default MessageBox