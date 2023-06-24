import "./projectCard.css"
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
                    
                    <a href={props.view} target="_blank" rel="noopener noreferrer" >
                    <Reveal>
                        <Button  btnVariant={"github-project"} btnIcon={<FaGithub></FaGithub>} />
                        </Reveal>     
                    </a>                    
                    </h2>
                    
                    
                    
                    
                <h3 className="project-type">
                    <Reveal>
                    {props.type}
                    </Reveal>
                    </h3>
                
                <div className="pro-details">
                    <Reveal>
                    <p>
                        
                        {props.text}
                        <br/>
                        <a href={props.view} target="_blank" rel="noopener noreferrer" >Learn more <span>&gt;</span></a>
                    </p>
                    </Reveal>
                
            </div>
        </div>
            
       
        
    )

}
export default ProjectCard