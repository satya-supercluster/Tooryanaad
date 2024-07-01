import React, { useState, useEffect } from "react";

const CollegeAmbassador = () => {
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [post, setPost] = useState("");
  const [number, setNumber] = useState("");
  const [year, setYear] = useState("");
  const [degree, setDegree] = useState("");
  const [email, setEmail] = useState("");

  const [numberError, setNumberError] = useState("");
  const [emailError, setEmailError] = useState("");

  const [isFetching, setIsFetching] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => setErrorMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  const validateNumber = (value) => {
    if (value.length !== 10 || !/^\d+$/.test(value)) {
      setNumberError("कृपया एक मान्य 10-अंकीय फोन नंबर दर्ज करें");
    } else {
      setNumberError("");
    }
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("कृपया एक मान्य ईमेल पता दर्ज करें");
    } else {
      setEmailError("");
    }
  };

  const createPost = async (
    name,
    college,
    post,
    number,
    year,
    degree,
    email
  ) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_SITE}/A_Reg`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            collegeName: college,
            post,
            number,
            year,
            degree,
            email,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`${response}`);
      }
    } catch (error) {
      throw error;
    }
  };

  const handlePostMessage = async () => {
    if (numberError || emailError) {
      return;
    }
    try {
      setIsFetching(true);
      await createPost(name, college, post, number, year, degree, email);
      setName("");
      setCollege("");
      setPost("");
      setNumber("");
      setYear("");
      setDegree("");
      setEmail("");
      setSuccessMessage("पंजीकरण सफल रहा!");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("पंजीकरण विफल रहा।");
      setSuccessMessage("");
    }
    setIsFetching(false);
  };

  return (
    <div className="w-full text-center flex flex-col justify-center items-center px-4 py-4 mt-20">
      <div className="font-bold text-yellow-500 text-xl sm:text-3xl">
        संस्थान प्रतिनिधि पंजीकरण
      </div>
      <div>
        <div className="bg-[rgb(30,30,30)] w-[70%] max-sm:w-[90%] mx-auto rounded-lg shadow-md shadow-gray-300 p-4 my-5">
          <div className="pb-2 text-lg text-center text-yellow-500 font-semibold">
            कृपया निम्न प्रविष्टियां भरें
          </div>
          <input
            type="text"
            className="w-full text-yellow-500 mb-2 px-4 py-1 bg-[rgb(30,30,30)] rounded-md border-b-2  focus:outline-none focus:border-yellow-500"
            placeholder="नाम"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="w-full text-yellow-500 mb-2 px-4 py-1 bg-[rgb(30,30,30)] rounded-md border-b-2 focus:outline-none focus:border-yellow-500"
            placeholder="कॉलेज"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
          />
          <input
            type="text"
            className="w-full text-yellow-500 mb-2 px-4 py-1 bg-[rgb(30,30,30)] rounded-md border-b-2 focus:outline-none focus:border-yellow-500"
            placeholder="पद"
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
          <div className="mb-2">
            <input
              type="tel"
              className={`w-full text-yellow-500 px-4 py-1 bg-[rgb(30,30,30)] rounded-md border-b-2 focus:outline-none focus:border-yellow-500`}
              placeholder="संपर्क संख्या"
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
                validateNumber(e.target.value);
              }}
            />
            {numberError && (
              <div className="text-red-500 font-semibold px-4 text-sm text-left mt-1">
                {numberError}
              </div>
            )}
          </div>
          <input
            type="text"
            className="w-full text-yellow-500 mb-2 px-4 py-1 bg-[rgb(30,30,30)] rounded-md border-b-2 focus:outline-none focus:border-yellow-500"
            placeholder="वर्ष"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <input
            type="text"
            className="w-full text-yellow-500 mb-2 px-4 py-1 bg-[rgb(30,30,30)] rounded-md border-b-2  focus:outline-none focus:border-yellow-500"
            placeholder="डिग्री"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          />
          <div className="mb-2">
            <input
              type="email"
              className={`w-full text-yellow-500 px-4 py-1 bg-[rgb(30,30,30)] rounded-md border-b-2 focus:outline-none focus:border-yellow-500`}
              placeholder="ईमेल"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
            />
            {emailError && (
              <div className="text-red-500 px-4 text-left text-sm mt-1">
                {emailError}
              </div>
            )}
          </div>
          {successMessage && (
            <div className="text-green-500 font-semibold px-4 text-sm text-left mt-2 mb-2">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="text-red-500 font-semibold px-4 text-sm text-left mt-2 mb-2">
              {errorMessage}
            </div>
          )}
          <div className="flex flex-row-reverse justify-right items-center mt-4">
            <button
              className="px-4 py-1 rounded-md text-white font-semibold bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-400 disabled:cursor-not-allowed focus:border-yellow-500"
              onClick={handlePostMessage}
              disabled={
                !name ||
                !college ||
                !post ||
                !number ||
                !year ||
                !degree ||
                !email ||
                numberError ||
                emailError ||
                isFetching
              }
            >
              {isFetching ? "पंजीकरण हो रहा है..." : "पंजीकरण करें"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeAmbassador;
