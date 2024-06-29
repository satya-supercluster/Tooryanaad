import React from "react";
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
import Gallery from "./components/Gallery/Gallery";
import EventDetails from "./components/Events/EventDetails";
import { useData } from "./Data/useData";
const App = () => {
  const { isLoading } = useData();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoading ? <Loader /> : <Layout />}>
          <Route index element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/founders" element={<Founder />} />
          <Route path="/executives" element={<Executive />} />
          <Route path="/regulars" element={<Regular />} />
          <Route path="/guests" element={<Guest />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />

          <Route
            path="/events/khichdi"
            element={<EventDetails title="khichdi" />}
          />
          <Route
            path="/events/chakravyuh"
            element={<EventDetails title={"chakravyuh"} />}
          />
          <Route
            path="/events/kavi"
            element={<EventDetails title={"kavi"} />}
          />
          <Route
            path="/events/srijan"
            element={<EventDetails title={"srijan"} />}
          />
          <Route
            path="/events/vaad-vivad"
            element={<EventDetails title={"vaad-vivad"} />}
          />
          <Route
            path="/events/abhivyakti_nritya"
            element={<EventDetails title={"abhivyakti_nritya"} />}
          />
          <Route
            path="/events/abhivyakti_gayan"
            element={<EventDetails title={"abhivyakti_gayan"} />}
          />
          <Route
            path="/events/nukkad"
            element={<EventDetails title={"nukkad"} />}
          />
          <Route
            path="/events/paridhanika"
            element={<EventDetails title={"paridhanika"} />}
          />
          <Route
            path="/events/digital_srijan"
            element={<EventDetails title={"digital_srijan"} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
