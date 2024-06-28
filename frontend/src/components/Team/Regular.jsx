import React from 'react'
import TeamCard from './TeamCard';
import { useData } from "../../Data/useData";
const Regular = () => {
  const { regular } = useData();
  return (
    <div className="flex flex-col justify-center items-center gap-5 container mx-auto px-4 pb-4 pt-20 ">
      <div className="font-bold text-yellow-500 py-5 text-xl sm:text-3xl">
        सदस्य
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {regular.map((member) => (
          <TeamCard member={member} key={member.id} />
        ))}
      </div>
    </div>
  );
}

export default Regular