
import "../atom/projectCard.css"
import data_projects from "../atom/project_data";
import { ProjectCard } from "../atom/projectCard";
import Reveal from "../atom/animations/reveal";



/*export const Project = () => {
    const projects = [
        {
            title: "Hello",
            description: "heloooooooooooooooooooo",
            imageUrl: projImg1,
        },
        {
            title: "Hello",
            description: "heloooooooooooooooooooo",
            imageUrl: projImg2,
        },
    ];
    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dignissimos.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab Two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third"> 
                                Tab Three
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project,index) => {
                                        return(
                                            <ProjectCard
                                                key={index}
                                                {...project}/>
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            hihihih
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            hihihihzz
                        </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}*/
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