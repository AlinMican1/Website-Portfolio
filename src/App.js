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
        <GifAnimation gifUrl={"https://giphy.com/gifs/scaler-official-funny-cartoon-coding-HLB0nLA36GCCo6JuB5"} />
        <CustomTitle />
        <QuoteText quote={"He who conquers himself is the mightiest warrior."} author={"- Confucius "}  />
        <NavBar />
        
      </div>
      
      
    );
  }
}

export default App;

