import React from 'react';
import './aboutMe.css';
import {motion} from 'framer-motion';
import Reveal from '../atom/animations/reveal';
import BlobImage from '../atom/animations/blobImage';
import Button from '../atom/button';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa';
import CV from "../../../assets/AlinMicanCV.pdf"


export const AboutMe = () => {

  return (
    <div className='all'>

      
    <div className='container' >
      <div  className='title'>
        <Reveal>
        <h1>About<span>.</span>
          
        </h1>
        </Reveal>
        
      </div>
      
      <div className='content' >
      
        <div className='article'>
        <Reveal>
          
          <h2>“He who conquers himself is the mightiest warrior.” - Confucius </h2>
          </Reveal>
          <Reveal>
          <p>
            Hello and welcome to my personal website! I'm Alin, a recent Computer Science graduate who's incredibly passionate about 
            technology and its limitless possibilities. I'm excited to share my journey, experiences, and knowledge with you, working 
            with different technologies to aid me in developing websites, games and softwares.
          </p>
          </Reveal>
          <Reveal>
          <p>
            During my leisure, I indulge in the creation of video game simulations, stemming from a childhood passion for gaming. Presently, 
            I harness my expertise to craft and experiment with diverse game mechanics in Unity simulations. 
            I have acquired vital insights into efficient game development techniques which 
            include leveraging occlusion culling, object pooling, and de-spawning mechanisms to optimize memory utilization. 
            Additionally, I have recognized the paramount significance of time/space complexity algorithms in achieving streamlined performance.
             
          </p>

          <p>
          My recent passion lies in crafting websites, seamlessly integrating frontend and backend components with diverse APIs. 
          This enables the development of robust and feature-rich websites. Furthermore, my exploration of machine 
          learning has revealed its potential to revolutionize our daily lives, 
          providing intriguing insights into the transformative impact of intelligent machines.
        
          </p>
          </Reveal>
          
          
          <div>
            <span className='links'> <Reveal>My Links <span>&gt;</span>  </Reveal>
              <span className='links-container'>
                <a href="https://github.com/AlinMican1" target="_blank" rel="noopener noreferrer" >
                  <Reveal>
                <Button btnVariant={'links-site'} btnIcon={<FaGithub></FaGithub>}  />
                </Reveal>
                </a>
                <a href="https://www.linkedin.com/in/alinmican" target="_blank" rel="noopener noreferrer" >
                <Reveal>
                <Button btnVariant={'links-site'} btnIcon={<FaLinkedin></FaLinkedin>} />
                </Reveal>
                </a>
                
              </span>
          
          </span> 
          </div>
          
        </div>
 
 
        <div className='image-section'>
        
          <BlobImage />
          
          <div className='under-image'>
            <Reveal>
              <a href={CV} target="_blank" rel="noopener noreferrer">
            <Button btnVariant={'custom-button-3'} btnText={"My Resume."} />
            </a>
            </Reveal>
          </div>
           
        </div>
  
        
      </div>
    </div>
    </div>
    
  )
};

export default AboutMe;