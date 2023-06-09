import './App.css';
import React from 'react';
import ParticlesBackground from './components/UI/atom/animations/particles';
import HomeScreen from './components/template/homeScreen';
import AboutScreen from './components/template/aboutScreen';


class App extends React.Component {
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
}

export default App;

