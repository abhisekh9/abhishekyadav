import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaTrophy, FaCode, FaRocket } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const stats = [
    { icon: FaTrophy, value: '3⭐', label: 'CodeChef', color: 'from-yellow-400 to-orange-500' },
    { icon: FaCode, value: 'Knight', label: 'LeetCode', color: 'from-blue-500 to-purple-600' },
    { icon: FaRocket, value: '500+', label: 'Problems Solved', color: 'from-pink-500 to-rose-600' },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50" ref={ref}>
      {/* Animated Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-20"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full blur-3xl animate-pulse"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0 }}
        >
          {/* Section Title with Animated Underline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.h2
              className="text-5xl md:text-7xl font-bold mb-4 inline-block"
              whileHover={{ scale: 1.05 }}
            >
              {/* <span className="text-primary font-mono">01. </span> */}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                About Me
              </span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '200px' } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1.5 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"
            ></motion.div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content with Staggered Animation */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-dark/70 leading-relaxed"
              >
                Hey there! 👋 I'm a{' '}
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="text-primary font-bold cursor-pointer inline-block"
                >
                  final-year BTech student
                </motion.span>{' '}
                with an obsession for crafting elegant backend solutions and architecting scalable systems.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl text-dark/70 leading-relaxed"
              >
                I enjoy architecting systems that are efficient, reliable, and easy to maintain.{' '}
                <motion.span
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  className="text-secondary font-bold cursor-pointer inline-block"
                >
                My focus lies in microservices architecture and event-driven systems,
                </motion.span>
                and I love working with technologies like Node.js, PostgreSQL, MongoDB, Redis, and Docker.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-xl text-dark/70 leading-relaxed"
              >
                I’m currently seeking{' '}
                <motion.span
                  whileHover={{ scale: 1.1, color: '#ec4899' }}
                  className="text-accent font-bold cursor-pointer inline-block"
                >
                  internship and Software Development Engineer (SDE) opportunities{' '}
                </motion.span>
                where I can contribute to impactful projects, collaborate with innovative teams, and continue growing as a developer.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold shadow-lg"
                >
                  Let's Build Something Amazing! 🚀
                </motion.button>
              </motion.div>
            </motion.div>

            {/* 3D Animated Card with Stats */}
            <motion.div
              initial={{ opacity: 0, x: 100, rotateY: -30 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              {/* Glowing Background */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-2xl rounded-3xl"
              ></motion.div>

              {/* Main Card */}
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-primary/20"
              >
                {/* Profile Section */}
                <div className="text-center mb-8">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-primary via-secondary to-accent rounded-full flex items-center justify-center text-6xl shadow-xl"
                  >
                    👨‍💻
                  </motion.div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    Abhishek Yadav
                  </h3>
                  <p className="text-dark/60 font-medium">Software Developer</p>
                </div>

                {/* Animated Stats Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.5 },
                      }}
                      className={`p-4 rounded-2xl bg-gradient-to-br ${stat.color} text-white text-center shadow-lg cursor-pointer`}
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      >
                        <stat.icon className="w-8 h-8 mx-auto mb-2" />
                      </motion.div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-xs opacity-90">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center text-2xl shadow-lg"
                >
                  ⚡
                </motion.div>
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -180, -360],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-2xl shadow-lg"
                >
                  🎯
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
