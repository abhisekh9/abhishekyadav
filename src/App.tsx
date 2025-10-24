import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2500);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent"
          >
            <div className="text-center">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-8xl mb-4"
              >
                🚀
              </motion.div>
              <motion.h2
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-4xl font-bold text-white font-mono"
              >
                &lt;Loading.../&gt;
              </motion.h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="bg-white text-dark overflow-x-hidden">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          {/* <Experience /> */}
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}
export default App;
