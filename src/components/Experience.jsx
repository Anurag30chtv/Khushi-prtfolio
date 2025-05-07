import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaTrophy, FaHandsHelping } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      type: "Professional Experience",
      icon: <FaBriefcase className="text-4xl text-accent" />,
      items: [
        {
          title: "Management Accounting Intern",
          company: "Shrawan Agrawal & Associates",
          period: "Jun '24 - Jul '24",
          description: "Worked under a licensed CA, gaining in-depth understanding of Management Accounting and Internal Control.",
          achievements: [
            "Prepared comprehensive report on 45 days of experience",
            "Interacted with clients to understand their problems",
            "Provided practical solutions and suggestions",
            "Gained hands-on experience in management accounting"
          ]
        }
      ]
    },
    {
      type: "Community Projects",
      icon: <FaHandsHelping className="text-4xl text-accent" />,
      items: [
        {
          title: "Community Development Project",
          company: "Baalkalyaan Kendra NGO",
          period: "Jun '23 - Jul '23",
          description: "Worked with underprivileged children in Deoria, Uttar Pradesh to create awareness about education and health.",
          achievements: [
            "Taught health and sanitation practices for one month",
            "Conducted yoga and fitness sessions",
            "Distributed snacks and stationery to children",
            "Provided mentorship to underprivileged students",
            "Organized community outreach events"
          ]
        }
      ]
    },
    {
      type: "Education",
      icon: <FaGraduationCap className="text-4xl text-accent" />,
      items: [
        {
          title: "Integrated BBA-MBA",
          company: "Lovely Professional University",
          period: "Aug 2022 - Present",
          description: "Currently pursuing integrated BBA-MBA program in Jalandhar, Punjab.",
          achievements: [
            "Active participant in university events",
            "Member of various student organizations",
            "Engaged in academic and extracurricular activities"
          ]
        },
        {
          title: "Higher Secondary",
          company: "Deoria Senior Secondary School",
          period: "April 2020 - March 2022",
          description: "Completed higher secondary education in Deoria, Uttar Pradesh.",
          achievements: [
            "Active in school activities",
            "Participated in various competitions",
            "Maintained good academic record"
          ]
        }
      ]
    },
    {
      type: "Achievements",
      icon: <FaTrophy className="text-4xl text-accent" />,
      items: [
        {
          title: "Fashion Show Event",
          company: "Event Management",
          period: "Sept '24",
          description: "Successfully organized and managed a fashion show event.",
          achievements: [
            "Gathered over 70 participants within 4 days",
            "Coordinated event logistics and management",
            "Ensured successful event execution"
          ]
        },
        {
          title: "Miss DSS Title",
          company: "Deoria Senior Secondary School",
          period: "Apr '22",
          description: "Won the prestigious Miss DSS title among 200 participants.",
          achievements: [
            "Demonstrated leadership and confidence",
            "Participated in various rounds",
            "Won the final title"
          ]
        },
        {
          title: "Verbal Miss Cosmos",
          company: "LPU",
          period: "May '24",
          description: "Achieved top 10 position in Verbal Miss Cosmos competition.",
          achievements: [
            "Received award from Pro Chancellor Dr. Rashmi Mittal",
            "Demonstrated excellent communication skills",
            "Represented university with distinction"
          ]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-primary relative overflow-hidden">
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
          Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                    {experience.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-text group-hover:text-accent transition-colors duration-300">
                    {experience.type}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {experience.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="card group hover:scale-105 transition-all duration-300 relative overflow-hidden"
                    >
                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-xl font-bold text-text group-hover:text-accent transition-colors duration-300">
                              {item.title}
                            </h4>
                            <p className="text-accent font-medium">
                              {item.company}
                            </p>
                          </div>
                          <span className="text-text-secondary">
                            {item.period}
                          </span>
                        </div>

                        <p className="text-text-secondary text-sm">
                          {item.description}
                        </p>

                        <div className="space-y-1">
                          {item.achievements.map((achievement, achievementIndex) => (
                            <div 
                              key={achievementIndex}
                              className="flex items-start gap-2"
                            >
                              <span className="text-accent mt-1">•</span>
                              <span className="text-text-secondary text-sm">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 