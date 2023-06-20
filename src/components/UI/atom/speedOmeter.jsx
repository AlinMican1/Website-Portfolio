import "./speedOmeter.css";
import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const SpeedOmeter = ({percent}) => {
        

    /*return (
       <div className="all">
            <div className="wrapper">
                <div className="skillMeter">
                    <div className ="outer">
                        <div className="inner">
                            <div id="number">
                                {percent}%
                            </div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="360px" height="360px">
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                    </linearGradient>
                </defs>
                <circle cx="130" cy="190" r="150" stroke-linecap="round" />
            </svg>
                </div>
            </div>
            
       </div> 
       
    )*/
    return(
        
    <div className="all">
        <div className="wrapper">
            <CircularProgressbar  value={percent} text={`${percent}%`} strokeWidth= {12}
             styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0.0,
            
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'round',
                
            
                // Text size
                textSize: '15px',
                
                
            
                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,
            
                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',
            
                // Colors
                pathColor: '#0aff9d',
                
                textColor: '#ffffff',
                trailColor: '#1d1f20',
                backgroundColor: '#3e98c7',})} />
        </div>
    </div>
    )
}
export default SpeedOmeter;