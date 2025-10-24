import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="education"
      className="py-32 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950 transition-colors duration-500"
      ref={ref}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <FaGraduationCap className="text-primary/20" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block text-6xl mb-4"
          >
            🎓
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Education
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "250px" } : {}}
            transition={{ duration: 1 }}
            className="h-1.5 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.03 }}
          className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-white/50 dark:border-gray-700/50 p-10 max-w-3xl mx-auto"
        >
          {/* Icon */}
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.5 }}
              className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl shadow-lg"
            >
              <FaUniversity className="w-6 h-6" />
            </motion.div>
            <h3 className="text-2xl font-bold text-dark dark:text-light">
              Motilal Nehru National Institute of Technology Allahabad
            </h3>
          </div>

          {/* Content */}
          <div className="space-y-2 text-dark/70 dark:text-light/70 text-lg">
            <p>
              <span className="font-semibold text-primary">
                Bachelor of Technology
              </span>
            </p>
            <p>Chemical Engineering</p>
            <p className="text-primary font-semibold">(2022 - 2026)</p>
            <p className="text-accent font-semibold">CPI: 7.61</p>
          </div>

          {/* Decorative Element */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute -top-6 -right-6 w-14 h-14 bg-gradient-to-br from-primary via-secondary to-accent rounded-full blur-lg opacity-80"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
