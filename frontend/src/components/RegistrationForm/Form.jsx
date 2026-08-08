import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const eventsMap = {
  "कवि सम्मेलन": "kaviSammelan",
  "अभिव्यक्ति गायन": "abhivyaktiGayan",
  चक्रव्यूह: "chakravyuh",
  सृजन: "srijan",
  // "डिजिटल सृजन": "digitalSrijan",
  // "अभिव्यक्ति मंच": "abhivyaktiManch",
  "अभिव्यक्ति नृत्य": "abhivyaktiNritya",
  परिधानिका: "paridhanika",
  "भाषा संगमम्": "bhashaSangam",
  "छात्र संसद": "chhatraSansad",
  खिचड़ी: "khichdi",
  लेखन: "lekhan",
  "नुक्कड़ नाटक": "nukkadNatak",
};

// PDF download links for each competition (opened in a new tab so the SPA never reloads)
const pdfLinks = {
  abhivyaktiGayan: "https://files.tooryanaad.workers.dev/abhivyaktiGayan.pdf",
  abhivyaktiNritya: "https://files.tooryanaad.workers.dev/abhivyaktiNritya.pdf",
  bhashaSangam: "https://files.tooryanaad.workers.dev/bhashaSangam.pdf",
  chakravyuh: "https://files.tooryanaad.workers.dev/chakravyuh.pdf",
  chhatraSansad: "https://files.tooryanaad.workers.dev/chhatraSansad.pdf",
  kaviSammelan: "https://files.tooryanaad.workers.dev/kaviSammelan.pdf",
  khichdi: "https://files.tooryanaad.workers.dev/khichdi.pdf",
  lekhan: "https://files.tooryanaad.workers.dev/lekhan.pdf",
  nukkadNatak: "https://files.tooryanaad.workers.dev/nukkadNatak.pdf",
  paridhanika: "https://files.tooryanaad.workers.dev/paridhanika.pdf",
  srijan: "https://files.tooryanaad.workers.dev/srijan.pdf",
};

// Reverse map: englishKey -> Hindi label, used to display friendly competition names
const englishToHindi = Object.fromEntries(
  Object.entries(eventsMap).map(([hindi, english]) => [english, hindi])
);

/**
 * "पंजीकरण सफल रहा" confirmation screen.
 * Shown in place of the form once registration succeeds.
 * Keeps the same card styling/background as the form for visual consistency.
 */
const RegistrationSuccess = ({ data, emailSent, onReset }) => {
  const competitions = data?.competitions || [];

  return (
    <div className="w-full max-md:mt-24 bg-[rgba(227,226,226,0.23)] p-5 rounded-lg box-border overflow-auto scrollbar-hide md:p-4 md:h-auto md:bg-[rgba(154,153,153,0.6)] max-md:bg-[url('/utils/theme-logo.png'),0.9] bg-no-repeat bg-center bg-contain">
      {/* Mobile header logos, mirrors the form's mobile header */}
      <div className="flex flex-col w-full pr-5 md:hidden">
        <div className="flex flex-row items-center justify-around md:flex-wrap">
          <img
            src="/utils/logo-tn.png"
            alt="TN Logo"
            className="w-[175px] max-sm:w-[100px] max-[440px]:w-[100px] max-[376px]:w-[80px]"
          />
          <img
            src="/utils/toorynaad-26-black.png"
            alt="Toorynaad Logo"
            className="w-[250px] max-sm:w-[150px] max-[440px]:w-[120px] max-[376px]:w-[100px]"
          />
          <img
            src="/utils/logo-manit.png"
            alt="MANIT Logo"
            className="w-[160px] max-sm:w-[90px] max-[440px]:w-[90px] max-[376px]:w-[75px]"
          />
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <p className="font-bold text-xl my-8 w-4/5 bg-gray-800 rounded-lg text-white p-4 text-center md:text-3xl">
          पंजीकरण सफल रहा
        </p>
      </div>

      {emailSent === false && (
        <div className="bg-yellow-100 border-2 border-yellow-600 text-yellow-800 rounded-lg p-3 mb-5 text-center text-sm md:text-base">
          पुष्टिकरण मेल भेजने में समस्या हुई है। कृपया नीचे दी गई जानकारी सुरक्षित रखें और
          आवश्यक विवरणिकाएं अभी डाउनलोड कर लें।
        </div>
      )}

      {emailSent !== false && (
        <p className="text-center text-sm md:text-base mb-4">
          हमने आपको एक पुष्टिकरण ईमेल भेजा है, कृपया उसे भी चेक कर लें। आपके पंजीयन का विवरण नीचे दिया गया है:
        </p>
      )}

      <div className="bg-white/80 rounded-lg p-4 mb-5 space-y-2 text-base md:text-lg">
        <p>
          <span className="text-gray-600">पंजीयन क्रमांक: </span>
          <span className="text-[#cea930]">{data?.token}</span>
        </p>
        {data?.teamName && (
          <p>
            <span className="text-gray-600">समूह का नाम: </span>
            {data.teamName}
          </p>
        )}
        <p>
          <span className="text-gray-600">नाम: </span>
          {data?.name}
        </p>
        <p>
          <span className="text-gray-600">महाविद्यालय: </span>
          {data?.college}
        </p>
        <p>
          <span className="text-gray-600">ईमेल: </span>
          {data?.email}
        </p>
        <p>
          <span className="text-gray-600">संपर्क: </span>
          {data?.contact}
        </p>
      </div>

      {competitions.length > 0 && (
        <>
          <div className="bg-gray-800 p-4 rounded-md w-full mx-auto mb-2">
            <h2 className="text-xl text-center text-white sm:text-lg">
              प्रतियोगिता विवरणिका
            </h2>
          </div>
          <p className="text-center text-sm md:text-base mb-4">
            कृपया अपनी पंजीकृत प्रत्येक प्रतियोगिता की विवरणिका नीचे से डाउनलोड
            करें और ध्यानपूर्वक पढ़ें, इसमें उस प्रतियोगिता से जुड़े सभी नियम व जानकारी दी गई है।
          </p>

          <div className="grid grid-cols-2 gap-3 mb-8 max-[400px]:grid-cols-1">
            {competitions.map((comp) =>
              pdfLinks[comp] ? (
                <a
                  key={comp}
                  href={pdfLinks[comp]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-center bg-yellow-800 hover:bg-yellow-900 text-white rounded-full px-3 py-2 text-sm md:text-base transition-colors"
                >
                  <FontAwesomeIcon icon={faDownload} className="text-xs md:text-sm" />
                  {englishToHindi[comp] || comp}
                </a>
              ) : null
            )}
          </div>
        </>
      )}

      <div className="flex justify-center items-center">
        <motion.button
          type="button"
          onClick={onReset}
          className="bg-gray-800 text-white px-5 border-none rounded cursor-pointer text-lg py-2 md:px-4"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          नया पंजीयन करें
        </motion.button>
      </div>
    </div>
  );
};

const RegForm = () => {
  const [p, setP] = useState(false);
  const [registrationData, setRegistrationData] = useState(null);
  const [emailSent, setEmailSent] = useState(true);
  const [response, setResponse] = useState({
    name: "",
    college: "",
    email: "",
    contact: "",
    teamName: "",
    compete: Object.fromEntries(
      Object.values(eventsMap).map((event) => [event, false])
    ),
    type: "",
  });

  function resetForm() {
    setRegistrationData(null);
    setEmailSent(true);
    setResponse({
      name: "",
      college: "",
      email: "",
      contact: "",
      teamName: "",
      compete: Object.fromEntries(
        Object.values(eventsMap).map((event) => [event, false])
      ),
      type: "",
    });
  }

  async function submitHandler(event) {
    event.preventDefault();
    setP(true);
    let comps = [];
    let i = 0;
    for (const competetion in response.compete) {
      if (response.compete[competetion] === true) {
        comps[i] = `${competetion}`;
        i++;
      }
    }
    const generateUniqueToken = () => {
      const randomDigits = Math.floor(10000 + Math.random() * 90000); // Generates a random 5-digit number
      return `T26${randomDigits}`;
    };
    let newResponse = {
      token: generateUniqueToken(),
      name: response.name,
      email: response.email,
      contact: response.contact,
      college: response.college,
      competitions: comps,
      ...(response.type === "group" && { teamName: response.teamName }),
    };

    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_SITE}/${
          response.type === "solo" ? "T_Reg24" : "TG24_Reg"
        }`,
        {
          method: "POST",
          body: JSON.stringify(newResponse),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      // Backend now always responds with JSON (both for success and error cases)
      let data = null;
      try {
        data = await res.json();
      } catch (parseErr) {
        data = null;
      }

      if (res.status === 400) {
        alert((data && data.message) || "कृपया समूह का नाम दर्ज करें");
        setP(false);
      } else if (res.status === 403) {
        alert("यह ईमेल पता पहले से पंजीकृत है");
        setP(false);
      } else if (res.status === 401) {
        alert("कृपया 10 अंकों का मान्य संपर्क दर्ज करें");
        setP(false);
      } else if (res.status !== 200) {
        alert("Something went wrong.");
        setP(false);
      } else {
        setP(false);
        // Even if email sending failed on the backend, it still returns the
        // registration info with emailSent: false so we can show it here.
        setEmailSent(!(data && data.emailSent === false));
        setRegistrationData((data && data.data) || newResponse);
      }
    } catch (err) {
      alert("Something went wrong.");
      setP(false);
    }
  }

  function changeHandler(event) {
    const { name, value, type, checked } = event.target;
    setResponse((prevData) => {
      if (type === "checkbox") {
        return {
          ...prevData,
          compete: {
            ...prevData.compete,
            [name]: checked,
          },
        };
      }
      if (name === "type") {
        const clearedCompete = Object.keys(prevData.compete).reduce(
          (acc, key) => {
            acc[key] = false;
            return acc;
          },
          {}
        );
        return {
          ...prevData,
          [name]: value,
          compete: clearedCompete,
          teamName: value === "solo" ? "" : prevData.teamName,
        };
      }
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  const [focusedField, setFocusedField] = useState(null);
  const labelVariants = {
    default: { top: "8px", fontSize: "1rem" },
    active: { top: "-25px", fontSize: "0.8rem" },
  };

  const renderInput = (field, label) => (
    <div key={field} className="relative mb-2">
      <input
        id={field}
        name={field}
        type={field === "email" ? "email" : "text"}
        value={response[field]}
        onChange={changeHandler}
        onFocus={() => setFocusedField(field)}
        onBlur={() => setFocusedField(null)}
        className="w-full px-2 py-2 rounded-full text-xl max-md:text-sm mb-5 border-2 border-[#D7B3D7] text-black bg-[rgba(999,999,999,0.9)] focus:outline-none focus:border-[#cea930] md:text-sm md:p-2 md:mb-4"
      />
      <motion.label
        htmlFor={field}
        initial="default"
        animate={
          focusedField === field || response[field] ? "active" : "default"
        }
        variants={labelVariants}
        transition={{ duration: 0.2 }}
        className="absolute left-2.5 transition-all pointer-events-none px-1.5 text-purple-700 rounded-full"
      >
        {label}
      </motion.label>
    </div>
  );

  return (
    <div className="flex bg-cover min-h-screen w-screen p-5 max-[350px]:p-0 box-border font-bold text-gray-800 bg-[url('/utils/background-form.jpg')]">
      <div className="w-1/2 pr-5 max-md:hidden md:pr-0 md:mb-5">
        <div className="flex flex-col">
         <div className="relative flex items-center justify-center mt-20 mb-5 h-[400px]">
  {/* TN Logo on the left, shifted closer to center */}
  <img
    src="/utils/logo-tn.png"
    alt="TN Logo"
    className="absolute left-[10%] w-[140px] max-lg:w-[115px]"
  />

  {/* Toorynaad Logo in center */}
  <img
    src="/utils/toorynaad-26-black.png"
    alt="Toorynaad Logo"
    className="sm:w-10 md:w-48 lg:w-56"
  />

  {/* MANIT Logo on the right, shifted closer to center */}
  <img
    src="/utils/logo-manit.png"
    alt="MANIT Logo"
    className="absolute right-[10%] w-[130px] max-lg:w-[100px]"
  />
</div>


          {/* <motion.img
            src="/utils/theme-logo.png"
            alt="Theme Logo"
            className="max-w-[500px] h-auto mx-auto my-5 md:max-w-[375px] max-md:hidden"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          /> */}
        </div>
      </div>

      <div className=" md:w-1/2 w-full h-auto">
        {registrationData ? (
          <RegistrationSuccess
            data={registrationData}
            emailSent={emailSent}
            onReset={resetForm}
          />
        ) : (
          <form
            onSubmit={submitHandler}
            className="w-full max-md:mt-24 bg-[rgba(227,226,226,0.23)] p-5 rounded-lg box-border overflow-auto scrollbar-hide md:p-4 md:h-auto md:bg-[rgba(154,153,153,0.6)] max-md:bg-[url('/utils/theme-logo.png'),0.9] bg-no-repeat bg-center bg-contain"
            // isme logo change karna hai utils me replace karna hai
          >
            <div className="flex flex-col w-full pr-5 md:hidden">
              <div className="flex flex-row items-center justify-around md:flex-wrap">
                <img
                  src="/utils/logo-tn.png"
                  alt="TN Logo"
                  className="w-[175px] max-sm:w-[100px] max-[440px]:w-[100px] max-[376px]:w-[80px]"
                />
                <img
                  src="/utils/toorynaad-26-black.png" //tooryanaad 26 logo mobile view
                  alt="Toorynaad Logo"
                  className="w-[250px] max-sm:w-[150px] max-[440px]:w-[120px] max-[376px]:w-[100px]"
                />
                <img
                  src="/utils/logo-manit.png"
                  alt="MANIT Logo"
                  className="w-[160px] max-sm:w-[90px] max-[440px]:w-[90px] max-[376px]:w-[75px]"
                />
              </div>
            </div>
            <div className=" w-full flex justify-center items-center">
              <p className="font-bold text-xl my-8 w-3/5 bg-gray-800 rounded-lg text-white p-4 text-center md:text-3xl">
                पंजीकरण
              </p>
            </div>

            {renderInput("name", "नाम(Name)")}
            {renderInput("college", "महाविद्यालय का नाम(College Name)")}
            {renderInput("email", "ईमेल-पता(Email)")}
            {renderInput("contact", "संपर्क सूत्र(Contact)")}

            <div className="bg-gray-800 p-4 rounded-md w-3/5 mx-auto">
              <h2 className="text-2xl text-center text-white sm:text-xl">प्रतियोगिताएं</h2>
            </div>

            <div className="flex justify-around my-10 mx-5 md:my-12 md:mx-2.5">
              {["solo", "group"].map((type) => (
                <label
                  key={type}
                  className="flex items-center text-lg cursor-pointer select-none md:text-xl"
                >
                  <input
                    type="radio"
                    name="type"
                    value={type}
                    checked={response.type === type}
                    onChange={changeHandler}
                    className="hidden"
                  />
                  <span
                    className={`inline-block w-5 h-5 mr-2.5 rounded-full border-2 border-gray-800 ${
                      response.type === type ? "bg-[#cea930]" : "bg-white"
                    }`}
                  ></span>
                  {type === "solo" ? "एकल" : "सामूहिक"}
                </label>
              ))}
            </div>

            {response.type === "group" &&
              renderInput("teamName", "समूह का नाम(Group Name)")}

            <div className="grid grid-cols-3 gap-2.5 mb-5 ml-8 pl-8 md:grid-cols-2 max-sm:grid-cols-2 max-[400px]:grid-cols-1 md:gap-2 md:mb-2">
              {response.type === "solo" ? (
                Object.entries(eventsMap)
                  .filter(([, englishName]) =>
                    [
                      "chhatraSansad",
                      "lekhan",
                      "bhashaSangam",
                      "abhivyaktiNritya",
                      "abhivyaktiGayan",
                      "abhivyaktiManch",
                      "chakravyuh",
                      "srijan",
                      "digitalSrijan",
                      "kaviSammelan",
                      "khichdi",
                    ].includes(englishName)
                  )
                  .map(([hindiName, englishName]) => (
                    <label
                      key={englishName}
                      className="flex items-center text-sm cursor-pointer select-none md:text-xl"
                    >
                      <input
                        type="checkbox"
                        name={englishName}
                        checked={response.compete[englishName]}
                        onChange={changeHandler}
                        className="hidden"
                      />
                      <span
                        className={`inline-block w-5 h-5 mr-2.5 border-2 border-[#D726D9] rounded ${
                          response.compete[englishName]
                            ? "bg-[#D726D9]"
                            : "bg-white"
                        }`}
                      ></span>
                      {hindiName}
                    </label>
                  ))
              ) : response.type === "group" ? (
                Object.entries(eventsMap)
                  .filter(([, englishName]) =>
                    [
                      "nukkadNatak",
                      "paridhanika",
                      "abhivyaktiNritya",
                      "abhivyaktiGayan",
                    ].includes(englishName)
                  )
                  .map(([hindiName, englishName]) => (
                    <label
                      key={englishName}
                      className="flex items-center cursor-pointer select-none max-md:text-md text-lg"
                    >
                      <input
                        type="checkbox"
                        name={englishName}
                        checked={response.compete[englishName]}
                        onChange={changeHandler}
                        className="hidden"
                      />
                      <span
                        className={`inline-block w-5 h-5 mr-2.5 border-2 border-[#D726D9] rounded ${
                          response.compete[englishName]
                            ? "bg-[#D726D9]"
                            : "bg-white"
                        }`}
                      ></span>
                      {hindiName}
                    </label>
                  ))
              ) : (
                <div></div>
              )}
            </div>

            <div className="flex justify-center items-center">
              <motion.button
                type="submit"
                className="bg-gray-800 text-white px-5 border-none rounded cursor-pointer text-lg py-2 md:px-4 w-2/5"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {p ? "पंजीयन हो रहा है.." : "पंजीयन करें"}
              </motion.button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegForm;