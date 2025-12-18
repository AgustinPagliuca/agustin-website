// Portfolio Data - Agustín Pagliuca
// All personal information and content in one place for easy updates

export const personalInfo = {
  name: 'Agustín',
  lastName: 'Pagliuca',
  fullName: 'Agustín Pagliuca',
  title: 'Desarrollador Backend',
  subtitle: '.NET | C# | SQL Server',
  yearsExperience: '+2',
  email: 'agustinpagliuca1@gmail.com',
  phone: '+54-11-23448499',
  location: 'Buenos Aires, Argentina',
  linkedin: 'https://linkedin.com/in/agustin-pagliuca',
  github: 'https://github.com/agustinpagliuca',
  profileImage: './foto-perfil.jpeg',
  cvUrl: './cv-agustin-pagliuca.pdf', // Agregar tu CV en public/cv-agustin-pagliuca.pdf
  available: true
};

// About Me - Datos estructurados para uso futuro o integración dinámica
// Actualmente el texto está hardcodeado en AboutSection.jsx
export const aboutMe = {
  greeting: 'Hola 👋',
  paragraphs: [
    {
      text: 'soy Agustín Pagliuca, ',
      highlights: [
        { text: 'Estudiante de Analista de Sistemas', type: 'cyan' },
        { text: ' y ', type: 'normal' },
        { text: 'Desarrollador Backend .NET', type: 'cyan' }
      ],
      suffix: '. Inicié en la programación hace más de 2 años y hoy me especializo en crear soluciones escalables con código limpio y mantenible.'
    },
    {
      text: 'Entre mis fortalezas destaco la ',
      highlights: [
        { text: 'aplicación de principios SOLID y patrones de diseño', type: 'cyan-bold' }
      ],
      suffix: ', logrando así garantizar la calidad del código y arquitecturas robustas en cada proyecto.'
    },
    {
      text: 'Me enfoco en el desarrollo de ',
      highlights: [
        { text: 'APIs REST y servicios backend', type: 'underline' }
      ],
      suffix: ' con .NET Core, Entity Framework y SQL Server. Mi objetivo es seguir creciendo profesionalmente en entornos corporativos.'
    },
    {
      text: 'Por último, comparto mi hoja de vida actualizada, donde de manera más detallada especifico mi experiencia, logros y formación académica.',
      highlights: [],
      suffix: ''
    }
  ]
};

export const experience = [
  {
    id: 1,
    title: 'Desarrollador Freelance',
    company: 'Independiente',
    period: 'Presente',
    description: 'Análisis de requerimientos y desarrollo de soluciones web a medida con .NET Core. Diseño de bases de datos relacionales con SQL Server. Desarrollo de APIs REST e integración con frontends en React. Aplicación de principios SOLID y buenas prácticas.'
  },
  {
    id: 2,
    title: 'Formación Continua',
    company: 'EducacionIT / Coderhouse',
    period: '2022 - 2024',
    description: 'Certificaciones en JavaScript Avanzado, Responsive Web Design e Introducción a la Programación. Desarrollo de proyectos prácticos aplicando las tecnologías aprendidas.'
  },
  {
    id: 3,
    title: 'Estudiante Analista de Sistemas',
    company: 'ORT Argentina',
    period: '2023 - Presente',
    description: 'Formación integral en análisis de sistemas, arquitectura de software, bases de datos y metodologías de desarrollo. Aplicación práctica de conceptos en proyectos académicos.'
  }
];

export const projects = [
  {
    id: 1,
    title: 'Sistema de Gestión de Alumnos',
    description: 'Sistema empresarial completo con arquitectura en capas, implementando Repository Pattern, Entity Framework Code First y API RESTful con documentación Swagger.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    category: 'Backend',
    tech: ['C#', '.NET Core', 'SQL Server', 'Entity Framework'],
    link: '#', // TODO: Agregar link al proyecto deployado
    github: '#' // TODO: Agregar link al repositorio de GitHub
  },
  {
    id: 2,
    title: 'Gestor de Tareas',
    description: 'Aplicación web fullstack con autenticación JWT, CRUD completo, gestión de estado con Redux y diseño responsive.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    category: 'Fullstack',
    tech: ['Node.js', 'Express', 'MongoDB', 'React', 'Redux'],
    link: '#', // TODO: Agregar link al proyecto deployado
    github: '#' // TODO: Agregar link al repositorio de GitHub
  }
];

export const technologies = {
  backend: {
    title: 'Backend',
    color: 'cyan',
    items: ['csharp', 'dotnet', 'aspnet', 'sqlserver', 'entityframework', 'api']
  },
  frontend: {
    title: 'Frontend',
    color: 'purple',
    items: ['javascript', 'react', 'redux', 'html5', 'css3', 'tailwind']
  },
  learning: {
    title: 'Aprendiendo',
    color: 'green',
    items: ['docker', 'azure', 'typescript', 'microservices']
  },
  tools: {
    title: 'Herramientas',
    color: 'orange',
    items: ['git', 'github', 'vscode', 'postman', 'jira', 'sqlmanagement']
  }
};

export const menuItems = [
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'tecnologias', label: 'Tecnologías' },
  { id: 'sobre-mi', label: 'Sobre mí' }
];
