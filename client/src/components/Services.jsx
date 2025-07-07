import {Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaCloud,
  FaCogs,
  FaSyncAlt,
  FaLifeRing,
  FaServer,
  FaArrowRight,
  FaCheck
} from "react-icons/fa";

const services = [
  {
    title: "Web Design & Development",
    icon: <FaLaptopCode className="text-black" size={24} />,
    description:
      "We build responsive, lightning-fast, and SEO-optimized websites that offer smooth user experience across all devices and platforms.",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-500/20",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading"]
  },
  {
    title: "Cloud Application Solutions",
    icon: <FaCloud className="text-black" size={24} />,
    description:
      "Scalable and secure cloud-native applications built on modern tech stacks with performance, uptime, and flexibility in mind.",
    gradient: "from-cyan-500 to-teal-500",
    bgGradient: "from-cyan-500/10 to-teal-500/10",
    borderColor: "border-cyan-500/20",
    features: ["Scalable Architecture", "High Security", "99.9% Uptime"]
  },
  {
    title: "Enterprise Software Engineering",
    icon: <FaServer className="text-black" size={24} />,
    description:
      "Custom enterprise-grade software solutions that streamline operations, improve decision-making, and support business growth.",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/10 to-emerald-500/10",
    borderColor: "border-green-500/20",
    features: ["Custom Solutions", "Business Intelligence", "Process Automation"]
  },
  {
    title: "Software Product Modernization",
    icon: <FaSyncAlt className="text-black" size={24} />,
    description:
      "We upgrade outdated systems into modern, maintainable, and secure platforms without disrupting your ongoing operations.",
    gradient: "from-pink-500 to-rose-500",
    bgGradient: "from-pink-500/10 to-rose-500/10",
    borderColor: "border-pink-500/20",
    features: ["Legacy Migration", "Zero Downtime", "Modern Architecture"]
  },
  {
    title: "Ongoing Support & Maintenance",
    icon: <FaLifeRing className="text-black" size={24} />,
    description:
      "Reliable, long-term maintenance, feature updates, and technical support to ensure your applications stay healthy and competitive.",
    gradient: "from-purple-500 to-violet-500",
    bgGradient: "from-purple-500/10 to-violet-500/10",
    borderColor: "border-purple-500/20",
    features: ["24/7 Support", "Regular Updates", "Performance Monitoring"]
  },
  {
    title: "Custom Backend Development",
    icon: <FaCogs className="text-black" size={24} />,
    description:
      "Secure, efficient backend systems with robust APIs, business logic, and integrations designed for performance at scale.",
    gradient: "from-yellow-500 to-orange-500",
    bgGradient: "from-yellow-500/10 to-orange-500/10",
    borderColor: "border-yellow-500/20",
    features: ["Robust APIs", "High Performance", "Secure Architecture"]
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const ServicesSection = () => {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full filter blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300 font-semibold text-sm tracking-wider uppercase backdrop-blur-sm">
              Our Services
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Explore Our Full Spectrum of
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Development Services
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Whether you're launching your first product, scaling an existing business, or modernizing legacy systems,
            CoderCamp delivers tailored software development solutions that meet your real-world needs.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className={`group relative bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm rounded-2xl p-6 shadow-2xl border ${service.borderColor} hover:shadow-3xl transition-all duration-500 overflow-hidden cursor-pointer`}
            >
              {/* Decorative background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
              
              {/* Floating particles effect */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-white/20 to-transparent rounded-full animate-ping group-hover:animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-gradient-to-r from-white/10 to-transparent rounded-full animate-ping delay-300 group-hover:animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                {/* Icon Container - Smaller Size */}
                <motion.div 
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300`}
                >
                  {service.icon}
                </motion.div>

                {/* Service Title - Smaller */}
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gray-100 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service Description - Smaller */}
                <p className="text-gray-300 leading-relaxed mb-4 text-sm group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features List - Smaller */}
                <div className="space-y-1 mb-4">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 + 0.3 }}
                      className="flex items-center gap-2"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                      <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Learn More Button - Smaller */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className={`flex items-center gap-2 text-xs font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all duration-300`}
                >
                  Learn More
                  <FaArrowRight className="text-xs opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>

                {/* Animated progress bar - Smaller */}
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  className={`mt-4 h-0.5 bg-gradient-to-r ${service.gradient} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                ></motion.div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.p
            className="text-lg text-gray-300 mb-6 font-light"
          >
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Ready to transform your business with our expertise?
            </span>
          </motion.p>
          
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/*  */}
            <Link to="/contact" >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold rounded-xl shadow-2xl transition-all duration-300"
            >
              Get Started Today
            </motion.button>
            </Link>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border-2 border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm"
            >
              View Portfolio
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
