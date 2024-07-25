import React from "react";
import TeamCard from "./TeamCard";
import { useData } from "../../Data/useData";
const PastMembers = () => {
  const { tooryanaad23Members, tooryanaad22Members } = useData();
  return (
    <div className="flex flex-col justify-center items-center gap-5 container mx-auto px-4 pb-4 pt-20">
      <div className="font-bold text-yellow-500 pt-5 text-xl sm:text-3xl">
        पूर्व सदस्य
      </div>
      {/* Tooryanaad22 */}
      <div className="flex flex-col justify-center items-center gap-5 container mx-auto px-4 pt-4 ">
        <div className="font-bold text-yellow-500 text-lg sm:text-xl">
          तूर्यनाद'22 सदस्य
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {tooryanaad22Members.map((member) => (
            <TeamCard member={member} key={member.id} />
          ))}
        </div>
      </div>
      {/* Tooryanaad23 */}
      <div className="flex flex-col justify-center items-center gap-5 container mx-auto px-4 pt-10 ">
        <div className="font-bold text-yellow-500 pt-5 text-lg sm:text-xl">
          तूर्यनाद'23 सदस्य
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {tooryanaad23Members.map((member) => (
            <TeamCard member={member} key={member.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastMembers;
