import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa'

function ContactIcons({className = "", vertical = false}) {
  return (
    
    <div
      className={`${vertical ? 'flex flex-col items-center space-y-4' : 
                               'flex gap-6 justify-center'} text-text-light dark:text-text-dark pt-8 ${className}`}
    >
            <a href='https://github.com/RaulHoyoss'
             target='_blank'
             rel="noopener noreferrer"
             className='hover:text-primary-light dark:hover:text-primary-dark cursor-pointer
                        transform transition-transform duration-300 hover:scale-110'>
                <FaGithub size={32}></FaGithub>
            </a>

            <a href='https://www.linkedin.com/in/raul-hoyos-/'
             target='_blank'
             rel="noopener noreferrer"
             className='hover:text-primary-light dark:hover:text-primary-dark cursor-pointer
                        transform transition-transform duration-300 hover:scale-110'>
                <FaLinkedin size={32}></FaLinkedin>
            </a>

           
            {vertical && <div className="w-[1px] h-24 bg-current opacity-60 mt-2"></div>}
        </div>
  )
}

export default ContactIcons