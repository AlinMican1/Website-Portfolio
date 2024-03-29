import React, {useEffect, useState} from "react";
import Button from "../atom/button";
import './navBar.css';
import { FaBars } from 'react-icons/fa';
import DropNavbar from "../molecule/dropNavBar";
import { useWindowSize } from "../../../custom-hooks/SizeScreen-hook";
import { ScrollIndicator } from "../atom/scrollIndicator";
import { FaAddressBook } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";


/* Combining a drop down navigation bar with a normal navigation bar 
for responsiveness when the page is too small the user should be allowed 
to access a drop menu of buttons. */


export const Navbar = ({aboutRef,homeRef,skillsRef,projectsRef,contactRef,scroll}) => {
    const [openDropNav, setDropNav] = useState(false);
    const[width,height] = useWindowSize();
    useEffect(()=>{
        if(width >= 750){
            setDropNav(false);
        }
    },[width])

    return ( 
        
    <nav className="navBarStyle">
        
        <div className="logoContainer">
            
            <button className="logo" onClick={() => scroll(homeRef)} >
             <h2 className="logo-text">A<span>.</span></h2>
             </button>
             
        </div>
        <ScrollIndicator/>
        {/*<div className="navBarIcons">
            <Button btnVariant={'icon-pink'} btnIcon={<FaBars></FaBars>} onClick={() => setDropNav(!openDropNav)} />
            {openDropNav && <DropNavbar aboutRef={aboutRef} homeRef={homeRef} skillsRef={skillsRef} projectsRef={projectsRef} scroll={scroll} />}
    </div>*/}
        <div className="navBarIcons">
        <Button btnVariant={'icon-white'} btnIcon={<FaUser></FaUser>} onClick={() => scroll(aboutRef)} />
        <Button btnVariant={'icon-white'} btnIcon={<FaBook></FaBook>} onClick={() => scroll(skillsRef)}/>
        <Button btnVariant={'icon-white'} btnIcon={<FaProjectDiagram></FaProjectDiagram>} onClick={() => scroll(projectsRef)}/>
        <Button btnVariant={'icon-white'} btnIcon={<FaAddressBook></FaAddressBook>} onClick={() => scroll(contactRef)}/>
        </div>
        <ul className="navBarButtons">
            
            <Button btnVariant={'custom-button-2'} btnText={"About."} onClick={() => scroll(aboutRef)}/>
            <Button btnVariant={'custom-button-2'} btnText={"Skills."} onClick={() => scroll(skillsRef)}/>
            <Button btnVariant={'custom-button-2'} btnText={"Projects."} onClick={() => scroll(projectsRef)}/>
           
        </ul>
        
    </nav>
    
    )
}

export default Navbar;