import { Routes, Route } from 'react-router-dom';
import './App.css';
import Education from './components/Education';
import Footer from './components/Footer';
import NavBar from "./components/NavBar"
import PersonalPresentation from './components/PersonalPresentation';
import Portfolio from "./components/Portfolio"
import ProyectoAMD from './components/ProyectoAMD';
import ProyectoAppleRollTech from './components/ProyectoAppleRollTech';
import ProyectoHeroTeam from './components/ProyectoHeroTeam';
import ProyectoMoviePop from './components/ProyectoMoviePop';
import { projectAMD, projectMoviePop, projectHeroTeam, projectAppleRollTech } from './helpers/projectsDescription';
import { personalInfo, icons } from "./helpers/personalInfo"
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <div className="App">
      <NavBar key="navbar" />
      <Routes>
        <Route path="/" element={<PersonalPresentation key="personalPresentation" personalInfo={personalInfo} icons={icons} />} />
        <Route path="portfolio" exact element={<Portfolio key="portfolio" />} />
        <Route path="resume" exact element={<Education />} />
        <Route path="portfolio/amd" exact element={<ProyectoAMD projectAMD={projectAMD} />} />
        <Route path="portfolio/moviepop" exact element={<ProyectoMoviePop projectMoviePop={projectMoviePop} />} />
        <Route path="portfolio/heroteam" exact element={<ProyectoHeroTeam projectHeroTeam={projectHeroTeam} />} />
        <Route path="portfolio/applerolltech" exact element={<ProyectoAppleRollTech projectAppleRollTech={projectAppleRollTech} />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;
