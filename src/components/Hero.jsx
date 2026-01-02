import { motion } from "framer-motion";
import { Download, Code, Laptop, Palette } from "lucide-react";
import { MdPhone } from "react-icons/md";

function Hero() {
  const highlights = [
    { icon: Code, text: "React Developer" },
    { icon: Laptop, text: "Responsive Design" },
    { icon: Palette, text: "Modern UI/UX" },
  ];

  return (
    <section
      id="Home"
      className="min-h-screen relative text-white  pt-10 sm:pt-12 md:pt-14 lg:pt-2 "
    >
      {/* Content */}
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
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
              className="font-poppins font-light text-xl sm:text-2xl md:text-3xl mb-4 text-white/80"
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-poppins font-bold text-6xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-[#5227FF] via-[#FF9FFC] to-[#B19EEF] bg-clip-text text-transparent"
            >
              Ayush {"</>"}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="font-poppins text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0 mb-4"
            >
              Web Developer
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="font-poppins text-justify text-base sm:text-base text-white/60 max-w-2xl mx-auto lg:mx-0 mb-6 leading-relaxed"
            >
              Passionate about creating beautiful, functional web experiences. I
              transform ideas into elegant digital solutions with clean code and
              modern design principles. Always learning, always building.
            </motion.p>

            {/* Highlights */}
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
                    <span className="text-sm font-poppins text-white/80">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm"
            >
              <a
                href="/Ayush_Resume.pdf"
                download
                className="px-8 py-3 bg-gradient-to-r from-[#5227FF] to-[#FF9FFC] rounded-full font-poppins font-semibold text-white hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#5227FF]/50 flex gap-2 items-center"
              >
                <Download className="w-5 h-5" /> Download Resume
              </a>
              <a
                href="#Contact"
                className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-poppins font-semibold text-white hover:bg-white/20 transition-all duration-300 flex gap-2 items-center"
              >
                <MdPhone className="w-5 h-5" /> Start a Conversation
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex-shrink-0 w-64 sm:w-80 lg:w-96 relative group"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#5227FF] via-[#FF9FFC] to-[#B19EEF] rounded-full blur-xl opacity-75 group-hover:blur-2xl group-hover:opacity-100 transition duration-300" />

            {/* Image container */}

            <img
              src="/me3.JPG"
              alt="Ayush"
              className="relative w-full h-auto object-cover rounded-full border-4 border-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
