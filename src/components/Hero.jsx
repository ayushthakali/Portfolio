import { motion } from "framer-motion";
import { Download, Code, Laptop, Palette } from "lucide-react";
import { MdPhone } from "react-icons/md";
import { Link } from "react-scroll";
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiMongodb,
  SiPostman,
  SiSupabase,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { AiOutlineApi } from "react-icons/ai";

const skills = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
    bgColor: "bg-black",
    glowColor: "shadow-white/20",
  },
  {
    name: "React",
    icon: FaReact,
    bgColor: "bg-blue-500",
    glowColor: "shadow-blue-500/50",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    bgColor: "bg-yellow-500",
    glowColor: "shadow-yellow-500/50",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    bgColor: "bg-blue-600",
    glowColor: "shadow-blue-600/50",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    bgColor: "bg-teal-500",
    glowColor: "shadow-teal-500/50",
  },
  {
    name: "Redux / RTK",
    icon: SiRedux,
    bgColor: "bg-purple-600",
    glowColor: "shadow-purple-600/50",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    bgColor: "bg-green-600",
    glowColor: "shadow-green-600/50",
  },
  {
    name: "Framer Motion",
    icon: SiFramer,
    bgColor: "bg-pink-500",
    glowColor: "shadow-pink-500/50",
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    bgColor: "bg-emerald-500",
    glowColor: "shadow-emerald-500/50",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    bgColor: "bg-green-700",
    glowColor: "shadow-green-700/50",
  },
  {
    name: "SQL",
    icon: GrMysql,
    bgColor: "bg-blue-700",
    glowColor: "shadow-blue-700/50",
  },

  {
    name: "Git",
    icon: FaGitAlt,
    bgColor: "bg-orange-600",
    glowColor: "shadow-orange-600/50",
  },
  {
    name: "Postman",
    icon: SiPostman,
    bgColor: "bg-orange-600",
    glowColor: "shadow-orange-600/40",
  },
  {
    name: "REST APIs",
    icon: AiOutlineApi,
    bgColor: "bg-gray-700",
    glowColor: "shadow-gray-700/50",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    bgColor: "bg-black",
    glowColor: "shadow-white/20",
  },
  {
    name: "React",
    icon: FaReact,
    bgColor: "bg-blue-500",
    glowColor: "shadow-blue-500/50",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    bgColor: "bg-yellow-500",
    glowColor: "shadow-yellow-500/50",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    bgColor: "bg-blue-600",
    glowColor: "shadow-blue-600/50",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    bgColor: "bg-teal-500",
    glowColor: "shadow-teal-500/50",
  },
  {
    name: "Redux / RTK",
    icon: SiRedux,
    bgColor: "bg-purple-600",
    glowColor: "shadow-purple-600/50",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    bgColor: "bg-green-600",
    glowColor: "shadow-green-600/50",
  },
  {
    name: "Framer Motion",
    icon: SiFramer,
    bgColor: "bg-pink-500",
    glowColor: "shadow-pink-500/50",
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    bgColor: "bg-emerald-500",
    glowColor: "shadow-emerald-500/50",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    bgColor: "bg-green-700",
    glowColor: "shadow-green-700/50",
  },
  {
    name: "SQL",
    icon: GrMysql,
    bgColor: "bg-blue-700",
    glowColor: "shadow-blue-700/50",
  },

  {
    name: "Git",
    icon: FaGitAlt,
    bgColor: "bg-orange-600",
    glowColor: "shadow-orange-600/50",
  },
  {
    name: "Postman",
    icon: SiPostman,
    bgColor: "bg-orange-600",
    glowColor: "shadow-orange-600/40",
  },
  {
    name: "REST APIs",
    icon: AiOutlineApi,
    bgColor: "bg-gray-700",
    glowColor: "shadow-gray-700/50",
  },
];

function SkillCard({ skill }) {
  const Icon = skill.icon;
  return (
    <div className="flex items-center gap-3 px-5 py-3 mx-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex-shrink-0 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
      <div
        className={`w-7 h-7 rounded-full ${skill.bgColor} flex items-center justify-center shadow-lg ${skill.glowColor} group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className="w-4 h-4 text-white" />
      </div>
      <span className="font-poppins text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300 whitespace-nowrap">
        {skill.name}
      </span>
    </div>
  );
}

function Hero() {
  const highlights = [
    { icon: Code, text: "MERN / Next.js Stack" },
    { icon: Laptop, text: "REST APIs & Auth Flows" },
    { icon: Palette, text: "Modern UI/UX" },
  ];

  // Duplicate for seamless loop
  const loopedSkills = [...skills, ...skills];

  return (
    <section
      id="Home"
      className="min-h-screen relative text-white pt-10 sm:pt-12 md:pt-14 lg:pt-16 space-y-16"
    >
      {/* Content */}
      <div className="flex justify-center  px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 mt-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-poppins font-light text-lg sm:text-xl md:text-2xl mb-4 text-white/80"
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-poppins font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-[#5227FF] via-[#FF9FFC] to-[#B19EEF] bg-clip-text text-transparent"
            >
              Ayush {"</>"}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="font-poppins text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0 mb-4"
            >
              Full Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="font-poppins text-justify text-xs sm:text-base text-white/60 max-w-2xl mx-auto lg:mx-0 mb-6 leading-relaxed"
            >
              Full Stack Developer with hands-on experience building scalable
              web applications using React, Next.js, Node.js, and Express.
              Focused on clean architecture, authentication workflows, database
              integration, and performance-driven solutions across frontend and
              backend.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
                  >
                    <Icon className="w-4 h-4 text-[#FF9FFC]" />
                    <span className="text-xs font-poppins text-white/80">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm"
            >
              <a
                href="/Ayush_Resume.pdf"
                download
                className="px-8 py-2.5 bg-gradient-to-r from-[#5227FF] to-[#FF9FFC] rounded-full font-poppins text-white hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#5227FF]/50 flex gap-2 items-center text-xs sm:text-base"
              >
                <Download className="size-4 md:size-5" /> Download Resume
              </a>
              <Link
                to="Contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                className="px-8 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-poppins  text-white hover:bg-white/20 transition-all duration-300 flex gap-2 items-center text-xs sm:text-base"
              >
                <MdPhone className="size-4 md:size-5" /> Start a Conversation
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex-shrink-0 w-64 sm:w-80 lg:w-96 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#5227FF] via-[#FF9FFC] to-[#B19EEF] rounded-full blur-xl opacity-75 group-hover:blur-2xl group-hover:opacity-100 transition duration-300" />
            <img
              src="/me3.JPG"
              alt="Ayush"
              className="relative w-full h-auto object-cover rounded-full border-4 border-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </div>

      {/* ── Skills Carousel Transition Strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="my-22"
      >
        {/* Scrolling track */}
        <div className="relative overflow-hidden">
          {/* Left fade mask */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black/60 to-transparent z-10" />
          {/* Right fade mask */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black/60 to-transparent z-10" />

          <div
            className="flex"
            style={{
              animation: "skillsScroll 20s linear infinite",
            }}
          >
            {loopedSkills.map((skill, i) => (
              <SkillCard key={i} skill={skill} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Keyframe injection */}
      <style>{`
        @keyframes skillsScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

export default Hero;
