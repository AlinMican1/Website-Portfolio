import "./projectCard.css"
import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import Button from "./button";
import Reveal from "./animations/reveal";

export const ProjectCard = (props) => {
        
    return(
       
        <div className="project-card">
            <img src={props.imgsrc} alt="image" />
                
                <h2 className="project-title">
                    <Reveal>
                    {props.title}<span>.</span>
                    </Reveal>
                    </h2>
                    
                    <a href={props.view} target="_blank" rel="noopener noreferrer" >
                        
                        <Button  btnVariant={"github-project"} btnIcon={<FaGithub></FaGithub>} >
                        
                        </Button>
                        
                        
                    </a>
                    
                <h3 className="project-type">
                    <Reveal>
                    {props.type}
                    </Reveal>
                    </h3>
                
                <div className="pro-details">
                    <p>
                        <Reveal>
                        {props.text}
                        </Reveal>
                        </p>
                <div className="pro-btn">
                    
                    <a href={props.view} target="_blank" rel="noopener noreferrer" >
                    <Reveal>
                     <button  className="btn">View </button>
                     </Reveal>
                    </a>
                </div>
            </div>
        </div>
            
       
        
    )

}
export default ProjectCard