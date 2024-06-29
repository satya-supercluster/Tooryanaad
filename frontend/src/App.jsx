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
import Gallery from "./components/Gallery/Gallery";
import EventDetails from "./components/Events/EventDetails";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4500);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoading ? <Loader /> : <Layout />}>
          <Route index element={<Home />}/>
          <Route path="/team" element={<Team />}/>
          <Route path="/founders" element={<Founder />}/>
          <Route path="/executives" element={<Executive />}/>
          <Route path="/regulars" element={<Regular />}/>
          <Route path="/guests" element={<Guest />}/>
          <Route path="/events" element={<Events />}/>
          <Route path="/gallery" element={<Gallery />}/>

          <Route
            path="/events/khichdi"
            element={<EventDetails index={0} />}
          />
          <Route
            path="/events/chakravyuh"
            element={<EventDetails index={1} />}
          />
          <Route
            path="/events/kavi"
            element={<EventDetails index={2} />}
          />
          <Route
            path="/events/srijan"
            element={<EventDetails index={3} />}
          />
          <Route
            path="/events/vaad-vivad"
            element={<EventDetails index={4} />}
          />
          <Route
            path="/events/abhivyakti_nritya"
            element={<EventDetails index={5} />}
          />
          <Route
            path="/events/abhivyakti_gayan"
            element={<EventDetails index={6} />}
          />
          <Route
            path="/events/nukkad"
            element={<EventDetails index={7} />}
          />
          <Route
            path="/events/paridhanika"
            element={<EventDetails index={8} />}
          />
          <Route
            path="/events/digital_srijan"
            element={<EventDetails index={9} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
