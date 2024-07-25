import React, { createContext, useContext, useEffect, useState } from "react";
import eventDescriptions from "./Events23";
const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [members, setMembers] = useState([]);
  const [founder, setFounder] = useState([]);
  const [executive, setExecutive] = useState([]);
  const [regular, setRegular] = useState([]);
  const [guests, setGuests] = useState({});
  const [events, setEvents] = useState([]);
  const [showMsg, setShowMsg] = useState(true);
  const [tooryanaad22Members, setTooryanaad22Members] = useState([]);
  const [tooryanaad23Members, setTooryanaad23Members] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [membersRes, guestsRes, eventsRes] = await Promise.all([
          fetch(`${import.meta.env.VITE_BACKEND_SITE}/teams`),
          fetch(`${import.meta.env.VITE_BACKEND_SITE}/guests`),
          fetch(`${import.meta.env.VITE_BACKEND_SITE}/t_events`),
        ]);

        const membersData = await membersRes.json();
        const guestsData = await guestsRes.json();
        const eventsData = await eventsRes.json();

        setMembers(membersData);

        // Organize guests by year
        const guestsByYear = guestsData.reduce((acc, guest) => {
          const year = guest.YEAR;
          if (!acc[year]) {
            acc[year] = [];
          }
          acc[year].push(guest);
          return acc;
        }, {});

        setGuests(guestsByYear);
        setEvents(eventsData);
      } catch (e) {
        console.error("Error fetching data:", e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (members.length > 0) {
      const sortedMembers = [...members].sort((a, b) => a.order - b.order);

      const foundingMembers = sortedMembers.filter(
        (member) => member.member_type === 1
      );
      setFounder(foundingMembers);

      const executiveMembers = sortedMembers.filter(
        (member) => member.member_type === 11
      );
      setExecutive(executiveMembers);

      const tooryanaad22Members = sortedMembers.filter(
        (member) => member.member_type === 9
      );
      setTooryanaad22Members(tooryanaad22Members);

      const tooryanaad23Members = sortedMembers.filter(
        (member) => member.member_type === 10
      );
      setTooryanaad23Members(tooryanaad23Members);

      const regularMembers = sortedMembers.filter(
        (member) => member.member_type === 12
      );
      setRegular(regularMembers);
    }
  }, [members]);

  return (
    <DataContext.Provider
      value={{
        isLoading,
        setIsLoading,
        executive,
        founder,
        regular,
        guests,
        events,
        eventDescriptions,
        showMsg,
        setShowMsg,
        tooryanaad22Members,
        tooryanaad23Members
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
