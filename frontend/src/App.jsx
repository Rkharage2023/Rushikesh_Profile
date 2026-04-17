// src/App.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import FeaturedProject from "./components/FeaturedProject";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {
  ScrollProgress,
  BackToTop,
  CustomCursor,
} from "./components/ScrollUtils";

/* Page enter animation */
const pageVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

function Portfolio() {
  const [loading, setLoading] = useState(true);

  // Show preloader for 2 seconds
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Preloader overlay */}
      <Preloader visible={loading} />

      {/* Scroll progress bar at very top */}
      <ScrollProgress />

      {/* Custom cursor — desktop only */}
      <CustomCursor />

      {/* Main site */}
      <AnimatePresence>
        {!loading && (
          <motion.div
            variants={pageVariants}
            initial="hidden"
            animate="show"
            className="min-h-screen dark:bg-dark-950 bg-slate-50 transition-colors duration-300"
          >
            {/* Sticky navbar */}
            <Navbar />

            {/* Page sections */}
            <main>
              <Hero />
              <About />
              <Projects />
              <FeaturedProject />
              <Skills />
              <Resume />
              <Contact />
            </main>

            <Footer />

            {/* Back-to-top FAB */}
            <BackToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}
