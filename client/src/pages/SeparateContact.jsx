import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaUser, FaGlobe } from "react-icons/fa";
import { useState } from "react";

const SeparateContact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "MAIL US",
      value: "contact.codercamp@gmail.com",
      color: "from-blue-400 to-cyan-400",
      hoverColor: "group-hover:text-cyan-300"
    },
    {
      icon: FaPhoneAlt,
      label: "CALL US", 
      value: "+91 7076091389",
      color: "from-green-400 to-emerald-400",
      hoverColor: "group-hover:text-emerald-300"
    },
    {
      icon: FaMapMarkerAlt,
      label: "VISIT US",
      value: "CoderCamp HQ, Shyamnagar,\nKolkata, India",
      color: "from-purple-400 to-pink-400",
      hoverColor: "group-hover:text-pink-300"
    }
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    interest: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch("https://backend.codercamp.ashraful.in//api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        const data = await response.json();
        setSubmitStatus({ success: true, message: data.message || "Message sent successfully!" });
        setFormData({
          name: "",
          email: "",
          country: "",
          phone: "",
          interest: "",
          message: ""
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send message");
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: error.message || "An error occurred. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-gradient-to-br w-full from-gray-900 via-black to-gray-900 text-white py-24 px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? We're here to help you every step of the way.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-400 mb-1 tracking-wider">
                        {item.label}
                      </p>
                      <p className={`text-lg font-medium text-white ${item.hoverColor} transition-colors duration-300 whitespace-pre-line`}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                  
                  {/* Decorative gradient line */}
                  <div className={`mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-500`}></div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20"
            >
              <h4 className="text-xl font-bold mb-3 text-cyan-300">Why Choose Us?</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  24/7 Support Available
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Quick Response Time
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  Expert Team Ready
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Side - Form with Original Lime/Green Colors */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-lime-400 to-lime-300 text-black p-10 rounded-3xl shadow-2xl border border-black/20 relative overflow-hidden">
              {/* Decorative elements with lime colors */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-lime-300/30 to-green-400/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-yellow-400/30 to-lime-400/30 rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-bold mb-2 text-black"
                >
                  Got Ideas?
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl font-semibold mb-8 text-black/80"
                >
                  We've got the skills.
                </motion.p>

                {submitStatus && (
                  <div className={`mb-6 p-4 rounded-xl ${submitStatus.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"} font-medium`}>
                    {submitStatus.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="relative group"
                  >
                    <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 group-focus-within:text-green-600 transition-colors duration-300" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className={`w-full pl-12 pr-4 py-4 rounded-xl bg-white/90 focus:bg-white border-2 ${errors.name ? "border-red-500" : "border-black/30 focus:border-green-500"} focus:outline-none placeholder-gray-600 text-black font-medium transition-all duration-300 shadow-lg focus:shadow-xl`}
                    />
                    {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                  </motion.div>

                  {/* Email Input */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="relative group"
                  >
                    <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 group-focus-within:text-green-600 transition-colors duration-300" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className={`w-full pl-12 pr-4 py-4 rounded-xl bg-white/90 focus:bg-white border-2 ${errors.email ? "border-red-500" : "border-black/30 focus:border-green-500"} focus:outline-none placeholder-gray-600 text-black font-medium transition-all duration-300 shadow-lg focus:shadow-xl`}
                    />
                    {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                  </motion.div>

                  {/* Country and Phone Row */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex gap-4"
                  >
                    <div className="relative group flex-1">
                      <FaGlobe className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 group-focus-within:text-green-600 transition-colors duration-300" />
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="Country"
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/90 focus:bg-white border-2 border-black/30 focus:border-green-500 focus:outline-none placeholder-gray-600 text-black font-medium transition-all duration-300 shadow-lg focus:shadow-xl"
                      />
                    </div>
                    <div className="relative group flex-1">
                      <FaPhoneAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 group-focus-within:text-green-600 transition-colors duration-300" />
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/90 focus:bg-white border-2 border-black/30 focus:border-green-500 focus:outline-none placeholder-gray-600 text-black font-medium transition-all duration-300 shadow-lg focus:shadow-xl"
                      />
                    </div>
                  </motion.div>

                  {/* Interest Input */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <input
                      type="text"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      placeholder="What is your interest?"
                      className="w-full px-4 py-4 rounded-xl bg-white/90 focus:bg-white border-2 border-black/30 focus:border-green-500 focus:outline-none placeholder-gray-600 text-black font-medium transition-all duration-300 shadow-lg focus:shadow-xl"
                    />
                  </motion.div>

                  {/* Message Textarea */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <textarea
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      className={`w-full px-4 py-4 rounded-xl bg-white/90 focus:bg-white border-2 ${errors.message ? "border-red-500" : "border-black/30 focus:border-green-500"} focus:outline-none placeholder-gray-600 text-black font-medium transition-all duration-300 shadow-lg focus:shadow-xl resize-none`}
                    ></textarea>
                    {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ delay: 1.0 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-xl font-bold text-lg shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <span>Let's Connect</span>
                        <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SeparateContact;