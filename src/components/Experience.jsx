import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Elevate Tech.",
    location: "Pokhara, Nepal",
    date: "Nov 2024 – Jan 2025",
    tag: "React",
    bullets: [
      "Contributed to TrustMed, a hospital management system built with React",
      "Built responsive UI components and enhanced user workflows",
      "Collaborated with backend teams for API integration and data handling",
    ],
  },
  {
    role: "MERN Stack Developer Intern",
    company: "Brandbuilder",
    location: "Pokhara, Nepal",
    date: "Dec 2025 – Present",
    tag: "Next.js",
    bullets: [
      "Contributed to Receipt AI, an AI-powered receipt management system",
      "Built the frontend in Next.js and implemented Google OAuth authentication",
      "Integrated a peer-developed AI module for automated receipt extraction and categorization",
      "Implemented multi-company workflow and secure access management",
    ],
  },
];

function Experience() {
  return (
    <section
      id="Experience"
      className="min-h-screen w-full  py-20 px-6 md:px-12 flex flex-col items-center space-y-16"
    >
      {/* Heading */}
      <motion.div
        initial={{ y: -30, opacity: 0, scale: 0.6 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <h2 className="relative text-white text-4xl md:text-5xl font-bold font-poppins mb-4 after:absolute after-content[''] after:left-0 after:-bottom-4 after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-400 after:to-purple-500 after:rounded-full">
          Experience
        </h2>
        <p className="text-white/70 text-lg mt-4 font-poppins max-w-2xl text-center">
          Where I've Built Things That Matter
        </p>
      </motion.div>

      {/* Cards */}
      <div className="w-full max-w-5xl flex flex-col gap-12">
        {experiences.map((exp, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`relative rounded-2xl bg-white/5 backdrop-blur-md border border-violet-500/30 shadow-xl shadow-violet-500/30 overflow-hidden`}
              >
                {/* Left accent bar */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-500 to-purple-700 rounded-l-2xl`}
                />

                <div className="pl-8 pr-6 py-7">
                  {/* Top row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div className="flex items-start gap-4">
                      {/* Icon circle */}
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center shadow-lg`}
                      >
                        <Briefcase className="w-5 h-5 text-white" />
                      </div>

                      <div>
                        <h3 className="text-white font-bold font-poppins text-lg md:text-xl leading-tight">
                          {exp.role}
                        </h3>
                        <p
                          className={`font-poppins font-semibold text-sm text-violet-400 mt-0.5`}
                        >
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-2 sm:flex-col sm:items-end">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30">
                        <Calendar className="w-3 h-3 text-violet-400" />
                        <span className="font-poppins text-xs text-violet-400">
                          {exp.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                        <MapPin className="w-3 h-3 text-white/50" />
                        <span className="font-poppins text-[10px] sm:text-xs text-white/60">
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-white/10 mb-5" />

                  {/* Bullet points */}
                  <ul className="space-y-3">
                    {exp.bullets.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                        className="flex items-start gap-3"
                      >
                        <span
                          className={`mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-violet-500 to-purple-700`}
                        />
                        <p className="text-white/70 font-poppins text-xs sm:text-sm leading-relaxed">
                          {point}
                        </p>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Experience;
