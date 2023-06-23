import React from 'react';
import './aboutMe.css';
import {motion} from 'framer-motion';
import Reveal from '../atom/animations/reveal';
import BlobImage from '../atom/animations/blobImage';



export const AboutMe = () => {

  return (
    <div className='all'>
    <div className='container' >
      <div  className='title'>
        <Reveal>
        <h1>About<span>.</span></h1>
        </Reveal>
        
      </div>
      
      <div className='content' >
        
        <div className='article'>
        <Reveal>
          <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatem obcaecati et</h2>
          </Reveal>
          <Reveal>
          <p>I'm Bob, if you haven't already gathered that by now. I'm a painter turned software engineer from Daytona, Florida. I specialize in the backend, primarily Node and Rust, but love building with whatever tools are right for the job.
            I currently work for Google on Google Photos. I also toss in my ¢2 with the design systems teams from time to time (once an artist, always an artist, amirite?).<br/>
            Outside of work, I still love to paint. Any given Sunday you'll find me scribbling some happy clouds with my son ☁️ I even teach courses online if you're looking to learn!
            I'm passively looking for new positions where I can merge my love for code with my love for the canvas. If you think you've got an opening that I might like, let's connect</p>
          </Reveal>   
        </div>
        
        <div className='image-section'>
          <BlobImage />
  
        </div>
        
      </div>
    </div>
    </div>
    
  )
};

export default AboutMe;