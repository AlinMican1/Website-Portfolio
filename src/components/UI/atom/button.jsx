import React from 'react';
import './button.css';
import PropTypes, { any } from 'prop-types';


export const Button = ({btnText,btnVariant, onClick, btnIcon}) => {
  return ( <button className={btnVariant} onClick = {onClick}>
    {btnIcon}
    {btnText}
    
  </button>)

};
Button.propTypes = {
  btnText: PropTypes.string,
  btnVariant: PropTypes.oneOf(['pink', 'blue', 'black','white', 'icon-pink', 'icon-black']),
  btnIcon: any,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  btnText: null,
  btnVariant: 'white',
  onClick: undefined,
  btnIcon: null,
};

export default Button;

