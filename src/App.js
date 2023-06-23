import './App.css';
import React from 'react';
import ParticlesBackground from './components/UI/atom/animations/particles';
import HomeScreen from './components/template/homeScreen';
import AboutScreen from './components/template/aboutScreen';
import { useRef } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { SkillsScreen } from './components/template/skillsScreen';
import { ProjectsScreen } from './components/template/projectScreen';
import Contact from './components/UI/atom/contact';
smoothscroll.polyfill();
/*class App extends React.Component {
  render() {
    
    return (
      
      <div className='App'>
        <div className='particle'>
          <ParticlesBackground />
        </div>
        
        <div className = "Section" id='home'>
            <HomeScreen />
        </div>
        <div className = "Section" id='about'>
            <AboutScreen />
            <div className='box'></div>
        </div>
    </div>
      
    );
  }
}*/

const App = () =>{
  const aboutSection = useRef(null);
  const homeSection = useRef(null);
  const skillsSection = useRef(null);
  const projectsSection = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    })
  } 
  
  return (
    
    <div className='App'>
      
      <div className='particle'>
        <ParticlesBackground />
      </div>
      <div ref={homeSection} className = "Section" id='home'>
          <HomeScreen aboutRef={aboutSection} homeRef={homeSection} skillsRef={skillsSection}  projectsRef={projectsSection } scroll={scrollToSection}/>
      </div>
      <div ref={aboutSection} className = "Section" id='about'>
         <AboutScreen/>
      </div>
      <div ref={skillsSection} className="Section" id="skill">
          <SkillsScreen />
          
      </div>
      <div ref={projectsSection} className="Section" id="projects">
          <ProjectsScreen />
          
      </div>

      <div ref={projectsSection} className="Section" id="contact">
          <Contact />
          
      </div>
      
      
  </div>
  
    
  );
};

export default App;

