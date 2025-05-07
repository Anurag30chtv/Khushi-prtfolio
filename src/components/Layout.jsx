import React from 'react';
import StarBackground from './StarBackground';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <StarBackground />
      <div className="px-6 md:px-12 lg:px-24 xl:px-32 mx-auto max-w-[1920px]">
        {children}
      </div>
      <footer className="py-4 -mt-4 text-center text-wine-text-secondary text-base font-medium opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-105">
        Made with <span className="text-wine-accent text-lg">♥</span>  Khushi
      </footer>
    </div>
  );
};

export default Layout; 