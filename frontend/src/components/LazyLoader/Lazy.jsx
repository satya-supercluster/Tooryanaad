import React from "react";
import { motion } from "framer-motion";
const LazyImage = ({ src, alt, ...props }) => {
  return <motion.img src={src} alt={alt} loading="lazy" {...props} />;
};

export default LazyImage;
