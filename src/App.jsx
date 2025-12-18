// Main App Component - Agustín Pagliuca Portfolio v2
import React, { useState, useEffect } from 'react';
import {
  Navigation,
  HeroSection,
  ExperienceSection,
  ProjectsSection,
  TechnologiesSection,
  AboutSection,
  Footer
} from './components';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gray-950 text-white' 
        : 'bg-gray-100 text-gray-900'
    }`}>
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
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
      <Navigation
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        scrollToSection={scrollToSection}
      />

      {/* Main Content */}
      <main className="relative">
        <HeroSection scrollToSection={scrollToSection} darkMode={darkMode} />
        <ExperienceSection darkMode={darkMode} />
        <ProjectsSection darkMode={darkMode} />
        <TechnologiesSection darkMode={darkMode} />
        <AboutSection darkMode={darkMode} />
      </main>

      {/* Footer */}
      <Footer scrollToSection={scrollToSection} darkMode={darkMode} />
    </div>
  );
};

export default App;
