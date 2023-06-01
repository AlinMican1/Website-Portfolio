import './App.css';
import NavBar from './components/UI/organism/navBar';
import IntroHeader from './components/UI/atom/animations/introHeader';
import React from 'react';
import CustomTitle from './components/UI/atom/animations/customTitle';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CustomTitle />
        <NavBar />
        
      </div>
      
      
    );
  }
}

export default App;

