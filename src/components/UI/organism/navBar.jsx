import React, {useState} from "react";
import Button from "../atom/button";
import './navBar.css';
import { FaBars } from 'react-icons/fa';
import DropNavbar from "../molecule/dropNavBar";

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

    return ( <nav className="navBarStyle">
        
        <div className="navBarIcons">
            <Button btnVariant={'icon-black'} btnIcon={<FaBars></FaBars>} onClick={() => setDropNav(!openDropNav)} />
            {openDropNav && <DropNavbar/>}
        </div>
        
        <ul className="navBarButtons">
            <Button btnVariant={'pink'} btnText={"button1"} onClick={() => handleClick2()}/>
            <Button btnVariant={'blue'} btnText={"button2"} onClick={() => handleClick()}/>
        </ul>
    </nav>)
}


export default Navbar;