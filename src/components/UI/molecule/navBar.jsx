import React from "react";
import Button from "../atom/button";
import './navBar.css';

const handleClick = () => {
    console.log('hello1');
  }
  
  const handleClick2 = () => {
    console.log('hello2');
  }

export const Navbar = () => {
    return ( <nav className="navBarStyle">
        <ul className="navBarButtons">
            <Button btnVariant={'pink'} btnText={"button1"} onClick={() => handleClick2()}/>
            <Button btnVariant={'blue'} btnText={"button2"} onClick={() => handleClick()}/>
        </ul>
        
    </nav>)
}

export default Navbar;