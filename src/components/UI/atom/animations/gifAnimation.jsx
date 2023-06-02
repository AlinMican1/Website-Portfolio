import React from 'react';
import './gifAnimation.css';
import PropTypes from 'prop-types';

export const GifAnimation = ({gifUrl}) => {
    return (
        <body className="gif-wrapper" >
            background-image:url({gifUrl})
            
        </body>
  )
};
GifAnimation.propTypes = {
    gifUrl: PropTypes.string,
    author: PropTypes.string
  };
  
  GifAnimation.defaultProps = {
    quote: "Quote",
    author: "Author"
  };
  
  
  export default GifAnimation;