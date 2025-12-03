import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen, School } from "lucide-react";

function Education() {
  const education = [
    {
      title: "Bachelors in Computer Engineering",
      icon: GraduationCap,
      date: "2021-2025 AD",
      college: "Kathmandu Engineering College (Tribhuwan University)",
      grades: "74.24%",
    },
    {
      title: "HSEC in Science",
      icon: BookOpen,
      date: "2018-2020 AD",
      college: "Gandaki Boarding School, Pokhara",
      grades: "3.24 CGPA",
    },
    {
      title: "Secondary Education Examination",
      icon: School,
      date: "2018 AD",
      college: "Gandaki Boarding School, Pokhara",
      grades: "3.8 GPA",
    },
  ];

  return (
    <section
      id="Education"
      className=" min-h-screen w-full py-20 px-6 md:px-12 flex flex-col items-center space-y-16"
    >
      {/* Heading */}
      <motion.div
        initial={{ y: -30, opacity: 0, scale: 0.6 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center "
      >
        <h2 className="text-white text-5xl md:text-6xl font-bold font-poppins mb-4">
          Education
        </h2>
        <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
        <p className="text-white/70 text-lg mt-6 font-poppins max-w-2xl mx-auto">
          Steps in My Education
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-3xl lg:max-w-7xl w-full">
        {/* Vertical Line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute origin-top left-8 md:left-1/2 -top-6 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
        />

        {education.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-row`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 -ml-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center z-10 shadow-lg shadow-purple-500/50">
                <Icon className="w-8 h-8 text-white" />
              </div>

              {/* Content Card */}
              <div className={`w-3/4 md:w-5/12 ml-20 md:ml-0 `}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`flex flex-col bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg shadow-purple-400/40 ${
                    index % 2 == 0 ? "md:items-end md:-mr-4" : "md:-ml-4"
                  }`}
                >
                  {/* Date Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-poppins text-blue-400 font-semibold">
                      {item.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-xl md:text-2xl font-bold font-poppins mb-2">
                    {item.title}
                  </h3>

                  {/* College */}
                  <p className="text-white/70 font-poppins mb-3 text-sm md:text-base">
                    {item.college}
                  </p>

                  {/* Grade */}
                  <div className="flex items-center gap-2 pt-2  ">
                    <Award className="w-4 h-4 text-purple-400" />
                    <span className="text-purple-400 font-semibold font-poppins">
                      {item.grades}
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Education;
