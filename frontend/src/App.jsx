import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Loader from "./components/Loader/Loader";
import { useData } from "./Data/useData";

// Every route-level page is now lazy-loaded: each becomes its own chunk that
// is only fetched from the network when the user actually navigates to it.
const Home = lazy(() => import("./components/Home/Home"));
const Team = lazy(() => import("./components/Team/Team"));
const Founder = lazy(() => import("./components/Team/Founder"));
const Executive = lazy(() => import("./components/Team/Executive"));
const Regular = lazy(() => import("./components/Team/Regular"));
const Guest = lazy(() => import("./components/Guests/Guest"));
const Events = lazy(() => import("./components/Events/Events"));
const Gallery = lazy(() => import("./components/Gallery/Gallery"));
const PastMembers = lazy(() => import("./components/Team/PastMembers"));
const RegForm = lazy(() => import("./components/RegistrationForm/Form"));
const CollegeRegistration25 = lazy(() =>
  import("./components/Forms/CollegeRegistration25")
);
const NewEventDetails = lazy(() =>
  import("./components/Events/NewEventDetails")
);
// import T24TimeTable from "./components/Posters/T24TimeTable";
const CollegeAmbassador = lazy(() =>
  import("./components/Forms/CollegeAmbassador")
);

const App = () => {
  const { isLoading, newEvents } = useData();
  return (
    <BrowserRouter>
      {/* Suspense fallback reuses the existing Loader so a lazy chunk load
          looks identical to the current data-loading screen. */}
      <Suspense fallback={<Loader />}>
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
            <Route path="/reg" element={<RegForm />} />
            <Route path="/ambassador" element={<CollegeAmbassador />} />
            <Route path="/collegeReg" element={<CollegeRegistration25 />} />
            {/* <Route path="TimeTable" element={<T24TimeTable/>} /> */}
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
      </Suspense>
    </BrowserRouter>
  );
};
export default App;