import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Home, Package, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { TbReport } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const navItems = [
  { name: "Home", to: "home", icon: <Home className="w-4 h-4" /> },
  { name: "Products", to: "products", icon: <Package className="w-4 h-4" /> },
  { name: "Contact", to: "contact", icon: <Phone className="w-4 h-4" /> },
];

const NavBar = () => {
  const pdfUrl = "/BabyJohn_Catalog.pdf";
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("home");
    setMobileMenuOpen(false);
  };

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);

    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* HEADER */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={cn(
          "fixed z-50 top-0 inset-x-0 w-full transition-all duration-700",
          scrolled
            ? "backdrop-blur-xl bg-black/40 border-b border-gray-800/50 shadow-2xl"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 lg:h-20">
            {/* LOGO */}
            <motion.div
              className="flex items-center cursor-pointer"
              onClick={handleLogoClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/logo.png" alt="Logo" className="h-10 w-auto object-contain bg-white rounded-full" />
            </motion.div>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-2 bg-gray-900/60 backdrop-blur-xl rounded-2xl p-2 shadow-2xl border border-gray-700/50">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.to}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => handleNavClick(item.to)}
                  className={cn(
                    "group relative flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-500",
                    activeSection === item.to
                      ? "bg-gradient-to-r from-blue-500 via-purple-500 to-gray-800 text-white shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:via-purple-500/20 hover:to-gray-800/20"
                  )}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </span>
                  {item.name}
                  {activeSection === item.to && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-gray-800 rounded-xl -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </nav>

            {/* DOWNLOAD BUTTON */}
            <div className="hidden lg:block">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-gray-800 hover:from-blue-600 hover:via-purple-600 hover:to-gray-900 text-white rounded-xl shadow-2xl transition-all px-6 py-3 border-0"
                >
                  <a href={pdfUrl} download className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download Catalog
                    <TbReport className="w-4 h-4" />
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* MOBILE TOGGLE */}
            <motion.button
              className="lg:hidden p-3 rounded-xl bg-gray-900/60 backdrop-blur-xl border border-gray-700/50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X className="w-6 h-6 text-gray-300" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu className="w-6 h-6 text-gray-300" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 z-50 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 shadow-2xl border-l border-gray-700/50"
            >
              {/* Animated Background Elements */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div
                  className="absolute w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"
                  initial={{ x: 80, y: 300, scale: 0 }}
                  animate={{ x: -30, y: -50, scale: 2 }}
                  transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
                />
                <motion.div
                  className="absolute w-20 h-20 bg-purple-500/20 rounded-full blur-2xl"
                  initial={{ x: -60, y: 250, scale: 0 }}
                  animate={{ x: 50, y: -10, scale: 1.7 }}
                  transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", delay: 1 }}
                />
                <motion.div
                  className="absolute w-24 h-24 bg-gray-700/30 rounded-full blur-2xl"
                  initial={{ x: 100, y: 100, scale: 0 }}
                  animate={{ x: -20, y: 200, scale: 1.5 }}
                  transition={{ duration: 12, repeat: Infinity, repeatType: "mirror", delay: 2 }}
                />
              </div>

              {/* Menu Content */}
              <div className="p-6 pt-24 relative z-10">
                <nav className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.to}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleNavClick(item.to)}
                      className={cn(
                        "w-full flex items-center gap-4 px-6 py-4 rounded-xl font-semibold transition-all duration-300",
                        activeSection === item.to
                          ? "bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-gray-800/20 text-white border border-blue-500/30"
                          : "text-gray-300 hover:bg-gray-800/50 hover:text-white backdrop-blur-xl"
                      )}
                      whileHover={{ x: 5, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-gray-400">{item.icon}</span>
                      {item.name}
                    </motion.button>
                  ))}
                </nav>

                {/* Mobile Download Button */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8"
                >
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-gray-800 hover:from-blue-600 hover:via-purple-600 hover:to-gray-900 text-white rounded-xl shadow-2xl transition-all px-6 py-4 border-0"
                  >
                    <a href={pdfUrl} download className="flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      Download Catalog
                      <TbReport className="w-4 h-4" />
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
