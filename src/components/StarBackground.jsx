import React from 'react';
import { motion } from 'framer-motion';

const StarBackground = () => {
  // Generate random stars
  const stars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
    glow: Math.random() > 0.7 // 30% of stars will have glow effect
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {stars.map(star => (
        <motion.div
          key={star.id}
          className={`absolute rounded-full ${star.glow ? 'bg-wine-accent shadow-lg shadow-wine-accent/50' : 'bg-wine-accent'}`}
          style={{
            width: star.size,
            height: star.size,
            left: star.left,
            top: star.top
          }}
          animate={{
            opacity: [0, star.glow ? 0.8 : 0.5, 0],
            scale: [0, star.glow ? 1.5 : 1.2, 0]
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground; 