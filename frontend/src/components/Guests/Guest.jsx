import React, { useState } from "react";
import { useData } from "../../Data/useData";
import GuestCard from "./GuestCard";

const Guest = () => {
  const [years] = useState([
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
  ]);
  const { guests } = useData();

  const getGridClass = (memberCount) => {
    const baseClass =
      "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8";
    if (memberCount < 4) {
      return `${baseClass} flex w-full justify-center`;
    }
    return baseClass;
  };

  return (
    <div className="max-w-[1200px] flex flex-col items-center gap-5 mx-auto px-4 py-4 mt-20">
      <div className="font-bold text-yellow-500 text-xl sm:text-3xl">
        अतिथि पृष्ठ
      </div>
      {years.map((year) => {
        const yearGuests = guests[year] || [];
        return (
          <React.Fragment key={year}>
            <div className="font-bold text-yellow-500 text-xl py-6 sm:text-2xl">
              {year}
            </div>
            <div className={getGridClass(yearGuests.length)}>
              {yearGuests.map((member, memberIndex) => (
                <GuestCard key={memberIndex} member={member} />
              ))}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Guest;
