import React from 'react';
import './gifAnimation.css';
import PropTypes from 'prop-types';
import Lottie from 'lottie-react';
import programming from './Programing.json';

const style = {
  height: 500,
  width: 500,
  
};

export const GifAnimation = () => {
    return (
        <div className='gif-wrapper'>
          <div className='gif-content'>
              <Lottie className='gif-wrapper' style={style} animationData={programming}/>
              </div>
        </div>
        
       
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