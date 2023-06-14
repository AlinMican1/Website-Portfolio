import React, { useState } from "react";
import Button from "../atom/button";
import { FaBars } from 'react-icons/fa';
import "./dropNavBar.css";


export const DropNavbar = ({aboutRef,homeRef,scroll}) => {
  
    return ( <nav className="dropNavBar-dropdown">
            <div className="dropNavBar-menu">
            <Button btnVariant={'custom-button'} btnText={"home"} onClick={() => scroll(homeRef)}/>
            <Button btnVariant={'custom-button'} btnText={"about"} onClick={() => scroll(aboutRef)}/>
            </div>
    </nav>)
    
}

export default DropNavbar;