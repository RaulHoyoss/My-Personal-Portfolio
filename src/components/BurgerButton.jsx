import React, {} from 'react'

function BurgerButton({open , setOpen}) {
  
  
    return (
      <button
        className="flex flex-col justify-center items-center w-10 h-10 space-y-1 group"
        onClick={() => setOpen(!open)}
      >
        <span
          className={`block h-1 w-8 bg-primary-light dark:bg-primary-dark rounded transform transition duration-300 ${
            open ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block h-1 w-8 bg-primary-light dark:bg-primary-dark rounded transform transition-opacity duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-1 w-8 bg-primary-light dark:bg-primary-dark rounded transform transition duration-300 ${
            open ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>
  
    )
  }


export default BurgerButton