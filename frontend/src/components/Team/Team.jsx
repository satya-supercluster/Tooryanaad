import React, { useState } from "react";
import DropDown from "./DropDown";
import Executive from "./Executive";
import Regular from "./Regular";
import Founder from "./Founder";
const Team = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  return (
    <div className="flex flex-col items-center gap-5 mx-auto px-4 mt-24 mb-5 ">
      <div className="font-bold text-yellow-500 text-xl sm:text-3xl">
        समिति सदस्य
      </div>
      <DropDown setSelectedOption={setSelectedOption} selectedOption={selectedOption}></DropDown>
      {(selectedOption==0 || selectedOption==1)?
      <Founder/>:<div></div>}
      {(selectedOption==0 || selectedOption==2)?
      <Executive/>:<div></div>}
      {(selectedOption==0 || selectedOption==3)?
      <Regular/>:<div></div>}
    </div>
  );
};

export default Team;
