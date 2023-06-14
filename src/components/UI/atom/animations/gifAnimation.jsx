import React, {useEffect} from 'react';
import './gifAnimation.css';
import Lottie from 'lottie-react';
import programming from './Programing.json';
import { useWindowSize } from '../../../../custom-hooks/SizeScreen-hook';


export const GifAnimation = () => {
  

  
    return (
          <Lottie className='gif-wrapper' animationData={programming}/>
       
        
       
  )
};
/*GifAnimation.propTypes = {
    gifUrl: PropTypes.string,
    author: PropTypes.string
  };
  
  GifAnimation.defaultProps = {
    quote: "Quote",
    author: "Author"
  };*/
  
  
  export default GifAnimation;