import AMD from "../assets/projectAMD.png"
import MoviePop from "../assets/moviePop.png"
import HeroTeam from "../assets/heroTeam.png"
import AppleRoll from "../assets/appleROLLTECH.png"

export const projectAMD =
{
    title: "Proyecto AMD",
    description: "Proyecto realizado en el curso de Rolling Code School en donde se realizó la página únicamente con HTML, CSS y Bootstrap. La misma tiene un navbar en donde se encuentran los links para poder visitar cada sección de la singlepage, además se utilizaron diferentes modales para poder mostrar más información. Se realizó pensando en que sea responsiva a los diferentes tamaños de pantalla.",
    image: `${AMD}`,
    technologies: ["HTML", "CSS", "BOOTSTRAP"],
    demoPage: "https://agustingu20.github.io/Trabajo-individual-amd/"
}

export const projectMoviePop =
{
    title: "Proyecto Movie Pop",
    description: "Proyecto realizado para la presentación de un desafío para el ingreso de una empresa tucumana. En el mismo se solicitaba desarrollar una aplicación en ReactJS que muestre la información de películas/series obtenidas desde la api TV MAZE API. Además se puede realizar el registro de nuevos usuarios y seleccionar películas/series como favoritos, que se muestran en una tabla. El usuario administrador puede ver el listado de los usuarios registrados y borrarlos si es que quiere. Los requerimientos del mismo pueden verse en el readme del repositorio en github. El backend fue realizado mediante NodeJS y MongoDB. La aplicación es responsiva a los diferentes tamaños de pantalla.",
    image: `${MoviePop}`,
    technologies: ["HTML", "CSS", "BOOTSTRAP", "REACTJS", "REACT-BOOTSTRAP", "REDUX", "REACT-ROUTER-DOM", "SWEETALERTS", "NODEJS", "MONGODB"],
    demoPage: "https://desafio-sitenso.vercel.app/"
}

export const projectHeroTeam =
{
    title: "Proyecto Hero Team",
    description: "Proyecto realizado para el ingreso al acelerado en ReactJS de la empresa Alkemy. Se debía desarrollar una aplicación en donde se puedan buscar héroes o villanos para formar un equipo de 6 integrantes, además se deben mostrar las estadísticas individuales de los integrantes del equipo y las estadísticas globales del mismo. La aplicación es responsiva a los diferentes tamaños de los dispositivos.",
    image: `${HeroTeam}`,
    technologies: ["HTML", "CSS", "BOOTSTRAP", "REACTJS", "REACT-BOOTSTRAP", "REDUX", "REACT-ROUTER-DOM", "SWEETALERTS", "FORMIK"],
}

export const projectAppleRollTech =
{
    title: "Proyecto Apple Roll Tech",
    description: "Proyecto final para el curso de programador web fullstack de Rolling Code School. Se debía realizar la aplicación de un e-commerce tanto el front como el back. En el front se debía tener una pantalla principal en donde se muestren los diferentes productos, se debía realizar registro y login de usuarios, un carrito en donde se pueda simular la compra de un producto. También se debía tener una sección de administrador en donde se pueda ingresar nuevos productos, bloquear o eliminar usuarios y poder visualizar los nuevos mensajes. La aplicación se realizó responsiva para los diferentes dispositivos.",
    image: `${AppleRoll}`,
    technologies: ["HTML", "CSS", "BOOTSTRAP", "REACTJS", "REACT-BOOTSTRAP", "REACT-ROUTER-DOM", "SWEETALERTS", "NODEJS", "MONGODB"],
    demoPage: "https://proyecto-final-rolling-code.vercel.app/"
}