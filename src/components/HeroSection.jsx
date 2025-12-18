// Hero Section Component
import React from 'react';
import { Linkedin, Github, Mail, ChevronDown, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const HeroSection = ({ scrollToSection, darkMode }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
              <span className={darkMode ? 'text-white' : 'text-gray-900'}>Hola, </span>
              <span className={darkMode ? 'text-cyan-400' : 'text-cyan-600'}>soy {personalInfo.name}</span>
            </h1>
            <p className={`text-xl md:text-2xl mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {personalInfo.title}
            </p>
            <p className={`mb-2 text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <span className={`font-semibold ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
                {personalInfo.yearsExperience} años de experiencia.
              </span>{' '}
              <span className={darkMode ? 'text-cyan-400' : 'text-cyan-600'}>Estudiante de Analista de Sistemas</span>{' '}
              <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>y</span>{' '}
              <span className={darkMode ? 'text-cyan-400' : 'text-cyan-600'}>Desarrollador Backend .NET</span>.{' '}
              <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                Especializado en crear soluciones escalables y robustas. Escribo código limpio y mantenible.
              </span>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2.5 border rounded-full text-sm transition-all ${
                  darkMode 
                    ? 'bg-gray-800/80 border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-gray-600' 
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
                }`}
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2.5 border rounded-full text-sm transition-all ${
                  darkMode 
                    ? 'bg-gray-800/80 border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-gray-600' 
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
                }`}
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className={`flex items-center gap-2 px-4 py-2.5 border rounded-full text-sm transition-all ${
                  darkMode 
                    ? 'bg-gray-800/80 border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-gray-600' 
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
                }`}
              >
                <Mail size={16} />
                {personalInfo.email}
              </a>
              <button
                onClick={() => scrollToSection('proyectos')}
                className={`flex items-center gap-2 px-4 py-2.5 border rounded-full text-sm transition-all ${
                  darkMode 
                    ? 'bg-gray-800/80 border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-gray-600' 
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
                }`}
              >
                <Code2 size={16} className={darkMode ? 'text-cyan-400' : 'text-cyan-600'} />
                Proyectos
              </button>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="flex-shrink-0">
            <div className={`w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 shadow-2xl relative ${
              darkMode 
                ? 'border-cyan-400/30 shadow-cyan-500/20' 
                : 'border-cyan-500/40 shadow-cyan-500/30'
            }`}>
              <img
                src={personalInfo.profileImage}
                alt={`${personalInfo.fullName} - ${personalInfo.title}`}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay for effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => scrollToSection('experiencia')}
            className={`flex flex-col items-center transition-colors animate-bounce ${
              darkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-500'
            }`}
          >
            <span className="text-sm mb-2">Experiencia</span>
            <ChevronDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
