import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";

const LazyImage = lazy(() => import("../LazyLoader/Lazy"));

const Books = () => {
  const books = [
    { title: "Abhigyan Shakuntalam", image: "abhigyanShankutlam.jpg" },
    {
      title: "Angreji Madham ka Bhramjal",
      image: "angreji madham ka bhramjal",
    },
    { title: "Bharat Bharti", image: "bharat bharti" },
    {
      title: "Einstein Tagore and the Nature of Reality",
      image: "Eintein Tagore and the nature of reality.jpg",
    },
    { title: "Godan", image: "godan.jpg" },
    { title: "Hindustan ki Kahani", image: "hindustan ki kahani.jpg" },
    {
      title: "Indian Contributions to Science",
      image: "Indian contributions to science.jpg",
    },
    { title: "Kamayani", image: "kamyani.jpg" },
    { title: "Khandit Bharat", image: "khandit bharat" },
    { title: "Pandravi Sadi ka Bharat", image: "pandravi sadi ka bharat" },
    { title: "Prabuddha Bharat", image: "prabudhaa bharat" },
    { title: "Rag Darbari", image: "rag darbari" },
    { title: "Sabhyata Ka Rahasya", image: "sbhytaKarahsy.jpg" },
    {
      title: "Science and the Indian Tradition",
      image: "Science and the Indian tradition.jpg",
    },
    { title: "Smarika", image: "smarika.jpg" },
    { title: "The Secret of the Veda", image: "The secret of the Veda.jpg" },
    { title: "Vyaktitva ka Vikas", image: "vyaktivya ka vikas" },
  ];

  return (
    <motion.div
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-cover bg-center"
    >
      <motion.div className="container mx-auto pt-16">
        <h1 className="text-xl lg:text-3xl font-bold text-center text-yellow-500 mb-10">
          तूर्यनाद द्वारा सुझाई गई पुस्तकें
        </h1>
      </motion.div>

      <motion.div className="container max-sm:px-10 max-[350px]:grid-cols-2 sm:max-w-[70%] mx-auto grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8 px-4">
        {books.map((book, index) => (
          <motion.div
            key={index}
            className="relative aspect-auto"
            whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 5 : -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="block w-full h-full">
              <Suspense
                fallback={
                  <div className="w-full h-full bg-gray-200 rounded-lg"></div>
                }
              >
                <LazyImage
                  src={`/books/${book.image}`}
                  alt={book.title}
                  className="w-full h-full object-cover shadow-lg rounded-lg"
                  layoutId={`book-${index}`}
                />
              </Suspense>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Books;
