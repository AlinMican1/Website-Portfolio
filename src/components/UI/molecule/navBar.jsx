import React from "react";
import Button from "../atom/button";
import './navBar.css';
import { FaBars } from 'react-icons/fa';


const handleClick = () => {
    console.log('hello1');
  }
  
  const handleClick2 = () => {
    console.log('hello2');
  }

  const clicked = () => {
    return true;
  }
  
export const Navbar = () => {
    return ( <nav className="navBarStyle">
        
        <div className = "navBarIcon">
            
           
        </div>
        <ul className="navBarButtons">
            <Button btnVariant={'pink'} btnText={"button1"} onClick={() => handleClick2()}/>
            <Button btnVariant={'blue'} btnText={"button2"} onClick={() => handleClick()}/>
        </ul>
        
    </nav>)
}
/*class navBar extends React.Component{
    state = {clicked:false};
    render(){
        return ( <nav className="navBarStyle">
        <div className = "navBarIcon">
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className="navBarButtons">
            <Button btnVariant={'pink'} btnText={"button1"} onClick={() => handleClick2()}/>
            <Button btnVariant={'blue'} btnText={"button2"} onClick={() => handleClick()}/>
        </ul>
        </nav>)
    }

}*/

export default Navbar;