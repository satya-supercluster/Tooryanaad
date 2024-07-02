import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

  const [postFocused, setPostFocused] = useState(false);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => setErrorMessage(""), 5000);
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
    const response = await fetch(`${import.meta.env.VITE_BACKEND}/A_Reg`, {
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
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("यह ईमेल पता पहले ही पंजीकृत है।");
      } else if (response.status === 402) {
        throw new Error("ईमेल भेजने में त्रुटि!");
      } else if (response.status === 500) {
        throw new Error("आंतरिक सर्वर त्रुटि");
      } else {
        throw new Error("पंजीकरण विफल रहा।");
      }
    }

    return response.json();
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
      setErrorMessage(error.message);
      setSuccessMessage("");
    }
    setIsFetching(false);
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full min-h-screen text-center flex flex-col justify-start items-center px-4 py-4 mt-20"
    >
      <div className="font-bold text-yellow-500 text-xl sm:text-3xl">
        संस्थान प्रतिनिधि पंजीकरण
      </div>
      <div>
        <div className="bg-[rgb(30,30,30)] max-sm:w-[90%] mx-auto rounded-lg shadow-md shadow-gray-300 p-4 my-5">
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
          <div className="mb-2">
            <input
              type="text"
              className="w-full text-yellow-500 px-4 py-1 bg-[rgb(30,30,30)] rounded-md border-b-2 focus:outline-none focus:border-yellow-500"
              placeholder="पद"
              value={post}
              onChange={(e) => setPost(e.target.value)}
              onFocus={() => setPostFocused(true)}
              onBlur={() => setPostFocused(false)}
            />
            {postFocused && (
              <div className="text-blue-500 font-semibold px-4 text-sm text-left mt-1">
                उदा.- सह-प्रमुख, वेब अभिकल्पक, तूर्यनाद, मैनिट
              </div>
            )}
          </div>
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
              <div className="text-red-500 font-semibold px-4 text-sm text-left mt-1">
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
            <div className="text-red-500 font-semibold px-4 text-sm text-left mt-2">
              {errorMessage}
            </div>
          )}
          <div className="flex max-[420px]:flex-col justify-between items-center">
            <div className="text-blue-500 max-[420px]:w-full font-semibold text-sm text-left my-2">
              <span className="text-red-500 font-bold text-xl">*</span> सभी
              प्रविष्टियां अनिवार्य हैं
            </div>
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
    </motion.div>
  );
};

export default CollegeAmbassador;
