import { motion } from "framer-motion";
import { FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
  SiFramer,
  SiTypescript,
  SiSupabase,
  SiRedux,
  SiPostman,
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
];

function Skills() {
  const parentVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const childVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="Skills"
      className=" min-h-screen w-full py-20 px-6 md:px-12 flex flex-col items-center space-y-16"
    >
      {/* Heading */}
      <motion.div
        initial={{ y: -30, opacity: 0, scale: 0.6 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center "
      >
        <h2 className="relative text-white text-4xl md:text-5xl font-bold font-poppins mb-4 after:absolute after-content[''] after:left-0 after:-bottom-4 after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-400 after:to-purple-500 after:rounded-full">
          Skills
        </h2>

        <p className="text-white/70 text-lg mt-6 font-poppins text-center">
          Technologies I use to build amazing projects
        </p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        variants={parentVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
      >
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={index}
              variants={childVariant}
              whileHover={{ scale: 1.05, y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2 }}
              className="group"
            >
              <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 flex flex-col items-center rounded-2xl gap-4 hover:bg-white/10 hover:border-white/20 cursor-pointer duration-300 transition-all ">
                <motion.div
                  whileInView={{ rotate: 360 }}
                  transition={{
                    duration: 1,
                    ease: "linear",
                  }}
                  viewport={{ once: false }}
                  className={` w-20 h-20 ${skill.bgColor} rounded-full flex items-center justify-center shadow-lg ${skill.glowColor} group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                >
                  <Icon className="w-10 h-10 text-white" />
                </motion.div>

                <div className="text-white font-poppins font-medium text-center text-sm ">
                  {skill.name}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default Skills;
