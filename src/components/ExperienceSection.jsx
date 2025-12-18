// Experience Section Component
import React from 'react';
import { Briefcase } from 'lucide-react';
import { experience } from '../data/portfolioData';

const ExperienceSection = ({ darkMode }) => {
  return (
    <section id="experiencia" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Experiencia
        </h2>

        <div className="space-y-0">
          {experience.map((exp, index) => (
            <div key={exp.id} className="flex gap-4 group">
              {/* Timeline Icon */}
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 border rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-700 group-hover:border-cyan-500/50' 
                    : 'bg-white border-gray-300 group-hover:border-cyan-500'
                }`}>
                  <Briefcase size={18} className={darkMode ? 'text-cyan-400' : 'text-cyan-600'} />
                </div>
                {/* Vertical Line */}
                {index < experience.length - 1 && (
                  <div className={`w-0.5 flex-1 my-2 ${darkMode ? 'bg-gray-800' : 'bg-gray-300'}`} />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-10">
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <h3 className={`text-xl font-semibold transition-colors ${
                    darkMode ? 'text-cyan-400 group-hover:text-cyan-300' : 'text-cyan-600 group-hover:text-cyan-500'
                  }`}>
                    {exp.title}
                  </h3>
                  <span className={darkMode ? 'text-gray-600' : 'text-gray-400'}>-</span>
                  <span className={darkMode ? 'text-orange-400' : 'text-orange-600'}>{exp.company}</span>
                </div>
                <p className={`text-sm mb-3 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{exp.period}</p>
                <p className={`leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
