/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {

        'bg-light': '#F0F4FA',       // gris claro más suave que el blanco puro
        'text-light': '#1f2937',     // gris oscuro para texto, no negro puro
        'primary-light': '#8b5cf6',  // morado vibrante
        'secondary-light': '#f59e0b', // naranja para acentos
        'shadow-light': '#8b5cf633', // morado con transparencia (~20%)
        'pricture-light' : '#A381F0',

        

        // Dark Mode
        'bg-dark': '#111827',  
        'text-dark': '#f9fafb',
        'primary-dark': '#14b8a6',
        'secondary-dark': '#facc15',
        'shadow-dark': '#14b8a699',
      },

      boxShadow: {
        'button-light': '0 8px 15px -4px #d751f5',
        'button-dark': '0 8px 15px -4px #14b8a699',
        
     },

      fontFamily: {
        NavBar: ["'Inter', sans-serif"],
         main: ['Poppins', 'sans-serif'], // texto normal
        heading: ["'Montserrat', sans-serif"],
      },
      keyframes: {
        slideInRight: {
          "0%": { transform: "translateX(100%) scale(0.8)", opacity: "0" },
          "100%": { transform: "translateX(0) scale(1)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%) scale(0.8)", opacity: "0" },
          "100%": { transform: "translateX(0) scale(1)", opacity: "1" },
        },
        slideOutRight: {
          "0%": { transform: "translateX(0) scale(1)", opacity: "1" },
          "100%": { transform: "translateX(100%) scale(0.8)", opacity: "0" },
        },
        slideOutLeft: {
          "0%": { transform: "translateX(0) scale(1)", opacity: "1" },
          "100%": { transform: "translateX(-100%) scale(0.8)", opacity: "0" },
        },
      },
      animation: {
        slideInRight: "slideInRight 0.5s ease-in-out",
        slideInLeft: "slideInLeft 0.5s ease-in-out",
        slideOutRight: "slideOutRight 0.5s ease-in-out",
        slideOutLeft: "slideOutLeft 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
    corePlugins : {
      scrollBehavior :true,
    }
};
