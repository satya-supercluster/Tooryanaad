import React, { useState } from "react";
import DropDown from "./DropDown";
import Executive from "./Executive";
import Regular from "./Regular";
import Founder from "./Founder";
import { useData } from "../../Data/useData";
const Team = () => {
  const { founder, executive, regular } = useData();
  const [selectedOption, setSelectedOption] = useState(0);
  return (
    <div className="flex flex-col items-center gap-5 mx-auto px-4 py-4 mt-20 ">
      <div className="font-bold text-yellow-500 text-xl sm:text-3xl">
        समिति सदस्य
      </div>
      <DropDown setSelectedOption={setSelectedOption} selectedOption={selectedOption}></DropDown>
      {(selectedOption==0 || selectedOption==1)?
      <Founder members={founder} />:<div></div>}
      {(selectedOption==0 || selectedOption==2)?
      <Executive members={executive} />:<div></div>}
      {(selectedOption==0 || selectedOption==3)?
      <Regular members={regular} />:<div></div>}
    </div>
  );
};

export default Team;
