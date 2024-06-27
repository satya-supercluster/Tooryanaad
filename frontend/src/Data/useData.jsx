import React, { createContext, useContext, useEffect, useState } from "react";
import membersData from "./Members";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [members, setMembers] = useState([]);
  const [founder, setFounder] = useState([]);
  const [executive, setExecutive] = useState([]);
  const [regular, setRegular] = useState([]);

  useEffect(() => {
    setMembers(membersData);
  }, []);

  useEffect(() => {
    if (members.length > 0) {
      const sortedMembers = [...members].sort((a, b) => a.order - b.order);

      const foundingMembers = sortedMembers.filter((member) =>
        [1, 2, 9].includes(member.member_type)
      );
      setFounder(foundingMembers);

      const executiveMembers = sortedMembers.filter(
        (member) => member.member_type === 10
      );
      setExecutive(executiveMembers);

      const regularMembers = sortedMembers.filter(
        (member) => member.member_type === 11
      );
      setRegular(regularMembers);
    }
  }, [members]);

  return (
    <DataContext.Provider value={{ executive, founder, regular }}>
      {children}
    </DataContext.Provider>
  );
};
