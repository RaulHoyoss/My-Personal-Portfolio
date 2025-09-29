import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

// Definir fuera del componente para evitar warnings
const skills = {
  languages: ["Java", "C#", "Kotlin", "JavaScript (Node.js)"],
  frontend: ["HTML", "Vue.js", "React", "Tailwind CSS"],
  backend: ["Spring", "Node.js", "SQL"],
  otros: ["MVC", "Git"],
};

function Skills() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("languages");
  const listRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({});

  // Indicador dinámico
  useEffect(() => {
    const updateIndicator = () => {
      const listItems = listRef.current?.children;
      if (!listItems) return;

      const index = Object.keys(skills).indexOf(activeCategory);
      const li = listItems[index];
      if (!li) return;

      if (window.innerWidth < 768) {
        // Horizontal en móvil
        setIndicatorStyle({
          width: li.offsetWidth - 16 + "px", // un poco más corta
          height: "2px",
          left: li.offsetLeft + 8 + "px", // centrada
          top: li.offsetHeight - 2 + "px",
        });
      } else {
        // Vertical en desktop
        setIndicatorStyle({
          width: "2px",
          height: li.offsetHeight + "px",
          left: "0",
          top: li.offsetTop + "px",
        });
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeCategory]);

  return (
    <section>
      {/* Título */}
      <div className="pt-16">
        <p className="text-text-light dark:text-text-dark font-main text-lg">
          {t("skills.mySkills")}
        </p>
      </div>

      <div className="font-main flex flex-col md:flex-row gap-8 pt-8">
        {/* Categorías */}
        <div className="relative">
          <ul
            ref={listRef}
            className="flex md:flex-col border-t-2 md:border-l-2 border-gray-300 dark:border-gray-700 relative"
          >
            {Object.keys(skills).map((category) => (
              <li
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`cursor-pointer px-4 py-2 transition-colors duration-300
                  ${
                    activeCategory === category
                      ? "bg-primary-light dark:bg-primary-dark text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
              >
                {t(`skills.${category}`)}
              </li>
            ))}

            {/* Indicador horizontal (solo móvil) */}
            <span
              className="absolute bg-primary-light dark:bg-primary-dark transition-all duration-300 ease-in-out md:hidden"
              style={indicatorStyle}
            />

            {/* Indicador vertical (solo desktop) */}
            <span
              className="absolute bg-primary-light dark:bg-primary-dark transition-all duration-300 ease-in-out hidden md:block"
              style={indicatorStyle}
            />
          </ul>
        </div>

        {/* Tecnologías */}
        <div className="flex-1 mt-6">
          <ul className="list-none pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            {skills[activeCategory].map((tech) => (
              <li
                key={tech}
                className="relative pl-6 
                  before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2
                  before:w-0 before:h-0
                  before:border-t-[6px] before:border-t-transparent
                  before:border-b-[6px] before:border-b-transparent
                  before:border-l-[10px] before:border-l-primary-light dark:before:border-l-primary-dark"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
