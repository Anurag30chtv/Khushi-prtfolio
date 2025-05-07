import { useRef, useEffect } from 'react';

const TimelineItem = ({ title, institution, period, description, icon }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={itemRef}
      className="group relative pl-8 pb-8 opacity-0 translate-y-4 transition-all duration-500"
    >
      <div className="absolute left-0 top-0 w-4 h-4 bg-wine rounded-full group-hover:scale-150 transition-transform duration-300"></div>
      <div className="absolute left-2 top-4 w-0.5 h-full bg-wine group-hover:bg-soft-pink transition-colors duration-300"></div>
      <div className="card hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-gradient-to-br from-white to-soft-pink/10">
        <div className="flex items-start gap-6">
          <div className="text-3xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
            {icon}
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-wine group-hover:text-soft-pink transition-colors duration-300">
              {title}
            </h3>
            <p className="text-wine font-medium group-hover:text-soft-pink transition-colors duration-300">
              {institution}
            </p>
            <p className="text-sm text-gray-600">{period}</p>
            <p className="text-wine group-hover:text-soft-pink transition-colors duration-300">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  const educationItems = [
    {
      title: 'BBA-MBA',
      institution: 'Lovely Professional University',
      period: '2020 - 2024',
      description: 'Pursuing integrated BBA-MBA with focus on Management Accounting',
      icon: '🎓'
    },
    {
      title: 'Higher Secondary',
      institution: 'Deoria Senior Secondary School',
      period: '2018 - 2020',
      description: 'Completed higher secondary education with distinction',
      icon: '📚'
    },
    {
      title: 'Banking & Insurance',
      institution: 'Swayam',
      period: '2023',
      description: 'Certified in Banking and Insurance fundamentals',
      icon: '🏦'
    },
    {
      title: 'Accounting Certificate',
      institution: 'LinkedIn Learning',
      period: '2023',
      description: 'Professional certification in Accounting principles and practices',
      icon: '📊'
    }
  ];

  return (
    <section className="py-16 px-4 bg-soft-pink" id="education">
      <div className="container mx-auto">
        <h2 className="section-title group">
          Education & Certifications
          <span className="block w-20 h-1 bg-wine mx-auto mt-2 transform group-hover:scale-x-150 transition-transform duration-300"></span>
        </h2>
        <div className="max-w-3xl mx-auto">
          {educationItems.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 