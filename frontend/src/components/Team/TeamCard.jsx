import React from "react";
import { motion } from "framer-motion";
const TeamCard = ({ member }) => {
  const initialX = Math.random() < 0.5 ? -50 : 50;
  return (
    <motion.div
      initial={{ opacity: 0, x: initialX, y: initialX }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full flex flex-col gap-1 pt-5 pb-3 justify-center items-center overflow-hidden rounded-2xl shadow-[0_0px_60px_15px_rgba(0,0,0,0.3)] sm:hover:scale-[1.05] "
    >
      <img
        src={`/team/${member.member_type}/${member.alias}.jpg`}
        alt={member.alias}
        className="w-[70%] aspect-square object-cover rounded-tl-3xl rounded-tr-md rounded-bl-md rounded-br-3xl border-[3px] border-yellow-500 shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px]"
      />
      <div className=" w-full text-white p-1 text-center">
        <p className="text-lg font-semibold">{member.name}</p>
        <p className="text-sm ">{member.post}</p>
        <p>Here all the link</p>
      </div>
    </motion.div>
  );
};

export default TeamCard;
