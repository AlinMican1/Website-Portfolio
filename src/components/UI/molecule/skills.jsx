import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./skills.css"
import { SpeedOmeter } from "../atom/speedOmeter";
import Reveal from "../atom/animations/reveal";



export const Skills = () => {
    /*const{ref,inView} = useInView();
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
  },[inView])*/
    
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 750 },
          items: 3,
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