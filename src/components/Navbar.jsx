import React, { useState, useEffect } from "react";
import BurgerButton from "./BurgerButton";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useTheme } from "../context/ThemeContext";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navbarVisible = open || show;
  const { darkMode, toggleDarkMode } = useTheme();

  const { t } = useTranslation();
  const [language, setLanguage] = useState(i18next.language || "es");

  const toggleLanguage = () => {
    const newLang = language === "es" ? "en" : "es";
    i18next.changeLanguage(newLang);
    setLanguage(newLang);
    setOpen(false);
  };

  const links = [
    { id: 1, type: "link", label: t("nav.aboutMe"), href: "#About" },
    { id: 2, type: "link", label: t("nav.projects"), href: "#Project" },
    { id: 3, type: "link", label: t("nav.contactMe"), href: "#Contact" },
    { id: 4, type: "lang" },
    { id: 5, type: "theme" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) setShow(false);
      else setShow(true);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`fixed font-NavBar  top-0 left-0 right-0 flex justify-between items-center px-8 py-4 transition-transform duration-300 z-50
          bg-bg-light text-text-light dark:bg-bg-dark dark:text-text-dark
          ${navbarVisible ? "translate-y-0 shadow-lg" : "-translate-y-full"}`}
      >
        <h2 className="text-2xl  font-mono ">
          RH <span className=" text-primary-light  dark:text-primary-dark font-normal">Portfolio</span>
        </h2>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 items-center">
          {links.map((link) => {
            if (link.type === "link")
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className="hover:text-primary-light dark:hover:text-primary-dark transition"
                >
                  {link.label}
                </a>
              );

            if (link.type === "lang")
              return (
                <button 
                key={link.id} 
                onClick={toggleLanguage} 
                className="flex items-center gap-2 ml-2
                             cursor-pointer transform transition-transform duration-300 hover:scale-110">
                  <img
                    src={language === "es" ? "/flags/spain.png" : "/flags/united-kingdom.png"}
                    alt={language}
                    className="w-8 h-8"
                  />
                </button>
              );

            if (link.type === "theme")
              return (
                <button
                  key={link.id}
                  onClick={toggleDarkMode}
                  className="ml-2 p-2 rounded    cursor-pointer transform 
                          transition-transform duration-300 hover:scale-110 "
                >
                  {darkMode ? <FaRegSun size={24} /> : <FaRegMoon size={24} />}
                </button>
              );

            return null;
          })}
        </div>

        
      </nav>

      {/* Burger button */}
        <div className="md:hidden fixed top-4 right-4 z-[999]">
          <BurgerButton open={open} setOpen={setOpen} />
        </div>

      {/* Overlay */}
      {open && <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setOpen(false)} />}

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 flex flex-col p-4 pt-32 space-y-8 transform transition-transform duration-300 md:hidden z-50
          bg-bg-light text-text-light dark:bg-bg-dark dark:text-text-dark ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {links.map((link) => {
          if (link.type === "link")
            return (
              <a
                key={link.id}
                href={link.href}
                className="text-center"
                onClick={() => setOpen(false)}
              >
                <span className="block text-primary-light dark:text-primary-dark text-2xl">
                  {link.label.split(" ")[0]}
                </span>
                <span className="block text-text-light dark:text-text-dark text-2xl pt-1 hover:text-primary-light dark:hover:text-primary-dark">
                  {link.label.split(" ").slice(1).join(" ")}
                </span>
              </a>
            );

          if (link.type === "lang")
            return (
              <button
                key={link.id}
                onClick={toggleLanguage}
                className="flex items-center justify-center gap-2 mx-auto mt-4 w-16 h-16
                           cursor-pointer transform 
                          transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={language === "es" ? "/flags/spain.png" : "/flags/united-kingdom.png"}
                  alt={language}
                  className="w-12 h-12"
                />
              </button>
            );

          if (link.type === "theme")
            return (
              <button
                key={link.id}
                onClick={toggleDarkMode}
                className="flex items-center justify-center gap-2 mx-auto mt-4 w-16 h-16
                           cursor-pointer transform 
                          transition-transform duration-300 hover:scale-110"
              >
                {darkMode ? <FaRegSun size={36} /> : <FaRegMoon size={36} />}
              </button>
            );

          return null;
        })}
      </div>
    </>
  );
}

export default Navbar;
