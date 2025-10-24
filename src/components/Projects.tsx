import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaGithub, FaRocket, FaStar } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

// import { motion, useScroll, useTransform } from 'framer-motion';
// import { useInView } from 'framer-motion';
// import { useRef, useState } from 'react';
// import { FaGithub, FaExternalLinkAlt, FaRocket, FaStar } from 'react-icons/fa';
const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: 'SplitBlog',
      emoji: '📝',
      tagline: 'Microservices Blog Platform',
      description:
        'Production-ready blog system with event-driven architecture, Redis caching, and hybrid database design. Built to scale!',
      tags: ['Node.js', 'PostgreSQL', 'MongoDB', 'Redis', 'RabbitMQ', 'Docker', 'AWS'],
      github: 'https://github.com/abhisekh9/SplitBlog',
      live: 'https://blogfrontend-eosin.vercel.app',
      gradient: 'from-blue-500 via-purple-500 to-pink-500',
      highlights: ['🚀 Microservices Architecture', '⚡ Event-Driven Design', '💾 Hybrid Database', '🐳 Dockerized'],
    },
    {
      title: 'Study Notion',
      emoji: '🎓',
      tagline: 'Learning Management System',
      description:
        'Full-stack LMS with secure authentication, course management, and payment integration. Education made easy!',
      tags: ['MERN', 'Tailwind', 'Clerk', 'Stripe', 'Cloudinary'],
      github: 'https://github.com/abhisekh9/Study-Notion',
      live: 'https://study-notion-frontend-mu-seven.vercel.app',
      gradient: 'from-green-500 via-teal-500 to-blue-500',
      highlights: ['🔐 Role-Based Access', '💳 Payment Integration', '📱 Responsive UI', '☁️ Cloud Storage'],
    },
    // {
    //   title: 'Inteliq Chat',
    //   emoji: '💬',
    //   tagline: 'AI Chat Interface',
    //   description:
    //     'Modern chat application with real-time messaging, file attachments, and beautiful UI. ChatGPT-inspired!',
    //   tags: ['React', 'TypeScript', 'Material-UI', 'Zustand'],
    //   github: 'https://github.com/abhisekh9/Assignment',
    //   live: 'https://assignment-sigma-snowy.vercel.app',
    //   gradient: 'from-purple-500 via-pink-500 to-red-500',
    //   highlights: ['💬 Real-time Chat', '📎 File Attachments', '🎨 Beautiful UI', '⚡ Fast & Smooth'],
    // },
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-blue-50" ref={ref}>
      {/* Animated Background */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
          backgroundSize: '200% 200%',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block text-6xl mb-4"
          >
            🚀
          </motion.div>
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            {/* <span className="text-primary font-mono">03. </span> */}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '300px' } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1.5 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-dark/60 mt-6"
          >
            Things I've built with 💜 and ☕
          </motion.p>
        </motion.div>

        {/* Projects Grid with 3D Effects */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group"
            >
              {/* Glowing Background */}
              <motion.div
                animate={{
                  scale: hoveredIndex === index ? 1.1 : 1,
                  opacity: hoveredIndex === index ? 0.6 : 0.3,
                }}
                transition={{ duration: 0.3 }}
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} blur-3xl rounded-3xl`}
              />

              {/* Main Card */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{ duration: 0.3 }}
                className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border-2 border-white/50"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
              >
                <div className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Text Content */}
                    <div className={index % 2 === 0 ? 'order-1' : 'order-1 md:order-2'}>
                      {/* Emoji with Animation */}
                      <motion.div
                        animate={{
                          rotate: hoveredIndex === index ? [0, -10, 10, 0] : 0,
                          scale: hoveredIndex === index ? 1.2 : 1,
                        }}
                        transition={{ duration: 0.5 }}
                        className="text-7xl mb-4"
                      >
                        {project.emoji}
                      </motion.div>

                      <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {project.title}
                      </h3>
                      <p className={`text-lg font-semibold mb-4 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                        {project.tagline}
                      </p>
                      <p className="text-dark/70 text-lg leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {project.highlights.map((highlight, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                            className="flex items-center gap-2 text-sm text-dark/60"
                          >
                            <HiSparkles className="text-accent" />
                            <span>{highlight}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
                        >
                          <FaGithub className="w-5 h-5" />
                          <span>Code</span>
                        </motion.a>
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all`}
                        >
                          <FaRocket className="w-5 h-5" />
                          <span>Live Demo</span>
                        </motion.a>
                      </div>
                    </div>

                    {/* Visual/Preview */}
                    <div className={index % 2 === 0 ? 'order-2' : 'order-2 md:order-1'}>
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        transition={{ duration: 0.3 }}
                        className="relative"
                      >
                        {/* Mockup Container */}
                        <div className={`relative bg-gradient-to-br ${project.gradient} p-1 rounded-2xl shadow-2xl`}>
                          <div className="bg-white rounded-xl p-8 aspect-video flex items-center justify-center">
                            <motion.div
                              animate={{
                                y: [0, -10, 0],
                                rotate: [0, 5, -5, 0],
                              }}
                              transition={{ duration: 3, repeat: Infinity }}
                              className="text-9xl"
                            >
                              {project.emoji}
                            </motion.div>
                          </div>
                        </div>

                        {/* Floating Tags */}
                        <motion.div
                          animate={{
                            y: [0, -10, 0],
                            rotate: [0, 5, 0],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2"
                        >
                          <FaStar />
                          <span>Featured</span>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-3 mt-8">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.2 + i * 0.05 }}
                        whileHover={{ scale: 1.1, y: -3 }}
                        className="px-4 py-2 bg-white/80 border-2 border-primary/30 rounded-full text-sm font-medium text-dark/70 hover:border-primary hover:text-primary transition-all shadow-md"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Decorative Corner Elements */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl"
                />
                <motion.div
                  animate={{
                    rotate: [0, -360],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute bottom-4 left-4 w-20 h-20 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-xl"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20"
        >
          <motion.a
            href="https://github.com/abhisekh9"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary via-secondary to-accent text-white rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all"
          >
            <FaGithub className="w-6 h-6" />
            <span>Explore More on GitHub</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
