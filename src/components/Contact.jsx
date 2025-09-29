import React from "react"
import ContactEmail from "./ContactEmail"
import ContactIcons from "./ContactIcons"
import { useTranslation } from "react-i18next"
import { FaPaperPlane } from 'react-icons/fa';


function Contact() {
  const { t } = useTranslation()

  return (
    <section
      id="Contact"
      className="bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark flex flex-col justify-start items-start px-12 md:px-40 pt-16 md:pt-20 lg:pt-24"
    >
      <div className="max-w-5xl mx-auto">
        {/* Título */}
        <div className="flex items-center w-full mb-8">
          <span className="text-primary-light dark:text-primary-dark  font-mono mr-4">
            <FaPaperPlane size={24}></FaPaperPlane>
          </span>
          <h1 className="text-3xl md:text-4xl font-bold font-NavBar mr-6">
            {t("contact.Titulo3")}
          </h1>
          <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700"></div>
        </div>

        {/* Contenido */}
        <div className="sm:pl-8 sm:pr-8 lg:pl-8 lg:pr-8">
          <div className="text-lg space-y-4">
            <p className="font-main text-justify text-text-light dark:text-text-dark">
              {t("contact.ContactP1")}
            </p>
          </div>

          {/* Email (solo en móvil) */}
          <div className="flex justify-center mt-6 lg:hidden font-main ">
            <ContactEmail />
          </div>

          {/* Iconos (solo en móvil) */}
          <div className="flex justify-center mt-6 lg:hidden">
            <ContactIcons />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
