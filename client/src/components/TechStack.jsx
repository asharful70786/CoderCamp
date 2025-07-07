import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaAws,
  FaLinux, FaGithub, FaEnvelope, FaPalette, FaCode, FaPhoneAlt
} from "react-icons/fa";
import {
  SiTailwindcss, SiVite, SiExpress, SiMongodb, SiMysql,
  SiJsonwebtokens, SiRedis
} from "react-icons/si";
import { TbDatabaseCog } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { BiSolidUserBadge } from "react-icons/bi";


const techStack = [
  // Frontend
  { icon: <FaReact />, label: "React.js", color: "text-cyan-400" },
  { icon: <SiTailwindcss />, label: "Tailwind", color: "text-sky-400" },
  { icon: <FaHtml5 />, label: "HTML5", color: "text-orange-500" },
  { icon: <FaCss3Alt />, label: "CSS3", color: "text-blue-500" },
  { icon: <FaPalette />, label: "shadcn", color: "text-purple-300" },
  { icon: <SiVite />, label: "Vite.js", color: "text-violet-400" },

  // Backend
  { icon: <FaNodeJs />, label: "Node.js", color: "text-green-500" },
  { icon: <SiExpress />, label: "Express", color: "text-gray-300" },
  { icon: <SiMongodb />, label: "MongoDB", color: "text-green-400" },
  { icon: <TbDatabaseCog />, label: "Mongoose", color: "text-teal-300" },
  { icon: <SiJsonwebtokens />, label: "JWT", color: "text-yellow-400" },
  { icon: <SiRedis />, label: "Redis", color: "text-red-500" },
  { icon: <FaEnvelope />, label: "Nodemailer", color: "text-lime-400" },
  { icon: <BiSolidUserBadge />, label: "RBAC", color: "text-indigo-400" },
  { icon: <MdSecurity />, label: "Auth", color: "text-pink-400" },
  { icon: <FaCode />, label: "Zod", color: "text-fuchsia-400" },
  { icon: <FaPhoneAlt />, label: "Twilio", color: "text-rose-400" },

  // DB
  { icon: <TbDatabaseCog />, label: "SQL", color: "text-orange-400" },
  { icon: <SiMysql />, label: "MySQL", color: "text-blue-400" },

  // DevOps
  { icon: <FaAws />, label: "AWS", color: "text-orange-300" },
  { icon: <FaLinux />, label: "Linux", color: "text-yellow-200" },
  { icon: <FaGithub />, label: "GitHub", color: "text-white" },
];

const TechStackSlider = () => {
  const repeatedStack = [...techStack, ...techStack];

  return (
    <section className="w-full bg-[#0a0a0a] py-10 px-4 text-white overflow-hidden border-y border-gray-800">
        {/* Tagline */}
  <div className="text-center mb-6">
    <h3 className="text-xl md:text-2xl font-semibold text-gray-200">
     <span className="text-cyan-400">Just the Right Tech .</span> Every Time.
    </h3>
  </div>
      <motion.div
        className="flex gap-10 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        }}
      >
        {repeatedStack.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center min-w-[100px] hover:scale-110 transition-transform duration-300"
          >
            <div className={`text-3xl mb-1 ${tech.color}`}>{tech.icon}</div>
            <span className="text-xs text-gray-300">{tech.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechStackSlider;
