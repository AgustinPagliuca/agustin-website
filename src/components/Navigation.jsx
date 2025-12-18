// Navigation Component
import React, { useState } from 'react';
import { Linkedin, Github, Moon, Sun, Menu, X } from 'lucide-react';
import { personalInfo, menuItems } from '../data/portfolioData';

const Navigation = ({ darkMode, setDarkMode, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full backdrop-blur-md z-50 border-b transition-colors duration-300 ${
      darkMode 
        ? 'bg-gray-950/90 border-gray-800/50' 
        : 'bg-white/90 border-gray-200'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className={`text-xl font-bold transition-colors ${
            darkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-500'
          }`}
        >
          apdev
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`transition-colors text-sm ${
                darkMode 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Social Icons & Theme Toggle */}
        <div className="flex items-center space-x-4">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors ${
              darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors ${
              darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg transition-colors ${
              darkMode 
                ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200'
            }`}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden px-6 pb-4 space-y-2 border-b transition-colors duration-300 ${
          darkMode 
            ? 'bg-gray-950/95 border-gray-800/50' 
            : 'bg-white/95 border-gray-200'
        }`}>
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                darkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
