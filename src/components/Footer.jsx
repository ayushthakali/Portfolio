import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="relative w-full">
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="w-full origin:center h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
      />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-center text-sm text-white/50 p-6"
      >
        © {new Date().getFullYear()} Ayush Thakali. All rights reserved.
      </motion.p>
    </footer>
  );
}

export default Footer;
