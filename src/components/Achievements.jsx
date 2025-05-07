import { useRef, useEffect } from 'react';

const AchievementCard = ({ title, description, icon, year }) => {
  const cardRef = useRef(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="group opacity-0 translate-y-4 transition-all duration-500"
    >
      <div className="card hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-gradient-to-br from-white to-soft-pink/10">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="text-5xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
            {icon}
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-wine group-hover:text-soft-pink transition-colors duration-300">
              {title}
            </h3>
            <p className="text-wine group-hover:text-soft-pink transition-colors duration-300">
              {description}
            </p>
            <span className="text-sm text-gray-600 group-hover:text-wine transition-colors duration-300">
              {year}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Achievements = () => {
  const achievements = [
    {
      title: 'Miss DSS Titleholder',
      description: 'Crowned Miss DSS for outstanding leadership and community service',
      icon: '👑',
      year: '2023'
    },
    {
      title: 'Fashion Show Event',
      description: 'Organized and managed a fashion show with 70+ participants',
      icon: '🎭',
      year: '2022'
    },
    {
      title: 'Verbal Miss Cosmos',
      description: 'Secured Top 10 position in Verbal Miss Cosmos at LPU',
      icon: '🎤',
      year: '2022'
    }
  ];

  return (
    <section className="py-16 px-4 bg-white" id="achievements">
      <div className="container mx-auto">
        <h2 className="section-title group">
          Achievements
          <span className="block w-20 h-1 bg-wine mx-auto mt-2 transform group-hover:scale-x-150 transition-transform duration-300"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements; 