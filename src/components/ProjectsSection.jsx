// Projects Section Component
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/portfolioData';

const ProjectCard = ({ project, darkMode }) => {
  return (
    <div className={`group rounded-2xl overflow-hidden border transition-all hover:shadow-xl ${
      darkMode 
        ? 'bg-gray-800/50 border-gray-700/50 hover:border-cyan-500/50 hover:shadow-cyan-500/10' 
        : 'bg-white border-gray-200 hover:border-cyan-500 hover:shadow-cyan-500/20'
    }`}>
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 backdrop-blur-sm text-xs rounded-full border ${
            darkMode 
              ? 'bg-gray-900/80 text-gray-300 border-gray-700' 
              : 'bg-white/80 text-gray-700 border-gray-300'
          }`}>
            {project.category}
          </span>
        </div>
        <div className={`absolute inset-0 bg-gradient-to-t ${
          darkMode ? 'from-gray-900' : 'from-gray-800'
        } via-transparent to-transparent`} />

        {/* Hover Actions */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 ${
          darkMode ? 'bg-gray-900/60' : 'bg-gray-800/60'
        }`}>
          <a
            href={project.link}
            className="p-3 bg-cyan-500 rounded-full text-gray-900 hover:bg-cyan-400 transition-colors"
            title="Ver proyecto"
          >
            <ExternalLink size={20} />
          </a>
          <a
            href={project.github}
            className="p-3 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition-colors"
            title="Ver código"
          >
            <Github size={20} />
          </a>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className={`text-xl font-semibold mb-2 transition-colors ${
          darkMode 
            ? 'text-cyan-400 group-hover:text-cyan-300' 
            : 'text-cyan-600 group-hover:text-cyan-500'
        }`}>
          {project.title}
        </h3>
        <p className={`text-sm mb-4 line-clamp-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className={`px-2.5 py-1 text-xs rounded-md ${
                darkMode 
                  ? 'bg-gray-700/50 text-gray-400' 
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = ({ darkMode }) => {
  return (
    <section id="proyectos" className={`py-20 px-6 ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Proyectos
        </h2>
        <p className={`mb-12 max-w-3xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Mis proyectos más destacados. Cada proyecto es el resultado de mi dedicación y
          pasión por la programación. Descubre cómo transformo ideas en realidades digitales.
          <span className={darkMode ? 'text-cyan-400' : 'text-cyan-600'}> ¡Explora, inspira y crea con mis proyectos de software!</span>
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} darkMode={darkMode} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className={`flex items-center gap-2 transition-colors ${
            darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
          }`}>
            Más proyectos
            <ExternalLink size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
