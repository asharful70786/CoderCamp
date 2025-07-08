import { motion } from "framer-motion";
import { useState } from "react";

const Career = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const benefits = [
    {
      title: "Direct Founder Collaboration",
      description: "Work alongside visionaries without corporate bureaucracy"
    },
    {
      title: "Value-Based Compensation",
      description: "Your rewards directly reflect your measurable impact"
    },
    {
      title: "Equity in Innovation",
      description: "Own meaningful stakes in what you help create"
    },
    {
      title: "Purpose-Driven Development",
      description: "Build solutions that redefine industry standards"
    }
  ];

  const roles = [
    {
      title: "Full-Stack Architect",
      tech: ["React", "Node.js", "GraphQL", "Serverless"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI Solutions Engineer",
      tech: ["Python", "LLMs", "Computer Vision", "NLP"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Blockchain Developer",
      tech: ["Solidity", "EVM", "Smart Contracts", "ZKPs"],
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "Cloud Infrastructure Lead",
      tech: ["Kubernetes", "Terraform", "AWS", "Observability"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="min-h-screen  text-white py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-xl border border-orange-400/20 rounded-full px-6 py-3 mb-8">
            <span className="text-sm font-semibold text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text tracking-wider uppercase">
              Build With Purpose
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text">Collaborate at</span>
            <br />
            <span className="text-white">CoderCamp</span>
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            This isn't employment—it's co-creation. We unite exceptional builders to develop transformative technologies with direct ownership stakes.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3, duration: 0.8 }} 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.05, y: -5 }} 
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full group-hover:border-cyan-400/30 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.6, duration: 0.8 }} 
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">Our Manifesto</h2>
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                <strong>Value creation is measurable.</strong> Your contributions determine your stake—no politics, no ambiguity.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong>We don't hire employees.</strong> We partner with builders who want skin in the game.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Exceptional output earns <strong className="text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">founder-level equity</strong> and revenue participation.
              </p>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-orange-400/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Traditional employment is broken.</h3>
            <p className="text-xl text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text font-semibold">We're building the alternative.</p>
            <p className="text-gray-300 mt-4">Where builders become owners.</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.9, duration: 0.8 }} 
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text">Current Collaborations</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {roles.map((role, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.02, y: -5 }} 
                onHoverStart={() => setHoveredCard(index)} 
                onHoverEnd={() => setHoveredCard(null)} 
                className="group relative"
              >
                <div className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 group-hover:border-white/30 rounded-2xl p-6 transition-all duration-300`}>
                  <h3 className="text-xl font-bold text-white mb-4">{role.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {role.tech.map((tech, techIndex) => (
                      <span key={techIndex} className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${role.gradient} text-white`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }} 
                    animate={{ opacity: hoveredCard === index ? 1 : 0, height: hoveredCard === index ? "auto" : 0 }} 
                    className="text-gray-400 text-sm"
                  >
                    Contribute to pioneering projects with technology leadership and meaningful ownership.
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 1.2, duration: 0.8 }} 
          className="text-center"
        >
          <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-cyan-400/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Build as Partners?</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Demonstrate your capabilities and let's discuss how you can contribute to our next evolution.
            </p>
            <motion.a 
              href="mailto:contact.codercamp@gmail.com" 
              whileHover={{ scale: 1.05, y: -2 }} 
              whileTap={{ scale: 0.98 }} 
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 px-8 py-4 rounded-full font-semibold text-white shadow-2xl transition-all duration-300"
            >
              <span className="text-lg font-bold">Start Building With Us</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Career;