import "./homeScreen.css"
import Navbar from '../UI/organism/navBar';
import ParticlesBackground from '../UI/atom/animations/particles';
import CustomTitle from '../UI/atom/animations/customTitle';

export const HomeScreen = ({aboutRef,homeRef,scroll}) => {
    return (
        <div>
            
            <CustomTitle/>
            <Navbar aboutRef={aboutRef} homeRef={homeRef} scroll={scroll} />
            
      </div>
    
  )
  };

  export default HomeScreen;