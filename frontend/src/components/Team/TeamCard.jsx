import React from "react";
import { motion } from "framer-motion";
const TeamCard = ({ member }) => {
  return (
    <motion.div className="flex flex-col gap-1 pt-5 justify-center items-center overflow-hidden rounded-2xl shadow-[0_0px_60px_15px_rgba(0,0,0,0.3)] sm:hover:scale-[1.05] ">
      <img
        src={member.image}
        alt={member.name}
        className="w-[70%] h-auto object-cover rounded-tl-3xl rounded-tr-md rounded-bl-md rounded-br-3xl"
      />
      <div className=" w-full text-white p-1 text-center">
        <p className="text-sm font-semibold text-white">{member.name}</p>
        <p className="text-sm text-white">{member.position}</p>
        <p>Here all the link</p>
      </div>
    </motion.div>
  );
};

export default TeamCard;
