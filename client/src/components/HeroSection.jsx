import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const heroTexts = [
  "AI Applications",
  "Full-Stack Web",
  "Smart Backend Systems",
  "Mobile Apps"
];

export const HeroSection = () => {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < heroTexts[index].length) {
        setCurrentText((prev) => prev + heroTexts[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setCurrentText("");
          setCharIndex(0);
          setIndex((prev) => (prev + 1) % heroTexts.length);
        }, 1200);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [charIndex, index]);

  return (
    <section className="relative w-full h-[96vh] overflow-hidden text-white font-mono">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://d3a2dpnnrypp5h.cloudfront.net/layerzero-network/2024-05/LayerZero+-+Header+Animation+-+V02.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 z-10" />

      {/* Main Hero Content */}
      <div className="relative z-20 flex flex-col justify-end h-full px-6 md:px-30 p-10">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-white">Build </span>
          <br />
          <span className="text-green-400">{currentText}</span>
          <span className="text-green-400 animate-pulse">|</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl max-w-3xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Your Vision, Our Code — CoderCamp builds next-gen digital infrastructure powered by AI, Web3, and full-stack innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 md:px-30 p-10 text-center">
             <a
    href="#"
      className="inline-flex items-center gap-2 border border-white px-6 py-3 font-medium text-white text-sm md:text-base tracking-widest transition-all duration-300 hover:bg-white hover:text-black group"
>
  START BUILDING
  <span className="group-hover:translate-x-1 transition-transform duration-300">↗</span>
        </a>
        </div>

        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      {/* <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ y: 0 }}
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r bg-white"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          ↓
        </motion.div>
      </motion.div> */}
    </section>
  );
};
