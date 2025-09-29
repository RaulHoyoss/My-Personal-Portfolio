import React from "react";
import {  useTranslation } from 'react-i18next'

 


function Hero() {

  const {t} = useTranslation()
  

  return (
    <section className="font-heading bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark min-h-screen flex flex-col justify-center items-start px-8 md:px-40 lg:px-48 pt-24 lg:pt-32">
      <div className="max-w-4xl mx-auto">
        {/* Saludo y nombre */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-light leading-snug">
         {t('hero.hello')} 
          <span className="block mt-4 text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-light dark:text-primary-dark">
            Raúl Hoyos.
          </span>
        </h1>

        {/* Descripción */}
        <p className="mt-6 text-lg md:text-xl lg:text-2xl  leading-relaxed max-w-3xl">
          {t('hero.heroP1')}
          <br />
          <span className="text-primary-light dark:text-primary-dark font-bold text-xl md:text-2xl lg:text-3xl tracking-wide">
            {t('hero.heroS1')}
          </span>{" "}
            {t('hero.heroP2')}
        </p>

        {/* Botón */}
        <div className="mt-10">
          <a
            href="/CV_Ing-Raul_Hoyos-Español.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir CV de Raúl Hoyos en nueva pestaña"
          >
            <button
              className="
                  border-2 border-primary-light dark:border-primary-dark 
                  text-primary-light dark:text-primary-dark  
                  font-semibold py-3 px-8 md:py-4 md:px-10 rounded-lg
                  transition-all duration-300 ease-out

                  hover:translate-y-1 hover:translate-x-1 
                  hover:bg-primary-light hover:text-white 
                  dark:hover:bg-primary-dark dark:hover:text-black

                  hover:shadow-button-light dark:hover:shadow-button-dark
                "
              >
                {t('hero.CV')}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
