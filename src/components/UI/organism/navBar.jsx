import React, {useEffect, useState} from "react";
import Button from "../atom/button";
import './navBar.css';
import { FaBars } from 'react-icons/fa';
import DropNavbar from "../molecule/dropNavBar";
import { useWindowSize } from "../../../custom-hooks/SizeScreen-hook";

/* Combining a drop down navigation bar with a normal navigation bar 
for responsiveness when the page is too small the user should be allowed 
to access a drop menu of buttons. */

const handleClick = () => {
    console.log('hello1');
  }
  
  const handleClick2 = () => {
    console.log('hello2');
  }

export const Navbar = () => {
    const [openDropNav, setDropNav] = useState(false);
    const[width,height] = useWindowSize();
    useEffect(()=>{
        if(width >= 750){
            setDropNav(false);
        }
    },[width])
    return ( 
    <nav className="navBarStyle">
        <div className="line"></div>
        <div className="navBarIcons">
            <Button btnVariant={'icon-pink'} btnIcon={<FaBars></FaBars>} onClick={() => setDropNav(!openDropNav)} />
            {openDropNav && <DropNavbar/>}
            
        </div>
        
        <ul className="navBarButtons">
            <Button btnVariant={'custom-button'} btnText={"button1"} onClick={() => handleClick2()}/>
            <Button btnVariant={'custom-button'} btnText={"button2"} onClick={() => handleClick()}/>
        </ul>
        
    </nav>
    
    )
}


export default Navbar;