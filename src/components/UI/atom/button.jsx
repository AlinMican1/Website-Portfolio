import React from 'react';
import './button.css';
import PropTypes from 'prop-types';


export const Button = ({btnText,btnVariant, onClick, btnIcon}) => {
  return ( <button className={btnVariant} onClick = {onClick}>
    {btnIcon}
    {btnText}
    
  </button>)

};
Button.propTypes = {
  btnText: PropTypes.string,
  btnVariant: PropTypes.oneOf(['pink', 'blue', 'black']),
  btnIcon: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  btnText: "helloWorld",
  btnVariant: 'blue',
  onClick: undefined,
  btnIcon: null,
};

export default Button;

