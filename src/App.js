import './App.css';
import NavBar from './components/UI/organism/navBar';
import IntroHeader from './components/UI/atom/animations/introHeader';
import React from 'react';
import CustomTitle from './components/UI/atom/animations/customTitle';
import QuoteText from './components/UI/atom/animations/quoteText';
import GifAnimation from './components/UI/atom/animations/gifAnimation';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <CustomTitle />
        <GifAnimation/>
        
        
        
      </div>
      
      
    );
  }
}

export default App;

