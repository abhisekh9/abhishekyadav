import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiGit,
  SiAmazon,
  SiVercel,
} from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      title: '💻 Languages',
      gradient: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'C++', icon: SiCplusplus, color: '#00599C', level: 90 },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 85 },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 80 },
      ],
    },
    {
      title: '🎨 Frontend',
      gradient: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'React.js', icon: SiReact, color: '#61DAFB', level: 85 },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000', level: 80 },
        { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', level: 90 },
      ],
    },
    {
      title: '⚙️ Backend',
      gradient: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 88 },
        { name: 'Express.js', icon: SiExpress, color: '#000000', level: 85 },
      ],
    },
    {
      title: '🗄️ Databases',
      gradient: 'from-orange-500 to-red-500',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', level: 82 },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 85 },
        { name: 'Redis', icon: SiRedis, color: '#DC382D', level: 78 },
      ],
    },
    {
      title: '🚀 DevOps',
      gradient: 'from-indigo-500 to-blue-500',
      skills: [
        { name: 'Docker', icon: SiDocker, color: '#2496ED', level: 80 },
        { name: 'AWS', icon: SiAmazon, color: '#FF9900', level: 75 },
        { name: 'Git', icon: SiGit, color: '#F05032', level: 90 },
        { name: 'Vercel', icon: SiVercel, color: '#000000', level: 85 },
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50" ref={ref}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 50 - 25, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
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
            {/* <span className="text-primary font-mono">02. </span> */}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Skills & Tech Stack
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '250px' } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1.5 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-dark/60 mt-6"
          >
            Technologies I love working with 💜
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={item}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              {/* Glowing Background */}
              <motion.div
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-20 blur-xl rounded-3xl group-hover:opacity-40 transition-opacity duration-300`}
              ></motion.div>

              {/* Card */}
              <div className="relative bg-white/90 backdrop-blur-xl p-8 rounded-3xl border-2 border-transparent group-hover:border-primary/30 shadow-xl transition-all duration-300">
                <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.1 + skillIndex * 0.1,
                      }}
                      whileHover={{ x: 10 }}
                      className="group/skill"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.5 }}
                          >
                            <skill.icon
                              className="w-8 h-8"
                              style={{ color: skill.color }}
                            />
                          </motion.div>
                          <span className="font-medium text-dark/80 group-hover/skill:text-dark transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-primary">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: 'easeOut',
                          }}
                          className={`h-full bg-gradient-to-r ${category.gradient} rounded-full relative`}
                        >
                          <motion.div
                            animate={{
                              x: [-20, 100],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: 'linear',
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-dark/80 mb-8">
            And many more... 🎯
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Data Structures & Algorithms',
              'Microservices',
              'RESTful APIs',
              'Event-Driven Architecture',
              'System Design',
              'Cloud Infrastructure',
              'Database Design',
              'Problem Solving',
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 1.2 + index * 0.1,
                  type: 'spring',
                }}
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)',
                }}
                className="px-6 py-3 bg-white border-2 border-primary/30 rounded-full text-dark/70 font-medium shadow-lg hover:border-primary hover:text-primary transition-all duration-300 cursor-pointer"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
