import React, {useEffect} from "react";
import TeamCard from "./TeamCard";
import DropDown from "./DropDown";
const Team = () => {
    const teamMembers = [
      {
        id: 1,
        name: "John Doe",
        position: "CEO",
        image: "/ankit-upadhyaya.jpg",
      },
      {
        id: 2,
        name: "Jane Smith",
        position: "CTO",
        image: "/ankit-upadhyaya.jpg",
      },
      {
        id: 3,
        name: "Mike Johnson",
        position: "Designer",
        image: "/ankit-upadhyaya.jpg",
      },
      {
        id: 4,
        name: "Mike Johnson",
        position: "Designer",
        image: "/ankit-upadhyaya.jpg",
      },
      // Add more team members as needed
    ];
  return (
    <div className="flex flex-col justify-center items-center gap-5 container mx-auto px-4 py-4 mt-20 ">
      <div className="font-bold text-yellow-500 text-xl sm:text-3xl">
        समिति सदस्य
      </div>
      <DropDown></DropDown>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <TeamCard member={member} key={member.id} />
        ))}
      </div>
    </div>
  );
};

export default Team;
