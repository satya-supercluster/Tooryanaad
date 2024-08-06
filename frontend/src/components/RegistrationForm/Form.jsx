import React, { useState } from "react";
import { motion } from "framer-motion";

const eventsMap = {
  "कवि सम्मेलन": "kaviSammelan",
  "अभिव्यक्ति गायन": "abhivyaktiGayan",
  चक्रव्यूह: "chakravyuh",
  सृजन: "srijan",
  "डिजिटल सृजन": "digitalSrijan",
  "अभिव्यक्ति मंच": "abhivyaktiManch",
  "अभिव्यक्ति नृत्य": "abhivyaktiNritya",
  परिधानिका: "paridhanika",
  "भाषा संगमम्": "bhashaSangam",
  "छात्र संसद": "chhatraSansad",
  खिचड़ी: "khichdi",
  लेखन: "lekhan",
  "नुक्कड़ नाटक": "nukkadNatak",
};

const RegForm = () => {
  const [p, setP] = useState(false);
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

  async function submitHandler(event) {
    event.preventDefault();
    setP(true);
    // console.log("Logging the form response: ");
    // console.log(response);
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
      return `T24${randomDigits}`;
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
    // console.log(newResponse);
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
    // setTimeout(() => {
    //   if (p) {
    //     alert("पंजीकरण सफल हुआ!")
    //   }
    // }, 3000);
    try {
      await fetch(
        `${import.meta.env.VITE_BACKEND_SITE}/${response.type === "solo" ? "T_Reg24" : "TG24_Reg"
        }`,
        {
          method: "POST",
          body: JSON.stringify(newResponse),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      ).then(() => {
        alert("पंजीकरण सफल हुआ!");
        setP(false);
      }).finally(() => {
        setP(false);
      });
    } catch (err) {
      if (res.status === 403) {
        alert("यह ईमेल पता पहले से पंजीकृत है");
        setP(false);
      } else if (res.status ===401) {
        alert("कृपया 10 अंकों का मान्य संपर्क दर्ज करें");
        setP(false);
      } else if (res.status !== 200) {
        alert("Something went wrong.");
        setP(false);
      }
    }
    setP(false);
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
        className="w-full px-2 py-2 rounded-full text-xl max-md:text-sm mb-5 border-2 border-[#D7B3D7] text-black bg-[rgba(999,999,999,0.9)] focus:outline-none focus:border-[#D726D9] md:text-sm md:p-2 md:mb-4"
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
    <div className="flex bg-cover min-h-screen w-screen p-5 max-[350px]:p-0 box-border font-bold text-purple-700 bg-[url('/utils/background-form.jpg')]">
      <div className="w-1/2 pr-5 max-md:hidden md:pr-0 md:mb-5">
        <div className="flex flex-col">
          <div className="flex flex-row items-center mb-5 justify-around md:flex-wrap mt-10">
            <img
              src="/utils/logo-tn.png"
              alt="TN Logo"
              className="w-[140px] max-lg:w-[115px]"
            />
            <img
              src="/utils/toorynaad-24.png"
              alt="Toorynaad Logo"
              className="w-[145px]"
            />
            <img
              src="/utils/logo-manit.png"
              alt="MANIT Logo"
              className="w-[130px] max-lg:w-[100px]"
            />
          </div>
          <motion.img
            src="/utils/theme-logo.png"
            alt="Theme Logo"
            className="max-w-[500px] h-auto mx-auto my-5 md:max-w-[375px] max-md:hidden"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>

      <div className=" md:w-1/2 w-full h-auto">
        <form
          onSubmit={submitHandler}
          className="w-full max-md:mt-24 bg-[rgba(73,158,184,0.6)] p-5 rounded-lg box-border overflow-auto scrollbar-hide md:p-4 md:h-auto md:bg-[rgba(73,158,184,0.8)] max-md:bg-[url('/utils/theme-logo.png'),0.9] bg-no-repeat bg-center bg-contain"
        >
          <div className="flex flex-col w-full pr-5 md:hidden">
            <div className="flex flex-row items-center justify-around md:flex-wrap">
              <img
                src="/utils/logo-tn.png"
                alt="TN Logo"
                className="w-[175px] max-sm:w-[120px] max-[440px]:w-[100px] max-[376px]:w-[80px]"
              />
              <img
                src="/utils/toorynaad-24.png"
                alt="Toorynaad Logo"
                className="w-[250px] max-sm:w-[150px] max-[440px]:w-[120px] max-[376px]:w-[100px]"
              />
              <img
                src="/utils/logo-manit.png"
                alt="MANIT Logo"
                className="w-[160px] max-sm:w-[110px] max-[440px]:w-[90px] max-[376px]:w-[75px]"
              />
            </div>
          </div>
          <div className=" w-full flex justify-center items-center">
            <p className="font-extrabold text-xl my-8 opacity-90 bg-[#D726D9] rounded-lg text-white p-2.5 text-center md:text-3xl ">
              पंजीकरण
            </p>
          </div>

          {renderInput("name", "नाम(Name)")}
          {renderInput("college", "महाविद्यालय का नाम(College Name)")}
          {renderInput("email", "ईमेल-पता(Email)")}
          {renderInput("contact", "संपर्क सूत्र(Contact)")}

          <h2 className="text-2xl text-center">प्रतियोगिताएं</h2>
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
                  className={`inline-block w-5 h-5 mr-2.5 rounded-full border-2 border-[#D726D9] ${
                    response.type === type ? "bg-[#D726D9]" : "bg-white"
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
              className="bg-[#D726D9] text-white px-5 border-none rounded cursor-pointer text-lg py-2 md:px-4"
              whileHover={{ scale: 1.05, backgroundColor: "#FFD700" }}
              transition={{ duration: 0.3 }}
            >
             {(p)?"पंजीयन हो रहा है..": "पंजीयन करें"}
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegForm;
