import { motion } from 'framer-motion';
import { FaCheckCircle, FaCog, FaUserTie, FaChartBar, FaShieldAlt } from 'react-icons/fa';

const features = [
  {
    title: "Business Efficiency",
    description:
      "We streamline your workflows and reduce operational friction, allowing your business to function faster and smarter.",
    icon: FaCog,
  },
  {
    title: "Manpower Optimization",
    description:
      "Our tech-first approach minimizes redundancy, ensuring your workforce focuses only on high-impact tasks.",
    icon: FaUserTie,
  },
  {
    title: "Sales Growth",
    description:
      "We drive visibility and conversion with digital strategies tailored to increase revenue and market presence.",
    icon: FaChartBar,
  },
  {
    title: "Brand Reliability",
    description:
      "We help establish your brand as an authority with consistency, quality delivery, and digital trust.",
    icon: FaShieldAlt,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function GrowthSection() {
  return (
    <section className="bg-[#0f0f0f] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          With Us Behind the Wheels,
          <br className="hidden md:block" />
          Business Growth Is the Only Option.
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          We assess your needs, reduce risks, and deliver solutions designed for sustainable business outcomes.
        </p>
      </div>

      <motion.div
        className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="flex items-start gap-5 p-6 border border-gray-700 rounded-xl bg-[#141414] hover:border-gray-500 transition duration-300"
          >
            <div className="flex-shrink-0 text-primary text-2xl">
              <feature.icon className="text-gray-300" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-16"
      >
        <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300">
          Let’s Discuss Your Strategy
        </button>
        <p className="mt-4 text-gray-500 text-sm">
          Ready to take the next step? We’re just a message away.
        </p>
      </motion.div>
    </section>
  );
}
