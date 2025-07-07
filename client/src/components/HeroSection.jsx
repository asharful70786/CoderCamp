import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaRocket, FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom";

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
    <section className="relative w-full h-screen overflow-hidden text-white">
      {/* Video Background: Full View */}
      <div className="absolute inset-0 z-0 flex items-center justify-center bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain"
        >
          <source src="/premiumContact.webm" type="video/webm" />
          <source src="/premiumContact.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/85 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
      </div>

      {/* Main Content on Top of Video */}
      <div className="relative z-20 flex flex-col justify-center h-[98%] px-6 md:px-9 mt-30">
        <div className="max-w-10xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <div className="w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-white/90 tracking-wide uppercase">
                Next-Gen Development
              </span>
            </div>
          </motion.div>

          {/* Heading with Typing Animation */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb- leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-white">Build </span>
            <br />
            <span className="bg-gradient-to-r from-lime-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {currentText}
            </span>
            <span className="text-lime-400 animate-pulse">|</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-base md:text-lg max-w-2xl text-gray-200 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Your Vision, Our Code — CoderCamp builds next-gen digital infrastructure powered by AI, Web3, and full-stack innovation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
      
            <Link  to="/contact">
              <motion
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white bg-white/5 hover:bg-white/10 backdrop-blur-sm px-6 py-3 font-medium text-white text-sm tracking-wide rounded-full transition-all duration-300"
              >
                <span>START BUILDING</span>
              </motion>
            </Link>  
          </motion.div>

        
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="text-white/60 text-xs cursor-pointer hover:text-white transition-colors"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          ↓ scroll
        </motion.div>
      </motion.div>
    </section>
  );
};
