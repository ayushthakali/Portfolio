import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="relative w-full px-6 pt-12 pb-8 overflow-hidden">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-16 origin-center"
      />

      {/* Giant name watermark */}
      <div className="relative flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-poppins font-black text-[clamp(3rem,12vw,9rem)] text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-white/[0.03] tracking-tighter select-none leading-none text-center"
        >
          AYUSH
        </motion.h2>

        {/* Centered content on top */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute inset-0 flex flex-col items-center justify-center gap-4"
        >
          <p className="font-poppins text-white/60 text-sm tracking-widest uppercase">
            Let's build something together
          </p>
          <div className="flex gap-3">
            {[
              { icon: Github, href: "https://github.com/ayushthakali" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/ayush-thakali/",
              },
              { icon: Mail, href: "mailto:thakaliaayush@gmail.com" },
            ].map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <p className="text-center text-[11px] text-white/25 font-poppins mt-4 tracking-wider">
        © {new Date().getFullYear()} Ayush Thakali. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
