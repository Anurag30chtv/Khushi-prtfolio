import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptop, FaUsers, FaHandshake, FaTrophy } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    {
      category: "Technical Skills",
      icon: <FaLaptop className="text-4xl text-accent" />,
      items: [
        { name: "Canva", level: 90 },
        { name: "MS Office", level: 95 },
        { name: "Management Accounting", level: 85 },
        { name: "Banking & Insurance", level: 80 },
      ]
    },
    {
      category: "Soft Skills",
      icon: <FaUsers className="text-4xl text-accent" />,
      items: [
        { name: "Leadership", level: 95 },
        { name: "Problem Solving", level: 90 },
        { name: "Team Player", level: 92 },
        { name: "Negotiation", level: 88 },
      ]
    },
    {
      category: "Community Skills",
      icon: <FaHandshake className="text-4xl text-accent" />,
      items: [
        { name: "Community Development", level: 90 },
        { name: "Event Management", level: 92 },
        { name: "Public Speaking", level: 88 },
        { name: "Mentorship", level: 85 },
      ]
    },
    {
      category: "Achievements",
      icon: <FaTrophy className="text-4xl text-accent" />,
      items: [
        { name: "Fashion Show Organization", level: 95 },
        { name: "Miss DSS Title", level: 90 },
        { name: "Top 10 Verbal Miss Cosmos", level: 88 },
        { name: "Community Outreach", level: 92 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
      
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-title text-center mb-16"
        >
          Skills & Expertise
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                  {skillGroup.icon}
                </div>
                <h3 className="text-2xl font-bold text-text group-hover:text-accent transition-colors duration-300">
                  {skillGroup.category}
                </h3>
              </div>
              
              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary group-hover:text-text transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-accent font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="progress-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="progress-fill"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 