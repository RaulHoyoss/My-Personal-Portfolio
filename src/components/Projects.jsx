import React, { useState } from 'react'
import {  useTranslation } from 'react-i18next'
import { FaCode } from 'react-icons/fa'

export default function Projects() {
  
  const {t} = useTranslation()

  const projects = [
      {id:"1", tittle:"IntelliReserve",image:"/images/IntelliReserve.png", alt:"IntelliReserve Project",
        desc: t('project.Project1'),
        tech:["C#", 'HTML', 'CSS', 'MVC', 'POSTGRE_SQL'],url:"https://github.com/RaulHoyoss/IntelliReserve"},
      {id:"2", tittle:"Eventakt",image:"/images/eventakt.png", alt:"Eventakt project", 
        desc: t('project.Project2'), 
        tech:["VUE", "SPRING BOOT","POSTGRE_SQL"],url:"https://github.com/RaulHoyoss/eventakt"},
      {id:"3", tittle:"KoalaMarket",image:"/images/Imagen_KoalaM.png", alt:"KoalaMarketApplication",
        desc: t('project.Project3'),
        tech:["KOTLIN", "SPRING BOOT"],url:"https://github.com/Kotlin-Koalas/KoalaMarket"},
      {id:"4", tittle:"TennisClubApplication",image:"/images/ImagenIPC_Tennis.png",
        alt:"TennisClubApplication Project", desc: t('project.Project4'),
        tech:["JAVA", "CSS"],url:"https://github.com/FranMiralles/IPC-TenisClubApplication"}
      
    
    ]

    
  const [index, setIndex] = useState(0);
  const [newIndex, setNewIndex] = useState(null);
  const [direction, setDirection] = useState("next");
  const [isAnimating, setIsAnimating] = useState(false);

  const prev = () => {
    if (isAnimating) return;
    setDirection("prev");
    const prevIdx = (index + projects.length - 1) % projects.length;
    setNewIndex(prevIdx);
    setIsAnimating(true);
    setTimeout(() => {
      setIndex(prevIdx);
      setNewIndex(null);
      setIsAnimating(false);
    }, 500);
  };

  const next = () => {
    if (isAnimating) return;
    setDirection("next");
    const nextIdx = (index + 1) % projects.length;
    setNewIndex(nextIdx);
    setIsAnimating(true);
    setTimeout(() => {
      setIndex(nextIdx);
      setNewIndex(null);
      setIsAnimating(false);
    }, 500);
  };

  const prevIndex = (index + projects.length - 1) % projects.length;
  const nextIndex = (index + 1) % projects.length;

  return (
    <section
      id="Project"
      className="bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark flex flex-col justify-start items-stretch px-12 md:px-40 pt-16 md:pt-20 lg:pt-24"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col items-stretch">
        {/* Título */}
        <div className="flex items-center w-full mb-8">
          <span className="text-primary-light  dark:text-primary-dark font-mono mr-4">
            <FaCode size={24}></FaCode>
          </span>
          <h1 className="text-3xl md:text-4xl font-NavBar font-bold mr-6">
            {t("project.Titulo2")}
          </h1>
          <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700"></div>
        </div>

        {/* Contenedor principal */}
        <div className="flex flex-col items-stretch w-full max-w-4xl">
          {/* Título del proyecto */}
          <h3
            className={`font-NavBar font-bold text-center min-h-[40px] text-2xl lg:text-3xl  transition-all duration-500 ease-in-out ${
              isAnimating
                ? "opacity-0 translate-y-2"
                : "opacity-100 translate-y-0"
            }`}
          >
            {projects[index].tittle}
          </h3>

          {/* Carrusel */}
          <div className="relative flex items-center justify-center mt-6 gap-4">
            {/* Imagen anterior */}
            <div
              className="w-20 h-40 overflow-hidden opacity-40 blur-sm cursor-pointer
                        transform transition-transform duration-300 ease-out hover:scale-105  "
              onClick={prev}
            >
              <img
                src={projects[prevIndex].image || "/logo512.png"}
                alt="Proyecto anterior"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>

            {/* Imagen central */}
            <div className="relative w-full max-w-3xl aspect-video overflow-hidden rounded-lg shadow-lg
                          transform transition-transform duration-300 ease-out hover:scale-105 cursor-pointer   "
                          
                          
                 onClick={() => {
                  const projectUrl = projects[newIndex ?? index].url;
                  if (projectUrl) window.open(projectUrl, "_blank"); // abre en nueva pestaña
                }}>
              <img
                key={newIndex ?? index}
                src={projects[newIndex ?? index].image || "/logo512.png"}
                
                alt="Proyecto central"
                className={`absolute w-full h-full object-cover
                                
                  rounded-lg ${
                  newIndex !== null
                    ? direction === "next"
                      ? "animate-slideInRight"
                      : "animate-slideInLeft"
                    : ""
                }`}
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-pricture-light dark:bg-primary-dark 
                            mix-blend-multiply transition-opacity duration-300 ease-in-out rounded-lg
                            ${isAnimating ? "opacity-0" : "opacity-100 hover:opacity-0"}`}
              ></div>

            </div>

            

            {/* Imagen siguiente */}
            <div
              className="w-20 h-40 overflow-hidden opacity-40 blur-sm cursor-pointer
                        transform transition-transform duration-300 ease-out hover:scale-105  "
              onClick={next}
            >
              <img
                src={projects[nextIndex].image || "/logo512.png"}
                alt="Proyecto siguiente"
                className="rounded-lg object-cover w-full h-full"
              />

              
            </div>

            
          </div>

          {/* Descripción */}
          <div className=" font-main relative  text-justify mt-6 px-6 py-4 min-h-[100px] ">
            <p
              className={`text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded-lg py-3 px-3 transition-all duration-500 ease-in-out ${
                isAnimating
                  ? "opacity-0 translate-y-2"
                  : "opacity-100 translate-y-0"
              }`}
            >
              {projects[index].desc}
            </p>
          </div>

          {/* Tecnologías */}
          <div className="font-main flex justify-center gap-4 pt-2">
            <ul className="flex flex-wrap gap-4 min-h-[30px]">
              {projects[index].tech.map((technology, i) => (
                <li
                  key={i}
                  className={`px-3 py-1 text-primary-light dark:text-primary-dark font-medium transition-all duration-500 ease-in-out ${
                    isAnimating
                      ? "opacity-0 translate-y-2"
                      : "opacity-100 translate-y-0"
                  }`}
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}