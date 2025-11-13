import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaRocket } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces, SiCodechef } from 'react-icons/si';
import { HiSparkles } from 'react-icons/hi';

const Hero = () => {
  const roles = [
    'Software Developer 💻',
    'Backend Engineer ⚙️',
    'Full Stack Developer 🚀',
    'Problem Solver 🧩',
    'BTech Final Year 🎓',
  ];

  // Floating particles animation
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 gradient-animation">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl -top-48 -left-48"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-96 h-96 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl -bottom-48 -right-48"
        ></motion.div>

        {/* Floating Particles */}
        {particles.map((i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Animated Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex items-center justify-center gap-2"
          >
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              className="text-4xl"
            >
              👋
            </motion.span>
            <span className="text-primary font-mono text-xl font-semibold">
              Hi, I'm
            </span>
          </motion.div>

          {/* Name with Gradient Animation */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6 relative"
          >
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_auto] bg-clip-text text-transparent"
            >
              Abhishek Yadav
            </motion.span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6"
            >
              <HiSparkles className="text-accent text-3xl" />
            </motion.div>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl md:text-5xl text-dark/70 mb-8 h-20 flex items-center justify-center"
          >
            <ReactTyped
              strings={roles}
              typeSpeed={50}
              backSpeed={30}
              loop
              className="font-bold"
            />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-dark/60 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Passionate about building <span className="text-primary font-semibold">scalable distributed systems</span> and solving complex problems.
            <br />
            {/* 🏆 3⭐ on CodeChef | 🎖️ Knight on LeetCode | 🎓 Final Year BTech Student */}
          </motion.p>

          {/* CTA Buttons with Animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 flex items-center gap-2"
            >
              <span>Get In Touch</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaRocket />
              </motion.span>
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/14MHIQv5gMl9PLiqDQPLa-1KerpMAMV1V/view?usp=sharing"
              download
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white border-2 border-primary text-primary rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <FaFileDownload />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>

          {/* Social Links with Bounce Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center items-center gap-6"
          >
            {[
              { icon: FaGithub, href: 'https://github.com/abhisekh9', label: 'GitHub', color: '#6366f1' },
              { icon: FaLinkedin, href: 'https://linkedin.com/in/abhisekh9', label: 'LinkedIn', color: '#8b5cf6' },
              { icon: SiLeetcode, href: 'https://leetcode.com/u/abhishek9_', label: 'LeetCode', color: '#ec4899' },
              { icon: SiCodeforces, href: 'https://codeforces.com/profile/abhishek9_', label: 'Codeforces', color: '#6366f1' },
              { icon: SiCodechef, href: 'https://www.codechef.com/users/abhisekh_9', label: 'CodeChef', color: '#8b5cf6' },
              { icon: FaEnvelope, href: 'mailto:abhisekh.9902@gmail.com', label: 'Email', color: '#ec4899' },
            ].map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.3, y: -8, rotate: [0, -10, 10, 0] }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                title={label}
                style={{ color }}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-8 h-12 border-2 border-primary rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary rounded-full"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
