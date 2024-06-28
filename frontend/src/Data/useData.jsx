import React, { createContext, useContext, useEffect, useState } from "react";
import membersData from "./Members";
import {
  guest15,
  guest16,
  guest17,
  guest18,
  guest19,
  guest20,
  guest21,
} from "./Guests";
const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [members, setMembers] = useState([]);
  const [founder, setFounder] = useState([]);
  const [executive, setExecutive] = useState([]);
  const [regular, setRegular] = useState([]);
  const [guests, setGuests] = useState([]);
  useEffect(() => {
    setMembers(membersData);
    setGuests({
      2015: guest15,
      2016: guest16,
      2017: guest17,
      2018: guest18,
      2019: guest19,
      2020: guest20,
      2021: guest21,
    });
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
    <DataContext.Provider value={{ executive, founder, regular, guests }}>
      {children}
    </DataContext.Provider>
  );
};
