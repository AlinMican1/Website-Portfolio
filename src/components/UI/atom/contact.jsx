import React from 'react'
import './contact.css'
import { FaEnvelope } from 'react-icons/fa'
import Reveal from './animations/reveal'
const Contact = () => {
  return (
    <div className='container-box'>
        
        <h1> 
            <Reveal>
                Contact<span>.</span> 
            </Reveal> 
            </h1>
            
        <div className='paragraph'> <Reveal> Shoot me an email if you want to connect! You can also find me on  <a href="https://www.linkedin.com/in/alinmican" target="_blank" rel="noopener noreferrer" >Linkedin </a>  
            <br /> or  an email if that's more your speed.
            </Reveal>
        </div>
        <div className='email'>
            <Reveal>
            <FaEnvelope/><p>alinmican2001@gmail.com</p>
            </Reveal> 
        </div>
    </div>
  )
}

export default Contact