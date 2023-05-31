import './App.css';
import NavBar from './components/UI/organism/navBar';
import LaserTag from './components/UI/atom/animations/laserTag';
import IntroHeader from './components/UI/atom/animations/introHeader';
import React from 'react';



class App extends React.Component {

  render() {
    return (
      <div className="App">
        
        <IntroHeader />
        <NavBar />
        
      </div>
    );
  }
}

export default App;

