import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const OurProcess = () => {
  const steps = [
    {
      title: "Discovery & Analysis",
      description:
        "We start by thoroughly understanding your business goals, target audience, and challenges to craft a strategic, tailored roadmap.",
      icon: "",
    },
    {
      title: "Research & Strategy",
      description:
        "We analyze competitors and industry trends, then build data-driven strategies that align with your goals for maximum ROI.",
      icon: "",
    },
    {
      title: "Execution & Delivery",
      description:
        "We implement the strategic plan using best practices and cutting-edge tools, ensuring timely delivery and robust performance.",
      icon: "",
    },
    {
      title: "Optimization & Growth",
      description:
        "Post-launch, we continuously monitor, refine, and enhance the product to maintain relevance and maximize long-term growth.",
      icon: "",
    },
  ];

  const stickyNotes = ["Innovative", "Beautiful", "Excellence", "Our Process"];
  const noteColors = [
    "from-pink-200 to-purple-300",
    "from-rose-200 to-red-300",
    "from-yellow-300 to-orange-300",
    "from-cyan-300 to-teal-300",
  ];

  // Variants for stagger animation
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const noteVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-gradient-to-br from-[#0e0e0e] via-black to-[#0d0d0d] text-white py-20 px-6 min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-700 rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-700 rounded-full blur-[120px] opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
{/* Left Column: Heading + Sticky Notes Vertical */}
   <div >
    <motion.h2
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-4xl w-45px font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500  mb-10"
    >
    How We Work
  </motion.h2>

  {/* Vertical Sticky Notes with stagger */}
  <motion.div
    variants={{
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.3,
        },
      },
    }}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="flex flex-col gap-4"
  >
    {stickyNotes.map((text, i) => (
      <motion.div
        key={i}
        variants={{
          hidden: { opacity: 0, y: 30 },
          show: { opacity: 1, y: 0 },
        }}
        whileHover={{
          scale: 1.05,
          rotate: 0,
          y: -3,
          transition: { duration: 0.3 },
        }}
        className={`w-full px-6 py-4 m-7 rounded-xl shadow-xl font-semibold text-lg text-black bg-gradient-to-br ${noteColors[i]} transform transition-all`}
        style={{ transform: `rotate(${[-3, 2, -2, 1][i]}deg)` }}
      >
        {text}
      </motion.div>
    ))}
  </motion.div>
</div>


        {/* Right Column: Process Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5 }}
            className="absolute left-5 top-8 w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-violet-500 rounded-full"
          />

          <div className="space-y-10 pl-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                {/* Step Circle */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="absolute -left-12 top-2 w-10 h-10 bg-gradient-to-br from-violet-500 to-blue-500 text-white rounded-full flex flex-col items-center justify-center shadow-lg border-4 border-white/10"
                >
                  <span className="text-base">{step.icon}</span>
                  <span className="text-[10px] font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </motion.div>

                {/* Step Card */}
                <div className="bg-[#1f1f1f] border border-gray-700/50 rounded-xl p-5 shadow-xl backdrop-blur-md transition-all group-hover:border-cyan-400/50">
                  <h3 className="text-white text-lg font-bold mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                  <div className="mt-3 h-1 w-14 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-16 text-center"
      >
        <Link to="/contact">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative bg-gradient-to-r from-blue-500 to-violet-600 text-white font-bold px-8 py-3 rounded-2xl text-lg border border-white/20 shadow-xl"
        >
          Connect Us
        </motion.button>
        </Link>
        <p className="mt-4 text-gray-400 text-sm">
          Ready to take your idea to the next level? Let’s build something amazing together.
        </p>
      </motion.div>
    </section>
  );
};

export default OurProcess;
