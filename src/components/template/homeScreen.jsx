import "./homeScreen.css"
import Navbar from '../UI/organism/navBar';
import ParticlesBackground from '../UI/atom/animations/particles';
import CustomTitle from '../UI/atom/animations/customTitle';

export const HomeScreen = () => {
    return (
        <div>
            
            <CustomTitle/>
            <Navbar/>
            <div className='particle'>
                <ParticlesBackground/>
            </div>

      </div>
    
  )
  };

  export default HomeScreen;