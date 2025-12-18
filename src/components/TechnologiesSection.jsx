// Technologies Section Component
import React from 'react';
import TechIcon, { techLabels } from './TechIcons';
import { technologies } from '../data/portfolioData';

const colorClasses = {
  cyan: {
    title: { dark: 'text-cyan-400', light: 'text-cyan-600' },
    border: { dark: 'border-cyan-500/20 hover:border-cyan-500/40', light: 'border-cyan-500/30 hover:border-cyan-500' }
  },
  purple: {
    title: { dark: 'text-purple-400', light: 'text-purple-600' },
    border: { dark: 'border-purple-500/20 hover:border-purple-500/40', light: 'border-purple-500/30 hover:border-purple-500' }
  },
  green: {
    title: { dark: 'text-green-400', light: 'text-green-600' },
    border: { dark: 'border-green-500/20 hover:border-green-500/40', light: 'border-green-500/30 hover:border-green-500' }
  },
  orange: {
    title: { dark: 'text-orange-400', light: 'text-orange-600' },
    border: { dark: 'border-orange-500/20 hover:border-orange-500/40', light: 'border-orange-500/30 hover:border-orange-500' }
  }
};

const TechCategory = ({ category, data, darkMode }) => {
  const colors = colorClasses[data.color];
  const mode = darkMode ? 'dark' : 'light';

  return (
    <div className={`rounded-2xl p-6 border transition-colors ${
      darkMode ? 'bg-gray-800/30' : 'bg-white'
    } ${colors.border[mode]}`}>
      <h3 className={`text-2xl font-bold mb-6 ${colors.title[mode]}`}>
        {data.title}
      </h3>
      <div className="grid grid-cols-3 gap-2">
        {data.items.map((techKey) => (
          <TechIcon 
            key={techKey} 
            name={techKey} 
            label={techLabels[techKey] || techKey}
            darkMode={darkMode}
          />
        ))}
      </div>
    </div>
  );
};

const TechnologiesSection = ({ darkMode }) => {
  return (
    <section id="tecnologias" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Tecnologías
        </h2>
        <p className={`mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          En mi viaje por el{' '}
          <span className={darkMode ? 'text-cyan-400' : 'text-cyan-600'}>mundo del desarrollo</span>, he cultivado{' '}
          <span className={darkMode ? 'text-orange-400' : 'text-orange-600'}>experiencia y habilidades</span> en una variedad de tecnologías.{' '}
          <span className={`underline underline-offset-4 ${
            darkMode ? 'text-cyan-400 decoration-cyan-400/50' : 'text-cyan-600 decoration-cyan-600/50'
          }`}>
            Mi stack tecnológico incluye
          </span>:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(technologies).map(([key, data]) => (
            <TechCategory key={key} category={key} data={data} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
