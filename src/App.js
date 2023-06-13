import './App.css';
import React from 'react';
import ParticlesBackground from './components/UI/atom/animations/particles';
import HomeScreen from './components/template/homeScreen';
import AboutScreen from './components/template/aboutScreen';
import { useRef } from 'react';
import AboutMe from './components/UI/atom/aboutMe';


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
          <HomeScreen aboutRef={aboutSection} homeRef={homeSection} scroll={scrollToSection}/>
      </div>
      <div ref={aboutSection} className = "Section" id='about'>
         <AboutScreen/>
          
          
      </div>
  </div>
    
  );
};

export default App;

