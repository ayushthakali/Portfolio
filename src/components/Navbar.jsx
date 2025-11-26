import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [showNavOnLink, setShowNavOnLink] = useState(false);
  const lastY = useRef(0);

  const navItems = [
    { name: "Home" },
    { name: "Education" },
    { name: "Skills" },
    { name: "Portfolio" },
    { name: "Contact" },
  ];

  useEffect(() => {
    lastY.current = window.scrollY;
    const navControl = () => {
      const currentY = window.scrollY;
      if (currentY > lastY.current) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      lastY.current = currentY;
    };
    window.addEventListener("scroll", navControl);

    return () => window.removeEventListener("scroll", navControl);
  }, []);

  const handleClick = () => {
    setShowNavOnLink(true);
    setTimeout(() => {
      setShowNavOnLink(false);
      setShowNav(true);
    }, 1000);
  };

  return (
    <motion.nav
      animate={{ y: showNav || showNavOnLink ? 0 : -120 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[85%] max-w-5xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`bg-glass backdrop-blur-md border border-white/10 text-white overflow-hidden ${
          !isExpanded ? "rounded-full" : "rounded-4xl"
        }`}
      >
        <div className="flex items-center justify-between py-1 px-6 lg:px-8">
          {/* Logo */}
          <Link to="Home" spy={true} smooth={true} offset={-100} duration={800}>
            <div className="flex-shrink-0 w-50 sm:w-70">
              <img
                src="/nobg.png"
                alt="logo"
                className="w-full h-auto object-contain cursor-pointer"
              />
            </div>
          </Link>

          {/* NavItems - Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                to={item.name}
                key={index}
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                onClick={handleClick}
              >
                <div className="font-poppins font-light px-1 py-2 text-lg tracking-wide cursor-pointer relative  after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:-translate-y-0.5 transition-transform duration-300">
                  {item.name}
                </div>
              </Link>
            ))}
          </div>

          {/* Menu Button - Mobile */}
          <button
            className="lg:hidden cursor-pointer p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {!isExpanded ? (
              <Menu className="h-6 w-6" />
            ) : (
              <X className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Expanded Menu - Mobile */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-white/20 overflow-hidden"
            >
              <div className="flex flex-col items-center space-y-1 py-4 px-6">
                {navItems.map((item, index) => (
                  <Link
                    to={item.name}
                    key={index}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={800}
                  >
                    <div
                      className="w-full text-center font-poppins py-3 font-light text-base tracking-wide cursor-pointer hover:bg-white/10 rounded-lg transition-all duration-200"
                      onClick={() => setIsExpanded(false)}
                    >
                      {item.name}
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
}

export default Navbar;
