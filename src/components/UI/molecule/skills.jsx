import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./skills.css"
import { SpeedOmeter } from "../atom/speedOmeter";
import Reveal from "../atom/animations/reveal";
import { FaUnity, FaReact, FaNode, Fa} from "react-icons/fa";
import ReactLogo from "../../../assets/logo192.png";
import UnityLogo from "../../../assets/unityLogo.png";
import NodeLogo from "../../../assets/nodejs.png";
import SciKitLogo from "../../../assets/scikitLogo.png";
import JavaFxLogo from "../../../assets/javaFx.png";



export const Skills = () => {
    
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 750 },
          items: 2,
        },
        tablet: {
          breakpoint: { max: 750, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <section className="skill" id = "skills">
            
            <Container>
                <Row>
                    <Col>
                    
                    <h1>
                    <Reveal>
                        Skills<span>.</span>
                        </Reveal>
                    </h1>
                    
                    
                        
                        
                    <div className="skill-box">
                    <div className="skill-box2">
                        <h4 id="header-1">
                          <Reveal>
                          FrameWork<span>.</span>
                          </Reveal>
                          </h4>
                          <Reveal>
                        <div className="skill-box3">
                          
                          <div>
                          <img src={UnityLogo}/>
                          </div>
                          
                          <div>
                          <img src={ReactLogo}/>
                          </div>
                          <div>
                          <img src={NodeLogo}/>
                          </div>
                          <div>
                          <img src={SciKitLogo}/>
                          </div>
                          <div>
                          <img src={JavaFxLogo}/>
                          </div>
                          
                          {/*
                          <img className="Icons" id="UnityIcon" src={UnityLogo}/>
                          
                          <img className="Icons" id="reactIcon" src={ReactLogo}/>
                            
                          
                          
                          
                          <img className="Icons" id="NodeIcon" src={NodeLogo}/>
                          
                          
                           
                          
                          <img className="Icons" id="SciKitIcon" src={SciKitLogo}/>
                          
                        
                          
                          
                          <img className="Icons" id="JavaFxIcon" src={JavaFxLogo}/>
    */}
                          
                          
                        </div>
                        </Reveal>
                        <h4 id="header-2">
                          <Reveal>
                          Other skills<span>.</span>
                          </Reveal>
                          </h4>
                          
                        <div className= "skill-box4">
                          <Reveal>
                          <p className="chip"> Github </p>
                          </Reveal>
                          <Reveal>
                          <p className="chip"> SQL </p>
                          </Reveal>
                          <Reveal>
                          <p className="chip"> JUnit </p>
                          </Reveal>
                          <Reveal>
                          <p className="chip"> Figma </p>
                          </Reveal>
                          <Reveal>
                          <p className="chip"> GraphQL </p>
                          </Reveal>
                          <Reveal>
                          <p className="chip"> UML </p>
                          </Reveal>
                          <Reveal>
                          <p className="chip"> Blender </p>
                          </Reveal>
                          <Reveal>
                          <p className="chip"> Prisma </p>
                          </Reveal>
                          <Reveal>
                          <p className="chip"> CSS </p>
                          </Reveal>
                          <Reveal>
                          <p className="chip"> TypeScript </p>
                          </Reveal>
                          <Reveal>
                          <p className="chip"> SVN </p>
                          </Reveal>
                          
                          
                        </div>
                        
                      </div>
                        <Reveal>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nesciunt veniam, est magni 
                            perferendis praesentium dignissimos maxime magnam.</p>
                        </Reveal>
                        
                        <Carousel responsive={responsive} infinite={true} className="skills-slider">
                            
                            <div className="item">
                                
                                <SpeedOmeter percent={25} />
                                <h5>Web Development</h5>
                            </div>
                            
                            <div className="item">
                                <SpeedOmeter percent={65} />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <SpeedOmeter percent={35}/>
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <SpeedOmeter percent={85} />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel>
                        
                    </div>
                    
                    </Col>
                    
                </Row>

            </Container>
            
            
        </section>
    )
}