import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaStar } from 'react-icons/fa';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const workExperience = [
    {
      year: '2023 - Present',
      role: 'Junior Software Developer (Internship)',
      company: 'Tech Startup',
      description:
        'Developed scalable backend APIs, worked on microservices, and deployed projects on cloud platforms.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      year: '2022 - 2023',
      role: 'Freelance Developer',
      company: 'Self-Employed',
      description:
        'Built web applications using MERN stack, optimized performance, and integrated third-party APIs.',
      gradient: 'from-indigo-500 to-blue-500',
    },
  ];

  return (
    <section
      id="experience"
      className="py-32 relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-blue-50 dark:from-pink-950 dark:via-dark dark:to-blue-950 transition-colors duration-500"
      ref={ref}
    >
      {/* Background Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
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
            <FaStar className="text-primary/20" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center text-5xl font-semibold mb-20 text-primary font-mono"
        >
          Work Experience
        </motion.h2>

        {/* Timeline Items */}
        <div className="space-y-20">
          {workExperience.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
                rotateY: index % 2 === 0 ? -30 : 30,
              }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8`}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotateY: index % 2 === 0 ? 5 : -5,
                  z: 50,
                }}
                className="flex-1 relative group"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className={`absolute inset-0 bg-gradient-to-r ${item.gradient} blur-2xl rounded-3xl`}
                />
                <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border-2 border-white/50 group-hover:border-primary/30 transition-all">
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`absolute -top-4 left-8 px-6 py-2 bg-gradient-to-r ${item.gradient} text-white rounded-full font-bold shadow-lg`}
                  >
                    {item.year}
                  </motion.div>
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${item.gradient} text-white text-3xl mb-4 shadow-lg`}
                  >
                    <FaBriefcase />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-dark mb-1">{item.role}</h3>
                  <p className="text-lg font-semibold mb-1 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">{item.company}</p>
                  <p className="text-dark/70 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
