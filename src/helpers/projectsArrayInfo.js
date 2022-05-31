import amdImg from "../assets/projectAMD.png"
import moviePop from "../assets/moviePop.png"
import heroTeam from "../assets/heroTeam.png"
import appleROLLTECH from "../assets/appleROLLTECH.png"

export const projects = [
    {
        name: "amd",
        title: "Proyecto AMD",
        description: "Proyecto realizado en el curso de Rolling Code School en donde se realizó la página únicamente con HTML, CSS y Bootstrap. La misma se realizó pensando en que sea responsiva a los diferentes tamaños de pantalla.",
        image: `${amdImg}`,
        technology: ["HTML", "CSS", "BOOTSTRAP"],
        demoPage: "https://agustingu20.github.io/Trabajo-individual-amd/",
        github: "https://github.com/agustingu20/Trabajo-individual-amd"
    },
    {
        name: "moviepop",
        title: "Proyecto Movie Pop",
        description: "Proyecto realizado como desafío para una empresa tucumana de desarrollo de software. Se desarrollo el front con ReactJS y el back con NodeJS + MongoDB. Es responsiva para todos los tamaños de pantalla.",
        image: `${moviePop}`,
        technology: ["HTML", "CSS", "REACT-BOOTSTRAP", "REACTJS", "REDUX", "NODEJS", "MONGODB", "REACT-ROUTER-DOM", "SWEETALERTS"],
        demoPage: "https://desafio-sitenso.vercel.app/",
        github: "https://github.com/agustingu20/desafio-sitenso",
        githubBack: "https://github.com/agustingu20/desafio-sitenso-back"
    },
    {
        name: "heroteam",
        title: "Proyecto Héroe",
        description: "Proyecto realizado como desafío para Alkemy, empresa en la cual realicé un acelerado de 10 semanas en ReactJS. El proyecto se realizó de manera responsiva",
        image: `${heroTeam}`,
        technology: ["HTML", "CSS", "REACT-BOOTSTRAP", "REACTJS", "REDUX", "SWEETALERTS", "FORMIK", "REACT-ROUTER-DOM"],
        github: "https://github.com/agustingu20/challenge-react-alkemy-refactored"
    },
    {
        name: "applerolltech",
        title: "Proyecto E-commerce",
        description: "Proyecto final del curso de programador web realizado en Rolling Code School. Se realizó el front en ReactJS y el back en NodeJs + MongoDB. Es un proyecto de un e-commerce en donde se pueden observar los productos cargados por el/los admin, se puede realizar el registro de nuevos usuarios, cargar productos en el carrito y simular una compra completa de productos.",
        image: `${appleROLLTECH}`,
        technology: ["HTML", "CSS", "REACT-BOOTSTRAP", "REACTJS", "SWEETALERTS", "REACT-ROUTER-DOM", "NODEJS", "MONGODB"],
        demoPage: "https://proyecto-final-rolling-code.vercel.app/",
        github: "https://github.com/karo18delgado/Proyecto-Final-RollingCode",
        githubBack: "https://github.com/agustingu20/ProyectoFinalRolling-BackEnd"
    }
]
