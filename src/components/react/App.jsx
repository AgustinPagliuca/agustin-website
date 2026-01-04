import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import AboutSection from './AboutSection';

const App = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      document.body.classList.add('bg-gray-950', 'text-white');
      document.body.classList.remove('bg-gray-100', 'text-gray-900');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      document.body.classList.remove('bg-gray-950', 'text-white');
      document.body.classList.add('bg-gray-100', 'text-gray-900');
    }
  }, [darkMode]);

  return (
    <>
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl transition-colors duration-300 ${
          darkMode ? 'bg-cyan-500/5' : 'bg-cyan-500/10'
        }`} />
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl transition-colors duration-300 ${
          darkMode ? 'bg-purple-500/5' : 'bg-purple-500/10'
        }`} />
        <div className={`absolute top-1/2 right-0 w-64 h-64 rounded-full blur-3xl transition-colors duration-300 ${
          darkMode ? 'bg-orange-500/5' : 'bg-orange-500/10'
        }`} />
      </div>

      {/* Navigation */}
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content - Render Astro children with darkMode prop */}
      <main className="relative">
        {children && typeof children === 'function' ? children(darkMode) : children}
        <AboutSection darkMode={darkMode} />
      </main>
    </>
  );
};

export default App;
