import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const projects = [
  {
    category: "AI Face Recognition",
    title: "Face Laxious: Scan Your Face to Instantly Retrieve Your Photo",
    description: "Advanced AI-powered face recognition system with lightning-fast scanning and unmatched accuracy for instant photo retrieval.",
    stats: [
      { value: "98%", label: "Face match accuracy" },
      { value: "3s", label: "Average scan time" },
      { value: "100%", label: "User satisfaction rate" },
    ],
    button: "Try Face Laxious",
    image: "https://wallpapers.com/images/hd/face-recognition-1600-x-900-wallpaper-o3rh0wpg6lwsir6q.jpg", 
    link: "https://face.ashraful.in",
    gradient: "from-purple-600 to-blue-600",
    iconColor: "text-purple-400"
  },
  {
    category: "AI Health",
    title: "AI-Doctor: Smart Consultation Bot for Patient Triage and FAQs",
    description: "Intelligent healthcare assistant providing instant medical consultations, patient triage, and comprehensive FAQ support.",
    stats: [
      { value: "80%", label: "Patient satisfaction rate" },
      { value: "65%", label: "Faster query resolution" },
      { value: "40%", label: "Appointment load reduction" },
    ],
    button: "Explore AI-Doctor Demo",
    image: "/AiDoctor.png",
    link: "https://github.com/asharful70786/Ai-Doctor",
    gradient: "from-green-600 to-teal-600",
    iconColor: "text-green-400"
  }, 
  {
    category: "E-Commerce",
    title: "BabyJohn: Wholesale Diaper Store with Order and Inquiry System",
    description: "Complete e-commerce solution for wholesale diaper distribution with advanced order management and customer inquiry system.",
    stats: [
      { value: "90%", label: "Conversion rate increased" },
      { value: "50%", label: "Visitor retention improved" },
      { value: "35%", label: "Wholesale form fill-ups" },
    ],
    button: "View BabyJohn Product Page",
    image: "/hero3.jpg",
    link: "https://babyjohn.in",
    gradient: "from-orange-600 to-red-600",
    iconColor: "text-orange-400"
  },
  {
    category: "Cloud Storage",
    title: "StorageApp: Secure, Reliable, and Scalable Cloud Storage",
    description: "Enterprise-grade cloud storage solution with military-level security, global accessibility, and unlimited scalability.",
    stats: [
      { value: "99%", label: "File upload reliability" },
      { value: "100%", label: "IPv6 global access" },
      { value: "70%", label: "User satisfaction" },
    ],
    button: "Explore GlobalStorage Demo",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=800",
    link: "#",
    gradient: "from-blue-600 to-cyan-600",
    iconColor: "text-blue-400"
  },
];

const ProjectShowcaseSlider = () => {
  const [index, setIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const project = projects[index];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (i) => {
    setIndex(i);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 px-6 lg:px-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our cutting-edge solutions that transform ideas into reality
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="space-y-8"
            >
              {/* Category Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${project.gradient} text-white text-sm font-semibold uppercase tracking-wider shadow-lg`}
              >
                <span className={`w-2 h-2 rounded-full bg-white mr-2 animate-pulse`}></span>
                {project.category}
              </motion.div>

              {/* Title */}
              <motion.h2 
                className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {project.title}
              </motion.h2>

              {/* Description */}
              <motion.p 
                className="text-lg text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {project.description}
              </motion.p>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {project.stats.map((stat, i) => (
                  <motion.div 
                    key={i} 
                    className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                  >
                    <p className={`text-3xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                      {stat.value}
                    </p>
                    <p className="text-gray-400 text-sm mt-1 font-medium">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex items-center px-8 py-4 bg-gradient-to-r ${project.gradient} hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 text-white font-semibold rounded-full transform hover:scale-105`}
                >
                  <span className="mr-3">→</span>
                  {project.button}
                  <motion.span 
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    whileHover={{ x: 5 }}
                  >
                    ✨
                  </motion.span>
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Right Content - Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={project.image}
              initial={{ opacity: 0, x: 100, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -100, rotateY: 15 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/50 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <h3 className="text-white font-semibold text-lg mb-2">{project.category}</h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-sm">★</span>
                        ))}
                      </div>
                      <span className="text-gray-300 text-sm">Premium Quality</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="mt-16 flex items-center justify-center space-x-8">
          {/* Previous Button */}
          <motion.button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          {/* Dots Navigation */}
          <div className="flex space-x-3">
            {projects.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => goToSlide(i)}
                className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                  index === i ? "bg-orange-500 scale-125" : "bg-gray-500/40 hover:bg-gray-400/60"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {index === i && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-orange-400"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7
              " />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcaseSlider;