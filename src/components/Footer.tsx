import { motion } from 'framer-motion';
import { FaHeart, FaRocket } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative py-12 bg-gradient-to-r from-primary via-secondary to-accent overflow-hidden">
      {/* Animated Background */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <motion.span
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              className="inline-block text-4xl font-bold text-white font-mono"
            >
              &lt;AY/&gt;
            </motion.span>
          </motion.div>

          {/* Message */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/90 text-lg mb-4 flex items-center justify-center gap-2"
          >
            Built with
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="text-pink-300" />
            </motion.span>
            and
            <motion.span
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaRocket className="text-yellow-300" />
            </motion.span>
            by
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="font-bold cursor-pointer"
            >
              Abhishek Yadav
            </motion.span>
          </motion.p>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-white/70 text-sm"
          >
            &copy; {new Date().getFullYear()} All rights reserved. Made with React, TypeScript, Tailwind & Framer Motion.
          </motion.p>

          {/* Decorative Elements */}
          <div className="flex justify-center gap-4 mt-8">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="w-2 h-2 bg-white/50 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;