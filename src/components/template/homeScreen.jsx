import "./homeScreen.css"
import Navbar from '../UI/organism/navBar';
import ParticlesBackground from '../UI/atom/animations/particles';
import CustomTitle from '../UI/atom/animations/customTitle';

export const HomeScreen = ({aboutRef,homeRef,skillsRef,projectsRef, contactRef,scroll}) => {
    return (
        <div>
            
            <CustomTitle/>
            <Navbar aboutRef={aboutRef} homeRef={homeRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} scroll={scroll} />
            <div className='particle'>
                <ParticlesBackground/>
            </div>

      </div>
    
  )
  };

  export default HomeScreen;