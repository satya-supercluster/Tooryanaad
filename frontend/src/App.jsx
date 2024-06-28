import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Loader from "./components/Loader/Loader";
import Team from "./components/Team/Team";
import Founder from "./components/Team/Founder";
import Executive from "./components/Team/Executive";
import Regular from "./components/Team/Regular";
import Guest from "./components/Guests/Guest";
import Events from "./components/Events/Events";
import { useData } from "./Data/useData";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { founder, executive, regular } = useData();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4500);
  }, []);
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={isLoading ? <Loader /> : <Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/team" element={<Team />}></Route>
            <Route
              path="/founders"
              element={<Founder members={founder} />}
            ></Route>
            <Route
              path="/executives"
              element={<Executive members={executive} />}
            ></Route>
            <Route
              path="/regulars"
              element={<Regular members={regular} />}
            ></Route>
            <Route
              path="/guests"
              element={<Guest/>}
            ></Route>
            <Route
              path="/events"
              element={<Events/>}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
  );
};

export default App;
