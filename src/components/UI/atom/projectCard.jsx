import "./projectCard.css";
import { FaGithub } from "react-icons/fa";
import Button from "./button";
import Reveal from "./animations/reveal";

export const ProjectCard = (props) => {
  const isTheKingzAce = props.title === "TheKingzAce";
  const isWorkoutApp = props.title === "Workout App";
  const isHeartBridgeApp = props.title === "Heart Bridge App";

  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="image" />

      <h2 className="project-title">
        <Reveal>
          {props.title}
          <span>.</span>
        </Reveal>

        <a href={props.view} target="_blank" rel="noopener noreferrer">
          <Reveal>
            {isHeartBridgeApp ? (
              <span>(privated)</span>
            ) : (
              <Button
                btnVariant={"links-site"}
                btnIcon={<FaGithub></FaGithub>}
              />
            )}
          </Reveal>
        </a>
      </h2>

      <h3 className="project-type">
        <Reveal>{props.type}</Reveal>
      </h3>

      <div className="pro-details">
        <Reveal>
          <p>
            {props.text}
            <br />
            {isHeartBridgeApp ? null : (
              <a href={props.view} target="_blank" rel="noopener noreferrer">
                Learn more <span>&gt;</span>
              </a>
            )}

            {isTheKingzAce && (
              <a
                href={"https://www.thekingzace.com/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <br /> View Site <span>&gt;</span>
              </a>
            )}
            {isWorkoutApp && (
              <a
                href={"https://workout-app-nine.vercel.app/login"}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <br /> View Site <span>&gt;</span>
              </a>
            )}
            {isHeartBridgeApp && (
              <a
                href={"https://ldr-w13b.onrender.com/login"}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <br /> View Site <span>&gt;</span>
              </a>
            )}
          </p>
        </Reveal>
      </div>
    </div>
  );
};
export default ProjectCard;
