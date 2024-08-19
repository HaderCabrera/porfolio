import {
  backend,
  web,
  javascript,
  sql,
  html,
  css,
  spring,
  java,
  postgres,
  git,
  threejs,
  carrent,
  jobit,
  tripguide,
  campus,
  cocacola,
  cda
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Mechatronic Engineer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },

];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Sql",
    icon: sql,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "SpringBoot",
    icon: spring,
  },
];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "Campuslands",
    icon: campus,
    iconBg: "#383E56",
    date: "Septiembre 2023 - Septiembre 2024",
    points: [
      "Creé aplicaciones web completas utilizando HTML, CSS y JavaScript, incluyendo proyectos como una web de ventas para una empresa real.",
      "Desarrollé e implementé características avanzadas en proyectos, como autenticación de usuarios, integración de APIs y manejo de datos en tiempo real.",
      "Participé en proyectos grupales utilizando Git para el control de versiones.",
      "Aprendí y apliqué tecnologías de backend como Java y Spring Boot, y de bases de datos como MySQL y PostgreSQL, en proyectos integrados.",
    ],
  },
  {
    title: "Operario de producción",
    company_name: "CocaCola - FEMSA",
    icon: cocacola,
    iconBg: "#E6DEDD",
    date: "Abril 2022 - Junio 2023",
    points: [
      "Operé y controlé diversas máquinas de producción, asegurando el funcionamiento óptimo de equipos para embotellado y envasado, y manteniendo los estándares de calidad.",
      "Desarrollé y documenté procedimientos mejorados para la operación de maquinaria, mejorando la consistencia y la calidad del producto final.",
      "Ajusté y configuré parámetros de máquinas para adaptarlas a diferentes especificaciones de productos, garantizando un rendimiento preciso y consistente.",
    ],
  },
  {
    title: "Analista Base de Datos",
    company_name: "CDA de la cuesta",
    icon: cda,
    iconBg: "#383E56",
    date: "Agosto 2021 - Diciembre 2021",
    points: [
      "Identifiqué y analicé errores en el sistema gestor de base de datos.",
      "Generé informes sobre el estado de las bases de datos, errores detectados y mejoras implementadas, proporcionando información valiosa para la toma de decisiones.",
      "Proporcioné capacitación y soporte a usuarios sobre el uso del sistema gestor y las mejores prácticas para el ingreso y manejo de datos.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
