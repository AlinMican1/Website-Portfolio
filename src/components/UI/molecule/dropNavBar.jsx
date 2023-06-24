import React, { useState } from "react";
import Button from "../atom/button";
import "./dropNavBar.css";


export const DropNavbar = ({aboutRef,skillsRef,projectsRef,scroll}) => {
  
    return ( <nav className="dropNavBar-dropdown">
            <div className="dropNavBar-menu">
            <Button btnVariant={'custom-button-2'} btnText={"About."} onClick={() => scroll(aboutRef)}/>
            <Button btnVariant={'custom-button-2'} btnText={"Skills."} onClick={() => scroll(skillsRef)}/>
            <Button btnVariant={'custom-button-2'} btnText={"Projects."} onClick={() => scroll(projectsRef)}/>
            </div>
    </nav>)
    
}

export default DropNavbar;