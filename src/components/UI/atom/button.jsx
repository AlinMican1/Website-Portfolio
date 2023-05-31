import React from 'react';
import './button.css';
import PropTypes, { any } from 'prop-types';


export const Button = ({btnText,btnVariant, onClick, btnIcon}) => {
  return ( <button className={btnVariant} onClick = {onClick} >
    {btnIcon}
    {btnText}
    
  </button>)

};
Button.propTypes = {
  btnText: PropTypes.string,
  btnVariant: PropTypes.oneOf(['custom-btn btn-1','custom-btn btn-2','custom-btn btn-3','custom-btn btn-4','custom-btn btn-5',
  'custom-btn btn-6','custom-btn btn-7','custom-btn btn-8','custom-btn btn-9','custom-btn btn-10','custom-btn btn-11','custom-btn btn-12',
  'custom-btn btn-13','custom-btn btn-14','custom-btn btn-15','custom-btn btn-16', 'icon-black', 'icon-pink']),
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

