import { PopupButton } from 'react-calendly';
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaStar,
  FaShieldAlt,
  FaUsers,
  FaHeart,
  FaRocket
} from "react-icons/fa";

const OwnerBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => setIsVisible(true), []);

  const benefits = [
    { icon: FaShieldAlt, text: "No spam ever", color: "text-green-400" },
    { icon: FaUsers, text: "No salespeople", color: "text-blue-400" },
    { icon: FaHeart, text: "Just real talk, founder to founder", color: "text-pink-400" }
  ];

  

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800
                         py-20 md:py-24 px-4 sm:px-6 text-white overflow-hidden">
      {/* ——— Animated Background ——— */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 
                        bg-gradient-to-r from-pink-500/20 to-purple-500/20
                        rounded-full mix-blend-multiply blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 
                        bg-gradient-to-r from-cyan-500/20 to-blue-500/20
                        rounded-full mix-blend-multiply blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-80 h-80 bg-gradient-to-r from-orange-500/15 to-red-500/15
                        rounded-full mix-blend-multiply blur-3xl animate-pulse delay-500" />
        {/* Floating particles (slightly fewer for perf) */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* ——— Left Side ——— */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className={isVisible ? "" : "opacity-0 translate-y-10"}
        >
          {/* Heading */}
          <div className="relative mb-6">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold flex flex-col gap-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400
                                 bg-clip-text text-transparent animate-gradient-x">
                CoderCamp
              </span>
              <span>Hotline</span>
            </motion.h2>
            {/* glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20
                            blur-2xl -z-10 opacity-50" />
          </div>

          {/* Tagline */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
          >
            A premium space where you can openly discuss your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 font-semibold">
              website or digital presence
            </span>{" "}
            — founder to founder, with complete transparency.
          </motion.p>

          {/* CTA */}
          {/* CTA */}
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
         className="mb-8"
       >
     {/* Calendly pop-up replaces  */}
     <PopupButton
       url="https://calendly.com/contact-codercamp/30min"   // ← your 30-min event link coderCamp email used
          rootElement={document.getElementById("root") ?? document.body}
             className="group relative bg-gradient-to-r from-[#00e6b8] to-[#00b59b]
               hover:from-[#00b59b] hover:to-[#009688]
                text-black font-bold py-3 px-6 rounded-xl shadow-xl flex items-center gap-2"
           text="Book Free 30-Min Strategy Call"                 // label on the button
  >
    {/* icon inside the same button styling */}
    <FaCalendarAlt className="text-lg" />
  </PopupButton>
           </motion.div>


          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="space-y-3"
          >
            {benefits.map(({ icon: Icon, text, color }, idx) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.75 + idx * 0.1, duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <div className="p-2 rounded-full bg-gray-800">
                  <Icon className={`${color} text-base`} />
                </div>
                <span className="text-gray-300">{text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-6 flex items-center gap-6"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>
              <span className="text-xs text-gray-400">500+ Happy Founders</span>
            </div>
            <div className="flex items-center gap-2">
              <FaRocket className="text-cyan-400" />
              <span className="text-xs text-gray-400">Avg. Response 2 h</span>
            </div>
          </motion.div>
        </motion.div>

        {/* ——— Right Side ——— */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="relative flex justify-center"
        >
          <div className="relative group">
            {/* ring glows */}
            <div className="absolute -inset-7 rounded-full blur-2xl
                            bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500
                            opacity-20 animate-pulse" />
            {/* portrait */}
            <motion.div
              whileHover={{ scale: 1.04, rotateX: 5, rotateY: 5 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px]
                         rounded-3xl overflow-hidden shadow-2xl border-4
                         border-gradient-to-r from-pink-500 to-cyan-500"
            >
              <img
                src="/meProfile.jpg"
                alt="Ashraful - CoderCamp Founder"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Live badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                className="absolute top-4 right-4 bg-gradient-to-r from-green-400 to-emerald-400
                           text-black px-3 py-1.5 rounded-full text-xs font-bold shadow"
              >
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-600 rounded-full animate-ping" />
                  Available Now
                </div>
              </motion.div>

              {/* Info card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute bottom-4 left-4 right-4
                           bg-black/60 backdrop-blur-md rounded-xl p-3"
              >
                <h4 className="font-bold">Ashraful Islam</h4>
                <p className="text-xs text-gray-300">Founder & Lead Developer</p>
                <div className="flex items-center gap-1 mt-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-xs" />
                  ))}
                  <span className="text-[10px] text-gray-300 ml-1">4.9/5</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OwnerBanner;
