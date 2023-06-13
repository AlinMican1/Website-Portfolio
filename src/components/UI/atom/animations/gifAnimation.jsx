import React, {useEffect} from 'react';
import './gifAnimation.css';
import PropTypes from 'prop-types';
import Lottie from 'lottie-react';
import programming from './Programing.json';
import { useWindowSize } from '../../../../custom-hooks/SizeScreen-hook';
import { useState } from 'react';


const style = {
  height: 650,
  width: 650,
  
};

export const GifAnimation = () => {
  
    return (
       
              <Lottie className='gif-wrapper' style={style} animationData={programming}/>
       
        
       
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