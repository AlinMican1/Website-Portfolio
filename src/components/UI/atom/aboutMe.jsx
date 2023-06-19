import React from 'react';
import './aboutMe.css';
import GifAnimation from './animations/gifAnimation';
import {motion} from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';


export const AboutMe = () => {

  const{ref,inView} = useInView();
  const animation = useAnimation();
  
  
  useEffect(() =>{
      if(inView){
        
        animation.start({
          x: 0,
          transition:{
            type:'spring',duration:2,bounce:0
          }
        });
      
      }
      if(!inView){
        animation.start({x:'-100vw'})
      }
  },[inView])

  return (
    <div ref = {ref} className='all'>
    <motion.div className='container' animate={animation}>
      <div  className='title'>
        <h1>About Me</h1>
      </div>
      <div className='content'>
        <div className='article'>
          <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatem obcaecati et</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati facilis eligendi et omnis ipsum similique. 
            Alias itaque, ipsum perferendis saepe esse dicta tenetur autem obcaecati cupiditate nobis sed, nam consequatur!</p>
              
        </div>
        <div className='image-section'>
          <GifAnimation/>
          
        </div>
      </div>
    </motion.div>
    </div>
    
  )
};

export default AboutMe;