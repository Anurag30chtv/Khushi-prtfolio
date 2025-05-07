import React from 'react';
import StarBackground from './StarBackground';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <StarBackground />
      <div className="px-6 md:px-12 lg:px-24 xl:px-32 mx-auto max-w-[1920px]">
        {children}
      </div>
      <footer className="py-4 text-center text-wine-text-secondary text-sm opacity-50 hover:opacity-100 transition-opacity duration-300">
        Made with <span className="text-wine-accent">♥</span>
      </footer>
    </div>
  );
};

export default Layout; 