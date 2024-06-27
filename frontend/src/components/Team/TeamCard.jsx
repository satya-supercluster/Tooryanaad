import React from "react";
import { motion } from "framer-motion";
const TeamCard = ({ member }) => {
  return (
    <motion.div className="flex flex-col gap-1 pt-5 justify-center items-center overflow-hidden rounded-2xl shadow-[0_0px_60px_15px_rgba(0,0,0,0.3)] sm:hover:scale-[1.05] ">
      <img
        src={`/IMAGE/${member.member_type}/${member.alias}.jpg`}
        alt={member.alias}
        className="w-[70%] aspect-square object-cover rounded-tl-3xl rounded-tr-md rounded-bl-md rounded-br-3xl border-[3px] border-yellow-500 shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px]"
      />
      <div className=" w-full text-white p-1 text-center">
        <p className="text-lg font-semibold text-white">{member.name}</p>
        <p className="text-sm text-white">{member.post}</p>
        <p>Here all the link</p>
      </div>
    </motion.div>
  );
};

export default TeamCard;
