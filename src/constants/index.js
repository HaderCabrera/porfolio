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
  aerolinea,
  campus,
  cocacola,
  cda,
  jovimotos,
  serviciospublicos
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
];

const projects = [
  {
    name: "Jovimotos",
    description:
      "Pagina web que permite registrarse, comprar, solicitar gestion de servicios y generar carro de compra. Fue diseñada para una compraventa de vehiculos de segunda.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Postman",
        color: "green-text-gradient",
      },
      {
        name: "Html-Css",
        color: "pink-text-gradient",
      },
    ],
    image: jovimotos,
    source_code_link: "https://github.com/HaderCabrera/webPageJOVIMOTOS",
  },
  {
    name: "2 Teras",
    description:
      "Plataforma web que permite el pago de los servicios publicos alojados en una base de datos ficticia, permite valida es estado de la factura y pagar si es necesario.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Bulma",
        color: "pink-text-gradient",
      },
    ],
    image: serviciospublicos,
    source_code_link: "https://github.com/HaderCabrera/project2TERAS",
  },
  {
    name: "AerolineaSG",
    description:
      "Sistema capaz de gestionar todos los aspectos de aerolinea, desde la reserva de vuelos hasta el mantenimiento de los aviones y la administración de la tripulación.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Railway",
        color: "pink-text-gradient",
      },
    ],
    image: aerolinea,
    source_code_link: "https://github.com/HaderCabrera/aerolineaSG",
  },
];

export { services, technologies, experiences, projects };
