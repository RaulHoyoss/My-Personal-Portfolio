import React from 'react'
import Skills from './Skills'
import { useTranslation } from 'react-i18next'
import { FaUser } from 'react-icons/fa';

function About() {
  const { t } = useTranslation()

  return (
    <section
      id="About"
      className="   bg-bg-light text-text-light dark:bg-bg-dark dark:text-text-dark 
                 flex flex-col justify-start items-center lg:items-start px-12 md:px-40 pt-16 md:pt-20 lg:pt-24"
    >
      <div className="max-w-5xl mx-auto">

        {/* Título */}
        <div className="flex items-center w-full mb-8">
          <span className="text-primary-light dark:text-primary-dark font-mono mr-4"><FaUser size={24}></FaUser></span>
          <h1 className=" font-NavBar font-bold text-3xl md:text-4xl  mr-6">{t('about.Titulo1')}</h1>
          <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700"></div>
        </div>

        {/* Contenedor de texto + imagen */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-20 w-full text-justify">

          {/* Texto */}
          <div className=" font-main space-y-6 max-w-full lg:max-w-2xl lg:text-justify text-lg">
            <p>
              {t('about.p1.greeting')}{" "}
              <span className="text-primary-light dark:text-primary-dark">{t('about.p1.name')}</span>{" "}
              {t('about.p1.degreeIntro')}{" "}
              <span className="text-primary-light dark:text-primary-dark">{t('about.p1.degree')}</span>{" "}
              {t('about.p1.uni')}{" "}
              <span className="text-primary-light dark:text-primary-dark">{t('about.p1.uniAbbrev')}</span>
              {t('about.p1.specialization')}
            </p>
            <p>
              {t('about.p2.current')}{" "}
              <span className="text-primary-light dark:text-primary-dark">{t('about.p2.working')}</span>{" "}
              {t('about.p2.description')}
            </p>
            <p>
              {t('about.p3.personality')}{" "}
              <span className="text-primary-light dark:text-primary-dark">{t('about.p3.traits')}</span>{" "}
              {t('about.p3.interests')}
            </p>
          </div>

          {/* Contenedor de la imagen */}
          <div className="flex justify-center lg:justify-start w-full lg:w-auto">
            <div className="relative group w-72 h-72 min-w-[200px] min-h-[200px]">

              {/* Borde detrás */}
              <div
                className="absolute -top-4 -left-4 w-full h-full rounded-lg border-2 
                           border-primary-light dark:border-primary-dark
                           transform transition-transform duration-300 ease-out 
                           group-hover:-translate-x-1 group-hover:-translate-y-1"
              ></div>

              {/* Imagen */}
              <img
                src="/Face_image.jpg"
                alt="Foto de Raul Hoyos"
                className=" relative w-full h-full object-cover rounded-lg shadow-lg
                           transform transition-transform duration-300 ease-out 
                           group-hover:translate-x-1 group-hover:translate-y-1"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 bg-pricture-light dark:bg-primary-dark 
                           mix-blend-multiply opacity-100 group-hover:opacity-0 
                           transition-opacity duration-300 ease-in-out rounded-lg"
              ></div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <Skills />
      </div>
    </section>
  )
}

export default About
