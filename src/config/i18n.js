import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';


const resources = {
    en: {
        translation :{
            nav:{
                aboutMe: "01. About",
                projects: "02. Projects",
                contactMe: "03. Contact"
                
            },
            hero:{
                hello: "Hello, my name is",
                heroP1:"I am passionate about creating innovative digital experiences and learning something new every day.",
                heroS1:"Computer Engineering",
                heroP2:" student, always ready for new challenges",
                CV:"View my CV"
            },
            about:{
                Titulo1:"About me",
                "p1": {
                "greeting": "Hello, I am",
                "name": "Raúl Hoyos,",
                "degreeIntro": "a student of",
                "degree": "Computer Engineering",
                "uni": "at the Polytechnic University of Valencia",
                "uniAbbrev": "(UPV).",
                "specialization": "I specialize in Software Engineering, with a main focus on frontend development, while also having experience in backend." 
                },
                "p2": {
                "current": "Currently, ",
                "working": "I am working on my Final Degree Project",
                "description": "This project allows me to apply my knowledge in software design, architecture, and full-stack development, consolidating my skills in real environments."
                },
                "p3": {
                "personality": "I consider myself",
                "traits": "proactive, adaptable, and curious,",
                "interests": "with a great interest in continuing to learn and exploring new technologies. I enjoy both frontend and backend development, always seeking to write clean, maintainable, and sustainable code, and I adapt easily to different teams and work contexts."
                }
            },
            skills:{
                mySkills:"Some of the skills I have developed over the years are:",
                languages:"Languages",
                frontend: "Frontend",
                backend: "Backend",
                otros:"Others"
            },
            project:{
                Titulo2:"My projects",
                Project1:"IntelliReserve is a web-based booking platform that enables customers to schedule appointments for various business services and receive personalized AI-driven recommendations. Businesses can manage services, set availability, handle appointments, and track performance analytics. The platform streamlines booking management, ensuring efficient and seamless interaction between customers and businesses.",
                Project2:"This web application helps users organize their personal agenda by managing contacts and events in a calendar. Users can create an account to securely access their information, add or edit contacts with details and optional images, and schedule events with title, description, date, time, and category. Events can be linked to contacts and are displayed in an intuitive monthly calendar view for easy planning.",
                Project3:"Mobile app for buying and selling ecologic products, with distinct roles for buyers and sellers. Buyers can filter products, add them to a cart, and place simulated orders, while sellers manage products and indicate their ecologic certification level. Includes a simulated shipping system with multiple order statuses.",
                Project4:"JavaFX-based Tennis Club Management application enabling real-time court bookings. Features include user registration and login, reservation management, court and time slot selection, and personal data updates. The intuitive interface allows users to view, simulate payments for, or cancel reservations efficiently."

            },
            contact:{
                Titulo3:"Contact me",
                ContactP1:"I am currently looking for new opportunities, especially an internship with a company that will give me the chance to showcase my skills and continue learning. If you have any questions or just want to say hello, I would be happy to connect with you."

            },
            built:{
                builtP1:"Website created by Raúl Hoyos",
                builtP2:"Design inspired by Brittany Chiang"
            }
        }
    },
    es:{
        translation:{
            nav:{
                aboutMe: "01. Sobre mi",
                projects: "02. Proyectos",
                contactMe: "03. Contacto"
            },
            hero:{
                hello: "Hola, mi nombre es",
                heroP1:"Soy un apasionado de crear experiencias digitales innovadoras y aprender cada día.",
                heroS1:"Ingeniero Informático",
                heroP2:"en formación, siempre listo para nuevos desafíos.",
                CV:"Ver mi CV"
            },
            about:{
                Titulo1:"Sobre mí",
                "p1": {
                "greeting": "Hola, soy",
                "name": "Raúl Hoyos,",
                "degreeIntro": "estudiante de",
                "degree": "Ingeniería Informática",
                "uni": "en la Universidad Politécnica de Valencia",
                "uniAbbrev": "(UPV).",
                "specialization":" Especializado en ingeniería de software, con un enfoque principal en el desarrollo frontend, aunque también tengo experiencia en backend."
                },
                "p2": {
                "current": "Actualmente",
                "working": "estoy trabajando en mi Trabajo de Fin de Grado.",
                "description": " Este proyecto me está permitiendo aplicar mis conocimientos en diseño de software, arquitectura y desarrollo full-stack, además de consolidar mis habilidades en entornos reales."
                },
                "p3": {
                "personality": "Me considero una persona",
                "traits": "proactiva, adaptable y curiosa,",
                "interests": "con gran interés en seguir aprendiendo y explorando nuevas tecnologías. Disfruto del desarrollo frontend y backend, buscando siempre crear código limpio, mantenible y sostenible, y me adapto con facilidad a diferentes equipos y contextos de trabajo."
                }
                
            },
            skills:{
                mySkills:" Algunas de las habilidades que he ido desarrollando estos años son:",
                languages:"Lenguajes",
                frontend: "Frontend",
                backend: "Backend",
                otros:"Otros"
            },
            project:{
                Titulo2:"Mis proyectos",
                Project1:"IntelliReserve es una plataforma web de reservas que permite a los clientes solicitar citas para distintos servicios de empresas y recibir recomendaciones personalizadas mediante un pequeño sistema de IA. Las empresas pueden crear y gestionar sus servicios, definir horarios disponibles, administrar citas y visualizar estadísticas. La plataforma centraliza toda la gestión de reservas y facilita la interacción entre clientes y negocios de manera eficiente.",
                Project2:"Aplicación web para gestionar contactos y eventos en un calendario personal. Los usuarios pueden crear una cuenta, iniciar sesión y administrar su información. Permite añadir, editar y eliminar contactos con datos básicos e imagen opcional. Los eventos incluyen título, descripción, fecha, hora, categoría y se pueden vincular a contactos, mostrándose en una vista mensual de calendario.",
                Project3:"Aplicación móvil de compra-venta de productos ecológicos que distingue entre compradores y vendedores. Los compradores pueden filtrar productos por categorías, añadirlos al carrito y realizar pedidos simulados. Los vendedores gestionan sus productos indicando su nivel ecológico. Incluye un sistema ficticio de envío con distintos estados de pedido.",
                Project4:"Aplicación de gestión de un polideportivo de tenis desarrollada en JavaFX, que permite la reserva de pistas en tiempo real. Incluye inicio de sesión y registro de usuarios, visualización y gestión de reservas, selección de pistas y horarios disponibles, así como actualización de datos personales. Ofrece una interfaz intuitiva para consultar, pagar de forma simulada o eliminar reservas, optimizando la experiencia del usuario."

            },
            contact:{
                Titulo3:"Contáctame",
                ContactP1:"Actualmente estoy buscando nuevas oportunidades, en especial unas prácticas en una empresa que me permitan demostrar mis habilidades y seguir aprendiendo. Si tienes alguna pregunta o simplemente quieres saludarme, estaré encantado de conectar contigo."

            },
            built:{
                builtP1:"Página construida por Raúl Hoyos",
                builtP2:"Diseño inspirado en Brittany Chiang"
            }
        }
    }
}

i18next
  .use(initReactI18next)
  .init({
    resources,       // las traducciones
    lng: 'es',       // idioma por defecto
    fallbackLng: 'en', // si falta traducción, usar inglés
    interpolation: {
      escapeValue: false, // React ya hace escape, no hace falta
    },
  });

export default i18next;
