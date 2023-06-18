import React, {useEffect, useState} from "react";
import Button from "../atom/button";
import './navBar.css';
import { FaBars } from 'react-icons/fa';
import DropNavbar from "../molecule/dropNavBar";
import { useWindowSize } from "../../../custom-hooks/SizeScreen-hook";
import { ScrollIndicator } from "../atom/scrollIndicator";

/* Combining a drop down navigation bar with a normal navigation bar 
for responsiveness when the page is too small the user should be allowed 
to access a drop menu of buttons. */

const handleClick = () => {
    console.log('hello1');
  }

export const Navbar = ({aboutRef,homeRef,scroll}) => {
    const [openDropNav, setDropNav] = useState(false);
    const[width,height] = useWindowSize();
    useEffect(()=>{
        if(width >= 750){
            setDropNav(false);
        }
    },[width])

    return ( 
    <nav className="navBarStyle">
        
        
            <ScrollIndicator/>
        <div className="navBarIcons">
            <Button btnVariant={'icon-pink'} btnIcon={<FaBars></FaBars>} onClick={() => setDropNav(!openDropNav)} />
            {openDropNav && <DropNavbar aboutRef={aboutRef} homeRef={homeRef} scroll={scroll} />}
            
        </div>
        
        <ul className="navBarButtons">
            <Button btnVariant={'custom-button'} btnText={"about"} onClick={() => scroll(aboutRef)}/>
            <Button btnVariant={'custom-button'} btnText={"home"} onClick={() => scroll(homeRef)}/>
        </ul>
        
    </nav>
    
    )
}

export default Navbar;