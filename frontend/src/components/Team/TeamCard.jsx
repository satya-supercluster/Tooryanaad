import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const LazyImage = lazy(() => import('../LazyLoader/Lazy'));

const TeamCard = ({ member }) => {
  const initialX = Math.random() < 0.5 ? -50 : 50;

  const SocialIcon = ({ link, icon, color }) => {
    if (link && link !== "") {
      return (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-${color}-500 px-2 hover:bg-[rgb(30,30,30)] hover:text-${color}-600 cursor-pointer`}
        >
          <FontAwesomeIcon icon={icon} />
        </a>
      );
    } else {
      return (
        <span className={`text-white px-2 hover:bg-[rgb(30,30,30)] cursor-not-allowed`}>
          <FontAwesomeIcon icon={icon} />
        </span>
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0,  y: 50, x: initialX }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full flex flex-col gap-1 pt-5 pb-3 justify-center items-center overflow-hidden rounded-2xl shadow-[0_0px_60px_15px_rgba(0,0,0,0.3)] sm:hover:scale-[1.05] "
    >
      <Suspense fallback={<div className="w-[70%] aspect-square bg-gray-200 rounded-tl-3xl rounded-tr-md rounded-bl-md rounded-br-3xl"></div>}>
        <LazyImage
          src={`/team/${member.member_type}/${member.alias}.jpg`}
          alt={member.alias}
          className="w-[70%] aspect-square object-cover rounded-tl-3xl rounded-tr-md rounded-bl-md rounded-br-3xl border-[3px] border-yellow-500 shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px]"
        />
      </Suspense>
      <div className="w-full text-white p-1 text-center">
        <p className="text-lg font-semibold">{member.name}</p>
        <p className="text-sm ">{member.post}</p>
        <div className="flex justify-center gap-1 mt-2">
          <SocialIcon link={member.fb_} icon={faFacebook} color="blue" />
          <SocialIcon link={member.instagram} icon={faInstagram} color="pink" />
          <SocialIcon link={member.twitter_} icon={faTwitter} color="blue" />
          <SocialIcon link={member.linkedin} icon={faLinkedin} color="blue" />
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;