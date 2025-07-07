import { motion } from "framer-motion";

const ProcessStrip = () => {
  const items = [
    { 
      text: "Design", 
      hoverColor: "hover:text-amber-300",
      dotGradient: "from-amber-400 to-yellow-500"
    },
    { 
      text: "Develop", 
      hoverColor: "hover:text-fuchsia-400",
      dotGradient: "from-fuchsia-500 to-purple-600"
    },
    { 
      text: "Deploy", 
      hoverColor: "hover:text-cyan-400",
      dotGradient: "from-cyan-400 to-blue-500"
    },
  ];

  return (
    <section className="relative w-full py-20 px-6 overflow-hidden bg-black">
      {/* Glowing Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-full filter blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main Text Row */}
      <div className="relative max-w-[1600px] mx-auto flex justify-between items-center gap-4 flex-wrap">
        {items.map((item, index) => (
          <div key={index} className="flex-1 min-w-[200px] flex items-center justify-center gap-6 group">
            {/* Text Item */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{
                scale: 1.1,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="relative cursor-pointer"
            >
              <motion.h2
                whileHover={{ scale: 1, y: -10 }}
                className={`text-6xl lg:text-7xl font-extrabold uppercase transition-all duration-500 ${item.hoverColor} relative`}
                style={{
                  WebkitTextStroke: "2px white",
                  color: "transparent",
                }}
              >
                {item.text}
              </motion.h2>
            </motion.div>

            {/* Dot */}
            {index < items.length - 1 && (
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                whileInView={{ scale: 1, rotate: 360 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2 + 0.4,
                  ease: "easeOut"
                }}
                whileHover={{
                  scale: 1.5,
                  rotate: 720,
                  transition: { duration: 0.5 }
                }}
                className="group/dot cursor-pointer"
              >
                <div className={`w-8 h-8 bg-gradient-to-r ${item.dotGradient} rounded-full shadow-2xl flex items-center justify-center`}>
                  <div className="w-4 h-4 bg-white rounded-full opacity-80 group-hover/dot:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessStrip;