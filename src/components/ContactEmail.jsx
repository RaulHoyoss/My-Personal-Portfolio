import React from 'react'

function ContactEmail({ className ="" ,vertical = false}) {
  return (
    <div
        className={`${vertical ? 'flex flex-col items-center space-y-4' : 
                               'flex gap-6 justify-center'} text-text-light dark:text-text-dark pt-8 ${className}`}
    >

        <a
            href='mailto:raulhzmgl@gmail.com'
            className={`font-main hover:text-primary-light dark:hover:text-primary-dark cursor-pointer transform transition-transform duration-300 hover:scale-105 
                        ${vertical ? "[writing-mode:vertical-rl]" : ""}`}
        >
            raulhmgl@gmail.com 
        </a>

        {vertical && <div className="w-[1px] h-24 bg-current opacity-60 mt-2"></div>}

    </div>
  )
}

export default ContactEmail