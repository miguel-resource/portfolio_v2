'use client';

import { useTranslations } from "next-intl";
import s from "./../app.module.scss";

interface Project {
  id: number;
  name: string;
  description: string;
  link: string;
  technologies?: string[];
}

export default function Projects() {
  const t = useTranslations("projects");

  // Aquí puedes agregar tus proyectos
  const projects: Project[] = [
    {
      id: 1,
      name: "Proyecto 1",
      description: "Descripción del proyecto 1. Aquí puedes explicar de qué trata el proyecto, qué tecnologías usaste y qué problemas resolviste.",
      link: "https://github.com/tu-usuario/proyecto1",
      technologies: ["React", "TypeScript", "Tailwind CSS"]
    },
    {
      id: 2,
      name: "Proyecto 2",
      description: "Descripción del proyecto 2. Otro proyecto interesante que desarrollaste como freelance.",
      link: "https://github.com/tu-usuario/proyecto2",
      technologies: ["Next.js", "Node.js", "MongoDB"]
    },
    {
      id: 3,
      name: "Proyecto 3",
      description: "Descripción del proyecto 3. Un tercer proyecto que muestra tus habilidades.",
      link: "https://github.com/tu-usuario/proyecto3",
      technologies: ["Vue.js", "Firebase", "CSS"]
    },
  ];

  return (
    <section className={s.experience}>
      <div className={s.experience__container}>
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            {t("title")}
          </h1>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-12">
            {t("subtitle")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                  {project.name}
                </h2>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  {project.description}
                </p>
                
                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full"
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
                  className="inline-block mt-4 px-6 py-2 bg-slate-900 dark:bg-slate-300 text-white dark:text-slate-900 rounded-lg hover:bg-slate-700 dark:hover:bg-slate-400 transition-colors duration-300"
                >
                  {t("projectLink")}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
