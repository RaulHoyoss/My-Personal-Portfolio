import React, {useEffect, useState} from 'react'
import { FaStar  , FaCodeBranch  } from 'react-icons/fa'
import {  useTranslation } from 'react-i18next'


function Bulit() {

    const {t} = useTranslation()

    const [stars, setStars] = useState(0)
    const [forks, setForks] = useState(0)

    useEffect( () =>{

        fetch("https://api.github.com/repos/RaulHoyoss/desktop-tutorial")
        .then((res) => res.json())
        .then((data) => {
            setStars(data.stargazers_count)
            setForks(data.forks_count)
        })
        .catch( (error) =>{
            console.error("Error geting data from Github", error)
        })
    }, [])


  return (
    <section className='bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark pt-28 pb-4   '>
        <a
        href='https://github.com/RaulHoyoss/desktop-tutorial'
        target='_blank'
        rel='noopener noreferrer'
        className='font-main hover:text-primary-light dark:hover:text-primary-dark cursor-pointer '>
        <div className=' text-center'>
            <p> {t('built.builtP1')}</p>
        
            <div className='flex  justify-center space-x-4 mt-2'>
                <div className='flex items-center space-x-2'>
                    <FaStar   size={32}></FaStar  >
                <span>{stars}</span>
                </div>
                <div className='flex items-center space-x-2'>
                    <FaCodeBranch  size={32}></FaCodeBranch>
                <span>{forks}</span>
                </div>
                    
            </div>

        </div>
        </a>
        
        <a
        href='https://v4.brittanychiang.com/#about'
        target='_blank'
        rel='noopener noreferrer'
        className='font-main hover:text-primary-light dark:hover:text-primary-dark cursor-pointer '
            >
            <div className='text-center pt-4'>
            <p className='text-xs'>{t('built.builtP2')} </p>
        </div>
        </a>
        
    </section>
  )
}

export default Bulit