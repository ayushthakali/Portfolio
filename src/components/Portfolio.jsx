import { motion } from "framer-motion";
import { Check, Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { certificates } from "@/data/certificates";

function Portfolio() {
  return (
    <section
      id="Portfolio"
      className="min-h-screen w-full py-20 px-6 md:px-12 flex flex-col items-center space-y-24"
    >
      {/* Heading */}
      <motion.div
        initial={{ y: -30, opacity: 0, scale: 0.6 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <div>
          <h2 className="text-white text-5xl md:text-6xl font-bold font-poppins mb-4">
            Portfolio
          </h2>
          <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
        </div>
        <p className="text-white/70 text-lg mt-6 font-poppins max-w-2xl text-center">
          Open to collaborations, new ideas, and exciting projects.
        </p>
      </motion.div>

      {/* Projects Section */}
      <div className="w-full max-w-7xl space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2"
        >
          <div className="flex-grow h-px bg-gradient-to-r to-blue-400/50 from-transparent" />

          <div className="flex-shrink-0">
            <h3 className="text-white text-3xl md:text-4xl font-bold font-poppins">
              Projects
            </h3>
          </div>
          <div className="flex-grow h-px bg-gradient-to-r from-blue-400/50 to-transparent" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover"
                  />
                  {/* Overlay on hover */}
                  <div className="hidden sm:flex absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
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
                <div className="px-6 py-8 flex flex-col">
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
                      <li key={i} className="flex gap-2 text-white/70 text-sm">
                        <Check className="flex-shrink-0 text-purple-400" />
                        <p>{feat}</p>
                      </li>
                    ))}
                  </ul>

                  {/* Mobile Actions */}
                  <div className="flex sm:hidden gap-3 justify-start mt-6">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 border border-blue-400/20 hover:border-blue-400/40 rounded-lg text-white text-sm font-medium transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4 text-blue-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                        <span>View Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Certifications Section */}
      <div className="w-full max-w-7xl space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2"
        >
          <div className="flex-grow h-px bg-gradient-to-r to-purple-400/50 from-transparent" />

          <div className="flex-shrink-0">
            <h3 className="text-white text-3xl md:text-4xl font-bold font-poppins">
              Certifications
            </h3>
          </div>
          <div className="flex-grow h-px bg-gradient-to-r from-purple-400/50 to-transparent" />
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          layout
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                    alt={`${cert.title} certificate`}
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
                  <div className="flex flex-wrap gap-2">
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
      </div>
    </section>
  );
}

export default Portfolio;
