import './App.css';
import React from 'react';
import ParticlesBackground from './components/UI/atom/animations/particles';
import HomeScreen from './components/template/homeScreen';
import AboutScreen from './components/template/aboutScreen';
import { useRef } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { SkillsScreen } from './components/template/skillsScreen';

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
  const homeSection = useRef(null)
  const skillsRef = useRef(null)

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
          <HomeScreen aboutRef={aboutSection} homeRef={homeSection} skillsRef={skillsRef} scroll={scrollToSection}/>
      </div>
      <div ref={aboutSection} className = "Section" id='about'>
         <AboutScreen/>
      </div>
      <div ref={skillsRef} className="Section" id="skill">
          <SkillsScreen />
      </div>
  </div>
    
  );
};

export default App;

