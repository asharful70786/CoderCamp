import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const heroTexts = [
  "AI Applications",
  "Full-Stack Web",
  "Smart Backend Systems",
  "Mobile Apps",
];

export const HeroSection = () => {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  /* ───────── Typing effect ───────── */
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
      {/* 🔮 Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 15 }}>
        {/* Blurred neon blobs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-spin-slow"></div>

        {/* Floating star-dust */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* 🎬 Video Background */}
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
        <div className="absolute inset-0 bg-black/85 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
      </div>

      {/* 📝 Main Content */}
      <div className="relative z-20 flex flex-col justify-center h-[98%] px-6 md:px-9">
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
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
            Your Vision, Our Code — CoderCamp builds next-gen digital
            infrastructure powered by AI, Web3, and full-stack innovation.
          </motion.p>

          {/* CTA */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <Link to="/contact">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white bg-white/5 hover:bg-white/10 backdrop-blur-sm px-6 py-3 font-medium text-white text-sm tracking-wide rounded-full transition-all duration-300"
              >
                START BUILDING
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ↓ Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.span
          className="text-white/60 text-xs cursor-pointer hover:text-white transition-colors"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          ↓ scroll
        </motion.span>
      </motion.div>

      {/* ➡️ RIGHT-side video card with hover glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="flex-1 flex justify-center">
          <div className="relative group pointer-events-auto">
            {/* breathing glow on hover */}
            <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />

            {/* subtle steady haze */}
            <div className="absolute -inset-4 bg-orange-500/20 rounded-full blur-xl animate-pulse pointer-events-none" />

            {/* video container (size unchanged) */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-gradient-to-r from-orange-500 to-red-500">
              <video
                className="object-cover w-full h-full"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/premiumContact.webm" type="video/webm" />
                <source src="/premiumContact.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-full pointer-events-none" />
            </div>

            {/* ambient floaters */}
            <div className="absolute top-10 -right-5 w-4 h-4 bg-orange-500 rounded-full animate-bounce delay-100 pointer-events-none" />
            <div className="absolute bottom-10 -left-5 w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-300 pointer-events-none" />
            <div className="absolute top-1/2 -right-8 w-2 h-2 bg-purple-500 rounded-full animate-ping delay-500 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* 🔧 Custom keyframes */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
