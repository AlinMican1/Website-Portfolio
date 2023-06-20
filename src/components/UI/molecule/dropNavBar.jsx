import React, { useState } from "react";
import Button from "../atom/button";
import "./dropNavBar.css";


export const DropNavbar = ({aboutRef,homeRef,skillsRef,scroll}) => {
  
    return ( <nav className="dropNavBar-dropdown">
            <div className="dropNavBar-menu">
            <Button btnVariant={'custom-button'} btnText={"home"} onClick={() => scroll(homeRef)}/>
            <Button btnVariant={'custom-button'} btnText={"about"} onClick={() => scroll(aboutRef)}/>
            <Button btnVariant={'custom-button'} btnText={"skills"} onClick={() => scroll(skillsRef)}/>
            </div>
    </nav>)
    
}

export default DropNavbar;