import React, { useState } from "react";
import Button from "../atom/button";
import { FaBars } from 'react-icons/fa';
import "./dropNavBar.css";

const handleClick = () => {
    console.log('hello1');
  }
  
  const handleClick2 = () => {
    console.log('hello2');
  }



export const DropNavbar = () => {
  
    return ( <nav className="dropNavBar-dropdown">
            <div className="dropNavBar-menu">
            <Button btnVariant={'custom-button'} btnText={"button1"} onClick={() => handleClick2()}/>
            <Button btnVariant={'custom-button'} btnText={"button2"} onClick={() => handleClick()}/>
            </div>
        
        
    </nav>)
    
}

export default DropNavbar;