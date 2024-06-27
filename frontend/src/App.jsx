import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Loader from "./components/Loader/Loader";
import Team from "./components/Team/Team";
import Founders from "./components/Team/Founders";
import Final from "./components/Team/Final";
import PreFinal from "./components/Team/PreFinal";
import membersData from "./Data/Members";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4500);
    setMembers(membersData);
  }, []);

  const sortedMembers = [...members].sort((a, b) => a.order - b.order);

  const foundingMembers = sortedMembers.filter(
    (member) => member.member_type === 1
  );
  const executiveMembers = sortedMembers.filter(
    (member) => member.member_type === 2
  );
  const regularMembers = sortedMembers.filter(
    (member) => member.member_type === 9
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoading ? <Loader /> : <Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route
            path="/founders"
            element={<Founders members={foundingMembers} />}
          ></Route>
          <Route
            path="/final"
            element={<Final members={executiveMembers} />}
          ></Route>
          <Route
            path="/prefinal"
            element={<PreFinal members={regularMembers} />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
