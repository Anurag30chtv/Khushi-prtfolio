import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  // Generate random stars
  const stars = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 2 + 1,
    delay: Math.random()
  }));

  return (
    <div className="fixed inset-0 bg-wine-bg z-50 flex flex-col items-center justify-center">
      {/* Stars */}
      {stars.map(star => (
        <motion.div
          key={star.id}
          className="absolute bg-wine-accent rounded-full"
          style={{
            width: star.size,
            height: star.size,
            left: star.left,
            top: star.top
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.2, 0]
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Main Content */}
      <div className="text-center relative z-10">
        {/* Glowing circle behind text */}
        <div className="absolute inset-0 bg-wine-accent/20 blur-3xl rounded-full"></div>
        
        {/* Main Text */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-wine-text mb-4 relative"
        >
          Khushi Tiwari
        </motion.h1>
        
        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-wine-text-secondary"
        >
          Aspiring Business Analyst
        </motion.p>
      </div>

      {/* Loading Bar */}
      <motion.div
        className="w-48 h-1 bg-wine-dark/20 rounded-full mt-8 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="h-full bg-wine-accent rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 2,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  );
};

export default Loader; 