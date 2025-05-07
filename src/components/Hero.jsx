import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [text, setText] = useState('');
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const fullText = "Khushi Tiwari";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Check user's motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = () => setIsReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  // Reduced number of stars and controlled animations
  const heroStars = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 2,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 2 + 3, // Slower animations
    delay: Math.random() * 3
  }));

  const shootingStars = Array.from({ length: 2 }).map((_, i) => ({
    id: i,
    width: Math.random() * 100 + 50,
    angle: Math.random() * 45 + 45,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 50}%`,
    duration: Math.random() * 2 + 2,
    delay: Math.random() * 8 // Longer delays between shooting stars
  }));

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-wine-bg">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-wine-dark to-wine-bg opacity-90"></div>
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
      
      {/* Hero Stars - Only render if reduced motion is not preferred */}
      {!isReducedMotion && (
        <>
          {heroStars.map(star => (
            <motion.div
              key={star.id}
              className="absolute bg-wine-accent rounded-full"
              style={{
                width: star.size,
                height: star.size,
                left: star.left,
                top: star.top,
              }}
              animate={{
                opacity: [0, 0.7, 0],
                scale: [0, 1.2, 0],
                y: [0, -20, 0]
              }}
              transition={{
                duration: star.duration,
                delay: star.delay,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 1
              }}
            />
          ))}
          
          {/* Shooting Stars */}
          {shootingStars.map(star => (
            <motion.div
              key={`shooting-${star.id}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-wine-accent to-transparent"
              style={{
                width: star.width,
                rotate: `${star.angle}deg`,
                left: star.left,
                top: star.top,
              }}
              animate={{
                opacity: [0, 1, 0],
                x: [-100, 100],
                y: [0, 100]
              }}
              transition={{
                duration: star.duration,
                delay: star.delay,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 4
              }}
            />
          ))}
        </>
      )}
      
      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left space-y-6 md:pl-8"
            >
              <h1 className="text-5xl md:text-7xl font-poppins font-bold text-wine-text mb-4 min-h-[1.2em]">
                {text}
                <span className="inline-block w-1 h-8 bg-wine-accent animate-blink"></span>
              </h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-2xl md:text-3xl font-poppins text-wine-text-secondary"
              >
                <span className="inline-block">Aspiring Business Analyst</span>
                <span className="inline-block mx-2">•</span>
                <span className="inline-block">Fashion Influencer</span>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-lg md:text-xl text-wine-text-secondary max-w-2xl"
              >
                I'm a passionate and dedicated student with a keen interest in business analysis and fashion industry.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex flex-wrap justify-center md:justify-start gap-4 mt-8"
              >
                <a
                  href="#contact"
                  className="btn-primary px-8 py-3 rounded-full text-lg hover:scale-105 transition-transform"
                >
                  Get in Touch
                </a>
                <a
                  href="#experience"
                  className="btn-secondary px-8 py-3 rounded-full text-lg hover:scale-105 transition-transform"
                >
                  View Work
                </a>
              </motion.div>
            </motion.div>

            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:ml-[10%] flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-wine-accent to-wine rounded-full blur opacity-25 group-hover:opacity-75 group-hover:scale-105 transition-all duration-300"></div>
                
                {/* Profile image container */}
                <div className="relative overflow-hidden rounded-full">
                  <img
                    src="/profile-new.jpg"
                    alt="Khushi Tiwari"
                    className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover object-top border-4 border-wine-accent shadow-xl group-hover:scale-110 group-hover:rotate-2 transition-all duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-wine/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                    <span className="text-wine-text text-lg font-medium">Khushi Tiwari</span>
                  </div>
                </div>
                
                {/* Status badge - Moved outside the overflow:hidden container */}
                <div className="absolute -bottom-4 right-0 md:-right-4 z-10">
                  <div className="bg-wine text-wine-text px-4 py-2 rounded-full shadow-lg transform group-hover:scale-110 group-hover:bg-wine-accent transition-all duration-300">
                    <span className="whitespace-nowrap">Available for Work</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-wine-text-secondary"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 