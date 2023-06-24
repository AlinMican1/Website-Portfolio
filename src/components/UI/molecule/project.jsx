import "../atom/projectCard.css"
import data_projects from "../atom/project_data";
import { ProjectCard } from "../atom/projectCard";
import Reveal from "../atom/animations/reveal";

export const Project = () => {
        
    return(
       
        <div className="work-container">
            
            <h1 className="project-heading">
            <Reveal>
                Projects<span>.</span>
            </Reveal>  
            
            </h1>
            
            <div className="project-container">
                {data_projects.map((value,index) =>{
                    return (
                        <ProjectCard 
                        key={index}
                        imgsrc = {value.imgsrc}
                        title = {value.title}
                        text = {value.text}
                        view = {value.view}
                        type = {value.type}
                        />
                    )
                })}
            </div>
        </div>
            
       
        
    )

}
export default Project;