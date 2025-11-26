import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send, Loader, Mail, MapPin, Phone, Check } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { useState } from "react";

function Contact() {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const socialMedia = [
    {
      icon: FaFacebook,
      bgColor: "bg-blue-600 hover:bg-blue-700",
      fontColor: "text-white",
      link: "https://www.facebook.com/aayush.thakali",
      label: "Facebook",
    },
    {
      icon: FaInstagram,
      bgColor:
        "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:from-purple-700 hover:via-pink-600 hover:to-orange-500",
      fontColor: "text-white",
      link: "https://www.instagram.com/ayy._.uuz.th/",
      label: "Instagram",
    },
    {
      icon: FaLinkedin,
      bgColor: "bg-blue-700 hover:bg-blue-800",
      fontColor: "text-white",
      link: "https://www.linkedin.com/in/ayush-thakali-3a2391285/",
      label: "LinkedIn",
    },
    {
      icon: FaGithub,
      bgColor: "bg-gray-800 hover:bg-gray-900",
      fontColor: "text-white",
      link: "https://github.com/ayushthakali",
      label: "GitHub",
    },
    {
      icon: FaWhatsapp,
      bgColor: "bg-green-500 hover:bg-green-600",
      fontColor: "text-white",
      link: "https://wa.me/9779816641224",
      label: "WhatsApp",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "thakaliaayush@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+977 9816641224",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Pokhara, Nepal",
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await emailjs.send(serviceId, templateId, formData, publicKey);
      setIsSent(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      // Reset success message after 5 seconds
      setTimeout(() => setIsSent(false), 4000);
    } catch (err) {
      console.error("Failed to send message:", err);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="Contact"
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
            Let's Connect
          </h2>
          <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
        </div>
        <p className="text-white/70 text-lg mt-6 font-poppins max-w-2xl text-center">
          I'm always interested in hearing about new opportunities,
          collaborations, and innovative projects.
        </p>
      </motion.div>

      <div className="grid  lg:grid-cols-3 max-w-6xl w-full mx-auto gap-8">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:col-span-2"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-xl">
            <h3 className="text-white text-2xl sm:text-3xl font-bold font-poppins mb-8">
              Send a Message
            </h3>

            {/* Success Message */}
            {isSent && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl flex items-center gap-3"
              >
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-poppins">
                  Message sent successfully! I'll get back to you soon.
                </span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-white/90 font-poppins mb-2 font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-white/90 font-poppins mb-2 font-medium"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white/90 font-poppins mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Write your message..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: isLoading ? 1 : 1.02 }}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-poppins font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Contact Info & Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-xl p-6">
            <h3 className="text-xl font-bold font-poppins mb-5 text-white ">
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center justify-start gap-2 group rounded-xl transition-all cursor-default"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm ">{item.title}</p>
                      <p className="text-white font-sm group-hover:text-purple-400 transition-colors ">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-xl p-6">
            <h3 className="text-xl font-bold font-poppins mb-4 text-white">
              Follow Me
            </h3>
            <div className="flex flex-wrap gap-4">
              {socialMedia.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center transition-all transform hover:scale-110 shadow-lg`}
                  >
                    <Icon className={`w-6 h-6 ${item.fontColor}`} />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
