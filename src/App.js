
import React, {useState, useEffect} from 'react';
import { ThemeProvider } from "./context/ThemeContext"
import './App.css';
import About from './components/About';
import Bulit from './components/Bulit';
import Contact from './components/Contact';
import ContactEmail from './components/ContactEmail';
import ContactIcons from './components/ContactIcons';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Loader from './components/Loader'
import './config/i18n';



function App() {

  const [loading, setLoading] = useState(true)

  useEffect( () =>{
    const timer = setTimeout(() =>{
      setLoading(false)
    }, 2000);

    return ()=> clearTimeout(timer)
  } ,[])
  

  return(
    <>

    <ThemeProvider>
      {loading && <Loader loading={loading} />}

      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'} bg-white dark:bg-gray-900`}>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />

        <ContactIcons
          vertical
          className='hidden lg:flex fixed bottom-0 left-16 '
        />
        <ContactEmail
          vertical
          className='hidden lg:flex fixed bottom-0 right-16'
        />
        <Bulit />
      </div>
    </ThemeProvider>
    
    </>
  )
}

export default App;
