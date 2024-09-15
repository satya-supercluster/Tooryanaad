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
// import EventDetails from "./components/Events/EventDetails";
import { useData } from "./Data/useData";
import PastMembers from "./components/Team/PastMembers";
import RegForm from "./components/RegistrationForm/Form";
import NewEventDetails from "./components/Events/NewEventDetails";
import T24TimeTable from "./components/Posters/T24TimeTable";
// import CollegeAmbassador from "./components/Forms/CollegeAmbassador";
const App = () => {
  const { isLoading,newEvents } = useData();
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
          <Route path="/PastMembers" element={<PastMembers />} />
          <Route path="/T_Reg24" element={<RegForm />} />
          {/* <Route path="/ambassador" element={<CollegeAmbassador />} /> */}
          <Route path="TimeTable" element={<T24TimeTable/>} />
          <Route
            path="/events/Khichdi"
            element={
              <NewEventDetails
                title={"खिचड़ी"}
                eventData={newEvents["खिचड़ी"]}
              />
            }
          />
          <Route
            path="/events/Chakravyuh"
            element={
              <NewEventDetails
                title={"चक्रव्यूह"}
                eventData={newEvents["चक्रव्यूह"]}
              />
            }
          />
          <Route
            path="/events/KaviSammelan"
            element={
              <NewEventDetails
                title={"कवि सम्मेलन"}
                eventData={newEvents["कवि सम्मेलन"]}
              />
            }
          />
          <Route
            path="/events/Srijan"
            element={
              <NewEventDetails title={"सृजन"} eventData={newEvents["सृजन"]} />
            }
          />
          <Route
            path="/events/AbhivyaktiDance"
            element={
              <NewEventDetails
                title={"अभिव्यक्ति नृत्य"}
                eventData={newEvents["अभिव्यक्ति नृत्य"]}
              />
            }
          />
          <Route
            path="/events/AbhivyaktiSinging"
            element={
              <NewEventDetails
                title={"अभिव्यक्ति गायन"}
                eventData={newEvents["अभिव्यक्ति गायन"]}
              />
            }
          />
          <Route
            path="/events/AbhivyaktiStage"
            element={
              <NewEventDetails
                title={"अभिव्यक्ति मंच"}
                eventData={newEvents["अभिव्यक्ति मंच"]}
              />
            }
          />
          <Route
            path="/events/NukkadNatak"
            element={
              <NewEventDetails
                title={"नुक्कड़ नाटक"}
                eventData={newEvents["नुक्कड़ नाटक"]}
              />
            }
          />
          <Route
            path="/events/Paridhanika"
            element={
              <NewEventDetails
                title={"परिधानिका"}
                eventData={newEvents["परिधानिका"]}
              />
            }
          />
          <Route
            path="/events/DigitalSrijan"
            element={
              <NewEventDetails
                title={"डिजिटल सृजन"}
                eventData={newEvents["डिजिटल सृजन"]}
              />
            }
          />
          <Route
            path="/events/StudentParliament"
            element={
              <NewEventDetails
                title={"छात्र संसद"}
                eventData={newEvents["छात्र संसद"]}
              />
            }
          />
          <Route
            path="/events/BhashaSangamam"
            element={
              <NewEventDetails
                title={"भाषा संगमम्"}
                eventData={newEvents["भाषा संगमम्"]}
              />
            }
          />
          <Route
            path="/events/Lekhan"
            element={
              <NewEventDetails title={"लेखन"} eventData={newEvents["लेखन"]} />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
