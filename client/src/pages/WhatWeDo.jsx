import { motion } from "framer-motion";
import { FaCogs, FaChartBar, FaRocket, FaCode } from "react-icons/fa";

const features = [
  {
    title: "Custom Approach",
    description: "We solve real business problems with custom-tailored tech solutions.",
    icon: <FaCode size={36} />,
    bg: "bg-purple-100",
    text: "text-purple-700",
    shadow: "hover:shadow-purple-300/50"
  },
  {
    title: "Data-driven Development",
    description: "We create tech products that are data-driven and market-conscious.",
    icon: <FaChartBar size={36} />,
    bg: "bg-yellow-100",
    text: "text-yellow-700",
    shadow: "hover:shadow-yellow-300/50"
  },
  {
    title: "Cutting-edge Tech",
    description: "Every project is an opportunity for us to chase innovation.",
    icon: <FaCogs size={36} />,
    bg: "bg-indigo-100",
    text: "text-indigo-700",
    shadow: "hover:shadow-indigo-300/50"
  },
  {
    title: "Scalable Solutions",
    description: "Our business solutions never stand in the way of your growth.",
    icon: <FaRocket size={36} />,
    bg: "bg-pink-100",
    text: "text-pink-700",
    shadow: "hover:shadow-pink-300/50"
  },
];

 const WhatWeDo = () => {
  return (
    <section className="bg-[#000000] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-stretch">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`rounded-2xl p-8 w-full ${feature.bg} ${feature.text} ${feature.shadow} hover:scale-105 transition-transform shadow-md cursor-pointer`}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
              <p className="text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default WhatWeDo