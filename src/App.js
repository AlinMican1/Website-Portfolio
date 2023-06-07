import './App.css';
import NavBar from './components/UI/organism/navBar';
import IntroHeader from './components/UI/atom/animations/introHeader';
import React from 'react';
import CustomTitle from './components/UI/atom/animations/customTitle';
import QuoteText from './components/UI/atom/animations/quoteText';
import GifAnimation from './components/UI/atom/animations/gifAnimation';
import Modal1 from './components/UI/atom/modal1';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <CustomTitle />
        <Modal1/>
        
        
        
      </div>
      
      
    );
  }
}

export default App;

