import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export const ParticlesBackground = () => {
  const ParticlesConfig = {
    fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push" 
              },
              
              resize: true
            },
            modes: {
              push: {
                quantity: 1
              },
              repulse: {
                distance: 50,
                duration: 0.4
              }
            }
          },
          particles: {
            color: {
              value: "#0aff9d"
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 0.7
            },
            collisions: {
              enable: true
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce"
              },
              random: false,
              speed: 0.2,
              straight: false
            },
            number: {
              density: {
                enable: true,
                area: 900
              },
              value: 40
            },
            opacity: {
              value: 0.5
            },
            shape: {
              type: "square"
            },
            size: {
              value: { min: 1, max: 5 }
            }
          },
        
          detectRetina: true
          
        }
    
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
return (
  <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={
        ParticlesConfig
      }
        
          
  />
);
};
export default ParticlesBackground 