import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function CollegeRegistration25() {
  const [formData, setFormData] = useState({
    name: "",
    scholar: "",
    branch: "",
    year: "",
    vertical: [],
    email: "",
    contact: "",
  });

  const [activeSection, setActiveSection] = useState("details");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const verticals = [
    {
      id: "प्रबंधक",
      translatedName: "Executive",
      description:
        "संचालन, प्रबंधन और निर्णय लेने का कार्य करता है।",
    },
    {
      id: "अभिकल्पक",
      translatedName: "Designer",
      description:
        "पोस्टर आदि तैयार कर उन्हें आकर्षक और प्रभावी बनाने का कार्य करता है।",
    },
    {
      id: "वेब अभिकल्पक",
      translatedName: "Web Developer",
      description:
        "वेबसाइट बनाने, विकसित करने और कार्यशील बनाने का कार्य करता है।",
    },
    {
      id: "छायाकार",
      translatedName: "Photographer",
      description:
        "तस्वीरें खींचने और उन्हें सुंदर व प्रभावी बनाने का कार्य करता है।",
    },
    {
      id: "सम्पादक",
      translatedName: "Content Writer",
      description:
        "लेख, ब्लॉग या अन्य सामग्री लिखने, संशोधित करने और उसे प्रभावी बनाने का कार्य करता है।",
    },
    {
      id: "हिन्दीतर भाषी",
      translatedName: "Non-Hindi Speakers",
      description: "वह व्यक्ति होता है जिसकी मातृभाषा हिंदी नहीं होती।",
    },
    {
      id: "वीडियो सम्पादक",
      translatedName: "Video Editor",
      description:
        "वीडियो को काटने, जोड़ने, सुधारने और उसे आकर्षक व प्रभावी बनाने का कार्य करता है।",
    },
  ];

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "vertical") {
      setFormData((prevData) => ({
        ...prevData,
        vertical: checked
          ? [...prevData.vertical, value]
          : prevData.vertical.filter((v) => v !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
    // Clear error for the field on change
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validateSection = (section) => {
    const newErrors = {};
    if (section === "details") {
      if (!formData.name.trim()) {
        newErrors.name = "कृपया नाम दर्ज करें";
      }
      if (!formData.branch.trim()) {
        newErrors.branch = "कृपया शाखा दर्ज करें";
      }
      if (!formData.scholar.trim()) {
        newErrors.scholar = "कृपया स्कॉलर नंबर दर्ज करें";
      }
      if (!formData.year) {
        newErrors.year = "कृपया वर्ष चुनें";
      }
    } else if (section === "verticals") {
      if (formData.vertical.length === 0) {
        newErrors.vertical = "कृपया कम से कम एक कार्यक्षेत्र चुनें";
      }
    } else if (section === "contact") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\d{10}$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "कृपया मान्य ईमेल दर्ज करें";
      }
      if (!phoneRegex.test(formData.contact)) {
        newErrors.contact = "कृपया 10 अंकों का मान्य फ़ोन नंबर दर्ज करें";
      }
    }
    return newErrors;
  };

  const handleNext = () => {
    const currentErrors = validateSection(activeSection);
    if (Object.keys(currentErrors).length > 0) {
      setErrors(currentErrors);
      return;
    }
    // Clear errors when moving forward
    setErrors({});
    if (activeSection === "details") {
      setActiveSection("verticals");
    } else if (activeSection === "verticals") {
      setActiveSection("contact");
    }
  };

  const handlePrevious = () => {
    setErrors({});
    if (activeSection === "verticals") {
      setActiveSection("details");
    } else if (activeSection === "contact") {
      setActiveSection("verticals");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentErrors = validateSection(activeSection);
    if (Object.keys(currentErrors).length > 0) {
      setErrors(currentErrors);
      return;
    }
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_SITE}/REG25`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.status === 400) {
        // Email exists already
        setErrors({ email: "ईमेल पहले से मौजूद है" });
      } else if (response.status === 500) {
        // Server error
        alert("Something went wrong.\nPlease try again.");
      } else if (response.status === 200) {
        // Success
        alert(
          "पंजीकरण सफल रहा। हमने आपको एक ईमेल भेजा है। कृपया अपना ईमेल जांचें।"
        );
        // Reset form
        setFormData({
          name: "",
          branch: "",
          scholar: "",
          year: "",
          vertical: [],
          email: "",
          contact: "",
        });
        setErrors({});
        setActiveSection("details");
      }
    } catch (error) {
      alert("कुछ गलत हुआ");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 flex items-center justify-center ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl shadow-xl overflow-hidden w-full max-w-2xl border border-yellow-500 "
      >
        <div className="px-6 py-4">
          <h2 className="text-3xl font-bold text-yellow-400 text-center">
            आह्वान '25
          </h2>
          <div className="flex justify-center mt-4">
            <div className="flex space-x-1 sm:space-x-2">
              <motion.div
                className={`h-2 w-16 sm:w-24 rounded-full ${
                  activeSection === "details"
                    ? "bg-yellow-500"
                    : "bg-yellow-700"
                } transition-colors`}
                whileHover={{ scale: 1.05 }}
              />
              <motion.div
                className={`h-2 w-16 sm:w-24 rounded-full ${
                  activeSection === "verticals"
                    ? "bg-yellow-500"
                    : "bg-yellow-700"
                } transition-colors`}
                whileHover={{ scale: 1.05 }}
              />
              <motion.div
                className={`h-2 w-16 sm:w-24 rounded-full ${
                  activeSection === "contact"
                    ? "bg-yellow-500"
                    : "bg-yellow-700"
                } transition-colors`}
                whileHover={{ scale: 1.05 }}
              />
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <AnimatePresence mode="wait">
            {activeSection === "details" && (
              <motion.div
                key="details"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                  व्यक्तिगत जानकारी
                </h3>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-yellow-400 mb-1"
                    >
                      नाम (Name) <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2  text-slate-800 font-semibold border rounded-lg"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500 font-semibold">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="branch"
                      className="block text-sm font-semibold text-yellow-400 mb-1"
                    >
                      अध्ययन शाखा (Branch){" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="branch"
                      type="text"
                      name="branch"
                      value={formData.branch}
                      onChange={handleChange}
                      className="w-full px-4 py-2  text-slate-800 font-semibold border rounded-lg "
                    />
                    {errors.branch && (
                      <p className="mt-1 text-xs text-red-500 font-semibold">
                        {errors.branch}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="branch"
                      className="block text-sm font-semibold text-yellow-400 mb-1"
                    >
                      स्कॉलर नंबर (Scholar Number){" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="scholar"
                      type="text"
                      name="scholar"
                      value={formData.scholar}
                      onChange={handleChange}
                      className="w-full px-4 py-2  text-slate-800 font-semibold border rounded-lg "
                    />
                    {errors.scholar && (
                      <p className="mt-1 text-xs text-red-500 font-semibold">
                        {errors.scholar}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-yellow-400 mb-1">
                      वर्ष (Year) <span className="text-red-500">*</span>
                    </label>
                    <div className="flex space-x-6">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="year"
                          value="1"
                          checked={formData.year === "1"}
                          onChange={handleChange}
                          className="h-5 w-5 text-yellow-500"
                        />
                        <span className="text-yellow-400">1</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="year"
                          value="2"
                          checked={formData.year === "2"}
                          onChange={handleChange}
                          className="h-5 w-5 text-yellow-500"
                        />
                        <span className="text-yellow-400">2</span>
                      </label>
                    </div>
                    {errors.year && (
                      <p className="mt-1 text-xs text-red-500 font-semibold">
                        {errors.year}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === "verticals" && (
              <motion.div
                key="verticals"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                  कार्यक्षेत्र (Vertical){" "}
                  <span className="text-red-500">*</span>
                </h3>
                <p className="text-sm font-bold text-blue-400 mb-4">
                  कम से कम एक कार्यक्षेत्र का चयन करें
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {verticals.map((vertical, index) => (
                    <motion.div
                      key={vertical.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`border rounded-lg overflow-hidden ${
                        formData.vertical.includes(vertical.id)
                          ? "border-yellow-500 bg-gray-800"
                          : "border-yellow-500"
                      }`}
                    >
                      <label className="cursor-pointer">
                        <div className="flex items-start p-4">
                          <input
                            type="checkbox"
                            name="vertical"
                            value={vertical.id}
                            checked={formData.vertical.includes(vertical.id)}
                            onChange={handleChange}
                            className="h-5 w-5 text-yellow-500 mt-1"
                          />
                          <div className="ml-3">
                            <div className="flex flex-col">
                              <span className="font-semibold text-yellow-400">
                                {vertical.id}
                              </span>
                              <span className="text-sm text-yellow-300">
                                {vertical.translatedName}
                              </span>
                            </div>
                            <p className="mt-1 text-sm text-gray-300">
                              {vertical.description}
                            </p>
                          </div>
                        </div>
                      </label>
                    </motion.div>
                  ))}
                </div>
                {errors.vertical && (
                  <p className="mt-1 text-xs text-red-500 font-semibold">
                    {errors.vertical}
                  </p>
                )}
              </motion.div>
            )}

            {activeSection === "contact" && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                  संपर्क जानकारी
                </h3>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-yellow-400 mb-1"
                    >
                      ईमेल (Email) <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2  text-slate-800 font-semibold border rounded-lg"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500 font-semibold">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact"
                      className="block text-sm font-semibold text-yellow-400 mb-1"
                    >
                      फ़ोन नंबर (Phone Number){" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact"
                      type="tel"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      placeholder="1234567890"
                      className="w-full px-4 py-2  text-slate-800 font-semibold border rounded-lg"
                    />
                    {errors.contact && (
                      <p className="mt-1 text-xs text-red-500 font-semibold">
                        {errors.contact}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-8 flex justify-between">
            {activeSection !== "details" ? (
              <motion.button
                type="button"
                onClick={handlePrevious}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2  text-yellow-500 border border-yellow-500 rounded-lg font-semibold"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </motion.button>
            ) : (
              <div></div>
            )}

            {activeSection !== "contact" ? (
              <motion.button
                type="button"
                onClick={handleNext}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-yellow-500 text-slate-800 font-semibold rounded-lg ml-auto"
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </motion.button>
            ) : (
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 ${
                  isSubmitting ? "bg-yellow-400" : "bg-yellow-500"
                } text-slate-800 rounded-lg font-semibold ml-auto flex items-center`}
              >
                {isSubmitting ? (
                  <div className="flex space-x-1 text-3xl">
                    <span className="animate-bounce">.</span>
                    <span className="animate-bounce delay-200">.</span>
                    <span className="animate-bounce delay-400">.</span>
                  </div>
                ) : (
                  "पंजीयन करें"
                )}
              </motion.button>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  );
}
