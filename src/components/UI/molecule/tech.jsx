import React from "react";
import Reveal from "../atom/animations/reveal";
import "./tech.css";
import ReactLogo from "../../../assets/icons8-react-a-javascript-library-for-building-user-interfaces-96.png";
import NodeLogo from "../../../assets/icons8-nodejs-96.png";
import AWSLogo from "../../../assets/icons8-aws-96.png";
import UnityLogo from "../../../assets/icons8-unity-96.png";
import MongoLogo from "../../../assets/icons8-mongo-db-96.png";
import PrismaLogo from "../../../assets/icons8-prisma-orm-96.png";
import GithubLogo from "../../../assets/icons8-github-96.png";
import PostgresQLogo from "../../../assets/icons8-postgresql-96.png";
import NextLogo from "../../../assets/icons8-nextjs-96.png";
import TailwindLogo from "../../../assets/icons8-tailwind-css-96.png";
import PythonLogo from "../../../assets/icons8-python-96.png";
import JavaLogo from "../../../assets/icons8-java-96.png";
import JavaScriptLogo from "../../../assets/icons8-javascript-96.png";
import CSharpLogo from "../../../assets/icons8-c-sharp-96.png";
import TypeScriptLogo from "../../../assets/icons8-typescript-96.png";
//WEBSITE LOGOS FROM https://icons8.com/icons/set/python
export const Tech = () => {
  return (
    <div>
      <h1 className="tech-title">
        <Reveal>
          Tech Stack<span>.</span>
        </Reveal>
      </h1>

      <Reveal>
        <div className="tech-stack">
          <img className="tech-item" src={ReactLogo} />
          <img className="tech-item" src={NodeLogo} />
          <img className="tech-item" src={AWSLogo} />
          <img className="tech-item" src={UnityLogo} />
          <img className="tech-item" src={MongoLogo} />
        </div>
      </Reveal>
      <Reveal>
        <div className="tech-stack">
          <img className="tech-item" src={PrismaLogo} />
          <img className="tech-item" src={GithubLogo} />
          <img className="tech-item" src={PostgresQLogo} />
          <img className="tech-item" src={NextLogo} />
          <img className="tech-item" src={TailwindLogo} />
        </div>
      </Reveal>
      <h1 className="tech-title">
        <Reveal>
          Languages<span>.</span>
        </Reveal>
      </h1>
      <Reveal>
        <div className="tech-stack">
          <img className="tech-item" src={PythonLogo} />
          <img className="tech-item" src={JavaLogo} />
          <img className="tech-item" src={JavaScriptLogo} />
          <img className="tech-item" src={CSharpLogo} />
          <img className="tech-item" src={TypeScriptLogo} />
        </div>
      </Reveal>
    </div>
  );
};
