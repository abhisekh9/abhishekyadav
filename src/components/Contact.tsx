import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces, SiCodechef } from 'react-icons/si';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFocused, setIsFocused] = useState({ name: false, email: false, message: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:abhisekh.9902@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
  };

  const contacts = [
    { icon: FaEnvelope, label: 'Email', value: 'abhisekh.9902@gmail.com', href: 'mailto:abhisekh.9902@gmail.com', gradient: 'from-red-500 to-pink-500' },
    { icon: FaLinkedin, label: 'LinkedIn', value: 'abhisekh9', href: 'https://linkedin.com/in/abhisekh9', gradient: 'from-blue-600 to-blue-400' },
    { icon: FaGithub, label: 'GitHub', value: 'abhisekh9', href: 'https://github.com/abhisekh9', gradient: 'from-gray-800 to-gray-600' },
    { icon: SiLeetcode, label: 'LeetCode', value: 'abhishek9_', href: 'https://leetcode.com/u/abhishek9_', gradient: 'from-yellow-500 to-orange-500' },
    { icon: SiCodeforces, label: 'Codeforces', value: 'abhishek9_', href: 'https://codeforces.com/profile/abhishek9_', gradient: 'from-blue-500 to-indigo-600' },
    { icon: SiCodechef, label: 'CodeChef', value: 'abhisekh_9', href: 'https://www.codechef.com/users/abhisekh_9', gradient: 'from-brown-600 to-brown-400' },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50" ref={ref}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -1000],
              x: Math.sin(i) * 100,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-1 h-20 bg-gradient-to-b from-transparent via-primary/30 to-transparent rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: '100%',
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block text-6xl mb-4"
          >
            📬
          </motion.div>
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            {/* <span className="text-primary font-mono">04. </span> */}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Get In Touch
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
            className="text-xl text-dark/60 mt-6 max-w-2xl mx-auto"
          >
            💼 Open to opportunities! Let's build something amazing together 🚀
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border-2 border-white/50"
            >
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Send me a message 💌
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <motion.input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setIsFocused({ ...isFocused, name: true })}
                    onBlur={() => setIsFocused({ ...isFocused, name: false })}
                    animate={{
                      scale: isFocused.name ? 1.02 : 1,
                      borderColor: isFocused.name ? '#6366f1' : '#e5e7eb',
                    }}
                    className="w-full px-6 py-4 bg-white border-2 rounded-2xl text-dark placeholder-dark/40 focus:outline-none transition-all shadow-lg"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <motion.input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setIsFocused({ ...isFocused, email: true })}
                    onBlur={() => setIsFocused({ ...isFocused, email: false })}
                    animate={{
                      scale: isFocused.email ? 1.02 : 1,
                      borderColor: isFocused.email ? '#6366f1' : '#e5e7eb',
                    }}
                    className="w-full px-6 py-4 bg-white border-2 rounded-2xl text-dark placeholder-dark/40 focus:outline-none transition-all shadow-lg"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <motion.textarea
                    placeholder="Your Message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setIsFocused({ ...isFocused, message: true })}
                    onBlur={() => setIsFocused({ ...isFocused, message: false })}
                    animate={{
                      scale: isFocused.message ? 1.02 : 1,
                      borderColor: isFocused.message ? '#6366f1' : '#e5e7eb',
                    }}
                    className="w-full px-6 py-4 bg-white border-2 rounded-2xl text-dark placeholder-dark/40 focus:outline-none transition-all resize-none shadow-lg"
                  ></motion.textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white rounded-full font-bold text-lg shadow-2xl"
                >
                  <span>Send Message</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaPaperPlane />
                  </motion.span>
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Find me online 🌐
            </h3>
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-4 p-6 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary/30 group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-14 h-14 rounded-full bg-gradient-to-r ${contact.gradient} flex items-center justify-center text-white shadow-lg`}
                >
                  <contact.icon className="w-7 h-7" />
                </motion.div>
                <div className="flex-1">
                  <p className="font-semibold text-dark/80 group-hover:text-primary transition-colors">
                    {contact.label}
                  </p>
                  <p className="text-dark/60 text-sm">{contact.value}</p>
                </div>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-primary text-2xl"
                >
                  →
                </motion.span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
