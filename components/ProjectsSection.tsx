"use client";
import s from "./components.module.scss";
import Image from "next/image";

interface Project {
  id: number;
  name: string;
  description: string;
  link: string;
  technologies?: string[];
  image?: string;
}

type Props = {
  title: string;
  subtitle: string;
};

const ProjectsSection = (props: Props) => {
  const { title, subtitle } = props;

  // Aquí puedes agregar tus proyectos
  const projects: Project[] = [
    {
      id: 1,
      name: "Madboing (E-commerce clouthing)",
      description:
        "Plataforma de comercio electrónico completa con carrito de compras, gestión de inventario y sistema de pagos integrado. Optimizada para rendimiento y SEO.",
      link: "https://www.madboing.mx/",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      image: "/imgs/projects/madboing.png",
    },
    {
      id: 2,
      name: "Fisio Itazami Ponce (Gestión de Historias Clínicas)",
      description:
        "Aplicación web para la gestión de historias clínicas de pacientes, con funcionalidades de programación de citas, historial médico y reportes personalizados.",
      link: "https://www.fisioitazamiponce.com/",
      technologies: ["Next.js", "Node.js", "Supabase", "Socket.io"],
      image: "/imgs/projects/fisiotiazami.png",
    },
    {
      id: 3,
      name: "Imperium Dashboard (Administrador de Barberías)",
      description:
        "Dashboard interactivo para la administración de barberías, con gestión de citas, control de inventario y análisis de rendimiento.",
      link: "https://imperiumbarber.mx/login",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
      image: "/imgs/projects/imperium.png",
    },
  ];

  return (
    <section className={s.projects__section} id="projects">
      <div className={s.projects__container}>
        <h2
          className={`${s.projects__title} text-slate-900 dark:text-slate-100`}
        >
          {title}
        </h2>
        <p
          className={`${s.projects__subtitle} text-slate-600 dark:text-slate-400`}
        >
          {subtitle}
        </p>

        <div className={s.projects__grid}>
          {projects.map((project) => (
            <div key={project.id} className={s.projects__card}>
              {project.image && (
                <div className={s.projects__card__image}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={400}
                    height={200}
                    className={s.projects__card__img}
                  />
                  <div className={s.projects__card__overlay}></div>
                </div>
              )}

              <div className={s.projects__card__content}>
                <h3
                  className={`${s.projects__card__title} text-slate-900 dark:text-slate-100`}
                >
                  {project.name}
                </h3>
                <p
                  className={`${s.projects__card__description} text-slate-100 dark:text-slate-400`}
                >
                  {project.description}
                </p>

                {project.technologies && (
                  <div className={s.projects__card__technologies}>
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`${s.projects__card__tech} bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${s.projects__card__link} bg-slate-900 dark:bg-slate-300 text-white dark:text-slate-900`}
                >
                  <span>Ver Proyecto</span>
                  <svg
                    className={s.projects__card__arrow}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3 8H13M13 8L9 4M13 8L9 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
