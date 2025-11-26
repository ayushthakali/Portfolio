import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { certificates } from "@/data/certificates";

function Portfolio() {
  const [selected, setSelected] = useState("Projects");

  return (
    <section
      id="Portfolio"
      className="min-h-screen w-full py-20 px-6 md:px-12 flex flex-col items-center space-y-16"
    >
      {/* Heading */}
      <motion.div
        initial={{ y: -30, opacity: 0, scale: 0.6 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <div>
          <h2 className="text-white text-5xl md:text-6xl font-bold font-poppins mb-4">
            Portfolio
          </h2>
          <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
        </div>
        <p className="text-white/70 text-lg mt-6 font-poppins max-w-2xl">
          Open to collaborations, new ideas, and exciting projects.
        </p>
      </motion.div>

      {/* Selection Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap gap-3 justify-center w-full"
      >
        {["Projects", "Certificates"].map((item, i) => (
          <button
            key={i}
            onClick={() => setSelected(item)}
            className={`px-12 py-4 rounded-full font-medium transition-all duration-300 text-lg 
              ${
                selected === item
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/30"
                  : "bg-white/5 backdrop-blur-sm text-white/70 hover:bg-white/10 hover:text-white"
              }
          }`}
          >
            {item}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      {selected === "Projects" && (
        <motion.div
          layout
          className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 "
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative "
            >
              {/* Card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${i} image`}
                    className="h-full w-full"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all transform hover:scale-110"
                    >
                      <Github className="w-6 h-6 text-white" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all transform hover:scale-110"
                      >
                        <ExternalLink className="w-6 h-6 text-white" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="px-6 py-8 flex flex-col ">
                  <h3 className="text-white text-xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4 text-justify">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6 flex-grow">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs font-poppins text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <ul className="space-y-2">
                    {project.features.map((feat, i) => (
                      <li key={i} className="flex gap-2 text-white/70 text-sm ">
                        <Check className="flex-shrink-0  text-purple-400" />
                        <p>{feat}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Certificates Grid */}
      {selected === "Certificates" && (
        <motion.div
          layout
          className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-68 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={`${i} image`}
                    className="h-full w-full"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all transform hover:scale-110"
                    >
                      <ExternalLink className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col">
                  <h3 className="text-white text-xl font-bold group-hover:text-purple-400 transition-colors flex-1 mb-2">
                    {cert.title}
                  </h3>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-purple-400 text-sm font-medium">
                      {cert.issuer}
                    </span>
                    <span className="text-white/40">•</span>
                    <span className="text-white/60 text-sm">{cert.date}</span>
                  </div>

                  <p className="text-white/70 text-sm mb-4 text-justify">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 ">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs text-white/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
}

export default Portfolio;
